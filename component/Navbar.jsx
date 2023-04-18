import { Box, Heading, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import Link from "next/link";

export default function Navbar({ menu }) {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' m='3'>
            <Box p='2'>
                <Heading fontSize='2xl' size='md'>
                    <Link href='/'>AB-App</Link>
                </Heading>
            </Box>
            {menu.map((item) => (
                <Box p='2'>
                    <Text fontSize='xl' size='md'>
                        <Link href={item.link}>{item.name}</Link>
                    </Text>
                </Box>
            ))}

            <Spacer />

            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>

                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    );
}
