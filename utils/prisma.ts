import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

    if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    } else {
    const globalPrisma = global as any;
    if (!globalPrisma.prisma) {
        globalPrisma.prisma = new PrismaClient();
    }

    prisma = globalPrisma.prisma;
    }


    
export default prisma;