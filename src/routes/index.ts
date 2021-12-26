import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { clientsRoutes } from "./clients.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const router = Router();

router.use("/client", clientsRoutes);
router.use("/session", authenticationRoutes);
router.use("/deliveryman", deliverymanRoutes);

export { router };