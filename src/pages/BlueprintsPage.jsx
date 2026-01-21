import { useState } from "react";
import { useBlueprintStore } from "../state/blueprintStore";
import BlueprintCanvas from "../components/blueprint/BlueprintCanvas";

export default function BlueprintsPage() {
  const { blueprints, createBlueprint } = useBlueprintStore();

  const [name, setName] = useState("");
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");
  const [fields, setFields] = useState([]);
  const [toast, setToast] = useState("");

  function addField() {
    if (!label.trim()) return;

    setFields(prev => [
      ...prev,
      {
        id: Date.now(),
        label,
        type,
        position: { x: 40, y: 40 + prev.length * 80 },
      },
    ]);

    setLabel("");
  }

  function saveBlueprint() {
    if (!name.trim() || fields.length === 0) {
      setToast("Blueprint name and at least one field required");
      return;
    }

    createBlueprint({
      id: Date.now(),
      name,
      fields,
    });

    setName("");
    setFields([]);
    setToast("Blueprint saved successfully");

    setTimeout(() => setToast(""), 3000);
  }

  return (
    <div className="space-y-12 relative">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow z-50">
          {toast}
        </div>
      )}

      {/* CENTERED HEADER (SAME AS DASHBOARD & CONTRACTS) */}
      <div className="w-full flex justify-center">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-900">
            BLUEPRINTS
          </h1>

          <p className="text-sm text-gray-500">
            Create reusable contract templates
          </p>

          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* Blueprint Details */}
          <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
            <h2 className="font-medium text-gray-800">
              Blueprint Details
            </h2>

            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Blueprint Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* Add Field */}
          <div className="bg-white border rounded-2xl shadow-sm p-5 space-y-4">
            <h2 className="font-medium text-gray-800">
              Add Field
            </h2>

            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Field Label"
              value={label}
              onChange={e => setLabel(e.target.value)}
            />

            <select
              className="w-full border rounded-lg px-3 py-2"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="date">Date</option>
              <option value="checkbox">Checkbox</option>
              <option value="signature">Signature</option>
            </select>

            <button
              onClick={addField}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
            >
              Add Field
            </button>
          </div>

          {/* Save */}
          <button
            onClick={saveBlueprint}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg shadow-sm transition"
          >
            Save Blueprint
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-2 bg-white border rounded-2xl shadow-sm p-6">
          <h2 className="font-medium mb-3 text-gray-800">
            Blueprint Preview
          </h2>

          {fields.length === 0 ? (
            <div className="h-[400px] flex items-center justify-center text-sm text-gray-500 border rounded-lg">
              Add fields to preview blueprint
            </div>
          ) : (
            <BlueprintCanvas fields={fields} />
          )}
        </div>
      </div>

      {/* SAVED BLUEPRINTS */}
      {blueprints.length > 0 && (
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <h2 className="font-medium mb-4 text-gray-800">
            Saved Blueprints
          </h2>

          <ul className="space-y-3">
            {blueprints.map(bp => (
              <li
                key={bp.id}
                className="flex justify-between items-center border rounded-lg px-4 py-3"
              >
                <span className="font-medium text-gray-900">
                  {bp.name}
                </span>
                <span className="text-sm text-gray-500">
                  {bp.fields.length} fields
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
