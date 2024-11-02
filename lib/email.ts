import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in environment variables');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
  city?: string;
}

export async function sendNotificationEmail(data: EmailData) {
  const { name, email, phone, message, city } = data;
  
  const locationInfo = city ? ` uit ${city}` : '';
  
  return sgMail.send({
    to: 'info@staycoolairco.nl',
    from: {
      email: 'noreply@aircooffertelimburg.nl',
      name: 'Airco Offerte Limburg'
    },
    replyTo: email,
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
    trackingSettings: {
      clickTracking: { enable: false },
      openTracking: { enable: true },
      subscriptionTracking: { enable: false }
    }
  });
}

export async function sendConfirmationEmail(data: EmailData) {
  const { name, email } = data;

  return sgMail.send({
    to: email,
    from: {
      email: 'noreply@aircooffertelimburg.nl',
      name: 'Airco Offerte Limburg'
    },
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
    trackingSettings: {
      clickTracking: { enable: false },
      openTracking: { enable: true },
      subscriptionTracking: { enable: false }
    }
  });
}