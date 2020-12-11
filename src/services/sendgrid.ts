import sgMail from '@sendgrid/mail';

export default async function sendEmail(
  from: string,
  html: string,
  subject: string,
  text: string,
  to: string
) {
  sgMail.setApiKey(
    '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'
  );

  const sendMessage = await sgMail.send({
    from,
    to,
    html,
    subject,
    text,
  });

  return sendMessage;
}
