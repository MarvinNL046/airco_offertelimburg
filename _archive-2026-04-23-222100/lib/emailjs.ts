// Re-export everything from the new dual submission system
export { sendEmail, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../utils/email';
export type { EmailData } from '../utils/email';

// Legacy interface for backward compatibility
export interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
