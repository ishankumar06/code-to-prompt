export default function OutputBox({ explanation }) {
  if (!explanation) return <div className="mt-6"></div>;
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-md p-6 min-h-[160px] max-h-[400px] overflow-auto font-mono text-gray-900 text-base leading-relaxed">
      <pre className="whitespace-pre-wrap">{explanation}</pre>
    </div>
  );
}
