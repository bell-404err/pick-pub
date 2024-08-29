import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function burgers() {
    const burgers = await prisma.dishesCategories.create({
        data: {
            name: "Burgers",
            dishes: {
                create: [
                    {
                        dishesName: "Classic Cheeseburger",
                        dishesDescription: "A juicy beef patty with cheese, lettuce, tomato, and pickles.",
                        dishesPrice: 14,
                        dishesPicture: 'src/img/classic-cheeseburger.png',
                    },
                    {
                        dishesName: "BBQ Bacon Burger",
                        dishesDescription: "A beef burger with BBQ sauce, bacon, and onion rings.",
                        dishesPrice: 16,
                        dishesPicture: 'src/img/bbq-bacon-burger.png',
                    },
                    {
                        dishesName: "Mushroom Swiss Burger",
                        dishesDescription: "A beef patty topped with sautéed mushrooms and Swiss cheese.",
                        dishesPrice: 15,
                        dishesPicture: 'src/img/mushroom-swiss-burger.png',
                    },
                    {
                        dishesName: "Veggie Burger",
                        dishesDescription: "A savory veggie patty with lettuce, tomato, and avocado.",
                        dishesPrice: 13,
                        dishesPicture: 'src/img/veggie-burger.png',
                    },
                    {
                        dishesName: "Spicy Jalapeño Burger",
                        dishesDescription: "A beef burger with spicy jalapeños, pepper jack cheese, and chipotle mayo.",
                        dishesPrice: 17,
                        dishesPicture: 'src/img/spicy-jalapeno-burger.png',
                    }
                ]
            }
        }
    });
}