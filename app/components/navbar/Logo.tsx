'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {

    const router = useRouter();

    return (
        <Image
            className="hidden md:block cursor-pointer"
            alt="logo"
            height="100"
            width="100"
            src="/images/logo.png"
        />
    )
}

export default Logo