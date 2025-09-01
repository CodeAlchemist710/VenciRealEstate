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
      const result = await window.emailjs.send(
        'service_f1p08lp',
        templateParams.template_id || 'template_act1tiz',
        templateParams,
        'NikcKCN4BJHDmANB7'
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  throw new Error('EmailJS not loaded');
};

export const initEmailJS = () => {
  if (typeof window !== 'undefined' && window.emailjs) {
    window.emailjs.init('NikcKCN4BJHDmANB7');
  }
};