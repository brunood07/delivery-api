import { Router } from "express";

import { AuthenticateClientController } from "../modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";

const authenticationRoutes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

authenticationRoutes.post("/client", authenticateClientController.handle);
authenticationRoutes.post("/deliveryman", authenticateDeliverymanController.handle);

export { authenticationRoutes };