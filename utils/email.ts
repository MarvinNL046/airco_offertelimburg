import emailjs from '@emailjs/browser';

// Debug mode for troubleshooting
const DEBUG_MODE = false;

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
export const EMAILJS_SERVICE_ID = "service_1rruujp";
export const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

// GoHighLevel webhook URL
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  message: string;
}

// Send data to EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending to EmailJS:', data);
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      contact_number: Math.random() * 100000 | 0,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send data to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending to webhook:', data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || '',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      console.log('Webhook response:', await response.clone().text());
    }

    return response.ok;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Starting dual submission for:', data);
  }

  // Send to both services simultaneously
  const [emailJSSuccess, webhookSuccess] = await Promise.allSettled([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);

  const emailJSResult = emailJSSuccess.status === 'fulfilled' ? emailJSSuccess.value : false;
  const webhookResult = webhookSuccess.status === 'fulfilled' ? webhookSuccess.value : false;

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSResult);
    console.log('Webhook success:', webhookResult);
  }

  // Only throw error if BOTH methods fail
  if (!emailJSResult && !webhookResult) {
    throw new Error('Failed to send contact form data via both EmailJS and webhook');
  }

  if (DEBUG_MODE) {
    if (emailJSResult && webhookResult) {
      console.log('Both EmailJS and webhook succeeded');
    } else if (emailJSResult) {
      console.log('EmailJS succeeded, webhook failed');
    } else {
      console.log('Webhook succeeded, EmailJS failed');
    }
  }
};

// Legacy compatibility - export individual functions
export { sendViaEmailJS as sendEmailJS, sendToWebhook };