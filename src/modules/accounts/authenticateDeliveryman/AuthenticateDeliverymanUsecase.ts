import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if (!deliveryman) throw new Error("username or password invalid!");

    const passwordMatch = await compare(password, deliveryman.password);
    
    if (!passwordMatch) throw new Error("username or password invalid!");

    const token = sign({username}, String(process.env.DELIVERYMAN_SECRET_KEY), {
      subject: deliveryman.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };