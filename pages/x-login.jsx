import { Center, Box, Heading, FormControl, FormHelperText, FormLabel, Input, Button, Spacer } from "@chakra-ui/react";
import Layout from "../component/layout";

export default function Login() {
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
                    <Heading>Login Page</Heading>
                    <Box p='4'>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' />
                            <br />
                            
                            <br />
                            <FormLabel>Password</FormLabel>
                            <Input type='password' />
                            {/* <FormHelperText></FormHelperText> */}
                        </FormControl>
                    </Box>
                    <Button colorScheme="blue">Login</Button>
                </Box>
            </Center>
        </Layout>
    );
}
