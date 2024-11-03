import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init({
  publicKey: "JOVuOJTC7ReYFRkQ_",
});

export const EMAILJS_SERVICE_ID = "contact_service";
export const EMAILJS_TEMPLATE_ID = "contact_form";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        contact_number: Math.random() * 100000 | 0,
      }
    );
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};