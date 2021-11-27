import { HTTP_CREATED } from "./../constants/httpStatusCodes";
import { Request, Response } from "express";

import User from "src/database/models/user";

/**
 * A class to handle authentication
 */

export default class AuthController {
  /**
   * @param  {string | number} agency
   * @return {object} http response
   */
  static async signup(req: Request, res: Response): Promise<Response> {
    const {
      firstName,
      lastName,
      email,
      password,
      picture,
      country,
      dateOfBirth,
    } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      picture,
      country,
      dateOfBirth,
    });

    const data = await user.save();
    return res.status(HTTP_CREATED).json({
      status: HTTP_CREATED,
      data,
    });
  }
}
