import express from 'express';
import twilio from 'twilio';

const { twiml } = twilio;
const router = express.Router();

// Inbound SMS
router.post('/sms', (req, res) => {
  const twimlResponse = new twiml.MessagingResponse();
  twimlResponse.message('Thanks! We\'ll get back to you soon.');
  res.set('Content-Type', 'text/xml');
  res.send(twimlResponse.toString());
});

// Inbound Call
router.post('/call', (req, res) => {
  const twimlResponse = new twiml.VoiceResponse();
  twimlResponse.say('Thank you for calling. Please leave a message after the beep.');
  twimlResponse.record({ maxLength: 60 });
  res.set('Content-Type', 'text/xml');
  res.send(twimlResponse.toString());
});

export default router;
