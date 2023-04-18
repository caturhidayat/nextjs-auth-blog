import Layout from "../component/layout";
import { Text, Box } from "@chakra-ui/layout";


export default function Blog() {
    return (
        <Layout>
            <Text fontSize='xl'>
                "The quick brown fox jumps over the lazy dog" is an
                English-language pangram—a sentence that contains all of the
                letters of the English alphabet. Owing to its existence, Chakra
                was created.
            </Text>
        </Layout>
    );
}
