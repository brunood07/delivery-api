import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllWithoutEndDateController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliveryRoutes.post("/", ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.get("/find", ensureAuthenticateDeliveryman, findAllWithoutEndDateController.handle);
deliveryRoutes.put("/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
deliveryRoutes.patch("/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { deliveryRoutes };