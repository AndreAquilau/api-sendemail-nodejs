import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import routes from '../routes';

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.resourceApp();
  }

  resourceApp(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(routes);
  }
}

export default new App().app;
