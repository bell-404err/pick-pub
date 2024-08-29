import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function bears() {
    const beers = await prisma.dishesCategories.create({
        data: {
            name: "Beers",
            dishes: {
                create: [
                    {
                        dishesName: "Pale Ale",
                        dishesDescription: "A light and hoppy beer with a golden color.",
                        dishesPrice: 6,
                        dishesPicture: 'src/img/pale-ale.png',
                    },
                    {
                        dishesName: "IPA",
                        dishesDescription: "An India Pale Ale with a strong hop flavor.",
                        dishesPrice: 7,
                        dishesPicture: 'src/img/ipa.png',
                    },
                    {
                        dishesName: "Stout",
                        dishesDescription: "A dark and rich beer with flavors of coffee and chocolate.",
                        dishesPrice: 8,
                        dishesPicture: 'src/img/stout.png',
                    },
                    {
                        dishesName: "Lager",
                        dishesDescription: "A crisp and refreshing beer with a clean finish.",
                        dishesPrice: 5,
                        dishesPicture: 'src/img/lager.png',
                    },
                    {
                        dishesName: "Wheat Beer",
                        dishesDescription: "A light and fruity beer brewed with wheat.",
                        dishesPrice: 6,
                        dishesPicture: 'src/img/wheat-beer.png',
                    }
                ]
            }
        }
    });
}