'use client'; // Mark as a Client Component

import { useState } from 'react';

export default function OutputSection({ selectedText }: { selectedText: string }) {
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async () => {
    if (!selectedText) {
      alert('Please select some text in the editor.');
      return;
    }

    try {
      console.log('Calling /api/generate with:', { prompt, selectedText });
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, selectedText }),
      });

      console.log('API response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error:', errorText);
        throw new Error(`API error: ${errorText}`);
      }

      const data = await response.json();
      console.log('API response data:', data);

      setOutput(data.output);
    } catch (error) {
      console.error('Error generating output:', error);
      alert('Failed to generate output. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Output</h2>
      <div className="h-64 p-4 border border-gray-300 rounded-lg mb-4">
        {output || 'AI-generated output will appear here...'}
      </div>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter prompt (e.g., make it professional)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={handleGenerate}
      >
        Generate
      </button>
    </div>
  );
}