
const GapReasonComposer = ({ onGenerate }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold mb-2">Generate "Why We Missed That Day" Memo</h3>
      <button onClick={onGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">Generate Memo</button>
    </div>
  );
};

export default GapReasonComposer;
