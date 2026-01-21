import { useState } from "react";
import { useBlueprintStore } from "../state/blueprintStore";
import { useContractStore } from "../state/contractStore";
import ContractForm from "../components/contract/ContractForm";
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

export default function ContractsPage() {
  const { blueprints } = useBlueprintStore();
  const { contracts, createContract } = useContractStore();
  const navigate = useNavigate();

  const [selectedBlueprintId, setSelectedBlueprintId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const selectedBlueprint = blueprints.find(
    b => b.id === Number(selectedBlueprintId)
  );

  return (
    <div className="space-y-12">

      {/* CENTERED HEADER (SAME AS DASHBOARD) */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-wide text-gray-900">
          CONTRACTS
        </h1>

        <p className="text-sm text-gray-500">
          Create and manage contracts from predefined blueprints
        </p>

        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
        </div>
      </div>

      {/* BLUEPRINT SELECTOR */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Select Blueprint
        </label>

        <select
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedBlueprintId}
          onChange={e => {
            setSelectedBlueprintId(e.target.value);
            setSuccessMessage("");
          }}
        >
          <option value="">Choose a blueprint</option>
          {blueprints.map(bp => (
            <option key={bp.id} value={bp.id}>
              {bp.name}
            </option>
          ))}
        </select>
      </div>

      {/* CONTRACT CREATION */}
      {selectedBlueprint && (
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">
            Create Contract
          </h2>

          <ContractForm
            blueprint={selectedBlueprint}
            onCreate={contract => {
              createContract(contract);
              setSuccessMessage("Contract created successfully");
            }}
          />
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

      {/* CONTRACT LIST */}
      <div className="bg-white border rounded-2xl shadow-sm">
        <div className="px-6 py-4 border-b">
          <h3 className="font-medium text-gray-800">
            Created Contracts
          </h3>
        </div>

        {contracts.length === 0 && (
          <p className="px-6 py-6 text-sm text-gray-500">
            No contracts created yet.
          </p>
        )}

        {contracts.map(contract => (
          <div
            key={contract.id}
            className="flex items-center justify-between px-6 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium text-gray-900">
                {contract.name}
              </p>

              <div className="flex items-center gap-3 mt-1">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[contract.status]}`}
                >
                  {contract.status}
                </span>

                <span className="text-xs text-gray-400">
                  Updated: {formatDate(contract.updatedAt || contract.createdAt)}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/contracts/${contract.id}`)}
              className="px-4 py-1.5 rounded-lg text-sm 
                         bg-indigo-600 hover:bg-indigo-700 
                         text-white shadow-sm transition"
            >
              View / Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
