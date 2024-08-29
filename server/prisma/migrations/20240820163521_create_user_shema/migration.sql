-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "DishesCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DishesCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dishes" (
    "dishesCategoryId" INTEGER NOT NULL,
    "dishesId" SERIAL NOT NULL,
    "dishesName" TEXT NOT NULL,
    "dishesDescription" TEXT NOT NULL,
    "dishesPrice" INTEGER NOT NULL,
    "dishesPicture" TEXT NOT NULL,

    CONSTRAINT "Dishes_pkey" PRIMARY KEY ("dishesId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- AddForeignKey
ALTER TABLE "Dishes" ADD CONSTRAINT "Dishes_dishesCategoryId_fkey" FOREIGN KEY ("dishesCategoryId") REFERENCES "DishesCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
