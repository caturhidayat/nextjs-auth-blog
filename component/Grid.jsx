import { SimpleGrid, Alert, AlertIcon } from "@chakra-ui/react";
import CardItem from "./Card";

export default function Grid({ blogs = [] }) {
    const isEmpty = blogs.length === 0;
    return isEmpty ? (
        <Alert status='warning'>
            <AlertIcon />
            Unfortunately, there is nothing to display yet.
        </Alert>
    ) : (
        <SimpleGrid minChildWidth='280px' spacing='20px'>
            {blogs.map((blog) => (
                <CardItem key={blog.id} {...blog} />
            ))}
        </SimpleGrid>
    );
}
