
const FraudFlagIcon = ({ flagged }) => {
  return flagged ? <span className="text-red-600 font-bold">⚠ Fraud Suspected</span> : null;
};

export default FraudFlagIcon;
