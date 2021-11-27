import { Request, Response, NextFunction } from "express";
import {
  MAX_CONNECTION,
  SOCKET_DISCONNECTED_BEFORE_TLS,
} from "src/constants/errorMessages";

import { HTTP_SERVER_ERROR } from "src/constants/httpStatusCodes";
import errorHandler from "src/helpers/errorHandler";
import sleep from "src/utils/sleep";

const httpErrorHandler =
  (
    controller: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<Response>,
    options?: { retry?: boolean }
  ) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { retry } = options || {};
    try {
      const result = await controller(req, res, next);
      return result;
    } catch (err) {
      const error = errorHandler(err);
      if (retry) {
        if (
          String(error.message).includes(MAX_CONNECTION) ||
          String(error.message).includes("ECONNRESET") ||
          String(error.message).includes(SOCKET_DISCONNECTED_BEFORE_TLS)
        ) {
          await sleep(1000);
          return httpErrorHandler(controller, options)(req, res, next);
        }
      }
      return res.status(error.code || HTTP_SERVER_ERROR).json({
        status: error.code,
        message: error.message,
        error: error.error,
        errors: error.errors,
      });
    }
  };

export default httpErrorHandler;
