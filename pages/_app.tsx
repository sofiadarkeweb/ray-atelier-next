import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import { Layout } from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const onComplete = () => {
      Aos.refresh();
    };
    router.events.on("routeChangeComplete", onComplete);
    return () => {
      router.events.off("routeChangeComplete", onComplete);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
