import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

console.log(process.env.SERVICE);
export default async function sendEmail(params: {
  from: string;
  subject: string;
  text: string;
  to: string;
  html: string;
}) {
  const res = await transporter.sendMail({
    from: params.from,
    to: params.to,
    html: params.html,
    subject: params.subject,
    text: params.text,
  });

  return res;
}
