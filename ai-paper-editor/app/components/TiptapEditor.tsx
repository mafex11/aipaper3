"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

interface TiptapEditorProps {
  onTextSelect: (text: string) => void; // Callback to pass selected text
}

export default function TiptapEditor({ onTextSelect }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit], // Enable basic editor functionality
    content: "<p>Write your paragraph here...</p>", // Initial content
    onUpdate: ({ editor }) => {
      // Handle content updates
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        onTextSelect(selection.toString()); // Pass selected text to parent
      }
    },
  });

  // Handle text selection
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        onTextSelect(selection.toString()); // Pass selected text to parent
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [onTextSelect]);

  return (
    <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Editor</h2>
      <EditorContent
        editor={editor}
        className="w-full h-auto min-h-64 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
      />
    </div>
  );
}