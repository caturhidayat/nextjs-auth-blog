import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

const menu = [
    {
        name: "Home",
        link: "/",
    },
    // {
    //     name: "Dashboard",
    //     link: "/blogs",
    // }
]

export default function Layout({ children }) {
    return (
        <>
            <Navbar menu={menu}/>
            <Box m='3' mt='7'>
                {children}
            </Box>
        </>
    )
}
