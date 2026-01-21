import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContractStore } from "../state/contractStore";
import { useBlueprintStore } from "../state/blueprintStore";
import ContractView from "../components/contract/ContractView";

export default function ContractDetailPage() {
  const { id } = useParams();
  const { updateContractStatus } = useContractStore();
  const { blueprints } = useBlueprintStore();

  const [contract, setContract] = useState(null);

  function loadContract() {
    const stored = JSON.parse(
      localStorage.getItem("contracts") || "[]"
    );
    const found = stored.find(
      c => c.id === Number(id)
    );
    setContract(found || null);
  }

  useEffect(() => {
    loadContract();
  }, [id]);

  function handleStatusChange(contractId, status) {
    updateContractStatus(contractId, status);
    loadContract(); // 🔥 force refresh
  }

  if (!contract) {
    return (
      <p className="text-sm text-gray-500">
        Contract not found.
      </p>
    );
  }

  const blueprint = blueprints.find(
    b => b.id === contract.blueprintId
  );

  if (!blueprint) {
    return (
      <p className="text-sm text-gray-500">
        Blueprint not found.
      </p>
    );
  }

  return (
    <ContractView
      contract={contract}
      blueprint={blueprint}
      onStatusChange={handleStatusChange}
    />
  );
}
