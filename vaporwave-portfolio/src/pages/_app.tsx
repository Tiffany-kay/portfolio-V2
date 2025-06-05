import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/orbitron/700.css";
import "@fontsource/vt323/400.css";
import "@fontsource/space-grotesk/400.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}


