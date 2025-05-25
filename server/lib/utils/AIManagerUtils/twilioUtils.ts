import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (to: string, body: string) => {
  return client.messages.create({ body, from: process.env.TWILIO_PHONE, to });
};

export const makeCall = async (to: string, url: string) => {
  const from = process.env.TWILIO_PHONE;
  if (!from) {
    throw new Error('TWILIO_PHONE environment variable is not set');
  }
  return client.calls.create({ to, from, url });
};
