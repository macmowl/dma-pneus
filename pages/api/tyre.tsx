import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';
import TyreMail from '../../components/emails/TyreMail';
import { mailOptions, transporter } from '../../config/nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.lastName || !data.email) {
      return res.status(400).json({ message: 'Missing values' });
    }

    try {
      const emailHTML = render(<TyreMail data={data} />);
      await transporter.sendMail({
        ...mailOptions,
        subject: data.lastName,
        text: 'This is a test string',
        html: emailHTML,
      });
      return res.status(200).json({ message: 'Success' });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  console.log(req.body);
  return res.status(404).json({ message: 'Bad request' });
};

export default handler;
