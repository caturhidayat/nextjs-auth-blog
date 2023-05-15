import Layout from "../component/Layout";
import { Box, Spinner, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import useSWR from "swr";
import Grid from "../component/Grid";

export default function Home() {
    const fetcher = (...arg) => fetch(...arg).then((res) => res.json());
    const { data, error, isLoading } = useSWR("/api/blog", fetcher, {refreshInterval: 1000});
    const blogs = data;
    if (error) {
        return (
            <>
                <Alert status='error'>
                    <AlertIcon />
                    Failed to laod...
                </Alert>
            </>
        );
    }

    if (isLoading) {
        return (
            <Box position='relative'>
                <VStack justify='center' align='center'>
                    <Spinner color='green.500' />
                </VStack>
            </Box>
        );
    }
    return (
        <Layout>
            <Grid blogs={blogs} />
        </Layout>
    );
}
