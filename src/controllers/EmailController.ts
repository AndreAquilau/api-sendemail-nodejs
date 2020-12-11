import 'dotenv/config';
import { Response, Request } from 'express';
import nodemailer from '../services/nodemailer';

class EmailController {
  async store(req: Request, res: Response) {
    try {
      const sendMessage = await nodemailer(req.body);

      return res.status(201).json({
        response: sendMessage,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        errors: [err],
      });
    }
  }
}

export default new EmailController();
