import type { CSSProperties } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Head>
        <title>Ray Atelier | Home </title>
      </Head>
      <Link href="/projects">
        <div className="landing-page">
          <div className="logo-front" data-aos="fade-up">
            <Image
              src="/RAY_LOGGA_VIT.svg"
              alt="Ray logo landing page"
              width={700}
              height={700}
              priority
            />
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            className="landing-video"
            style={{ WebkitPlaysinline: "true" } as CSSProperties}
          >
            <source src="/RAY_Video_3x2_small.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
    </>
  );
}
