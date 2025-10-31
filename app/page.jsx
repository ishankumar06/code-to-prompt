

'use client';

import { useState } from 'react';
import { Code, Globe, Loader2, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';
import OutputBox from './components/OutputBox';

export default function Page() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [languageOutput, setLanguageOutput] = useState('english');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTask = async (task) => {
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language, task, languageOutput }),
      });

      const data = await res.json();
      setOutput(data.explanation || 'No explanation returned.');
    } catch (err) {
      console.error(' Error while calling API:', err);
      setOutput('Error: Unable to get response from AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-900 font-sans">
      <Navbar />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900">
          Code-to-prompt
        </h1>

        {/* Selectors */}
        <section className="flex flex-wrap gap-6 mb-6 justify-center">
          <div className="flex flex-col min-w-[160px]">
            <label className="text-sm font-medium mb-2 text-gray-700">Code Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option>
              <option value="tcl">TCL</option>
            </select>
          </div>

          <div className="flex flex-col min-w-[160px]">
            <label className="text-sm font-medium mb-2 text-gray-700">Output Language</label>
            <select
              value={languageOutput}
              onChange={(e) => setLanguageOutput(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi (हिन्दी)</option>
              <option value="kannada">Kannada (ಕನ್ನಡ)</option>
              <option value="malayalam">Malayalam (മലയാളം)</option>
            </select>
          </div>
        </section>

        {/* Code Editor */}
        <section className="mb-6 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <CodeEditor value={code} onChange={setCode} language={language} />
        </section>

        {/* Buttons */}
        <section className="flex flex-wrap gap-4 justify-center mb-10">
          <button
            onClick={() => handleTask('explain')}
            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 transition text-white px-6 py-3 rounded-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <Code className="w-5 h-5" /> Explain Code
          </button>

          <button
            onClick={() => handleTask('comments')}
            className="flex items-center gap-2 bg-orange-600 hover:bg-white-700 transition text-white px-6 py-3 rounded-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            <Globe className="w-5 h-5" /> Generate Comments
          </button>
        </section>

        {/* Output */}
      <section className="bg-gray-900 p-6 rounded-lg shadow-inner min-h-[200px] whitespace-pre-wrap font-mono text-gray-200">

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
            </div>
          ) : (
            <OutputBox explanation={output} />
          )}
        </section>
      </main>
    </div>
  );
}
