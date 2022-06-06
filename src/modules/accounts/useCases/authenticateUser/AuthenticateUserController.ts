import { Request, Response } from "express";
import { container } from "tsyringe";
import { instanceToInstance } from 'class-transformer';

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const {user, token} = await authenticateUserUseCase.execute({ password, email });

    return response.json({ user: instanceToInstance(user), token});
  }
}

export { AuthenticateUserController };
