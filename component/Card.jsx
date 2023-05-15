import Link from "next/link";
import {
    Heading,
    Card,
    Stack,
    Text,
    CardBody,
    CardFooter,
    Divider,
    Button,
    ButtonGroup,
    Badge,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useSession } from "next-auth/react";

export default function CardItem({
    id = "",
    tittle = "",
    content = "",
    published = "",
    author = {},
}) {
    const router = useRouter();
    const { data: session, status } = useSession();

    // Delete Function
    async function deletePost(id) {
        await fetch(`/api/blog/${id}`, {
            method: "DELETE",
        });
        Router.push("/");
    }

    // Publish Blog Post
    async function publishBlog(id) {
        await fetch(`/api/blog/${id}`, {
            method: "PATCH",
        });
        // Router.push("/blogs");
    }

    return (
        <Card maxW='' key={id}>
            <Link href={`/blogs/${id}`}>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            {tittle}
                            {!published ? (
                                <Badge
                                    ml='3'
                                    variant='outline'
                                    colorScheme='green'
                                >
                                    Draft
                                </Badge>
                            ) : (
                                ""
                            )}
                        </Heading>

                        <Text>{content}</Text>

                        <Text
                            fontWeight='light'
                            fontStyle='italic'
                            color='orange.600'
                            fontSize='sm'
                        >
                            Author: {author.name || author.email}
                        </Text>
                    </Stack>
                </CardBody>
            </Link>
            {status === "authenticated" ? (
                <>
                    <Divider variant='solid' color='gray.300' />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='teal'>
                                <Link
                                    href={`/blogs/edit/${encodeURIComponent(
                                        id
                                    )}`}
                                >
                                    Edit
                                </Link>
                            </Button>

                            {status === "authenticated" &&
                            published === false ? (
                                <Button
                                    onClick={() => publishBlog(id)}
                                    variant='outline'
                                    colorScheme='blue'
                                >
                                    <Link href='/blogs'>Publish</Link>
                                </Button>
                            ) : (
                                ""
                            )}

                            <Button
                                onClick={() => deletePost(id)}
                                variant='solid'
                                colorScheme='orange'
                            >
                                <Link href='/'>Delete</Link>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </>
            ) : (
                ""
            )}
        </Card>
    );
}
