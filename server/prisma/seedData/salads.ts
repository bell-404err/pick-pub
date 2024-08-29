import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function salads() {
    const salads = await prisma.dishesCategories.create({
        data: {
            name: "Salads",
            dishes: {
                create: [
                    {
                        dishesName: "Caesar Salad",
                        dishesDescription: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
                        dishesPrice: 11,
                        dishesPicture: 'src/img/caesar-salad.png',
                    },
                    {
                        dishesName: "Greek Salad",
                        dishesDescription: "A refreshing salad with cucumbers, tomatoes, olives, and feta cheese.",
                        dishesPrice: 12,
                        dishesPicture: 'src/img/greek-salad.png',
                    },
                    {
                        dishesName: "Cobb Salad",
                        dishesDescription: "A hearty salad with chicken, bacon, eggs, avocado, and blue cheese.",
                        dishesPrice: 14,
                        dishesPicture: 'src/img/cobb-salad.png',
                    },
                    {
                        dishesName: "Caprese Salad",
                        dishesDescription: "Fresh tomatoes, mozzarella, and basil with a drizzle of balsamic glaze.",
                        dishesPrice: 13,
                        dishesPicture: 'src/img/caprese-salad.png',
                    },
                    {
                        dishesName: "Spinach Salad",
                        dishesDescription: "Spinach leaves with strawberries, almonds, and a balsamic vinaigrette.",
                        dishesPrice: 11,
                        dishesPicture: 'src/img/spinach-salad.png',
                    }
                ]
            }
        }
    });
}