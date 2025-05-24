export default function ConflictTag({ conflict }) {
  if (!conflict) return null;
  return <span className="text-xs text-red-500 font-bold ml-2">Conflict</span>;
}
