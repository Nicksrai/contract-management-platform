export default function ContractDocument({ fields, onChange }) {
  return (
    <div className="bg-white border rounded p-8 space-y-6">
      {fields.map(field => (
        <div key={field.id} className="max-w-md">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>

          {field.type === "text" && (
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              value={field.value || ""}
              disabled={field.readOnly}
              onChange={e =>
                onChange(field.id, e.target.value)
              }
            />
          )}

          {field.type === "date" && (
            <input
              type="date"
              className="w-full border rounded px-3 py-2 text-sm"
              value={field.value || ""}
              disabled={field.readOnly}
              onChange={e =>
                onChange(field.id, e.target.value)
              }
            />
          )}

          {field.type === "checkbox" && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!field.value}
                disabled={field.readOnly}
                onChange={e =>
                  onChange(field.id, e.target.checked)
                }
              />
              <span className="text-sm text-gray-600">
                Accepted
              </span>
            </div>
          )}

          {field.type === "signature" && (
            <input
              className="w-full border-b border-gray-400 px-2 py-1 italic text-sm"
              placeholder="Sign here"
              value={field.value || ""}
              disabled={field.readOnly}
              onChange={e =>
                onChange(field.id, e.target.value)
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
