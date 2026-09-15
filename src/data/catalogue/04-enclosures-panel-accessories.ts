import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "04",
  name: "Enclosures & Panel Accessories",
  slug: "enclosures-panel-accessories",
  shortDescription:
    "Metal and stainless enclosures, heavy-duty connectors, trunking, ties, spiral wrap, markers and high-temperature connection accessories.",
  description:
    "A comprehensive range of enclosures and panel-building accessories, including powder-coated and stainless-steel enclosures, industrial die-cast connectors, panel trunking, cable ties, spiral wrap, cable markers and high-temperature plugs and porcelain connectors for electrical panel and cable management work.",
  subcategories: [
    {
      name: "Enclosures",
      slug: "enclosures",
      description: "Powder-coated steel and stainless steel enclosures for electrical equipment protection.",
    },
    {
      name: "Connectors & Insulators",
      slug: "connectors-insulators",
      description: "Heavy-duty die-cast connectors, high-temperature plugs and porcelain connectors.",
    },
    {
      name: "Cable Management",
      slug: "cable-management",
      description: "Panel trunking, cable ties, spiral wrap and cable markers for organized panel wiring.",
    },
  ],
  products: [
    {
      name: "Metal Enclosures",
      slug: "metal-enclosures",
      subcategory: "enclosures",
      productCode: "IP65 • RAL 7032",
      shortDescription: "IP65 powder-coated steel enclosure with concealed hinges and polyurethane foam gasket.",
      description:
        "Manufactured with electro-galvanized sheet steel, electrostatically powder-coated with RAL 7032 texture finish. Doors are fitted with concealed hinges and sealed with a polyurethane foam gasket for IP65 protection, with the mounting plate held by robust bolts. Meets the requirement of IEC 60349-1.",
      specifications: [
        { label: "Material", value: "Electro-galvanized sheet steel, powder-coated" },
        { label: "Protection", value: "IP65" },
        { label: "Finish", value: "RAL 7032 texture" },
      ],
      material: "Electro-galvanized sheet steel, powder-coated",
      colour: "RAL 7032",
      standards: ["IEC 60349-1"],
      keywords: ["metal enclosure", "IP65 enclosure", "powder-coated enclosure", "electrical panel enclosure"],
      featured: true,
    },
    {
      name: "Stainless Steel Enclosures",
      slug: "stainless-steel-enclosures",
      subcategory: "enclosures",
      productCode: "IP65 • SS304",
      shortDescription: "SS304 stainless steel enclosure with IP65 protection and galvanized mounting plate.",
      description:
        "Made of SS304 grade stainless steel with a galvanized steel mounting plate, closed from all sides with IP65 rating protection. The enclosure lock is made of MS705 material.",
      specifications: [
        { label: "Material", value: "SS304 stainless steel" },
        { label: "Protection", value: "IP65" },
        { label: "Lock", value: "MS705 material" },
      ],
      material: "SS304 stainless steel",
      keywords: ["stainless steel enclosure", "SS304 enclosure", "IP65 enclosure"],
      featured: true,
    },
    {
      name: "Heavy-Duty Die-Cast Connectors",
      slug: "heavy-duty-die-cast-connectors",
      subcategory: "connectors-insulators",
      productCode: "Die-Cast Aluminium",
      shortDescription: "Industrial die-cast aluminium connectors for secure, modular machinery connections.",
      description:
        "Used wherever a secure, simple and time-saving assembly of machinery and facilities is needed. Die-cast aluminium housings offer excellent protection against dirt, moisture and mechanical stress. Special modular connectors integrate signals, power supply, pneumatics and data connections into a single connector.",
      material: "Die-cast aluminium",
      applications: ["Machinery assembly", "Signal, power, pneumatic and data integration"],
      keywords: ["die-cast connector", "heavy-duty connector", "industrial connector"],
    },
    {
      name: "Slotted Panel Trunking",
      slug: "slotted-panel-trunking",
      subcategory: "cable-management",
      productCode: "Slotted",
      shortDescription: "PVC slotted trunking for organized panel wiring in control panels and switchgear.",
      description:
        "For simple, clean and organized installation of panel wiring. Supports and organizes bundles of wire/cables in control panels, distribution boards, switchgear, network racks and more.",
      material: "PVC",
      applications: ["Control panels", "Distribution boards", "Switchgear", "Network racks"],
      keywords: ["panel trunking", "slotted trunking", "wiring duct"],
    },
    {
      name: "Nylon Cable Ties",
      slug: "nylon-cable-ties",
      subcategory: "cable-management",
      productCode: "Nylon 6.6",
      shortDescription: "Nylon 6.6 cable ties in miniature to heavy-duty sizes for harnessing and bundling.",
      description:
        "Standard cable ties in nylon grade 6.6 for harnessing and bundling wires. Available in miniature sizes for small loads, and long lengths with strong tensile strengths for large items or bundles.",
      material: "Nylon 6.6",
      sizes: ["Miniature sizes", "Long lengths (high tensile strength)"],
      keywords: ["cable ties", "nylon cable ties", "nylon 6.6"],
    },
    {
      name: "Stainless Steel Cable Ties",
      slug: "stainless-steel-cable-ties",
      subcategory: "cable-management",
      productCode: "Stainless Steel",
      shortDescription: "Corrosion- and heat-resistant stainless steel cable ties for power system applications.",
      description:
        "For power and power-system applications, unaffected by binding-object shape and size, offering good fastening performance with anti-corrosion and high-temperature resistance for fire-environment requirements.",
      material: "Stainless steel",
      applications: ["Power and power-system applications", "Fire-environment installations"],
      keywords: ["stainless steel cable ties", "metal cable ties"],
    },
    {
      name: "Spiral Wrap",
      slug: "spiral-wrap",
      subcategory: "cable-management",
      productCode: "Wrap Tubing",
      shortDescription: "Abrasion-resistant PVC spiral wrap for wire-harness covering and cable bundling.",
      description:
        "Abrasion-resistant wire-harness covering for breakouts and cable bundling. Wraps tightly to wire and cable for performance and reliability with every use.",
      material: "PVC",
      sizes: ["3 mm (10 mtr)", "14 mm (10 mtr)", "19 mm (10 mtr)"],
      keywords: ["spiral wrap", "PVC spiral", "wire harness covering", "cable bundling"],
    },
    {
      name: "Cable Markers",
      slug: "cable-markers",
      subcategory: "cable-management",
      productCode: "Wire & Cable ID",
      shortDescription: "Wire and cable markers for labelling before or after termination.",
      description:
        "Wire and cable markers for labelling wires and cables. Marking can be done before or after termination.",
      sizes: ["Cable marker 2.5 mm (0–9)"],
      keywords: ["cable markers", "wire markers", "cable identification"],
    },
    {
      name: "Metal Iron Plugs",
      slug: "metal-iron-plugs",
      subcategory: "connectors-insulators",
      productCode: "220–600 V • 5/6 mm",
      shortDescription: "High-temperature metal iron plugs with copper and ceramic conductor.",
      description:
        "High-temperature plug with copper and ceramic conductor, jacketed with metal aluminium or silicone rubber. Available in aluminium-alloy jacket withstanding up to 500 °C, or silicone-rubber jacket withstanding 200 °C, both rated 220–600 V.",
      specifications: [
        { label: "Aluminium-Alloy Jacket", value: "Withstands high temperature up to 500 °C; standard voltage 220 V to 600 V; diameter 5 mm and 6 mm" },
        { label: "Silicone-Rubber Jacket", value: "Acid, alkali and breakage-protected; withstands 200 °C; high voltage 220 V to 600 V" },
        { label: "Also Available", value: "Iron plug (Girish) • 16 Amp iron connector, metal" },
      ],
      sizes: ["5 mm diameter", "6 mm diameter"],
      material: "Copper and ceramic conductor with aluminium or silicone rubber jacket",
      keywords: ["metal iron plug", "high-temperature plug", "iron connector", "Girish"],
    },
    {
      name: "Porcelain Connectors",
      slug: "porcelain-connectors",
      subcategory: "connectors-insulators",
      productCode: "Open & Close Type",
      shortDescription: "Electrical porcelain insulator/connector for joining conductors mechanically and electrically.",
      description:
        "Electrical porcelain insulator/connector used to join electric conductors mechanically and electrically to other conductors and to the terminals of apparatus and equipment. Available in open and close types.",
      sizes: ["2-way ceramic — 10 / 15 / 16 / 30 / 32 Amp", "3-way ceramic — 10 / 15 / 16 / 30 Amp"],
      material: "Porcelain / ceramic",
      keywords: ["porcelain connector", "ceramic connector", "terminal block", "insulator"],
    },
  ],
};
