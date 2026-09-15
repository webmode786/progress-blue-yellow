import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "02",
  name: "Silicone & High-Temperature Cables",
  slug: "silicone-high-temperature-cables",
  shortDescription:
    "Silicone-insulated wires and multicore cables for high-temperature, furnace, oven and flexible industrial applications.",
  description:
    "Silicone rubber insulated wires and cables built to withstand extreme heat, offering high flexibility and low-corona performance. Suited to furnaces, industrial ovens, electronic ceramics, lighting and other high-temperature industrial environments.",
  subcategories: [
    {
      name: "Silicone Cables",
      slug: "silicone-cables",
      description: "Single-core and fibreglass-braided silicone cables for high-temperature applications.",
    },
    {
      name: "Multicore Silicone Cables",
      slug: "multicore-silicone-cables",
      description: "Multicore silicone-insulated cables for industrial high-temperature applications.",
    },
  ],
  products: [
    {
      name: "Silicone Cable (FG4/2)",
      slug: "silicone-cable-fg4-2",
      subcategory: "silicone-cables",
      productCode: "FG4/2",
      brands: ["SIF", "SIAF", "GS"],
      shortDescription: "Silicone rubber insulated single-core cable for high-temperature, high-voltage applications.",
      description:
        "Flexible single-core silicone rubber insulated cable suited to high-temperature, high-voltage and low-corona applications requiring extremely flexible wire or cable.",
      specifications: [
        { label: "Conductor", value: "Flexible conductor of bare, tinned or nickel-coated copper, Class 5 (EN 60228)" },
        { label: "Insulation", value: "Silicone rubber insulated" },
        { label: "Working Voltage", value: "300/500 V" },
        { label: "Temperature Range", value: "180 °C" },
      ],
      material: "Silicone rubber / copper",
      applications: ["High-temperature applications", "High-voltage applications", "Low-corona applications"],
      standards: ["EN 60228"],
      keywords: ["FG4/2", "SIF", "SIAF", "GS", "silicone cable", "high-temperature wire"],
      featured: true,
    },
    {
      name: "Silicone + Fibreglass Sleeves (FG4T2/2)",
      slug: "silicone-fibreglass-sleeves-fg4t2-2",
      subcategory: "silicone-cables",
      productCode: "FG4T2/2",
      shortDescription: "Fibreglass-braided silicone cable for furnaces, industrial ovens and heating parts.",
      description:
        "Fibreglass-braided silicone rubber cable for furnaces and industrial ovens where PVC cables cannot sustain the heat. Widely used in electric machinery, electronic ceramics, heating parts, car lights, lighting and ballasts.",
      specifications: [
        { label: "Conductor", value: "Bare or tinned copper, IS: 8130-1976, Class 5" },
        { label: "Insulation", value: "Silicone rubber" },
        { label: "Braid", value: "Fibreglass" },
        { label: "Temperature Range", value: "−60 °C ~ +200 °C" },
        { label: "Working Voltage", value: "300/500 V" },
      ],
      material: "Silicone rubber / fibreglass braid / copper",
      applications: ["Furnaces", "Industrial ovens", "Electric machinery", "Electronic ceramics", "Heating parts", "Car lights", "Lighting and ballasts"],
      standards: ["IS 8130-1976"],
      keywords: ["FG4T2/2", "fibreglass cable", "silicone fibreglass", "furnace cable"],
    },
    {
      name: "Multicore Silicone Cable (FG4OG4/2)",
      slug: "multicore-silicone-cable-fg4og4-2",
      subcategory: "multicore-silicone-cables",
      productCode: "FG4OG4/2",
      brands: ["SIHF"],
      shortDescription: "Multicore silicone rubber cable for high-temperature industrial applications.",
      description:
        "Multicore silicone rubber insulated cable for industrial applications including plastic forming and moulding, packaging, food processing, refrigeration, furnaces and lighting.",
      specifications: [
        { label: "Conductor", value: "Bare or tinned copper" },
        { label: "Insulation", value: "Silicone rubber" },
        { label: "Temperature Range", value: "180 °C ~ 250 °C" },
        { label: "Working Voltage", value: "300/500 V" },
      ],
      material: "Silicone rubber / copper",
      applications: ["Plastic forming and moulding", "Packaging", "Food processing", "Refrigeration", "Furnaces", "Lighting"],
      keywords: ["FG4OG4/2", "SIHF", "multicore silicone cable", "high-temperature multicore cable"],
      featured: true,
    },
  ],
};
