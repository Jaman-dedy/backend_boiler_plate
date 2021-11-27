import { Router } from "express";

import home from "./home";
import authentication from "./authentication";

const router: Router = Router();

router.use("/", home);
router.use("/home", home);
router.use("/auth", authentication);

export default router;
