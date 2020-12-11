## API utilizando o node para enviar E-mail com a Lib Nodemailer

~~~bash
yarn add -D nodemailer & yarn add -D @types/nodemailer
~~~

~~~env
PORT = 5000
BASE_URL = http://localhost
MODE = development
USER = **********@gmail.com
PASSWORD = ******
SERVICE = gmail
~~~

> nodemailer.ts
~~~ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

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
~~~
