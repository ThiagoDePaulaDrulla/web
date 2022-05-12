import { MailAdapter, SendMailData } from "../mail-adalter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "63ceb9c7c9238b",
      pass: "1f8bf0f61e08c1"
    }
  });
  
export class  NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: "Thiago <thiagodrula@gmail.com>",
            subject: subject,
            html:body,
        });
    }
}