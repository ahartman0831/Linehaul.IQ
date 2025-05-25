
const AuditNoteCard = ({ note }) => {
  return (
    <div className="p-4 border rounded shadow bg-gray-50">
      <h3 className="font-bold">Audit Note</h3>
      <p>{note}</p>
    </div>
  );
};

export default AuditNoteCard;
