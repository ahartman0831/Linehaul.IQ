
const PayrollSummaryCard = ({ driver, totalPay }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">{driver}</h3>
      <p>Total Pay: ${totalPay}</p>
    </div>
  );
};

export default PayrollSummaryCard;
