-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "gameIds" INTEGER[],
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
