import { useEffect } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
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
