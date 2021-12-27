import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_deliveryman } = req;

    const findAllDeliveriesUsecase = new FindAllDeliveriesUseCase();

    const result = await findAllDeliveriesUsecase.execute(id_deliveryman);

    return res.status(200).json(result);
  }
}

export { FindAllDeliveriesController };