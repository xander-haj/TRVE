import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-gray-900 border-r border-gray-700 p-4 overflow-y-auto">
    <nav className="space-y-2">
      <a href="#ts-intro" className="block text-gray-300 hover:text-blue-300">TypeScript Basics</a>
      <a href="#react-intro" className="block text-gray-300 hover:text-yellow-300">Getting Started with React</a>
      <a href="#vite-intro" className="block text-gray-300 hover:text-green-300">Introduction to Vite</a>
      <a href="#electron-intro" className="block text-gray-300 hover:text-purple-300">Electron Overview</a>
    </nav>
  </aside>
);

export default Sidebar;
