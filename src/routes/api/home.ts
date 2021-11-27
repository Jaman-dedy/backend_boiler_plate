import { Router, Request } from "express";

import { HTTP_OK } from "src/constants/httpStatusCodes";

const router: Router = Router();

router.get("/", (_: Request, res) =>
  res
    .status(HTTP_OK)
    .json({ status: HTTP_OK, message: "Welcome to the challenge" })
);

export default router;
