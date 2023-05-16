
import { prisma } from "../../../lib/prisma/prisma";

export default async function handle(req, res) {
    const { emailUser, tittle, content } = req.body;
    // console.log({ req: req.body })

    const userId = await prisma.user.findUnique({
        where: { email: emailUser }
    })
 
    const blogPost = await prisma.blog.create({
        data: {
            tittle,
            content,
            authorId: userId.id,
            
        },
        include: {
            author: true,
        },
    });

    res.json(blogPost);
}
