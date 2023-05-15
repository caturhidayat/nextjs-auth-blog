import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handle(req, res) {
    const postId = req.query.id;
    console.log({postId: postId})
    if(req.method === 'DELETE') {
        const post = await prisma.blog.delete({
            where: { id: Number(postId) }
        })
        res.json(post);
    } else if(req.method === 'GET') {
        const post = await prisma.blog.findUnique({
            where: { id: Number(postId)}
        })
        console.log({postServer: post})
        res.json(post)
    } else if(req.method === 'PATCH') {
        const publish = await prisma.blog.update({
            where: { id: Number(postId) },
            data: {
                published: true
            }
        })
        res.json(publish) 
    } else {
        throw new Error(
            `The HTTP ${method} method is not support at this route.`
        )
    }
}