import { PrismaClient } from "@prisma/client";
import CardItem from "../../component/Card";
import Layout from "../../component/layout";

const prisma = new PrismaClient();



export default function Blog(props) {
    const blog = props;
    
    return (
        <Layout>
            <CardItem key={blog.id} {...blog} />
        </Layout>
    );
}

export const getServerSideProps = async ({ params }) => {
    const id = params.id;
    const blogPost = await prisma.blog.findUnique({
        where: { id: Number(id) },
        include: {
            author: {
                select: { email: true, name: true },
            },
        },
    });

    return { props: blogPost };
};
