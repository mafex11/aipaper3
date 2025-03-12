"use client";
import { useState, useRef } from "react";

export default function TextEditor() {
  const [content, setContent] = useState(""); // State to store the editor content
  const editorRef = useRef<HTMLDivElement>(null); // Ref for the editor div

  // Handle input changes
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const editor = editorRef.current;
    if (!editor) return;

    // Save the current cursor position
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const cursorPosition = range?.startOffset;

    // Update the content state
    setContent(editor.textContent || "");

    // Restore the cursor position after updating the state
    if (range && cursorPosition !== undefined) {
      const newRange = document.createRange();
      newRange.setStart(editor.childNodes[0] || editor, cursorPosition);
      newRange.collapse(true); // Collapse the range to the start
      selection?.removeAllRanges();
      selection?.addRange(newRange);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Editor</h2>
      <div
        ref={editorRef}
        contentEditable
        className="w-full h-auto min-h-64 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        onInput={handleInput}
        suppressContentEditableWarning // Suppress warning about contentEditable
      >
        {content}
      </div>
      {content === "" && (
        <div className="text-gray-400 pointer-events-none">
          Write your paragraph here...
        </div>
      )}
    </div>
  );
}