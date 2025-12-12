import React, { createContext, useContext, useState, ReactNode } from "react";
import { GameState, ResourceType, Card } from "../game/types";
import { unlockCard, grantRandomResources } from "../game/gameLogic";

const initialResources: Record<ResourceType, number> = {
  iron: 1,
  coal: 1,
  copper: 0,
  wood: 0,
  uranium: 0,
  carbon_nanotube: 0,
};

const initialState: GameState = {
  techScore: 0,
  scienceScore: 0,
  resources: initialResources,
  round: 1,
  unlockedCards: [],
};

interface GameContextType {
  state: GameState;
  unlockCard: (card: Card) => void;
  nextRound: () => void;
  resetGame: () => void;
  showVictoryModal: boolean;
  setShowVictoryModal: (show: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(initialState);
  const [showVictoryModal, setShowVictoryModal] = useState(false);

  const handleUnlockCard = (card: Card) => {
    setState((prevState) => {
      const newState = unlockCard(card, prevState);
      
      // Check for instant win
      if (card.effect.special === "instant_win") {
        setShowVictoryModal(true);
      }
      
      return newState;
    });
  };

  const handleNextRound = () => {
    setState((prevState) => grantRandomResources(prevState));
  };

  const handleResetGame = () => {
    setState(initialState);
    setShowVictoryModal(false);
  };

  return (
    <GameContext.Provider
      value={{
        state,
        unlockCard: handleUnlockCard,
        nextRound: handleNextRound,
        resetGame: handleResetGame,
        showVictoryModal,
        setShowVictoryModal,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}



