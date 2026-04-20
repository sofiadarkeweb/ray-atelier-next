import Link from "next/link";
import Image from "next/image";

export const Hamburger = () => {
  return (
    <div className="mobile-nav">
      <div className="logo-mobile">
        <Image
          src="/RAY_logga.svg"
          alt="Ray Atelier logo mobile"
          width={40}
          height={40}
        />
      </div>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
