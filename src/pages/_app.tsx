import type { AppProps } from "next/app";
import "ress";

import { QueryProvider } from "@/providers";
import "@/styles/style.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </QueryProvider>
  );
}

export default App;
