import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';

config();
const prisma = new PrismaClient();

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
    const users = prisma.user.findMany();
    res.status(200).json(users);
})

app.post('/create-dishes-category', async (req: Request, res: Response) => {
    const {name} = req.body;
    try {
        const dishesCategory = await prisma.dishesCategories.create({
            data: {
                name
            }
        });
        res.status(200).json(dishesCategory);
    } catch (e) {
        console.error(e);
        res.status(500).json(`Failed to create dishes category: ${e}`);
    }
})

app.post('/delete-dishes-category', async (req: Request, res: Response) => {
    const {name} = req.body;
    try {
        const dishesCategory = await prisma.dishesCategories.create({
            data: {
                name
            }
        });
        res.status(200).json(dishesCategory);
    } catch (e) {
        console.error(e);
        res.status(500).json(`Failed to create dishes category: ${e}`);
    }
})

app.get('/get-dishes-category', async (req: Request, res: Response) => {
    try {
        const dishesCategory = await prisma.dishesCategories.findMany();
        res.status(200).json(dishesCategory);
    } catch (e) {
        res.status(500).json(`Failed to get dishes category: ${e}`);
    }
})

app.delete('/reset-database', async (req: Request, res: Response) => {
    try {
        // Удаление данных и сброс автоинкрементных значений
        await prisma.$transaction([
            prisma.$executeRaw`TRUNCATE TABLE "OrderedItem" RESTART IDENTITY CASCADE;`,
            prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`,
            prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`,
            prisma.$executeRaw`TRUNCATE TABLE "Dishes" RESTART IDENTITY CASCADE;`,
            prisma.$executeRaw`TRUNCATE TABLE "DishesCategories" RESTART IDENTITY CASCADE;`,
            prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
        ]);

        res.status(200).json({ message: "Database reset successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database reset failed", error });
    }
});

app.listen(PORT, (): void => {
    console.log(`Example app listening on port ${PORT}`);
});


process.on('SIGINT', async () => {
    console.log('Shutting down server...');
    await prisma.$disconnect();
    process.exit(0);
});
