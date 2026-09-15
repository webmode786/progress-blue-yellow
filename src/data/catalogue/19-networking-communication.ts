import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "19",
  name: "Networking & Communication",
  slug: "networking-communication",
  shortDescription: "RJ45/RJ11 connectors, faceplates, data sockets and network cabinet accessories.",
  description:
    "Data and communication components covering RJ45 and RJ11 connectors, faceplates and telephone/data sockets, along with network cabinets, racks and related accessories for structured cabling installations.",
  subcategories: [
    {
      name: "RJ45 / RJ11, Faceplates & Data Sockets",
      slug: "rj45-rj11-faceplates-data-sockets",
      description: "Connectors, jacks, faceplates and data outlets.",
    },
    {
      name: "Network Cabinets, Racks & Accessories",
      slug: "network-cabinets-racks-accessories",
      description: "Wall cabinets, rack accessories and comms hardware.",
    },
  ],
  products: [
    {
      name: "RJ45 Connector",
      slug: "rj45-connector",
      subcategory: "rj45-rj11-faceplates-data-sockets",
      shortDescription: "RJ45 jack, clip and adaptor for structured data cabling.",
      description:
        "RJ45 connectors available as single jack, clip and adaptor types, including MK log variants, for terminating data cabling in networking installations.",
      keywords: ["RJ45", "RJ45 jack", "RJ45 connector", "data connector", "MK log"],
      featured: true,
    },
    {
      name: "Faceplate",
      slug: "faceplate",
      subcategory: "rj45-rj11-faceplates-data-sockets",
      shortDescription: "Single and double faceplates for data and telephone outlets.",
      sizes: ["Single", "Double"],
      keywords: ["faceplate", "data faceplate", "outlet plate"],
    },
    {
      name: "Data / Telephone Socket",
      slug: "data-telephone-socket",
      subcategory: "rj45-rj11-faceplates-data-sockets",
      shortDescription: "Chrome double RJ45 data and telephone socket outlet.",
      colour: "Chrome",
      keywords: ["data socket", "telephone socket", "RJ45 socket", "chrome socket"],
      featured: true,
    },
    {
      name: "RJ11 Connector",
      slug: "rj11-connector",
      subcategory: "rj45-rj11-faceplates-data-sockets",
      shortDescription: "RJ11 connector for telephone line termination.",
      keywords: ["RJ11", "RJ11 connector", "telephone connector"],
    },
    {
      name: "Telephone Clip",
      slug: "telephone-clip",
      subcategory: "rj45-rj11-faceplates-data-sockets",
      shortDescription: "Clip for securing telephone cabling.",
      keywords: ["telephone clip", "cable clip"],
    },
    {
      name: "CCTV Stand",
      slug: "cctv-stand",
      subcategory: "network-cabinets-racks-accessories",
      shortDescription: "Top wall-mounted CCTV stand with fixture for camera installation.",
      keywords: ["CCTV stand", "camera mount", "wall mount stand"],
    },
    {
      name: "Power Cable",
      slug: "power-cable",
      subcategory: "network-cabinets-racks-accessories",
      shortDescription: "3-pin 1.5 m computer power cable for networking equipment.",
      sizes: ["1.5 mtr"],
      keywords: ["power cable", "3-pin power cable", "computer power cord"],
    },
    {
      name: "Telephone Box",
      slug: "telephone-box",
      subcategory: "network-cabinets-racks-accessories",
      shortDescription: "60 x 60 cm telephone junction box for cabling distribution.",
      sizes: ["60 x 60 cm"],
      keywords: ["telephone box", "junction box", "distribution box"],
    },
  ],
};
