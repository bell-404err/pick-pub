import { PrismaClient } from "@prisma/client";
import {appetizers} from "./seedData/appetizers";
import {bears} from "./seedData/bears";
import {beverages} from "./seedData/beverages";
import {burgers} from "./seedData/burgers";
import {desserts} from "./seedData/desserts";
import {meat} from "./seedData/meat";
import {salads} from "./seedData/salads";
import {snacks} from "./seedData/snacks";
import {soups} from "./seedData/soups";

const prisma = new PrismaClient();

async function seedDatabase() {
    await soups();
    await salads();
    await appetizers();
    await snacks();
    await meat();
    await burgers();
    await desserts();
    await beverages();
    await bears();
}

seedDatabase()
    .then(async () => {
        console.log('Seed was successfully!');
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect();
    });
