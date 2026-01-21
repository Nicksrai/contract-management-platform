import { getAllowedTransitions } from "../../utils/lifecycle";

export default function ContractLifecycle({ contract, onUpdate }) {
  const actions = getAllowedTransitions(contract.status);

  if (actions.length === 0) {
    return (
      <p className="text-sm text-gray-500 mt-4">
        No further actions available.
      </p>
    );
  }

  return (
    <div className="flex gap-3 mt-6">
      {actions.map(status => (
        <button
          key={status}
          onClick={() =>
            onUpdate(contract.id, status)
          }
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Mark as {status}
        </button>
      ))}
    </div>
  );
}
