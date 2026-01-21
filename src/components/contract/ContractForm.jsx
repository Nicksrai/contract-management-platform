import { useState } from "react";
import { CONTRACT_STATUS } from "../../constants/contract";
import { useBlueprintEngine } from "../../hooks/useBlueprintEngine";
import ContractDocument from "./ContractDocument";

export default function ContractForm({ blueprint, onCreate }) {
  const [name, setName] = useState("");
  const [values, setValues] = useState({});
  const { getRenderableFields } = useBlueprintEngine(blueprint);

  function updateField(id, value) {
    setValues(prev => ({ ...prev, [id]: value }));
  }

  function create() {
    onCreate({
      id: Date.now(),
      name,
      blueprintId: blueprint.id,
      fieldValues: values,
      status: CONTRACT_STATUS.CREATED,
      createdAt: new Date().toISOString(),
    });
  }

  return (
    <div className="space-y-6">
      <input
        className="border p-2 w-full"
        placeholder="Contract Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <ContractDocument
        fields={getRenderableFields(values)}
        onChange={updateField}
      />

      <button
        onClick={create}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Create Contract
      </button>
    </div>
  );
}
