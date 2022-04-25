import React from "react";
import { ReactElement } from "react";
import type { AppProps } from "next/app";
import PageWithLayoutType from "../types/PageWithLayoutType";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Provider } from "react-redux";
import { store } from "../store/store";
import "../../styles/globals.css";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {" "}
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
