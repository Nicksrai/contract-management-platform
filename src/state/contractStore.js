const STORAGE_KEY = "contracts";

function loadContracts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveContracts(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useContractStore() {
  function getContracts() {
    return loadContracts();
  }

  // 🔹 CREATE CONTRACT (ADD DATE HERE)
  function createContract(contract) {
    const now = new Date().toISOString();

    const updated = [
      ...loadContracts(),
      {
        ...contract,
        createdAt: now,
        updatedAt: now,
      },
    ];

    saveContracts(updated);
  }

  // 🔹 UPDATE FIELD (UPDATE updatedAt)
  function updateContractField(id, fieldId, value) {
    const updated = loadContracts().map(c =>
      c.id === id
        ? {
            ...c,
            fieldValues: {
              ...c.fieldValues,
              [fieldId]: value,
            },
            updatedAt: new Date().toISOString(),
          }
        : c
    );

    saveContracts(updated);
  }

  // 🔹 UPDATE STATUS (UPDATE updatedAt)
  function updateContractStatus(id, status) {
    const updated = loadContracts().map(c =>
      c.id === id
        ? {
            ...c,
            status,
            updatedAt: new Date().toISOString(),
          }
        : c
    );

    saveContracts(updated);
  }

  return {
    contracts: getContracts(),
    createContract,
    updateContractField,
    updateContractStatus,
  };
}
