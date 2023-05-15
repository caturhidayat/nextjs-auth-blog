import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export default async function handle(req, res) {
    const blog = await prisma.blog.findMany({
        where: {
        },
        include: {
            author: true
        }
    })
    res.json(blog)
}