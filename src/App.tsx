import React from "react";
import { GameProvider } from "./context/GameContext";
import { Header } from "./components/Header";
import { SidebarStatus } from "./components/SidebarStatus";
import { CardGrid } from "./components/CardGrid";
import { Controls } from "./components/Controls";
import { VictoryModal } from "./components/VictoryModal";

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <div className="p-4">
            <SidebarStatus />
          </div>
          <CardGrid />
        </div>
        <Controls />
        <VictoryModal />
      </div>
    </GameProvider>
  );
}

export default App;



