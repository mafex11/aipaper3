'use client';

import { useState } from 'react';
import { Button } from './ui/button'; // shadcn/ui button
import { Input } from './ui/input'; // shadcn/ui input

export default function OutputSection({ selectedText }: { selectedText: string }) {
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async () => {
    if (!selectedText) {
      alert('Please select some text in the editor.');
      return;
    }

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, selectedText }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const cleanedOutput = data.output
        .replace(/\\boxed{/g, '')
        .replace(/}/g, '');

      setOutput(cleanedOutput);
    } catch (error) {
      console.error('Error generating output:', error);
      alert('Failed to generate output. Please try again.');
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-lg shadow-md p-6 ">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Output</h2>
      <div className="min-h-64 h-auto p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50/50">
        {output || 'AI-generated output will appear here...'}
      </div>
      <Input
        type="text"
        className="w-full mb-4"
        placeholder="Enter prompt (e.g., make it professional)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
        onClick={handleGenerate}
      >
        Generate
      </Button>
    </div>
  );
}