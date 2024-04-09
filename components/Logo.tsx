import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src="https://saas-translator-app.vercel.app/_next/static/media/black.2e8db712.svg"
            alt="Logo"
            className="dark:filter dark:invert"
            objectFit="cover"
            layout="fill"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
