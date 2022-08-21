import { Request, Response, NextFunction } from 'express';
import FundAlreadyInvested from '../../domain/exceptions/fundAlreadyInvested';
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof FundAlreadyInvested) {
    res.status(409).json({
      message: err.message,
    });
  } else {
    res.status(400).json({
      name: err.name,
      message: err.message,
      stack: err.stack,
    });
  }
}