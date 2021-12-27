import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesUseCase {
  async execute(id_deliveryman: string) {
    const result = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      }
    });

    return result;
  }
}

export { FindAllDeliveriesUseCase };