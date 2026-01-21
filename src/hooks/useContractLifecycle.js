import { getAllowedTransitions } from "../utils/lifecycle";

export function useContractLifecycle(contract, onUpdate) {
  const allowedActions = getAllowedTransitions(contract.status);

  function changeStatus(status) {
    onUpdate(contract.id, status);
  }

  return {
    allowedActions,
    changeStatus,
    isLocked:
      contract.status === "LOCKED" ||
      contract.status === "REVOKED",
  };
}
