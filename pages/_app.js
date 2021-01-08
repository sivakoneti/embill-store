import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { extendTheme } from "@chakra-ui/react" 
import { ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
      200: "#fff",
    },
  },
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp