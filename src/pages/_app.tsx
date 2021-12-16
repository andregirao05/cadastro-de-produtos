import { ChakraProvider } from "@chakra-ui/react";
import {ControlProductsProvider} from "../hooks/useProducts"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ControlProductsProvider>
        <Component {...pageProps} />
      </ControlProductsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
