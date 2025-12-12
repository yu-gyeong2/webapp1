import React, { useState } from "react";
import { cards } from "../game/cards";
import { CardItem } from "./CardItem";
import { Card } from "../game/types";

type CategoryFilter = "all" | Card["category"];

export function CardGrid() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredCards =
    filter === "all"
      ? cards
      : cards.filter((card) => card.category === filter);

  const categories: CategoryFilter[] = [
    "all",
    "energy",
    "transport",
    "communication",
    "production",
    "future",
  ];

  const categoryLabels: Record<CategoryFilter, string> = {
    all: "전체",
    energy: "에너지",
    transport: "수송",
    communication: "통신",
    production: "생산",
    future: "미래",
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-4 flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}



