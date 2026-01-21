const COLORS = {
  CREATED: "bg-gray-200 text-gray-800",
  APPROVED: "bg-yellow-200 text-yellow-800",
  SENT: "bg-blue-200 text-blue-800",
  SIGNED: "bg-green-200 text-green-800",
  LOCKED: "bg-gray-400 text-white",
  REVOKED: "bg-red-200 text-red-800",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${COLORS[status]}`}
    >
      {status}
    </span>
  );
}
