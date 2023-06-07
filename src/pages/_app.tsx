import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const cache = createCache({ key: "mantine" });
  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </CacheProvider>
  );
}

export default MyApp;
