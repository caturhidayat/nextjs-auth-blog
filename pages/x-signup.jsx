import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Box,
    Center,
    Heading,
    Button,
} from "@chakra-ui/react";

import Layout from "../component/layout";

export default function Signup() {
    return (
        <Layout>
            <Center>
                <Box
                    bg=''
                    p='12'
                    alignItems='center'
                    rounded='6'
                    boxShadow='base'
                >
                    <Heading>Sign Up Page</Heading>
                    <Box p='4'>
                        <FormControl>
                            <FormLabel>Full Name</FormLabel>
                            <Input type='name' />
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' />
                            <FormHelperText>
                                We'll never share your email.
                            </FormHelperText>
                            <br />
                            <FormLabel>Password</FormLabel>
                            <Input type='password' />
                            {/* <FormHelperText></FormHelperText> */}
                        </FormControl>
                    </Box>
                    <Button colorScheme='blue'>Signup</Button>
                </Box>
            </Center>
        </Layout>
    );
}
