// "use client";
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from './ui/button'; // shadcn/ui button

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm fixed w-full top-0 z-50"
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             AI Paper Editor
//             </span>
//           </div>
//           <div className="flex space-x-4">
//             <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
//               Home
//             </Button>
//             <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
//               About
//             </Button>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }