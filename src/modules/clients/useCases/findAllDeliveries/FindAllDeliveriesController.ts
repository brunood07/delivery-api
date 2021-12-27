import { Request, Response } from "express";

import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_client } = req;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const result = await findAllDeliveriesUseCase.execute(id_client);

    return res.status(200).json(result);
  }
}

export { FindAllDeliveriesController };