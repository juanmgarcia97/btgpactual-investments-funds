import { Application, NextFunction, Request, Response } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify.config";
import express from 'express';
import { BaseException } from './controller/exception/baseException';
import './controller/transaction.controller';

export default class Server {
    inversifyServer: InversifyExpressServer;

    constructor() {
        this.inversifyServer = new InversifyExpressServer(container, null, { rootPath: '/api' });
        this.inversifyServer.setConfig((app: Application) => {
            app.use((req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                next();
            });
            app.use(express.json({ limit: '50mb' }));
            app.use(express.urlencoded({ limit: '50mb', extended: true }));
        })
    }

    start(): void {
        const expressServer = this.inversifyServer.build();

        //Middleware
        expressServer.use(function (err: BaseException, req: Request, res: Response, next: NextFunction) {
            console.error(err);
            const code = err.statusCode || 500;
            res.status(code).json({
                message: err.message || 'Internal Server Error',
            });
        });

        expressServer.listen(process.env.API_PORT, () => {
            console.log(`⚡️ Server is running at http://localhost:${process.env.API_PORT}`);
        });
    }
}