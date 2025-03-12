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

export default function Home() {
  const [selectedText, setSelectedText] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b bg-black">
      {/* Main Content */}
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
              <TiptapEditor onTextSelect={setSelectedText} /> {/* Updated component */}
              <OutputSection selectedText={selectedText} />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}