import { Poppins } from "@next/font/google";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux";
import "../styles/index.scss";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Meal Plan Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={poppins.className}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </main>
    </>
  );
}
