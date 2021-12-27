import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";

const clientsRoutes = Router()

const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);

export { clientsRoutes };