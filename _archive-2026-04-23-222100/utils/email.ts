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

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

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

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city,
        woonplaats: data.city
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Starting dual submission for:', data);
  }

  // Send to all services simultaneously
  const [emailJSSettled, leadflowSettled] = await Promise.allSettled([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  const emailJSResult = emailJSSettled.status === 'fulfilled' ? emailJSSettled.value : false;
  const leadflowResult = leadflowSettled.status === 'fulfilled' ? leadflowSettled.value : false;

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSResult);
    console.log('Leadflow success:', leadflowResult);
  }

  // Only throw error if ALL methods fail
  if (!emailJSResult && !leadflowResult) {
    throw new Error('Failed to send contact form data via EmailJS and Leadflow');
  }

  if (DEBUG_MODE) {
    const methods = [];
    if (emailJSResult) methods.push('EmailJS');
    if (leadflowResult) methods.push('Leadflow');
    console.log('Succeeded via:', methods.join(' + '));
  }
};

// Legacy compatibility - export individual functions
export { sendViaEmailJS as sendEmailJS };