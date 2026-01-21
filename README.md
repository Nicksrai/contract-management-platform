# 📄 Contract Management Platform

A modern, responsive **Contract Management Platform** built using **React, Vite, and Tailwind CSS**.  
The application focuses on reusable blueprints, contract lifecycle management, and a clean, enterprise-style user experience.

This project is designed as a **frontend-focused assessment**, using mock data and local persistence without a backend.

---

## 🚀 Features

### 📊 Dashboard
- KPI tiles (Total / Active / Signed contracts)
- Status-based filters (Active, Pending, Signed)
- Search and sorting (by name and date)
- Recent activity panel (last updated contracts)
- Fully responsive layout

### 📑 Blueprints
- Create reusable contract templates
- Add dynamic fields:
  - Text
  - Date
  - Checkbox
  - Signature
- Visual blueprint preview
- Save and reuse blueprints

### 📝 Contracts
- Create contracts from predefined blueprints
- Track contract lifecycle:
  - Created → Approved → Sent → Signed
- View and edit contract details
- Status badges and timestamps

### 🌙 UI / UX
- Modern dashboard-style layout
- Dark mode support
- Sticky navigation bar
- Mobile-first responsive design
- Clean typography and spacing

---

## 🛠 Tech Stack & Justification

### **Frontend Framework – React (with Vite)**
- Chosen for its **component-based architecture**, which enables reusable, maintainable UI components.
- Vite provides a **fast development environment** with minimal configuration and excellent performance.

### **Styling – Tailwind CSS**
- Utility-first approach allows rapid UI development while maintaining consistency.
- Built-in responsive utilities enable a **mobile-first design**.
- Dark mode support implemented using Tailwind’s `dark:` variants.

### **Routing – React Router DOM**
- Enables clean, declarative client-side routing.
- Supports scalable navigation structure for dashboards and nested pages.

### **State Management – Custom Hooks + LocalStorage**
- State is managed using custom hooks (`useContractStore`, `useBlueprintStore`) to maintain a **single source of truth**.
- LocalStorage is used to **mock backend persistence**, simulating real-world data storage without requiring a server.
- This approach keeps the architecture simple while remaining backend-ready.

### **Architecture**
- Fully **component-based architecture**
- Clear separation of concerns:
  - Pages
  - Reusable UI components
  - State management
  - Utility functions

### **Backend**
- Backend is **not required** for this project.
- Mock data and LocalStorage are used intentionally to simulate backend behavior while keeping the focus on frontend architecture and UX.

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
│   │   └── RecentActivity.jsx
│   ├── blueprint/
│   │   └── BlueprintCanvas.jsx
│   └── contract/
│       └── ContractForm.jsx
│
├── pages/
│   ├── DashboardPage.jsx
│   ├── BlueprintsPage.jsx
│   └── ContractsPage.jsx
│
├── state/
│   ├── blueprintStore.js
│   └── contractStore.js
│
|
|
│
├── App.jsx
├── main.jsx
└── index.css
