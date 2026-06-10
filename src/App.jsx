import React, { useState } from 'react';
import Layout from './components/Layout';
import ResumeUpload from './components/ResumeUpload';
import ResumeGuidelines from './components/ResumeGuidelines';

function App() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <Layout>
      <header className="mb-0 text-center relative z-10 pt-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-indigo-500/10 p-2 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            HR Portal
          </h1>
        </div>

        <nav className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${activeTab === 'upload' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
          >
            HR Upload
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${activeTab === 'guidelines' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
          >
            Guidelines
          </button>
        </nav>
      </header>

      <main className="flex-grow flex items-start justify-center">
        {activeTab === 'upload' ? <ResumeUpload /> : <ResumeGuidelines />}
      </main>

      <footer className="text-center text-gray-500 text-sm py-8 mt-auto">
        <p>&copy; 2024 Nexus Recruit Inc. All rights reserved.</p>
      </footer>
    </Layout>
  );
}

export default App;
