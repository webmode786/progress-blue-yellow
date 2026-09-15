import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "03",
  name: "Rubber, PVC & Armoured Cables",
  slug: "rubber-pvc-armoured-cables",
  shortDescription:
    "Rubber flexibles, PVC flexible cables and steel-wire armoured cables for site, industrial and fixed-installation use.",
  description:
    "A broad range of rubber and PVC flexible cables together with low-voltage steel-wire armoured cables, sourced from leading manufacturers for site, industrial and fixed-installation applications. Covers moderate mechanical stress duties through to buried and outdoor armoured installations.",
  subcategories: [
    {
      name: "Rubber & PVC Flexible Cables",
      slug: "rubber-pvc-flexible-cables",
      description: "Rubber and PVC flexible cables for general purpose, workshop and site use.",
    },
    {
      name: "Armoured Cables",
      slug: "armoured-cables",
      description: "Low-voltage steel-wire armoured cables for direct burial and mechanically demanding installations.",
    },
  ],
  products: [
    {
      name: "Rubber Cable (H07RN-F)",
      slug: "rubber-cable-h07rn-f",
      subcategory: "rubber-pvc-flexible-cables",
      productCode: "H07RN-F",
      shortDescription: "Rubber-insulated flexible cable with polychloroprene sheath for moderate mechanical stress duties.",
      description:
        "Rubber-insulated flexible cable with polychloroprene sheathing, resistant to mechanical stress, oils, chemical corrosion and weathering. Suitable for dry, damp or wet environments, outdoors and in workshops with explosive atmospheres, for connections liable to moderate mechanical stress including workshop apparatus, boilers, heater plates, portable lamps and tools, portable motors and generators on building sites or farms, and fixed installations along floors or shelving on temporary sites. Suitable up to 1000 V for adequately protected fixed installations, and for rotor connection to lifting-apparatus motors.",
      specifications: [
        { label: "Conductor", value: "Bare flexible copper, Class 5 acc. to IEC 60228 (HD 383, CEI 20-29)" },
        { label: "Insulation", value: "E14 quality rubber acc. to CEI EN 50363 (CEI 20-11)" },
        { label: "Inner Sheath", value: "EM3 quality rubber compound acc. to CEI EN 50363" },
        { label: "Sheath", value: "EM2 quality rubber compound acc. to CEI EN 50363" },
        { label: "Colour Coding", value: "2-core: Brown, Blue • 3-core: + Green/Yellow • 4-core: Brown, Black, Grey, Green/Yellow • 5-core: Brown, Black, Grey, Blue, Green/Yellow" },
        { label: "Outer Sheath", value: "Thermosetting rubber (Type EM2), black" },
      ],
      material: "Rubber / polychloroprene / bare flexible copper",
      colour: "Black",
      applications: ["Workshop apparatus", "Boilers", "Heater plates", "Portable lamps and tools", "Portable motors and generators", "Building sites and farms", "Lifting-apparatus motor rotor connection"],
      standards: ["IEC 60228", "HD 383", "CEI 20-29", "CEI EN 50363", "CEI 20-11"],
      keywords: ["H07RN-F", "rubber cable", "flexible rubber cable"],
      featured: true,
    },
    {
      name: "Multicore PVC Flexible Cable (H05VV-F)",
      slug: "multicore-pvc-flexible-cable-h05vv-f",
      subcategory: "rubber-pvc-flexible-cables",
      productCode: "H05VV-F",
      shortDescription: "General-purpose PVC flexible cable for indoor and outdoor use in dry or damp situations.",
      description:
        "General purpose PVC flexible cable for indoors or outdoors in dry or damp situations, including portable tools, washing machines, vacuum cleaners, lawn mowers and light domestic applications.",
      specifications: [
        { label: "Harmonised Code", value: "H05VV-F • Reference: BSEN 50525-2-11" },
        { label: "Conductor", value: "Flexible plain copper, Class 5 to BS 6360 / IEC 60228 / BSEN 60228" },
        { label: "Insulation", value: "PVC Type TI 2 to BSEN 50363-3" },
        { label: "Lay-up", value: "Cores twisted" },
        { label: "Sheath", value: "PVC Type TM 2 to BSEN 50363-4-1 — White, Black, Brown, Grey" },
        { label: "Colour Coding", value: "2-core: Brown, Blue • 3-core: + Green/Yellow • 4-core: Brown, Blue, Black, Green/Yellow • 5-core: Brown, Blue, Black, Grey, Green/Yellow" },
        { label: "Max. Operating Temp.", value: "70 °C" },
        { label: "Rated Voltage", value: "0.5 mm² to 4 mm² — 300/500 V • 6.0 mm² to 25 mm² — 450/750 V" },
        { label: "Standards", value: "BSEN 50525-2-11 (0.5 mm² to 4 mm², and generally above 4 mm²)" },
      ],
      sizes: ["0.5 mm² to 4 mm² (300/500 V)", "6.0 mm² to 25 mm² (450/750 V)"],
      material: "PVC / plain copper",
      colour: "White, Black, Brown, Grey",
      applications: ["Portable tools", "Washing machines", "Vacuum cleaners", "Lawn mowers", "Light domestic applications"],
      standards: ["BS 6360", "IEC 60228", "BSEN 60228", "BSEN 50363-3", "BSEN 50363-4-1", "BSEN 50525-2-11"],
      keywords: ["H05VV-F", "PVC flexible cable", "multicore PVC cable"],
      featured: true,
    },
    {
      name: "Armoured Cables — Low Voltage Range",
      slug: "armoured-cables-lv-range",
      subcategory: "armoured-cables",
      productCode: "LV SWA Range",
      brands: ["MESC", "Ducab", "NCI", "Oman", "Fedcab / FTC-UAE"],
      shortDescription: "Robust low-voltage steel-wire armoured cables for direct burial and outdoor installations.",
      description:
        "Robust, hard-wearing low-voltage steel-wire armoured cables manufactured in accordance with British, European and international standards. The armour provides additional protection where mechanical stress may cause damage — direct burial, outdoors or underground — and enables the cable to withstand higher pulling loads.",
      applications: ["Direct burial", "Outdoor installations", "Underground installations"],
      keywords: ["armoured cable", "SWA cable", "steel wire armoured", "LV armoured cable", "MESC", "Ducab", "NCI", "Fedcab", "FTC-UAE"],
      featured: true,
    },
    {
      name: "Rubber Cable Range",
      slug: "rubber-cable-range",
      subcategory: "rubber-pvc-flexible-cables",
      productCode: "H07RN-F Type",
      brands: ["Nexans", "Top Cable", "Ducab"],
      shortDescription: "Rubber flexible cables to British, European and international standards with strong oil resistance.",
      description:
        "Rubber flexible cables to British, European and international standards. H07RN-F rubber flexibles provide excellent flexibility, withstanding weather and medium mechanical and thermal stress, with very good oil resistance.",
      applications: ["Weather-exposed installations", "Medium mechanical and thermal stress duties"],
      keywords: ["rubber cable range", "H07RN-F", "Nexans", "Top Cable", "Ducab", "oil-resistant cable"],
    },
    {
      name: "PVC Flexible Cable Range",
      slug: "pvc-flexible-cable-range",
      subcategory: "rubber-pvc-flexible-cables",
      productCode: "PVC Flexible",
      brands: ["RAKCAB", "MESC", "Ducab", "Fedcab / FTC-UAE", "R.R. Kabel"],
      shortDescription: "PVC flexible cables to BS and IEC standards with high-purity Class 5 copper conductors.",
      description:
        "PVC flexible cables designed and manufactured to BS 6004, BS 6500, BS 7919 and IEC 60227. Plain annealed high-purity Class 5 copper conductor with PVC insulation and sheathing for high electrical, mechanical and thermal performance.",
      standards: ["BS 6004", "BS 6500", "BS 7919", "IEC 60227"],
      keywords: ["PVC flexible cable range", "RAKCAB", "MESC", "Ducab", "Fedcab", "FTC-UAE", "R.R. Kabel"],
    },
  ],
};
