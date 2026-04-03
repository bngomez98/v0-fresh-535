const envMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const GA_MEASUREMENT_ID =
  envMeasurementId && envMeasurementId.trim().length > 0
    ? envMeasurementId.trim()
    : "G-9QXW6S19X4"
