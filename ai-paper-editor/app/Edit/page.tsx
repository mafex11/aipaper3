"use client";


import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "../components/ui/card"
import TiptapEditor from "../components/TiptapEditor"
import OutputSection from "../components/OutputSection"
import { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../app/components/ui/navbar-menu";
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

export default function Edit() {
    const [selectedText, setSelectedText] = useState("");
  
    return (
      <BackgroundGradientAnimation className=" pt-70">
        <div className="relative w-full flex items-center justify-center ">
        <Navbar className="top-2"/>
        </div>

        <main className=" mx-auto px-4 py-12 mt-40 w-7xl ">
        <Card className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900 ">
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


      </BackgroundGradientAnimation>
      
    );
}
