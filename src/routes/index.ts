import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { clientsRoutes } from "./clients.routes";
import { deliveryRoutes } from "./delivery.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const router = Router();

router.use("/client", clientsRoutes);
router.use("/session", authenticationRoutes);
router.use("/deliveryman", deliverymanRoutes);
router.use("/delivery", deliveryRoutes);

export { router };