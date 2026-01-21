export default function BlueprintField({ field }) {
  return (
    <div
      className="absolute border border-dashed p-2 text-xs bg-white"
      style={{ left: field.position.x, top: field.position.y }}
    >
      {field.label} ({field.type})
    </div>
  );
}
