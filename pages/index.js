import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <Head>
        <title>Ray Atelier | Home </title>
      </Head>
      <Link href="/projects">
        <a>
          <div className="landing-page">
            <div className="logo-front" data-aos="fade-up">
              <Image
                src="/RAY_LOGGA_VIT.svg"
                alt="Ray logo landing page"
                width={700}
                height={700}
              />
            </div>

            <video autoPlay muted loop className="landing-video">
              <source
                src={isMobile ? "/RAY_Mobile_ny.mp4" : "/RAY_Desktop.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </a>
      </Link>
    </>
  );
}
