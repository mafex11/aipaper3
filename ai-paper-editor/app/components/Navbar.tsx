"use client";

export default function Navbar() {
    return (
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">AI Paper Editor</div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }