import { Box, Heading, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar({ menu }) {
    // menu.map((item) => console.log(item))

    const { data: session, status } = useSession();
    const user = session?.user;
    const isLoadingUser = status === "loading";
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' m='3'>
            <Box p='2'>
                <Heading fontSize='2xl' size='md'>
                    <Link href='/'>AB-App</Link>
                </Heading>
            </Box>
            {menu.map((value, key) => (
                <Box p='2' key={key}>
                    <Text fontSize='xl' size='md'>
                        <Link href={value.link}>{value.name}</Link>
                    </Text>
                </Box>
            ))}
            {user ? (
                <>
                    <Text ml='2' fontSize='xl' size='md'>
                        <Link href='/blogs'>Blogs</Link>
                    </Text>
                    <Text ml='2' fontSize='xl' size='md'>
                        <Link href='/blogs/draft'>Draft</Link>
                    </Text>
                </>
            ) : (
                <></>
            )}

            <Spacer />

            <ButtonGroup gap='2'>
                {user ? (
                    <>
                        <Button colorScheme='teal'>
                            <Link href='/blogs/create'>Create Article </Link>
                        </Button>
                        <Button colorScheme='orange' onClick={signOut}>
                            SignOut
                        </Button>
                    </>
                ) : (
                    <Button colorScheme='teal'>
                        <Link href='/api/auth/signin'>SignIn </Link>
                    </Button>
                )}
            </ButtonGroup>
        </Flex>
    );
}
