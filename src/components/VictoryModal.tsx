import React from "react";
import { useGame } from "../context/GameContext";

export function VictoryModal() {
  const { showVictoryModal, setShowVictoryModal } = useGame();

  if (!showVictoryModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-600">
          🎉 축하합니다! 🎉
        </h2>
        <p className="text-xl text-center mb-6 text-gray-800">
          우주여행 시대 도래!
        </p>
        <p className="text-center text-gray-600 mb-6">
          인류의 우주 진출이 완성되었습니다.
        </p>
        <button
          onClick={() => setShowVictoryModal(false)}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
}



