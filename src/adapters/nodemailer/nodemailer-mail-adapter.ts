import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'f9bcfd7155b21e',
    pass: '6231e6e4e0e23b',
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
