import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LegacyLessons from './LegacyLessons';

const App: React.FC = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-y-auto">
      <Header />
      <main className="p-4 space-y-6">
        <LegacyLessons />
      </main>
    </div>
  </div>
);

export default App;
