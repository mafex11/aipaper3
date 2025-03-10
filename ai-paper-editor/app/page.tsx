"use client";

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '../app/components/Footer';
import TextEditor from '../app/components/TextEditor';
import OutputSection from '../app/components/OutputSection';

export default function Home() {
  const [selectedText, setSelectedText] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">AI Paper Editor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextEditor onTextSelect={setSelectedText} />
          <OutputSection selectedText={selectedText} />
        </div>
      </main>
      <Footer />
    </div>
  );
}