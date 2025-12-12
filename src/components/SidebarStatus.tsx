import React from "react";
import { useGame } from "../context/GameContext";
import { ResourceType } from "../game/types";

const resourceNames: Record<ResourceType, string> = {
  iron: "철",
  coal: "석탄",
  copper: "구리",
  wood: "나무",
  uranium: "우라늄",
  carbon_nanotube: "탄소나노튜브",
};

export function SidebarStatus() {
  const { state } = useGame();

  return (
    <aside className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">현재 상태</h2>
      
      <div className="mb-6">
        <div className="mb-2">
          <span className="font-semibold text-gray-700">기술점수: </span>
          <span className="text-blue-600 font-bold text-lg">{state.techScore}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-700">과학점수: </span>
          <span className="text-green-600 font-bold text-lg">{state.scienceScore}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">라운드: </span>
          <span className="text-purple-600 font-bold text-lg">{state.round}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">자원</h3>
        <div className="space-y-1">
          {Object.entries(state.resources).map(([resource, amount]) => (
            <div key={resource} className="flex justify-between">
              <span className="text-gray-700">{resourceNames[resource as ResourceType]}:</span>
              <span className="font-bold text-gray-900">{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}



