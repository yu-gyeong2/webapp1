export type ResourceType =
  | "iron"
  | "coal"
  | "copper"
  | "wood"
  | "uranium"
  | "carbon_nanotube";

export interface Card {
  id: string;
  name: string;
  description: string;
  category: "energy" | "transport" | "communication" | "production" | "future";
  requirements: {
    minTech?: number;
    minScience?: number;
    prerequisiteCards?: string[];
  };
  cost: Partial<Record<ResourceType, number>>;
  effect: {
    techDelta?: number;
    scienceDelta?: number;
    moveDelta?: number;
    special?:
      | "double_resource_once"
      | "trade_once"
      | "instant_win"
      | "priority_resource"
      | null;
  };
}

export interface GameState {
  techScore: number;
  scienceScore: number;
  resources: Record<ResourceType, number>;
  round: number;
  unlockedCards: string[];
}



