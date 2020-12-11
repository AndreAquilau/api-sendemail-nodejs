import { Request as T } from 'express';

export default interface Request extends T {
  body: {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
  };
}
