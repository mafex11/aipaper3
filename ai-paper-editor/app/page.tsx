"use client";

import { useState } from "react";
import { SparklesCore } from "./components/ui/sparkles";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { WavyBackground } from "./components/ui/wavy-background";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";
import TiptapEditor from "@/app/components/TiptapEditor"; // Updated import
import OutputSection from "@/app/components/OutputSection";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50 ", className)}
    >
      
      <Menu setActive={setActive}>
        <p className="text-white font-bold text-xl mr-66 cursor-pointer hover:opacity-90">Kaku</p>
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
  const [selectedText, setSelectedText] = useState("");

  return (
    
    <BackgroundGradientAnimation className="">
      <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2"/>
      </div>

      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-8xl">
          Kaku
        </p>
        <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl">
          Your Own Paper Editor
        </h2>
        <Button variant="outline" className="mt-4 text-black">
          Get Started
        </Button>


    <div className="flex flex-col  relative">
      <main className="container mx-auto px-4 py-12">
        <Card className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Edit Your Paper
            </CardTitle>
            <CardDescription className="text-gray-600">
              Select text in the editor and let AI rewrite it for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TiptapEditor onTextSelect={setSelectedText} /> 
              <OutputSection selectedText={selectedText} />
            </div>
          </CardContent>
        </Card>
      </main> 
      </div>
      </div>

      

     
    </BackgroundGradientAnimation>
    
  );
}

