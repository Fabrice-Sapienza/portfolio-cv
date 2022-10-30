import axios from 'axios';

export default async (req, res) => {
  const { data } = req.body;

  try {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      template_params: data,
      user_id: process.env.EMAILJS_USER_ID,
      accessToken: process.env.EMAILJS_ACCESSTOKEN,
    });
    res.status(200).json({ message: 'Email sending !' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
