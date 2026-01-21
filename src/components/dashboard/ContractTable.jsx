import { useNavigate } from "react-router-dom";

const STATUS_STYLES = {
  CREATED: "bg-slate-100 text-slate-700",
  APPROVED: "bg-indigo-100 text-indigo-700",
  SENT: "bg-amber-100 text-amber-700",
  SIGNED: "bg-emerald-100 text-emerald-700",
  LOCKED: "bg-emerald-200 text-emerald-800",
  REVOKED: "bg-rose-100 text-rose-700",
};

function formatDate(date) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function ContractTable({ contracts }) {
  const navigate = useNavigate();

  if (contracts.length === 0) {
    return (
      <div className="py-14 text-center text-gray-500 text-sm">
        No contracts found for this filter.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-600 border-b">
            <th className="text-left px-5 py-3 font-medium">
              Contract
            </th>
            <th className="text-left px-5 py-3 font-medium">
              Status
            </th>
            <th className="text-left px-5 py-3 font-medium">
              Updated On
            </th>
            <th className="text-right px-5 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {contracts.map(contract => (
            <tr
              key={contract.id}
              className="border-b last:border-b-0 hover:bg-gray-50 transition"
            >
              <td className="px-5 py-3 font-medium text-gray-900">
                {contract.name}
              </td>

              <td className="px-5 py-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                    STATUS_STYLES[contract.status]
                  }`}
                >
                  {contract.status}
                </span>
              </td>

              <td className="px-5 py-3 text-gray-600 text-sm">
                {formatDate(contract.updatedAt || contract.createdAt)}
              </td>

              <td className="px-5 py-3 text-right">
                <button
                  onClick={() =>
                    navigate(`/contracts/${contract.id}`)
                  }
                  className="inline-flex items-center gap-1 
                             text-indigo-600 hover:text-indigo-800 
                             font-medium transition"
                >
                  View
                  <span className="text-base">→</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
