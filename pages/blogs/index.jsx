import Layout from "../../component/Layout";
import Grid from "../../component/Grid";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export default function Blog({ blogs = [] }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    if (status === "unauthenticated") {
        router.push("/");
    }
    return (
        <Layout>
            {/* {console.log(blogs)} */}
            <Grid blogs={blogs} />
        </Layout>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession({ req });
    if (!session) {
        return {
            props: { blogs: [] },
        };
    }

    const blogs = await prisma.blog.findMany({
        where: {
            author: {
                name: session?.user?.name,
                email: session?.user?.email,
            },
        },
        include: {
            author: {
                select: { name: true, email: true },
            },
        },
    });
    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs)),
        },
    };
}
