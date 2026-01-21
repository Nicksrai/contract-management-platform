export default function BlueprintCanvas({ fields }) {
  return (
    <div className="relative border h-[500px] bg-gray-50 rounded">
      {fields.map(field => (
        <div
          key={field.id}
          className="absolute bg-white border rounded p-2 text-xs shadow"
          style={{
            left: field.position.x,
            top: field.position.y,
          }}
        >
          {field.label} ({field.type})
        </div>
      ))}
    </div>
  );
}
