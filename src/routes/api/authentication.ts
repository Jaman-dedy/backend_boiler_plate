import { Router } from "express";

import httpErrorHandler from "src/middlewares/httpErrorHandler";
import { login, signup } from "src/helpers/joi-schemas/authentication";
import authController from "src/controllers/authController";
import joiValidator from "src/middlewares/joiValidator";

const router: Router = Router();

router.post(
  "/signup",
  joiValidator(signup),
  httpErrorHandler(authController.signup, { retry: true })
);

export default router;
