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

> Gmail Permission: [Permitir aplicações menos seguras: ATIVADO](https://www.youtube.com/redirect?q=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps&redir_token=QUFFLUhqbHIyQURRckdYbnVZQXpGQWFPNmFCTUxtOGdlUXxBQ3Jtc0trc3hLZlJORExVcXltNnQtbmdGUXg3TDkxempSSTkwU1hpU19UY0tUVk5uWVlMUDFiYVBfczNlVDhFLTNPV1NkTWlOYzBnTHQtM1NLUDBZdldRWmEzTGFJYTl2T2dBaExkVnEzVnd2NUVOcDJMUmo0SQ%3D%3D&event=video_description&v=NB71vyCj2X4)

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

### References
[Youtube - Node js Send Email using nodemailer and gmail](https://www.youtube.com/watch?v=NB71vyCj2X4)
