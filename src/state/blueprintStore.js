const STORAGE_KEY = "blueprints";

function loadBlueprints() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveBlueprints(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useBlueprintStore() {
  function getBlueprints() {
    return loadBlueprints();
  }

  function createBlueprint(blueprint) {
    const current = loadBlueprints();
    const updated = [...current, blueprint];
    saveBlueprints(updated);
  }

  return {
    blueprints: getBlueprints(),
    createBlueprint,
  };
}
