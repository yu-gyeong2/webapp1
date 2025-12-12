import { Card } from "./types";

export const cards: Card[] = [
  {
    id: "steam_engine",
    name: "증기기관 발명",
    description: "증기 동력을 이용한 기계의 발명",
    category: "energy",
    requirements: {
      minTech: 0,
      minScience: 0,
    },
    cost: {
      iron: 2,
      coal: 1,
    },
    effect: {
      techDelta: 2,
      scienceDelta: 1,
    },
  },
  {
    id: "steam_train",
    name: "증기기관차 발명",
    description: "철도 교통의 시작",
    category: "transport",
    requirements: {
      minTech: 2,
      minScience: 1,
      prerequisiteCards: ["steam_engine"],
    },
    cost: {
      iron: 3,
      coal: 2,
    },
    effect: {
      techDelta: 3,
      scienceDelta: 1,
    },
  },
  {
    id: "electricity",
    name: "전기 발견",
    description: "전기의 발견과 활용",
    category: "energy",
    requirements: {
      minTech: 3,
      minScience: 2,
    },
    cost: {
      copper: 2,
      wood: 1,
    },
    effect: {
      techDelta: 2,
      scienceDelta: 3,
    },
  },
  {
    id: "power_plant",
    name: "발전소 건설",
    description: "대규모 전력 생산 시설",
    category: "energy",
    requirements: {
      minTech: 5,
      minScience: 3,
      prerequisiteCards: ["electricity"],
    },
    cost: {
      iron: 4,
      coal: 3,
      copper: 2,
    },
    effect: {
      techDelta: 4,
      scienceDelta: 2,
    },
  },
  {
    id: "conveyor_belt",
    name: "컨베이어벨트 도입",
    description: "자동화 생산 시스템",
    category: "production",
    requirements: {
      minTech: 6,
      minScience: 3,
    },
    cost: {
      iron: 3,
      copper: 2,
    },
    effect: {
      techDelta: 3,
      scienceDelta: 1,
      special: "double_resource_once",
    },
  },
  {
    id: "telephone",
    name: "전화기 발명",
    description: "원거리 통신의 혁명",
    category: "communication",
    requirements: {
      minTech: 5,
      minScience: 4,
      prerequisiteCards: ["electricity"],
    },
    cost: {
      copper: 3,
      iron: 2,
    },
    effect: {
      techDelta: 2,
      scienceDelta: 3,
    },
  },
  {
    id: "automobile",
    name: "자동차 발명",
    description: "개인 교통수단의 대중화",
    category: "transport",
    requirements: {
      minTech: 7,
      minScience: 4,
      prerequisiteCards: ["power_plant"],
    },
    cost: {
      iron: 5,
      coal: 2,
      copper: 2,
    },
    effect: {
      techDelta: 4,
      scienceDelta: 2,
    },
  },
  {
    id: "nuclear_physics",
    name: "핵 물리학 발전",
    description: "원자력 기술의 기초",
    category: "energy",
    requirements: {
      minTech: 10,
      minScience: 8,
    },
    cost: {
      uranium: 1,
      copper: 3,
    },
    effect: {
      techDelta: 3,
      scienceDelta: 5,
    },
  },
  {
    id: "internet",
    name: "인터넷 혁명",
    description: "전 세계 네트워크 연결",
    category: "communication",
    requirements: {
      minTech: 12,
      minScience: 10,
      prerequisiteCards: ["telephone"],
    },
    cost: {
      copper: 5,
      iron: 3,
    },
    effect: {
      techDelta: 5,
      scienceDelta: 5,
    },
  },
  {
    id: "smartphone",
    name: "스마트폰 발명",
    description: "휴대용 컴퓨팅 기기",
    category: "communication",
    requirements: {
      minTech: 15,
      minScience: 12,
      prerequisiteCards: ["internet"],
    },
    cost: {
      copper: 4,
      iron: 2,
    },
    effect: {
      techDelta: 4,
      scienceDelta: 4,
    },
  },
  {
    id: "robot",
    name: "로봇 기술",
    description: "자동화 로봇 시스템",
    category: "production",
    requirements: {
      minTech: 18,
      minScience: 15,
      prerequisiteCards: ["conveyor_belt"],
    },
    cost: {
      iron: 6,
      copper: 4,
    },
    effect: {
      techDelta: 5,
      scienceDelta: 3,
      special: "priority_resource",
    },
  },
  {
    id: "smart_farm",
    name: "스마트팜 개발",
    description: "AI 기반 농업 시스템",
    category: "production",
    requirements: {
      minTech: 20,
      minScience: 18,
      prerequisiteCards: ["robot"],
    },
    cost: {
      copper: 5,
      iron: 3,
    },
    effect: {
      techDelta: 4,
      scienceDelta: 5,
    },
  },
  {
    id: "metaverse",
    name: "메타버스",
    description: "가상 현실 세계 구축",
    category: "future",
    requirements: {
      minTech: 22,
      minScience: 20,
      prerequisiteCards: ["smartphone"],
    },
    cost: {
      copper: 6,
      iron: 4,
    },
    effect: {
      techDelta: 5,
      scienceDelta: 5,
    },
  },
  {
    id: "ai_research",
    name: "인공지능 연구",
    description: "고도화된 AI 시스템",
    category: "future",
    requirements: {
      minTech: 25,
      minScience: 22,
      prerequisiteCards: ["metaverse"],
    },
    cost: {
      copper: 8,
      iron: 5,
    },
    effect: {
      techDelta: 6,
      scienceDelta: 6,
    },
  },
  {
    id: "rocket",
    name: "우주 로켓 개발",
    description: "우주 탐사 기술",
    category: "future",
    requirements: {
      minTech: 28,
      minScience: 25,
      prerequisiteCards: ["nuclear_physics"],
    },
    cost: {
      iron: 10,
      uranium: 2,
    },
    effect: {
      techDelta: 7,
      scienceDelta: 7,
    },
  },
  {
    id: "space_travel",
    name: "우주여행 시대 도래",
    description: "인류의 우주 진출 완성",
    category: "future",
    requirements: {
      minTech: 35,
      minScience: 32,
      prerequisiteCards: ["rocket", "smart_farm", "ai_research"],
    },
    cost: {
      carbon_nanotube: 1,
    },
    effect: {
      techDelta: 10,
      scienceDelta: 10,
      special: "instant_win",
    },
  },
];



