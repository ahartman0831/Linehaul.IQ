
const EscalationPromptViewer = ({ prompt }) => {
  return (
    <div className="p-4 border rounded shadow bg-yellow-50">
      <h3 className="font-bold">Escalation Prompt</h3>
      <p>{prompt}</p>
    </div>
  );
};

export default EscalationPromptViewer;
