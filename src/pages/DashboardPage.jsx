import { useState } from "react";
import { useContractStore } from "../state/contractStore";
import ContractTable from "../components/dashboard/ContractTable";
import KPIs from "../components/dashboard/KPIs";
import DashboardControls from "../components/dashboard/DashboardControls";

const FILTERS = {
  ACTIVE: ["CREATED", "APPROVED", "SENT"],
  PENDING: ["APPROVED", "SENT"],
  SIGNED: ["SIGNED", "LOCKED"],
};

export default function DashboardPage() {
  const { contracts } = useContractStore();

  const [filter, setFilter] = useState("ACTIVE");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date-desc");

  let filtered = contracts.filter(c =>
    FILTERS[filter].includes(c.status)
  );

  if (search) {
    filtered = filtered.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  filtered.sort((a, b) => {
    switch (sort) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "date-asc":
        return a.id - b.id;
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="space-y-10 px-4 sm:px-0">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-gray-900">
          DASHBOARD
        </h1>

        <p className="text-sm text-gray-500">
          Contract lifecycle overview & activity insights
        </p>

        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
        </div>
      </div>

      {/* KPI SECTION */}
      <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6">
        <h2 className="text-xs sm:text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Overview
        </h2>
        <KPIs contracts={contracts} />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* FILTERS + CONTROLS */}
          <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Contracts
              </h2>

              <div className="flex flex-wrap gap-2">
                {Object.keys(FILTERS).map(key => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                      filter === key
                        ? "bg-indigo-600 text-white shadow"
                        : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            <DashboardControls
              search={search}
              setSearch={setSearch}
              sort={sort}
              setSort={setSort}
            />
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-x-auto">
            <ContractTable contracts={filtered} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-5">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Insights
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>📌 <strong>{contracts.length}</strong> total contracts</li>
              <li>
                ⏳{" "}
                {
                  contracts.filter(c =>
                    ["CREATED", "SENT"].includes(c.status)
                  ).length
                }{" "}
                awaiting action
              </li>
              <li>
                ✅{" "}
                {
                  contracts.filter(c =>
                    ["SIGNED", "LOCKED"].includes(c.status)
                  ).length
                }{" "}
                completed
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-indigo-700 mb-2">
              Tip
            </h3>
            <p className="text-sm text-indigo-600">
              Use filters and search to quickly locate contracts
              and track their lifecycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
