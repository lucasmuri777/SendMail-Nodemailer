import { Request, Response } from 'express'
import nodemailer from 'nodemailer';

export const contato = async(req: Request, res: Response) => {

    //Passo 1 = Configurar o transporter
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f3543cb31dbd2c",
          pass: "cc6aa2df057113"
        }
      });
    //Passo 2 = Configurar a mensagem
    let message = {
        from: 'nao-responda@suporte.com',
        to: 'suporte@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text:  req.body.email,

    }

    //Passo 3 = Enviar a mensagem
    let info =  await transport.sendMail(message);
    console.log({info})


    res.json({ message: 'Email enviado com sucesso!' });
}

