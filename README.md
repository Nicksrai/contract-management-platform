# 📄 Contract Management Platform

A modern, responsive **Contract Management Platform** built using **React, Vite, and Tailwind CSS**.  
This application demonstrates **product thinking, UI design, controlled state management, and clean frontend architecture**.

The project is **frontend-only**, using **mock data and LocalStorage** to simulate real-world contract workflows without a backend.

---

## 🔗 Live Demo
👉 https://contract-management-platform-woad.vercel.app/

---

## 🚀 Features

### 📊 Dashboard
- KPI overview (Total / Active / Signed contracts)
- Status-based filters: **Active, Pending, Signed**
- Search and sorting (by name and date)
- Contract lifecycle visibility
- Fully responsive layout (mobile → desktop)

### 📑 Blueprints
- Create reusable contract templates
- Add configurable fields:
  - Text
  - Date
  - Checkbox
  - Signature
- Field metadata storage (type, label, position)
- Visual blueprint preview
- Reuse blueprints to generate contracts

### 📝 Contracts
- Generate contracts from blueprints
- Controlled contract lifecycle:
  - **Created → Approved → Sent → Signed → Locked**
- Lifecycle rules enforced (no skipping states)
- Locked contracts are read-only
- Status badges with timestamps

### 🌙 UI / UX
- Clean, dashboard-style interface
- Dark mode support
- Sticky navigation bar
- Mobile-first responsive design
- Focus on clarity and usability

---

## 🛠 Tech Stack & Justification

### **React + Vite**
- Component-based architecture for scalability and reuse
- Fast development experience with minimal configuration
- Clean separation between pages, components, and state

### **Tailwind CSS**
- Utility-first styling for consistent UI
- Responsive design using built-in breakpoints
- Dark mode implemented via `dark:` variants

### **React Router DOM**
- Declarative client-side routing
- Supports scalable multi-page dashboard navigation

### **State Management**
- Custom stores (`useContractStore`, `useBlueprintStore`)
- Centralized state handling to maintain a **single source of truth**
- LocalStorage used to mock backend persistence

### **Backend**
- Backend is **intentionally omitted**
- All data is stored locally to focus on frontend architecture, UX, and lifecycle logic

---

## 🧱 Architecture & Design Decisions
- Fully component-based structure
- Clear separation of concerns:
  - Pages
  - Reusable UI components
  - State stores
  - Utility logic
- Lifecycle rules handled through controlled state transitions
- Backend-ready architecture (can be extended easily)

---

## 📂 Project Structure

```txt
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── DarkModeToggle.jsx
│   ├── dashboard/
│   │   ├── KPIs.jsx
│   │   ├── ContractTable.jsx
│   │   ├── DashboardControls.jsx
│   │   └── StatusBadge.jsx
│   ├── blueprint/
│   │   ├── BlueprintCanvas.jsx
│   │   └── BlueprintForm.jsx
│   └── contract/
│       ├── ContractForm.jsx
│       ├── ContractView.jsx
│       └── ContractLifecycle.jsx
│
├── pages/
│   ├── DashboardPage.jsx
│   ├── BlueprintsPage.jsx
│   ├── ContractsPage.jsx
│   └── ContractDetailPage.jsx
│
├── state/
│   ├── blueprintStore.js
│   └── contractStore.js
│
├── utils/
│   ├── lifecycle.js
│   └── storage.js
│
├── router/
│   └── AppRouter.jsx
│
├── App.jsx
├── main.jsx
└── index.css
 
 ⚙️ Setup Instructions

 npm install
npm run dev
