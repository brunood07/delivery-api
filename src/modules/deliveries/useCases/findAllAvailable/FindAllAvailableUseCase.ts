import { prisma } from "../../../../database/prismaClient";

class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        endAt: null,
        id_deliveryman: null,
      }
    });

    return deliveries;
  }
}

export { FindAllAvailableUseCase };