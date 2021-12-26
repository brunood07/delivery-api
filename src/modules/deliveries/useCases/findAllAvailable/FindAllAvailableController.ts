import { Request, Response } from "express";

import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

class FindAllAvailableController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllWithoutEndDateUseCase = new FindAllAvailableUseCase();

    const result = await findAllWithoutEndDateUseCase.execute();

    return res.status(200).json(result);
  }
}

export { FindAllAvailableController };