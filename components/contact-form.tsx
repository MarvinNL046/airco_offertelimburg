"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface ContactFormProps {
  cityName?: string
}

export function ContactForm({ cityName }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: cityName 
      ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
      : "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `Nieuwe offerte aanvraag${cityName ? ` uit ${cityName}` : ""}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Er ging iets mis")
      }

      toast.success("Uw aanvraag is succesvol verzonden!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: cityName 
          ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
          : "",
      })
    } catch (error) {
      toast.error("Er ging iets mis. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Uw naam"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Uw e-mailadres"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        type="tel"
        placeholder="Uw telefoonnummer"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <Textarea
        placeholder="Uw bericht"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
      />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
        {isSubmitting ? "Bezig met verzenden..." : "Verstuur Aanvraag"}
      </Button>
    </form>
  )
}