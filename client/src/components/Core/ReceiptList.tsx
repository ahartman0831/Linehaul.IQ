
const ReceiptList = ({ receipts }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">Uploaded Receipts</h3>
      <ul>
        {receipts.map((r, i) => <li key={i}>{r.file_name} - {r.uploaded_at}</li>)}
      </ul>
    </div>
  );
};

export default ReceiptList;
