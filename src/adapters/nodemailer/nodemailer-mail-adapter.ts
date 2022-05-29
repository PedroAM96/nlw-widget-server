import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

console.log('process.env.NODEMAILER_USER', process.env.NODEMAILER_USER);
var transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Pedro Angelo <oipedrovaleu@gmail.com>',
      subject,
      html: body,
    });
  }
}
