import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function appetizers() {
    const appetizers = await prisma.dishesCategories.create({
        data: {
            name: "Appetizers",
            dishes: {
                create: [
                    {
                        dishesName: "Spring Rolls",
                        dishesDescription: "Crispy rolls filled with fresh vegetables and served with dipping sauce.",
                        dishesPrice: 8,
                        dishesPicture: 'src/img/spring-rolls.png',
                    },
                    {
                        dishesName: "Bruschetta",
                        dishesDescription: "Grilled bread topped with tomatoes, basil, and garlic.",
                        dishesPrice: 9,
                        dishesPicture: 'src/img/bruschetta.png',
                    },
                    {
                        dishesName: "Stuffed Mushrooms",
                        dishesDescription: "Mushrooms stuffed with cheese, herbs, and breadcrumbs.",
                        dishesPrice: 10,
                        dishesPicture: 'src/img/stuffed-mushrooms.png',
                    },
                    {
                        dishesName: "Garlic Bread",
                        dishesDescription: "Toasted bread with garlic and parsley butter.",
                        dishesPrice: 7,
                        dishesPicture: 'src/img/garlic-bread.png',
                    },
                    {
                        dishesName: "Chicken Wings",
                        dishesDescription: "Crispy chicken wings tossed in a spicy sauce.",
                        dishesPrice: 12,
                        dishesPicture: 'src/img/chicken-wings.png',
                    }
                ]
            }
        }
    });
}