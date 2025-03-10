"use client";
import { useState, useRef } from 'react';

export default function TextEditor({ onTextSelect }: { onTextSelect: (text: string) => void }) {
  const [content, setContent] = useState('');
  const editorRef = useRef<HTMLDivElement>(null);

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const selectedText = selection.toString();
      if (selectedText) {
        onTextSelect(selectedText);
        highlightSelection(selection.getRangeAt(0));
      }
    }
  };

  const highlightSelection = (range: Range) => {
    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    span.appendChild(range.extractContents());
    range.insertNode(span);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Editor</h2>
      <div
        ref={editorRef}
        contentEditable
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onMouseUp={handleTextSelect}
        onKeyUp={handleTextSelect}
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />
      {content === '' && (
        <div className="absolute text-gray-400 pointer-events-none">
          Write your paragraph here...
        </div>
      )}
      <div className="mt-4 space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Bold</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Italic</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Underline</button>
      </div>
    </div>
  );
}