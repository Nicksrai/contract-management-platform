import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import BlueprintsPage from "../pages/BlueprintsPage";
import ContractsPage from "../pages/ContractsPage";
import ContractDetailPage from "../pages/ContractDetailPage";
import Navbar from "../components/layout/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/blueprints" element={<BlueprintsPage />} />
          <Route path="/contracts" element={<ContractsPage />} />
          <Route
            path="/contracts/:id"
            element={<ContractDetailPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
