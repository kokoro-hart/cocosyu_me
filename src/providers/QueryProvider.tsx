import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { DehydratedState } from "@tanstack/react-query";
import { useState, ReactNode } from "react";

export type QueryProviderProps = {
  children: ReactNode;
  pageProps: { dehydratedState: DehydratedState };
};

export function QueryProvider({ children, pageProps }: QueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}
