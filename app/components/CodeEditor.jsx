import MonacoEditor from '@monaco-editor/react';

export default function CodeEditor({ value, onChange, language }) {
  return (
    <MonacoEditor
      height="300px"
      language={language === 'cpp' ? 'cpp' : language}
      value={value}
      onChange={onChange}
      theme="vs-dark"
      options={{ fontSize: 16, automaticLayout: true }}
    />
  );
}
