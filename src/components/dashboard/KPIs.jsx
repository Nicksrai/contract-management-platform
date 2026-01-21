export default function KPIs({ contracts }) {
  const total = contracts.length;

  const active = contracts.filter(c =>
    ["CREATED", "APPROVED", "SENT"].includes(c.status)
  ).length;

  const signed = contracts.filter(c =>
    ["SIGNED", "LOCKED"].includes(c.status)
  ).length;

  const Tile = ({ label, value, accent }) => (
    <div
      className={`bg-white border-l-4 ${accent} rounded-xl p-5 shadow-sm 
                  hover:shadow-md transition`}
    >
      <p className="text-sm text-gray-500">
        {label}
      </p>
      <p className="text-2xl font-semibold mt-1 text-gray-800">
        {value}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Tile
        label="Total Contracts"
        value={total}
        accent="border-indigo-500"
      />

      <Tile
        label="Active Contracts"
        value={active}
        accent="border-blue-500"
      />

      <Tile
        label="Signed Contracts"
        value={signed}
        accent="border-emerald-500"
      />
    </div>
  );
}
