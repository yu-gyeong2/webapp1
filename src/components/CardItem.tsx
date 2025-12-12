import React from "react";
import { Card } from "../game/types";
import { getCardStatus } from "../game/gameLogic";
import { useGame } from "../context/GameContext";

interface CardItemProps {
  card: Card;
}

export function CardItem({ card }: CardItemProps) {
  const { state, unlockCard } = useGame();
  const status = getCardStatus(card, state);

  const getStatusStyles = (): string => {
    switch (status) {
      case "unlocked":
        return "bg-green-100 border-green-500 border-2";
      case "unlockable":
        return "bg-blue-100 border-blue-500 border-2 cursor-pointer hover:bg-blue-200";
      case "locked":
        return "bg-gray-200 border-gray-400 border";
      default:
        return "bg-gray-200 border-gray-400 border";
    }
  };

  const getStatusText = (): string => {
    switch (status) {
      case "unlocked":
        return "획득함";
      case "unlockable":
        return "해금 가능";
      case "locked":
        return "잠김";
      default:
        return "잠김";
    }
  };

  const getStatusTextColor = (): string => {
    switch (status) {
      case "unlocked":
        return "text-green-700";
      case "unlockable":
        return "text-blue-700";
      case "locked":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const handleClick = () => {
    if (status === "unlockable") {
      unlockCard(card);
    }
  };

  const categoryColors: Record<Card["category"], string> = {
    energy: "bg-yellow-200",
    transport: "bg-blue-200",
    communication: "bg-purple-200",
    production: "bg-orange-200",
    future: "bg-pink-200",
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${getStatusStyles()} transition-all`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{card.name}</h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${categoryColors[card.category]}`}>
          {card.category}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{card.description}</p>

      <div className="mb-2">
        <div className="text-xs font-semibold text-gray-700 mb-1">요구사항:</div>
        <div className="text-xs text-gray-600 space-y-1">
          {card.requirements.minTech !== undefined && (
            <div>기술점수 ≥ {card.requirements.minTech}</div>
          )}
          {card.requirements.minScience !== undefined && (
            <div>과학점수 ≥ {card.requirements.minScience}</div>
          )}
          {card.requirements.prerequisiteCards && card.requirements.prerequisiteCards.length > 0 && (
            <div>선행 카드 필요</div>
          )}
        </div>
      </div>

      <div className="mb-2">
        <div className="text-xs font-semibold text-gray-700 mb-1">비용:</div>
        <div className="text-xs text-gray-600">
          {Object.keys(card.cost).length === 0 ? (
            <span>비용 없음</span>
          ) : (
            Object.entries(card.cost).map(([resource, amount]) => (
              <span key={resource} className="mr-2">
                {resource}: {amount}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-300">
        <span className={`font-bold text-sm ${getStatusTextColor()}`}>
          {getStatusText()}
        </span>
      </div>
    </div>
  );
}



