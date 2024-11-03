import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "JOVuOJTC7ReYFRkQ_",
});

// EmailJS service and template IDs
export const EMAILJS_SERVICE_ID = "contact_service";
export const EMAILJS_TEMPLATE_ID = "contact_form";

interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (formData: EmailFormData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      contact_number: Math.random() * 100000 | 0,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};