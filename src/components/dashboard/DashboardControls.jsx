export default function DashboardControls({
  search,
  setSearch,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
      <input
        type="text"
        placeholder="Search contracts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border rounded px-3 py-2 w-full md:w-64 dark:bg-gray-800 dark:border-gray-700"
      />

      <select
        value={sort}
        onChange={e => setSort(e.target.value)}
        className="border rounded px-3 py-2 w-full md:w-48 dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
        <option value="date-desc">Newest First</option>
        <option value="date-asc">Oldest First</option>
      </select>
    </div>
  );
}
