import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { validateCSRFToken } from "@/lib/csrf"
import { sanitizeFormData, validateEmail, validatePhone } from "@/lib/sanitize"
<<<<<<< HEAD
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/mailgun"
=======
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email"
>>>>>>> f3f2fcde4f1e0ff65a41df6dcac48af3177bf2be
import { rateLimit } from "@/lib/rate-limit"

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"
    const rateLimitResult = await rateLimit(ip)
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: rateLimitResult.message },
        { status: 429 }
      )
    }

    // CSRF validation
    const headersList = headers()
    const csrfToken = headersList.get("x-csrf-token")
    const storedToken = request.headers.get("cookie")?.match(/csrf_token=([^;]+)/)?.[1]

    if (!validateCSRFToken(csrfToken || "", storedToken)) {
      return NextResponse.json(
        { error: "Ongeldige CSRF token" },
        { status: 403 }
      )
    }

    const formData = await request.json()
    const { name, email, phone, message, subject, city } = sanitizeFormData(formData)

    if (!validateEmail(email as string)) {
      return NextResponse.json(
        { error: "Ongeldig e-mailadres" },
        { status: 400 }
      )
    }

    if (!validatePhone(phone as string)) {
      return NextResponse.json(
        { error: "Ongeldig telefoonnummer" },
        { status: 400 }
      )
    }

<<<<<<< HEAD
    // Send emails in parallel using Mailgun
=======
    // Send emails in parallel
>>>>>>> f3f2fcde4f1e0ff65a41df6dcac48af3177bf2be
    await Promise.all([
      sendNotificationEmail({ name, email, phone, message, subject, city }),
      sendConfirmationEmail({ name, email, phone, message })
    ])

    return NextResponse.json(
      { message: "Uw aanvraag is succesvol verzonden" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Er ging iets mis bij het verwerken van uw aanvraag" },
      { status: 500 }
    )
  }
}