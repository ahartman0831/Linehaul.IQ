

type BreakdownEvent = {
  driver: string;
  notes: string;
  location: string;
  reported_at: string;
};

type BreakdownEventCardProps = {
  event: BreakdownEvent;
};

export default function BreakdownEventCard({ event }: BreakdownEventCardProps) {
  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
      <div className="font-medium text-yellow-800">{event.driver}</div>
      <p className="text-sm">{event.notes}</p>
      <p className="text-xs text-gray-500">Location: {event.location} | Reported: {event.reported_at}</p>
    </div>
  );
}
