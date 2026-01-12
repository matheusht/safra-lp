"use server"

import { supabase } from "@/lib/supabase"
import { z } from "zod"

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  droneModel: z.string().min(2),
  message: z.string().optional(),
})

export async function submitLead(formData: z.infer<typeof leadSchema>) {
  try {
    // 1. Validate data
    const validatedData = leadSchema.parse(formData)

    // 2. Insert into Supabase
    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          name: validatedData.name, 
          phone: validatedData.phone, 
          drone_model: validatedData.droneModel, 
          message: validatedData.message 
        }
      ])

    if (error) {
      console.error("Supabase Error:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Submission Error:", error)
    return { success: false, error: "Validation failed or server error" }
  }
}
