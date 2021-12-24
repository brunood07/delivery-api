import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { clientsRoutes } from "./clients.routes";

const router = Router();

router.use("/client", clientsRoutes);
router.use("/session", authenticationRoutes);

export { router };