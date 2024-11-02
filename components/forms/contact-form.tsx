"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { getCSRFToken } from "@/lib/csrf"
import { useEffect } from "react"

const formSchema = z.object({
  name: z.string()
    .min(2, "Naam moet minimaal 2 karakters bevatten")
    .max(50, "Naam mag maximaal 50 karakters bevatten")
    .regex(/^[a-zA-Z\s-']+$/, "Naam mag alleen letters, spaties en koppeltekens bevatten"),
  email: z.string()
    .email("Vul een geldig e-mailadres in")
    .max(100, "E-mailadres mag maximaal 100 karakters bevatten"),
  phone: z.string()
    .min(10, "Vul een geldig telefoonnummer in")
    .max(15, "Telefoonnummer mag maximaal 15 karakters bevatten")
    .regex(/^(\+31|0)([1-9][0-9]{8}|[1-9][0-9]{1,2}[- ]?[0-9]{6,7})$/, "Vul een geldig Nederlands telefoonnummer in"),
  message: z.string()
    .min(10, "Beschrijf uw wensen (minimaal 10 karakters)")
    .max(1000, "Bericht mag maximaal 1000 karakters bevatten"),
})

interface ContactFormProps {
  cityName?: string
}

export function ContactForm({ cityName }: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: cityName 
        ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
        : "",
    },
  })

  const { isSubmitting } = form.formState

  useEffect(() => {
    // Ververs CSRF token bij component mount
    getCSRFToken()
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-CSRF-Token": getCSRFToken(),
        },
        body: JSON.stringify({
          ...values,
          subject: `Nieuwe offerte aanvraag${cityName ? ` uit ${cityName}` : ""}`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Er is iets misgegaan")
      }

      toast.success("Uw aanvraag is succesvol verzonden! We nemen spoedig contact met u op.", {
        duration: 5000,
      })
      form.reset()
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Er is iets misgegaan. Probeer het later opnieuw.",
        { duration: 5000 }
      )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Naam</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Uw naam" 
                  {...field} 
                  disabled={isSubmitting}
                  aria-describedby="name-error"
                  maxLength={50}
                />
              </FormControl>
              <FormMessage id="name-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="uw@email.nl" 
                  {...field} 
                  disabled={isSubmitting}
                  aria-describedby="email-error"
                  maxLength={100}
                />
              </FormControl>
              <FormMessage id="email-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefoon</FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="06-12345678" 
                  {...field} 
                  disabled={isSubmitting}
                  aria-describedby="phone-error"
                  maxLength={15}
                />
              </FormControl>
              <FormMessage id="phone-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Uw Bericht</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Beschrijf uw wensen..."
                  className="min-h-[120px] resize-y"
                  {...field}
                  disabled={isSubmitting}
                  aria-describedby="message-error"
                  maxLength={1000}
                />
              </FormControl>
              <FormMessage id="message-error" />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Bezig met verzenden...
            </>
          ) : (
            "Verstuur Aanvraag"
          )}
        </Button>
      </form>
    </Form>
  )
}