import { Request, Response } from "express";

import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

class AuthenticateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const authenticateUserUseCase = new AuthenticateClientUseCase();

    const result = await authenticateUserUseCase.execute({ username, password });

    return res.status(200).json(result);
  }
}

export { AuthenticateClientController };