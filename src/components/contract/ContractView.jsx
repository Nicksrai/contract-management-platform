import { useEffect, useState } from "react";
import ContractDocument from "./ContractDocument";
import ContractLifecycle from "./ContractLifecycle";
import { useBlueprintEngine } from "../../hooks/useBlueprintEngine";
import { useContractStore } from "../../state/contractStore";

export default function ContractView({
  contract,
  blueprint,
  onStatusChange,
}) {
  const { updateContractField } = useContractStore();

  // ✅ LOCAL REACTIVE STATE
  const [fieldValues, setFieldValues] = useState(
    contract.fieldValues || {}
  );

  useEffect(() => {
    setFieldValues(contract.fieldValues || {});
  }, [contract.id, contract.fieldValues]);

  const isReadOnly =
    contract.status === "SIGNED" ||
    contract.status === "LOCKED" ||
    contract.status === "REVOKED";

  const { getRenderableFields } =
    useBlueprintEngine(blueprint);

  function handleFieldChange(fieldId, value) {
    if (isReadOnly) return;

    // 1️⃣ Update local UI immediately
    setFieldValues(prev => ({
      ...prev,
      [fieldId]: value,
    }));

    // 2️⃣ Persist to storage
    updateContractField(contract.id, fieldId, value);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-semibold">
          {contract.name}
        </h1>
        <p className="text-sm text-gray-500">
          Status:{" "}
          <span className="font-medium">
            {contract.status}
          </span>
        </p>
      </div>

      {/* Document */}
      <ContractDocument
        fields={getRenderableFields(
          fieldValues,
          isReadOnly
        )}
        onChange={handleFieldChange}
      />

      {/* Actions */}
      <ContractLifecycle
        contract={contract}
        onUpdate={onStatusChange}
      />

      {isReadOnly && (
        <p className="text-sm text-red-500">
          This contract is locked and cannot be edited.
        </p>
      )}
    </div>
  );
}
