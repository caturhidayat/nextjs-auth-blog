import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const menu = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Blog",
        link: "/blog",
    },
]

export default function Layout({ children }) {
    return (
        <>
            <Navbar menu={menu}/>
            <Box m='3' mt='7'>
                {children}
            </Box>
        </>
    );
}
