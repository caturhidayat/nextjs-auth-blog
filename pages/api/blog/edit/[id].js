import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const postId = await req.query.id
    const { tittle, content } = req.body;
    console.log({ body : req.body })
    console.log({ method : req.method })

    if(req.method === 'PATCH') {
        const edit = await prisma.blog.update({
            where: { id: Number(postId) },
            data: {
                tittle,
                content,
            }
        })
        res.json(edit)
    } else {
        throw new Error(
            `The HTTP ${method} method is not support at this route.`
        )
    }
}