import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function soups() {
    const soups = await prisma.dishesCategories.create({
        data: {
            name: "Soups",
            dishes: {
                create: [
                    {
                        dishesName: "Ramen",
                        dishesDescription: "A flavorful noodle soup with broth, pork, and vegetables.",
                        dishesPrice: 15,
                        dishesPicture: 'src/img/ramen.png',
                    },
                    {
                        dishesName: "Creamy Tomato Soup",
                        dishesDescription: "A rich and creamy tomato soup with fresh basil.",
                        dishesPrice: 12,
                        dishesPicture: 'src/img/creamy-tomato-soup.png',
                    },
                    {
                        dishesName: "Chicken Noodle Soup",
                        dishesDescription: "A comforting soup with chicken, noodles, and vegetables.",
                        dishesPrice: 14,
                        dishesPicture: 'src/img/chicken-noodle-soup.png',
                    },
                    {
                        dishesName: "Miso Soup",
                        dishesDescription: "A traditional Japanese soup with miso paste and tofu.",
                        dishesPrice: 10,
                        dishesPicture: 'src/img/miso-soup.png',
                    },
                    {
                        dishesName: "Beef Stroganoff Soup",
                        dishesDescription: "A hearty soup with tender beef, mushrooms, and sour cream.",
                        dishesPrice: 16,
                        dishesPicture: 'src/img/beef-stroganoff-soup.png',
                    }
                ]
            }
        }
    });
}