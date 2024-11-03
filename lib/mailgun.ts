import FormData from 'form-data';
import Mailgun from 'mailgun.js';

const DOMAIN = 'mg.aircooffertelimburg.nl';
const API_KEY = '001c7a4813f3312ed032fd5d7dfc9741-72e4a3d5-2e2d7ddc';

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: 'api', key: API_KEY });

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
  
  const messageData = {
    from: 'Airco Offerte Limburg <noreply@mg.aircooffertelimburg.nl>',
    to: 'info@staycoolairco.nl',
    subject: `Nieuwe Lead${locationInfo} - Airco Offerte Limburg`,
    template: "contact-notification",
    'h:X-Mailgun-Variables': JSON.stringify({
      name,
      email,
      phone,
      message,
      city: city || 'Niet gespecificeerd'
    })
  };

  try {
    return await mg.messages.create(DOMAIN, messageData);
  } catch (error) {
    console.error('Error sending notification email:', error);
    throw error;
  }
}

export async function sendConfirmationEmail(data: EmailData) {
  const { name, email } = data;

  const messageData = {
    from: 'Airco Offerte Limburg <noreply@mg.aircooffertelimburg.nl>',
    to: email,
    subject: 'Bedankt voor uw aanvraag - Airco Offerte Limburg',
    template: "contact-confirmation",
    'h:X-Mailgun-Variables': JSON.stringify({
      name
    })
  };

  try {
    return await mg.messages.create(DOMAIN, messageData);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}