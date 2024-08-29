import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function beverages() {
    const beverages = await prisma.dishesCategories.create({
        data: {
            name: "Beverages",
            dishes: {
                create: [
                    {
                        dishesName: "Lemonade",
                        dishesDescription: "A refreshing drink made with lemon juice and sugar.",
                        dishesPrice: 4,
                        dishesPicture: 'src/img/lemonade.png',
                    },
                    {
                        dishesName: "Iced Tea",
                        dishesDescription: "Cold brewed tea with a hint of lemon.",
                        dishesPrice: 3,
                        dishesPicture: 'src/img/iced-tea.png',
                    },
                    {
                        dishesName: "Smoothie",
                        dishesDescription: "A blended drink with fresh fruits and yogurt.",
                        dishesPrice: 5,
                        dishesPicture: 'src/img/smoothie.png',
                    },
                    {
                        dishesName: "Soda",
                        dishesDescription: "Classic carbonated soft drinks available in various flavors.",
                        dishesPrice: 3,
                        dishesPicture: 'src/img/soda.png',
                    },
                    {
                        dishesName: "Hot Chocolate",
                        dishesDescription: "A warm and creamy drink made with cocoa and milk.",
                        dishesPrice: 4,
                        dishesPicture: 'src/img/hot-chocolate.png',
                    }
                ]
            }
        }
    });
}