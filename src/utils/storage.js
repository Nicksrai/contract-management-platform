export function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromStorage(key, defaultValue = []) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : defaultValue;
}
