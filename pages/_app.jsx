import {createTheme, NextUIProvider} from "@nextui-org/react";

export default function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    type:"dark"
  })

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}