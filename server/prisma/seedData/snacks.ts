import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function snacks() {
    const snacks = await prisma.dishesCategories.create({
        data: {
            name: "Snacks",
            dishes: {
                create: [
                    {
                        dishesName: "Nachos",
                        dishesDescription: "Tortilla chips with melted cheese, jalapeños, and salsa.",
                        dishesPrice: 9,
                        dishesPicture: 'src/img/nachos.png',
                    },
                    {
                        dishesName: "Cheese Sticks",
                        dishesDescription: "Breaded cheese sticks served with marinara sauce.",
                        dishesPrice: 8,
                        dishesPicture: 'src/img/cheese-sticks.png',
                    },
                    {
                        dishesName: "Pretzels",
                        dishesDescription: "Soft pretzels with a side of mustard or cheese sauce.",
                        dishesPrice: 7,
                        dishesPicture: 'src/img/pretzels.png',
                    },
                    {
                        dishesName: "Onion Rings",
                        dishesDescription: "Crispy onion rings with a tangy dipping sauce.",
                        dishesPrice: 8,
                        dishesPicture: 'src/img/onion-rings.png',
                    },
                    {
                        dishesName: "Potato Wedges",
                        dishesDescription: "Seasoned potato wedges served with a side of ketchup.",
                        dishesPrice: 6,
                        dishesPicture: 'src/img/potato-wedges.png',
                    }
                ]
            }
        }
    });
}