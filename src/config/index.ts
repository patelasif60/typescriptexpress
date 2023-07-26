import express, { Application, NextFunction, Request, Response } from 'express';
import { config } from 'dotenv';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRoute  from '../routes/api'
import webRoute  from '../routes/web'

config();

class App {

    public app: Application = express();
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    private config(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('combined'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.use("/api", apiRoute.router);
        this.app.use("/", webRoute.router);
    }
}
export default new App().app;