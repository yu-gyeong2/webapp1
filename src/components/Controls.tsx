import React from "react";
import { useGame } from "../context/GameContext";

export function Controls() {
  const { nextRound, resetGame } = useGame();

  return (
    <div className="bg-gray-100 p-4 flex gap-4 justify-center shadow-md">
      <button
        onClick={nextRound}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        라운드 진행
      </button>
      <button
        onClick={resetGame}
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md"
      >
        게임 초기화
      </button>
    </div>
  );
}



