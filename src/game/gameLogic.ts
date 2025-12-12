import { Card, GameState, ResourceType } from "./types";
import { cards } from "./cards";

export function canUnlockCard(card: Card, state: GameState): boolean {
  // Check tech score
  if (card.requirements.minTech !== undefined) {
    if (state.techScore < card.requirements.minTech) {
      return false;
    }
  }

  // Check science score
  if (card.requirements.minScience !== undefined) {
    if (state.scienceScore < card.requirements.minScience) {
      return false;
    }
  }

  // Check prerequisites
  if (card.requirements.prerequisiteCards) {
    for (const prereqId of card.requirements.prerequisiteCards) {
      if (!state.unlockedCards.includes(prereqId)) {
        return false;
      }
    }
  }

  // Check resources
  for (const [resource, amount] of Object.entries(card.cost)) {
    const resourceType = resource as ResourceType;
    if (state.resources[resourceType] < (amount || 0)) {
      return false;
    }
  }

  // Check if already unlocked
  if (state.unlockedCards.includes(card.id)) {
    return false;
  }

  return true;
}

export function unlockCard(card: Card, state: GameState): GameState {
  const newState = { ...state };

  // Deduct resources
  for (const [resource, amount] of Object.entries(card.cost)) {
    const resourceType = resource as ResourceType;
    newState.resources[resourceType] -= amount || 0;
  }

  // Apply effects
  if (card.effect.techDelta) {
    newState.techScore += card.effect.techDelta;
  }
  if (card.effect.scienceDelta) {
    newState.scienceScore += card.effect.scienceDelta;
  }

  // Add to unlocked cards
  newState.unlockedCards = [...newState.unlockedCards, card.id];

  return newState;
}

export function getCardStatus(
  card: Card,
  state: GameState
): "locked" | "unlockable" | "unlocked" {
  if (state.unlockedCards.includes(card.id)) {
    return "unlocked";
  }
  if (canUnlockCard(card, state)) {
    return "unlockable";
  }
  return "locked";
}

export function grantRandomResources(state: GameState): GameState {
  const resourceTypes: ResourceType[] = [
    "iron",
    "coal",
    "copper",
    "wood",
    "uranium",
    "carbon_nanotube",
  ];

  const newState = { ...state };
  const newResources = { ...newState.resources };

  // Grant 2 random resources
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * resourceTypes.length);
    const resource = resourceTypes[randomIndex];
    newResources[resource] += 1;
  }

  newState.resources = newResources;
  newState.round += 1;

  return newState;
}

export function getCardById(id: string): Card | undefined {
  return cards.find((card) => card.id === id);
}



