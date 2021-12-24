import { Router } from "express";

import { AuthenticateClientController } from "../modules/accounts/authenticateUser/AuthenticateClientController";

const authenticationRoutes = Router();

const authenticateClientController = new AuthenticateClientController();

authenticationRoutes.post("/client", authenticateClientController.handle);

export { authenticationRoutes };