import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/logo.svg" width={100} height={80} alt="Concrete Company - Парапанов груп - Шлайфане на бетон" />
    </Link>
  );
};

export default Logo;
