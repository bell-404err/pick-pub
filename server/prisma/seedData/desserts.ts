import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function desserts() {
    const desserts = await prisma.dishesCategories.create({
        data: {
            name: "Desserts",
            dishes: {
                create: [
                    {
                        dishesName: "Mozart Cake",
                        dishesDescription: "A rich chocolate cake with layers of creamy filling.",
                        dishesPrice: 5,
                        dishesPicture: 'src/img/mozart.png',
                    },
                    {
                        dishesName: "Ice Cream",
                        dishesDescription: "Classic ice cream with various flavors available.",
                        dishesPrice: 3,
                        dishesPicture: 'src/img/ice-cream.png',
                    },
                    {
                        dishesName: "Waffles",
                        dishesDescription: "Fluffy waffles served with syrup and fresh fruit.",
                        dishesPrice: 7,
                        dishesPicture: 'src/img/waffles.png',
                    },
                    {
                        dishesName: "Cheesecake",
                        dishesDescription: "A creamy cheesecake with a graham cracker crust.",
                        dishesPrice: 6,
                        dishesPicture: 'src/img/cheesecake.png',
                    },
                    {
                        dishesName: "Tiramisu",
                        dishesDescription: "An Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
                        dishesPrice: 6,
                        dishesPicture: 'src/img/tiramisu.png',
                    }
                ]
            }
        }
    });
}