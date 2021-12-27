import { prisma } from "../../../../database/prismaClient";

interface IUpdateEndData {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateEndDateUseCase {
  async execute({ id_deliveryman, id_delivery }: IUpdateEndData) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        endAt: new Date(),
      }
    });

    return result;
  }
}

export { UpdateEndDateUseCase };