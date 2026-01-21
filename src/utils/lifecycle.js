import { CONTRACT_STATUS } from "../constants/contract";

export const CONTRACT_TRANSITIONS = {
  [CONTRACT_STATUS.CREATED]: [
    CONTRACT_STATUS.APPROVED,
    CONTRACT_STATUS.REVOKED,
  ],
  [CONTRACT_STATUS.APPROVED]: [
    CONTRACT_STATUS.SENT,
  ],
  [CONTRACT_STATUS.SENT]: [
    CONTRACT_STATUS.SIGNED,
    CONTRACT_STATUS.REVOKED,
  ],
  [CONTRACT_STATUS.SIGNED]: [
    CONTRACT_STATUS.LOCKED,
  ],
  [CONTRACT_STATUS.LOCKED]: [],
  [CONTRACT_STATUS.REVOKED]: [],
};

export function getAllowedTransitions(status) {
  return CONTRACT_TRANSITIONS[status] || [];
}

export function canTransition(from, to) {
  return CONTRACT_TRANSITIONS[from]?.includes(to);
}
