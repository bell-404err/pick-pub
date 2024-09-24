import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import uuid from "uuid";


const prisma = new PrismaClient();

class UserService {
    async registration(email: string, password: string) {
        const candidate = await prisma.user.findUnique({
            where: {
                userEmail: email
            }
        })

        if (candidate) {
            throw new Error(`User with email: ${email}, - already exist.`);
        }

        const hashedPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await prisma.user.create({
            data: {
                userName: email,
                userEmail: email,
                password: hashedPassword,
                activationLink
            }
        })
    }
}
module.exports = new UserService();