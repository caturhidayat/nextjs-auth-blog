import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider as AuthProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <AuthProvider session={session}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </AuthProvider>
    );
}

export default MyApp;
