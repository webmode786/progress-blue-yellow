import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "18",
  name: "Earthing & Lightning Protection",
  slug: "earthing-lightning-protection",
  shortDescription: "Earth rods, clamps, pits and lightning air terminals for electrical earthing systems.",
  description:
    "Earthing and lightning protection components including copper-bonded and solid-copper earth rods with couplers and clamps, plus earth pits, backfill compounds and air terminals for building protection systems.",
  subcategories: [
    {
      name: "Earth Rods, Clamps & Couplers",
      slug: "earth-rods-clamps-couplers",
      description: "Copper-bonded and solid-copper rods with accessories.",
    },
    {
      name: "Earth Pits, Backfill & Air Terminals",
      slug: "earth-pits-backfill-air-terminals",
      description: "Inspection pits, backfill compounds and air terminals.",
    },
  ],
  products: [
    {
      name: "Earth Rod",
      slug: "earth-rod",
      subcategory: "earth-rods-clamps-couplers",
      shortDescription: "16 mm and 20 mm copper-bonded and solid earth rods for grounding systems.",
      description:
        "Earth rods available in 16 mm and 20 mm diameters, in copper-bonded, solid copper and 20x1.2 variants, used for building and equipment earthing systems.",
      sizes: ["16 mm", "20 mm", "20x1.2"],
      material: "Copper-bonded / solid copper",
      keywords: ["earth rod", "grounding rod", "copper bonded rod", "earthing rod"],
      featured: true,
    },
    {
      name: "Coupler",
      slug: "coupler",
      subcategory: "earth-rods-clamps-couplers",
      shortDescription: "16 mm standard coupler for joining earth rod sections.",
      sizes: ["16 mm"],
      keywords: ["coupler", "earth rod coupler"],
    },
    {
      name: "Rod Clamp",
      slug: "rod-clamp",
      subcategory: "earth-rods-clamps-couplers",
      shortDescription: "Clamp for securing earth rod connections.",
      keywords: ["rod clamp", "earth clamp"],
    },
    {
      name: "Stud",
      slug: "stud",
      subcategory: "earth-rods-clamps-couplers",
      shortDescription: "Rod stud and driving stud for earth rod installation.",
      keywords: ["stud", "rod stud", "driving stud"],
    },
    {
      name: "Spike",
      slug: "spike",
      subcategory: "earth-rods-clamps-couplers",
      shortDescription: "Driving spike for solid copper earth rod installation.",
      keywords: ["spike", "driving spike", "earth rod spike"],
    },
    {
      name: "Earth Braid",
      slug: "earth-braid",
      subcategory: "earth-rods-clamps-couplers",
      shortDescription: "Tinned copper earth braid, 8 mm x 3, for flexible bonding connections.",
      sizes: ["8 mm x 3"],
      material: "Tinned copper",
      keywords: ["earth braid", "bonding braid", "tinned copper braid"],
    },
    {
      name: "Earth Pit",
      slug: "earth-pit",
      subcategory: "earth-pits-backfill-air-terminals",
      shortDescription: "Concrete earth pit for inspection and maintenance of earthing systems.",
      material: "Concrete",
      keywords: ["earth pit", "earthing pit", "concrete pit"],
      featured: true,
    },
    {
      name: "Bentonite Powder",
      slug: "bentonite-powder",
      subcategory: "earth-pits-backfill-air-terminals",
      shortDescription: "25 kg bag of bentonite powder backfill for earthing pits.",
      packaging: "25 kg bag",
      keywords: ["bentonite powder", "earthing backfill", "bentonite"],
    },
    {
      name: "Charcoal",
      slug: "charcoal",
      subcategory: "earth-pits-backfill-air-terminals",
      shortDescription: "Charcoal bags used as backfill material in earth pits.",
      packaging: "Bags",
      keywords: ["charcoal", "earth pit backfill"],
    },
    {
      name: "Air Terminal",
      slug: "air-terminal",
      subcategory: "earth-pits-backfill-air-terminals",
      shortDescription: "Base and multi-point air terminals for lightning protection systems.",
      description:
        "Lightning protection air terminals available with base mounting and multi-point configurations, used on rooftops to intercept lightning strikes.",
      keywords: ["air terminal", "lightning rod", "lightning protection"],
    },
  ],
};
