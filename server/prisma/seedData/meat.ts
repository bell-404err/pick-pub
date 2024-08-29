import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function meat() {
    const meat = await prisma.dishesCategories.create({
        data: {
            name: "Meat",
            dishes: {
                create: [
                    {
                        dishesName: "Grilled Steak",
                        dishesDescription: "A perfectly grilled steak served with mashed potatoes and vegetables.",
                        dishesPrice: 25,
                        dishesPicture: 'src/img/grilled-steak.png',
                    },
                    {
                        dishesName: "Roast Chicken",
                        dishesDescription: "Juicy roast chicken with a side of seasonal vegetables.",
                        dishesPrice: 22,
                        dishesPicture: 'src/img/roast-chicken.png',
                    },
                    {
                        dishesName: "Lamb Chops",
                        dishesDescription: "Tender lamb chops with rosemary and garlic.",
                        dishesPrice: 28,
                        dishesPicture: 'src/img/lamb-chops.png',
                    },
                    {
                        dishesName: "BBQ Ribs",
                        dishesDescription: "Smoky BBQ ribs with a side of coleslaw and cornbread.",
                        dishesPrice: 24,
                        dishesPicture: 'src/img/bbq-ribs.png',
                    },
                    {
                        dishesName: "Beef Wellington",
                        dishesDescription: "Beef tenderloin wrapped in puff pastry with a mushroom duxelle.",
                        dishesPrice: 30,
                        dishesPicture: 'src/img/beef-wellington.png',
                    }
                ]
            }
        }
    });
}