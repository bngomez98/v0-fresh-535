import { prisma } from "@/lib/prisma"
import { type NextRequest } from "next/server"

const encoder = new TextEncoder()

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET(request: NextRequest) {
  let countInterval: ReturnType<typeof setInterval> | undefined
  let heartbeatInterval: ReturnType<typeof setInterval> | undefined

  const stream = new ReadableStream({
    async start(controller) {
      const sendEvent = (payload: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`))
      }

      const sendHeartbeat = () => {
        controller.enqueue(encoder.encode(`: keep-alive\n\n`))
      }

      const sendCount = async () => {
        try {
          const count = await prisma.pledge.count()
          sendEvent({ count })
        } catch (error) {
          console.error("Error streaming pledge count:", error)
          controller.enqueue(encoder.encode('event: error\ndata: "stream_error"\n\n'))
        }
      }

      await sendCount()
      countInterval = setInterval(sendCount, 15000)
      heartbeatInterval = setInterval(sendHeartbeat, 10000)

      const close = () => {
        if (countInterval) clearInterval(countInterval)
        if (heartbeatInterval) clearInterval(heartbeatInterval)
        controller.close()
      }

      request.signal.addEventListener("abort", close, { once: true })
    },
    cancel() {
      if (countInterval) clearInterval(countInterval)
      if (heartbeatInterval) clearInterval(heartbeatInterval)
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  })
}
