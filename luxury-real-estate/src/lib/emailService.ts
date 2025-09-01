interface EmailJSResponse {
  status: number;
  text: string;
}

interface EmailJS {
  send: (serviceId: string, templateId: string, templateParams: Record<string, unknown>, publicKey: string) => Promise<EmailJSResponse>;
  init: (publicKey: string) => void;
}

declare global {
  interface Window {
    emailjs: EmailJS;
  }
}

export const sendEmail = async (templateParams: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.emailjs) {
    try {
      console.log('Sending email with params:', templateParams);
      const result = await window.emailjs.send(
        'service_5yo6ixt',
        (templateParams.template_id as string) || 'template_act1tiz',
        templateParams,
        'HeKTjYdAQ2UXKIVfX'
      );
      console.log('Email sent successfully:', result);
      return result;
    } catch (error) {
      console.error('EmailJS error:', error);
      throw error;
    }
  }
  console.error('EmailJS not available');
  throw new Error('EmailJS not loaded');
};

export const initEmailJS = () => {
  if (typeof window !== 'undefined' && window.emailjs) {
    console.log('Initializing EmailJS');
    window.emailjs.init('HeKTjYdAQ2UXKIVfX');
  } else {
    console.error('EmailJS not available for initialization');
  }
};