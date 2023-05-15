import { useForm, Controller } from "react-hook-form";
import AlertPop from "./AlertPop";
import Layout from "./Layout";
import {
    FormLabel,
    Textarea,
    Input,
    Checkbox,
    Button,
    Select,
    Stack,
    useToast,
    Switch,
    Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Form = ({
    redirectPath = null,
    buttonText = null,
    onSubmit = () => null,
    postId = {},
}) => {
    const router = useRouter();
    const toast = useToast();
    const publish = useRef();

    console.log(!postId);
    const isAdded = Number(!postId);

    // Session
    const { data: session, status } = useSession();
    if (!session) {
        toast({
            title: "Unauthorize!",
            status: "error",
            duration: 500,
            isClosable: true,
        });
        if (redirectPath) {
            setTimeout(() => {
                router.push(redirectPath);
            }, 500);
        }
    }
    const emailUser = session?.user?.email;

    // Handle Form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        reset,
    } = useForm();

    // HandleOnSubmit
    const handleOnSubmit = async (data) => {
        isAdded ? createBlog(data) : updateBlogPost(data);
    };

    // Create Blog post function
    const createBlog = async (data = null) => {
        toast({
            title: "Submitting...",
            status: "success",
            duration: 1000,
            isClosable: true,
        });
        // setData(data);
        try {
            await onSubmit({ ...data, emailUser });
            await router.push("/blogs");
            toast({
                title: "Submitted!",
                status: "success",
                isClosable: true,
            });
        } catch (e) {
            console.log(e);
            toast({
                title: "Failed!",
                status: "error",
                duration: 800,
                isClosable: true,
            });
        }
    };

    // Update post => Publish blog post function
    const updateBlogPost = async (data) => {
        try {
            await onSubmit({ ...data });
            await router.push("/blogs");
        } catch (e) {
            console.log(e);
            toast({
                title: "Failed!",
                status: "error",
                duration: 800,
                isClosable: true,
            });
        }
    };

    // async function getBlogData() {
    //     await fetch(`/api/blog/${postId}`, {
    //         method: "DELETE",
    //     });
    //     // router.prefetch('/')
    //     Router.push("/");
    // }

    // Set data Form field
    useEffect(() => {
        if (!isAdded) {
            // Get blog and set form field
            const blog = axios.get(`/api/blog/${postId}`);
            // const payloud = JSON.parse(JSON.stringify(blog))
            blog.then((res) => res.data).then((post) => {
                const fields = ["tittle", "content"];
                fields.forEach((field) => setValue(field, post[field]));
                console.log(post);
                // setUser(user);
                publish.current = post;
            });
            // console.log({getBlog: payloud})
        }
    }, []);

    return (
        <Layout>
            <form onSubmit={handleSubmit(handleOnSubmit)} onReset={reset}>
                <FormLabel>Tittle</FormLabel>
                <Input
                    type='text'
                    // name="tittle"
                    {...register("tittle", {
                        required: "Please enter tittle",
                        minLength: {
                            value: 3,
                            message: `Minimal length 3 Character`,
                        },
                        maxLength: 80,
                    })}
                />
                {errors.tittle && <AlertPop title={errors.tittle.message} />}
                <FormLabel>Content</FormLabel>
                <Textarea
                    type='text'
                    // nama="content"
                    {...register("content", {
                        required: "Please Enter Content",
                        minLength: {
                            value: 5,
                            message: `Minimal length 5 Character`,
                        },
                        maxLength: 1200,
                    })}
                />
                {errors.content && <AlertPop title={errors.content.message} />}
                <Stack direction='row' spacing={4} mt={4}>
                    <Button
                        textColor='white'
                        bg='teal.400'
                        _hover={{ bg: "teal.200" }}
                        variant='ghost'
                        type='submit'
                    >
                        {isSubmitting ? "Submitting" : buttonText}
                    </Button>
                </Stack>
            </form>
        </Layout>
    );
};

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

export default Form;
