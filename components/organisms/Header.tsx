"use client";

import Link from "next/link";
import Image from "next/image";
import {APP_NAME} from "@/lib/constants";
import SigninOrAvatar from "../molecules/signin-avatar";
import MenuClient from "@/components/molecules/menu-client";
export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background-2">
      <div className="max-w-[1440px] h-[65px] mx-auto px-6 md:px-8 flex items-center justify-between ">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center">
            <Link href='/' className="flex items-center">
                <Image
                   priority={true}
                   src="/Images/switzerland-flag-heart-banner.jpg"
                   width={32}
                   height={32}
                   alt={`${APP_NAME}logo`}
                />
                <h3 className="hidden lg:block">{APP_NAME}</h3>

            </Link>
        </div>

        <div>
          <MenuClient desktopAvatar={<SigninOrAvatar />} />
        </div>

    
      </div>
    </header>
  );
}
