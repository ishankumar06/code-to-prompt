export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">About This Project</h1>
      <p className="text-gray-300 leading-relaxed">
        <strong>Code-to-prompt</strong> is a smart web app built with Next.js and Tailwind CSS 
        that helps students and developers understand code instantly.
        <br /><br />
        Paste your C++, Python, JavaScript, or Java code, and the AI will generate:
      </p>
      <ul className="list-disc ml-6 mt-3 text-gray-400">
        <li>Detailed natural language explanations</li>
        <li>Automatic comments for your source code</li>
        <li>Time and space complexity estimates</li>
      </ul>
      <p className="mt-6 text-gray-400">
        Created by <span className="text-blue-500 font-semibold">[Ishan]</span> 
        
      </p>
    </div>
  );
}
