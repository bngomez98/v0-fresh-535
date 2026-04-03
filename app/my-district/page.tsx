export const dynamic = "force-dynamic"

import { MyDistrictPageClient } from "./my-district-client"
"use client"

export const dynamic = "force-dynamic"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, AlertTriangle } from "lucide-react"
import type { District, Candidate } from "@/lib/api-clients"

export const dynamic = "force-dynamic"

export default function MyDistrictPage() {
  return <MyDistrictPageClient />
}
