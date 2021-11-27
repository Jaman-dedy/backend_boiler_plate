import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";
import { HTTP_BAD_REQUEST } from "src/constants/httpStatusCodes";
import { BAD_REQUEST } from "src/constants/errorMessages";

export default (schema: Schema) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(HTTP_BAD_REQUEST).json({
        status: HTTP_BAD_REQUEST,
        message: BAD_REQUEST,
        errors: error.details,
      });
    }
    return next();
  };
