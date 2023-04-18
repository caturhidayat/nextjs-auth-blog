import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container maxW='container.md'>
                { children }
            </Container>
        </>
    );
}
