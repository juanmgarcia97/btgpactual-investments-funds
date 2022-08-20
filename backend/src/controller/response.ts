import { Response as ExpressResponse } from "express";

export default class Response {
    static ok<T>(res: ExpressResponse, data?: T, message?: string) {
        res.status(200).json({ data, message })
    }

    static created<T>(res: ExpressResponse, data?: T, message?: string) {
        res.status(201).json({ data, message });
    }
}