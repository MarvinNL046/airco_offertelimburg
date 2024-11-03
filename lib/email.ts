import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Initialiseer Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY as string,
});

// Debugging: Log de API-sleutel en domein om te controleren of ze correct worden geladen
console.log("Mailgun API Key:", process.env.MAILGUN_API_KEY);
console.log("Mailgun Domain:", process.env.MAILGUN_DOMAIN);

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
  city?: string;
}

// Functie voor het verzenden van een notificatie-email
export async function sendNotificationEmail(data: EmailData) {
  const { name, email, phone, message, city } = data;
  const locationInfo = city ? ` uit ${city}` : '';

  const emailData = {
    from: 'noreply@aircooffertelimburg.nl', // Zorg ervoor dat dit geverifieerd is in Mailgun
    to: 'info@staycoolairco.nl',
    subject: `Nieuwe Lead${locationInfo} - Airco Offerte Limburg`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Nieuwe Lead Ontvangen${locationInfo}</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone}</p>
          <p><strong>Bericht:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <div style="margin-top: 20px; font-size: 12px; color: #666;">
          <p>Deze lead is verzonden via het contactformulier op Aircooffertelimburg.nl</p>
          <p>U kunt direct reageren door op 'reply' te klikken.</p>
        </div>
      </div>
    `,
  };

  try {
    // Probeer de e-mail te verzenden
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN as string, emailData);
    console.log("Notification email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending notification email:", error);
    throw error;
  }
}

// Functie voor het verzenden van een bevestigings-email naar de gebruiker
export async function sendConfirmationEmail(data: EmailData) {
  const { name, email } = data;

  const emailData = {
    from: 'noreply@aircooffertelimburg.nl', // Zorg ervoor dat dit geverifieerd is in Mailgun
    to: email,
    subject: 'Bedankt voor uw aanvraag - Airco Offerte Limburg',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Bedankt voor uw aanvraag</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <p>Beste ${name},</p>
          <p>Hartelijk dank voor uw aanvraag bij Airco Offerte Limburg. Wij hebben uw bericht in goede orde ontvangen.</p>
          <p>Een van onze specialisten zal binnen 24 uur contact met u opnemen om uw wensen te bespreken.</p>
          <p>Heeft u in de tussentijd vragen? U kunt ons bereiken op:</p>
          <ul>
            <li>Telefoon: 046 202 1430</li>
            <li>WhatsApp: 06 3648 1054</li>
            <li>E-mail: info@staycoolairco.nl</li>
          </ul>
          <p>Met vriendelijke groet,<br>Team Airco Offerte Limburg</p>
        </div>
        <div style="margin-top: 20px; font-size: 12px; color: #666;">
          <p>Dit is een automatisch gegenereerde e-mail. U kunt hier niet op reageren.</p>
        </div>
      </div>
    `,
  };

  try {
    // Probeer de e-mail te verzenden
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN as string, emailData);
    console.log("Confirmation email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error;
  }
}
