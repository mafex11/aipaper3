"use client";

import { useState } from "react";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { Button } from "./components/ui/button";
import { HoveredLink, Menu, MenuItem } from "../app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-lg mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <p className="text-white font-bold text-xl cursor-pointer hover:opacity-90">
          Kaku
        </p>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Summarizer</HoveredLink>
            <HoveredLink href="/interface-design">Writer</HoveredLink>
            <HoveredLink href="/seo">Blog maker</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function Home() {
  return (
    <BackgroundGradientAnimation className="mx-auto">
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>

      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-center">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl md:text-8xl">
          Kaku
        </p>
        <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-2xl md:text-4xl">
          Your Own Paper Editor
        </h2>
        
        <Link href="/Edit">
          <Button variant="outline" className="mt-6 text-black cursor-pointer">
            Get Started
          </Button>
        </Link>
      </div>
    </BackgroundGradientAnimation>
  );
}
