import { prisma } from "../../../../database/prismaClient";

class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        endAt: null,
      }
    });

    return deliveries;
  }
}

export { FindAllAvailableUseCase };