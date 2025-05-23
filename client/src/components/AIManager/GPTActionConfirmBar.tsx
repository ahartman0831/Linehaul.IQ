

type GPTActionConfirmBarProps = {
  message: string;
  onConfirm: () => void;
};

export default function GPTActionConfirmBar({ message, onConfirm }: GPTActionConfirmBarProps) {
  return (
    <div className="bg-emerald-50 p-3 rounded flex justify-between items-center shadow">
      <div className="text-sm text-emerald-800">{message}</div>
      <button
        onClick={onConfirm}
        className="text-sm px-3 py-1 bg-emerald-600 text-white rounded"
      >
        Confirm
      </button>
    </div>
  );
}
