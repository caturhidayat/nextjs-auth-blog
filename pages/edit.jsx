import Layout from "../component/layout";
import { FormControl, FormLabel, Textarea, Input, Button, Stack } from "@chakra-ui/react";

export default function Edit() {
    return (
        <Layout>
            <FormControl>
                <FormLabel>Tittle</FormLabel>
                <Input type='email' />
                <br />

                <br />
                <FormLabel>Content</FormLabel>
                <Textarea />
                {/* <FormHelperText></FormHelperText> */}
            </FormControl>
            <Stack direction='row' spacing={4} mt={4} >
                <Button colorScheme="teal">Save Edit</Button>
                <Button colorScheme="orange">Cancel</Button>
            </Stack>
        </Layout>
    );
}
