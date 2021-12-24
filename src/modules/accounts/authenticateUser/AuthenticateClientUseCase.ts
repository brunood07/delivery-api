import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) throw new Error("username or password invalid!");

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) throw new Error("username or password invalid!");

    // Gerar o token
    const token = sign({username}, String(process.env.SECRET_KEY),{
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateClientUseCase };