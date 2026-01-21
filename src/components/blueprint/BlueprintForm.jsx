import { useState } from "react";
import BlueprintCanvas from "./BlueprintCanvas";

export default function BlueprintForm({ onSave }) {
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");

  function addField() {
    setFields([
      ...fields,
      {
        id: Date.now(),
        label,
        type,
        position: { x: 20, y: 20 + fields.length * 30 },
      },
    ]);
    setLabel("");
  }

  function saveBlueprint() {
    onSave({
      id: Date.now(),
      name,
      fields,
      createdAt: new Date().toISOString(),
    });
    setName("");
    setFields([]);
  }

  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Blueprint Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Field Label"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        <select
          className="border p-2"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="signature">Signature</option>
          <option value="checkbox">Checkbox</option>
        </select>
        <button onClick={addField} className="bg-blue-500 text-white px-4">
          Add
        </button>
      </div>

      <BlueprintCanvas fields={fields} />

      <button
        onClick={saveBlueprint}
        className="bg-green-600 text-white px-6 py-2"
      >
        Save Blueprint
      </button>
    </div>
  );
}
