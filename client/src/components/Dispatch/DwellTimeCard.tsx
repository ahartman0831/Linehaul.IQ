import React from "react";

type Props = {
  dwellMinutes: number;
  isOvertime?: boolean;
};

const DwellTimeCard: React.FC<Props> = ({ dwellMinutes, isOvertime }) => {
  const tagStyle = isOvertime ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700";
  return (
    <div className={`rounded-xl px-3 py-1 text-sm font-semibold shadow ${tagStyle}`}>
      Dwell Time: {dwellMinutes} min
    </div>
  );
};

export default DwellTimeCard;