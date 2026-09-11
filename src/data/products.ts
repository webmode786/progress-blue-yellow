/**
 * Central product catalogue for Skyline Building Material & Electrical Trading.
 *
 * This file is the single source of truth for categories, subcategories and
 * products. UI components never hardcode product data — update entries here and
 * every page (listing, category, detail, search, homepage) follows.
 *
 * Images: replace the imported asset paths below with real product photography
 * when available. Descriptions are original, general-purpose product copy.
 */

import imgElectricalAccessories from "@/assets/cat-electrical-accessories.jpg";
import imgCables from "@/assets/cat-cables-wires.jpg";
import imgLighting from "@/assets/cat-lighting.jpg";
import imgPlumbing from "@/assets/cat-plumbing.jpg";
import imgHardware from "@/assets/cat-hardware-tools.jpg";
import imgConstruction from "@/assets/cat-construction.jpg";
import imgSafety from "@/assets/cat-safety.jpg";
import prodCable from "@/assets/prod-cable.jpg";
import prodBoard from "@/assets/prod-board.jpg";
import prodFasteners from "@/assets/prod-fasteners.jpg";
import prodPlumbing from "@/assets/prod-plumbing.jpg";

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  href: string;
  image: string;
  icon: string;
  shortDescription: string;
  description: string;
  ctaLabel: string;
  featured: boolean;
  subcategories: Subcategory[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  /** Category slug — kept as `category` for backwards compatibility. */
  category: string;
  categorySlug: string;
  categoryName: string;
  subcategory: string;
  subcategoryName: string;
  productType: string;
  brand: string | null;
  brands: string[];
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  specifications: { label: string; value: string }[];
  variants: string[];
  applications: string[];
  featured: boolean;
  keywords: string[];
};

const sub = (categorySlug: string, name: string, slug: string): Subcategory => ({
  id: `${categorySlug}-${slug}`,
  name,
  slug,
  categorySlug,
});

export const productCategories: ProductCategory[] = [
  {
    id: "electrical-accessories",
    name: "Electrical Accessories",
    slug: "electrical-accessories",
    href: "/products/electrical-accessories",
    image: imgElectricalAccessories,
    icon: "Plug",
    shortDescription:
      "Switches, sockets, distribution boards and wiring accessories for every installation.",
    description:
      "Wiring devices and accessories used across residential, commercial and industrial electrical installations — from switches and sockets to distribution boards and circuit protection.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("electrical-accessories", "Switches & Sockets", "switches-sockets"),
      sub("electrical-accessories", "Distribution Boards", "distribution-boards"),
      sub("electrical-accessories", "Circuit Breakers", "circuit-breakers"),
      sub("electrical-accessories", "Junction & Adaptable Boxes", "junction-boxes"),
      sub("electrical-accessories", "Industrial Plugs & Sockets", "industrial-plugs"),
    ],
  },
  {
    id: "cables-wires",
    name: "Cables & Wires",
    slug: "cables-wires",
    href: "/products/cables-wires",
    image: imgCables,
    icon: "Cable",
    shortDescription:
      "Power, control and low-voltage cabling with conduits and cable management.",
    description:
      "Cables and wiring products for power distribution, lighting circuits, control systems and data, together with the conduits, trunking and trays used to route them safely.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("cables-wires", "Building Wires", "building-wires"),
      sub("cables-wires", "Power & Armoured Cables", "power-cables"),
      sub("cables-wires", "Flexible Cables", "flexible-cables"),
      sub("cables-wires", "Conduits & Fittings", "conduits-fittings"),
      sub("cables-wires", "Cable Management", "cable-management"),
    ],
  },
  {
    id: "lighting",
    name: "Lighting",
    slug: "lighting",
    href: "/products/lighting",
    image: imgLighting,
    icon: "Lightbulb",
    shortDescription:
      "Indoor, outdoor and industrial lighting for commercial and project use.",
    description:
      "LED and conventional lighting for offices, retail, residential, warehouses and outdoor areas, including emergency and exit lighting for compliant installations.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("lighting", "Indoor Lighting", "indoor-lighting"),
      sub("lighting", "Outdoor & Flood Lighting", "outdoor-lighting"),
      sub("lighting", "Industrial Lighting", "industrial-lighting"),
      sub("lighting", "Emergency & Exit Lighting", "emergency-lighting"),
    ],
  },
  {
    id: "plumbing-pipes",
    name: "Plumbing & Pipe Fittings",
    slug: "plumbing-pipes",
    href: "/products/plumbing-pipes",
    image: imgPlumbing,
    icon: "Droplets",
    shortDescription:
      "Pipes, fittings, valves and sanitary items for plumbing and MEP works.",
    description:
      "Pipe systems and fittings for water supply, drainage and MEP installations, along with valves, faucets and sanitary accessories for fit-out and maintenance work.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("plumbing-pipes", "Pipes", "pipes"),
      sub("plumbing-pipes", "Pipe Fittings", "pipe-fittings"),
      sub("plumbing-pipes", "Valves", "valves"),
      sub("plumbing-pipes", "Faucets & Sanitary Ware", "faucets-sanitary"),
    ],
  },
  {
    id: "hardware-tools",
    name: "Hardware, Tools & Fasteners",
    slug: "hardware-tools",
    href: "/products/hardware-tools",
    image: imgHardware,
    icon: "Wrench",
    shortDescription:
      "Hand tools, power tools, fasteners, anchors and general site hardware.",
    description:
      "Everyday site essentials: hand and power tools, fixings, anchors, ironmongery and general hardware for construction, fit-out and maintenance teams.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("hardware-tools", "Hand Tools", "hand-tools"),
      sub("hardware-tools", "Power Tools & Accessories", "power-tools"),
      sub("hardware-tools", "Fasteners & Fixings", "fasteners"),
      sub("hardware-tools", "Anchors", "anchors"),
      sub("hardware-tools", "Door & Builders Hardware", "builders-hardware"),
    ],
  },
  {
    id: "construction-materials",
    name: "Construction & Finishing Materials",
    slug: "construction-materials",
    href: "/products/construction-materials",
    image: imgConstruction,
    icon: "Building2",
    shortDescription:
      "Cement, steel, gypsum, waterproofing, adhesives, sealants and paints.",
    description:
      "Structural and finishing materials for building programmes — cement and aggregates, steel products, gypsum and boards, waterproofing systems, adhesives, sealants and paints.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("construction-materials", "Cement & Aggregates", "cement-aggregates"),
      sub("construction-materials", "Steel & Metal Products", "steel-metal"),
      sub("construction-materials", "Gypsum & Boards", "gypsum-boards"),
      sub("construction-materials", "Waterproofing", "waterproofing"),
      sub("construction-materials", "Adhesives & Sealants", "adhesives-sealants"),
      sub("construction-materials", "Paints & Coatings", "paints-coatings"),
    ],
  },
  {
    id: "safety-products",
    name: "Safety Products & PPE",
    slug: "safety-products",
    href: "/products/safety-products",
    image: imgSafety,
    icon: "HardHat",
    shortDescription:
      "Personal protective equipment and site safety products for work sites.",
    description:
      "Personal protective equipment and site safety essentials, from head, hand and eye protection to high-visibility clothing, fall protection and site signage.",
    ctaLabel: "View Products",
    featured: true,
    subcategories: [
      sub("safety-products", "Head & Face Protection", "head-face"),
      sub("safety-products", "Hand & Body Protection", "hand-body"),
      sub("safety-products", "Fall Protection", "fall-protection"),
      sub("safety-products", "Site Safety Equipment", "site-safety"),
    ],
  },
];

type Draft = {
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  productType: string;
  image?: string;
  shortDescription: string;
  description: string;
  specifications?: { label: string; value: string }[];
  variants?: string[];
  applications?: string[];
  featured?: boolean;
  keywords?: string[];
};

const drafts: Draft[] = [
  // ---------------------------------------------------------------- Electrical
  {
    name: "Modular Wall Switches",
    slug: "modular-wall-switches",
    category: "electrical-accessories",
    subcategory: "switches-sockets",
    productType: "Wiring Device",
    shortDescription:
      "One, two and three-gang modular switches for lighting control.",
    description:
      "Modular wall switches used to control lighting and small power circuits. Available in single and multi-gang configurations with matching plates to suit residential, office and hospitality interiors.",
    specifications: [
      { label: "Type", value: "Flush-mounted modular switch" },
      { label: "Gang Options", value: "1, 2, 3 and 4 gang" },
      { label: "Finish", value: "White, metallic and brushed options" },
    ],
    variants: ["1 Gang", "2 Gang", "3 Gang", "4 Gang", "2 Way"],
    applications: ["Residential fit-out", "Offices", "Hotels", "Retail"],
    featured: true,
    keywords: ["switch", "light switch", "gang", "wiring device"],
  },
  {
    name: "Power Sockets & Outlets",
    slug: "power-sockets-outlets",
    category: "electrical-accessories",
    subcategory: "switches-sockets",
    productType: "Wiring Device",
    shortDescription: "Single and twin switched socket outlets with USB options.",
    description:
      "Switched socket outlets for general power in offices, homes and commercial interiors. Supplied in single and twin formats, with USB charging variants where required.",
    specifications: [
      { label: "Type", value: "Switched socket outlet" },
      { label: "Configuration", value: "Single / twin" },
      { label: "Mounting", value: "Flush or surface" },
    ],
    variants: ["13A Single", "13A Twin", "13A Twin with USB"],
    applications: ["Residential", "Commercial fit-out", "Facility maintenance"],
    keywords: ["socket", "outlet", "13a", "power point", "usb"],
  },
  {
    name: "Distribution Boards",
    slug: "distribution-boards",
    category: "electrical-accessories",
    subcategory: "distribution-boards",
    productType: "Distribution Equipment",
    image: prodBoard,
    shortDescription: "Enclosures for organised circuit distribution and protection.",
    description:
      "Distribution boards for the safe termination and protection of final circuits. Way counts, enclosure types and incomer arrangements are confirmed against your single-line diagram.",
    specifications: [
      { label: "Type", value: "Surface or flush distribution board" },
      { label: "Ways", value: "4 to 36 way options" },
      { label: "Enclosure", value: "Metal or moulded" },
    ],
    variants: ["4 Way", "8 Way", "12 Way", "18 Way", "24 Way"],
    applications: ["Residential", "Commercial buildings", "Industrial panels"],
    featured: true,
    keywords: ["db", "distribution board", "consumer unit", "panel"],
  },
  {
    name: "Miniature Circuit Breakers (MCB)",
    slug: "miniature-circuit-breakers",
    category: "electrical-accessories",
    subcategory: "circuit-breakers",
    productType: "Circuit Protection",
    shortDescription: "Single and multi-pole MCBs for overload and short-circuit protection.",
    description:
      "Miniature circuit breakers that protect final circuits against overload and short circuit. Pole configuration, current rating and tripping curve are selected to suit the design.",
    specifications: [
      { label: "Poles", value: "1P, 2P, 3P, 4P" },
      { label: "Curve", value: "B, C and D curves" },
      { label: "Mounting", value: "DIN rail" },
    ],
    variants: ["6A", "10A", "16A", "20A", "32A", "63A"],
    applications: ["Distribution boards", "Control panels", "Maintenance"],
    keywords: ["mcb", "breaker", "rcbo", "protection", "din rail"],
  },
  {
    name: "Residual Current Devices (RCD)",
    slug: "residual-current-devices",
    category: "electrical-accessories",
    subcategory: "circuit-breakers",
    productType: "Circuit Protection",
    shortDescription: "Earth leakage protection devices for added installation safety.",
    description:
      "Residual current devices that disconnect a circuit when earth leakage is detected, adding a layer of personal protection to distribution boards and sub-boards.",
    specifications: [
      { label: "Poles", value: "2P and 4P" },
      { label: "Sensitivity", value: "30mA and 100mA options" },
    ],
    variants: ["2P 30mA", "4P 30mA", "4P 100mA"],
    applications: ["Residential boards", "Commercial distribution", "Site supplies"],
    keywords: ["rcd", "elcb", "earth leakage", "safety"],
  },
  {
    name: "Junction & Adaptable Boxes",
    slug: "junction-adaptable-boxes",
    category: "electrical-accessories",
    subcategory: "junction-boxes",
    productType: "Enclosure",
    shortDescription: "PVC and metal boxes for cable joints and terminations.",
    description:
      "Adaptable and junction boxes used to house cable joints and terminations. Available in PVC and metal, in a range of sizes and ingress-protection levels.",
    specifications: [
      { label: "Material", value: "PVC or galvanised steel" },
      { label: "Sizes", value: "Multiple standard sizes" },
    ],
    variants: ["4x4", "6x6", "8x8", "12x12"],
    applications: ["Cable routing", "Site distribution", "Maintenance"],
    keywords: ["junction box", "adaptable box", "enclosure"],
  },
  {
    name: "Industrial Plugs & Sockets",
    slug: "industrial-plugs-sockets",
    category: "electrical-accessories",
    subcategory: "industrial-plugs",
    productType: "Industrial Wiring Device",
    shortDescription: "Heavy-duty connectors for site power and industrial equipment.",
    description:
      "Industrial plugs, sockets and couplers designed for temporary site power and machinery connections, with weather-resistant housings for demanding environments.",
    specifications: [
      { label: "Poles", value: "3P, 4P and 5P" },
      { label: "Rating", value: "16A, 32A, 63A options" },
    ],
    variants: ["16A 3P", "32A 4P", "63A 5P"],
    applications: ["Construction sites", "Workshops", "Industrial plants"],
    keywords: ["industrial plug", "ceeform", "site socket"],
  },

  // -------------------------------------------------------------- Cables/wires
  {
    name: "Single Core Building Wire",
    slug: "single-core-building-wire",
    category: "cables-wires",
    subcategory: "building-wires",
    productType: "Wire",
    image: prodCable,
    shortDescription: "PVC-insulated copper wire for lighting and power circuits.",
    description:
      "Single-core PVC-insulated copper conductor used for internal wiring of lighting and power circuits inside conduit or trunking. Supplied in standard coil lengths and a range of cross-sections.",
    specifications: [
      { label: "Conductor", value: "Annealed copper" },
      { label: "Insulation", value: "PVC" },
      { label: "Packing", value: "Standard coil lengths" },
    ],
    variants: ["1.5 sq mm", "2.5 sq mm", "4 sq mm", "6 sq mm", "10 sq mm"],
    applications: ["Lighting circuits", "Small power", "Panel wiring"],
    featured: true,
    keywords: ["wire", "cable", "copper", "single core", "building wire"],
  },
  {
    name: "Armoured Power Cable",
    slug: "armoured-power-cable",
    category: "cables-wires",
    subcategory: "power-cables",
    productType: "Cable",
    shortDescription: "Steel wire armoured cable for buried and exposed power runs.",
    description:
      "Multi-core armoured power cable for sub-main and distribution runs where mechanical protection is required, suitable for direct burial and exposed installation with correct support.",
    specifications: [
      { label: "Cores", value: "2, 3, 4 and 5 core" },
      { label: "Armour", value: "Steel wire armour" },
    ],
    variants: ["4C x 16 sq mm", "4C x 35 sq mm", "4C x 95 sq mm"],
    applications: ["Sub-main distribution", "External runs", "Plant rooms"],
    keywords: ["swa", "armoured", "power cable", "distribution"],
  },
  {
    name: "Flexible Multi-Core Cable",
    slug: "flexible-multi-core-cable",
    category: "cables-wires",
    subcategory: "flexible-cables",
    productType: "Cable",
    shortDescription: "Flexible cable for appliances, machinery and temporary supplies.",
    description:
      "Flexible multi-core cable used for appliance connections, portable equipment and temporary supplies where repeated movement or tight routing is expected.",
    specifications: [
      { label: "Conductor", value: "Stranded copper" },
      { label: "Cores", value: "2, 3, 4 core" },
    ],
    variants: ["3C x 1.5 sq mm", "3C x 2.5 sq mm", "4C x 4 sq mm"],
    applications: ["Machinery", "Appliances", "Temporary power"],
    keywords: ["flexible cable", "flex", "machine cable"],
  },
  {
    name: "PVC Conduits & Fittings",
    slug: "pvc-conduits-fittings",
    category: "cables-wires",
    subcategory: "conduits-fittings",
    productType: "Conduit",
    shortDescription: "Rigid and flexible conduits with bends, couplers and boxes.",
    description:
      "PVC conduit systems for protecting and routing wiring in concealed and surface installations, supplied with the bends, couplers, saddles and boxes needed to complete the run.",
    specifications: [
      { label: "Material", value: "PVC" },
      { label: "Type", value: "Rigid and flexible" },
    ],
    variants: ["20mm", "25mm", "32mm", "50mm"],
    applications: ["Concealed wiring", "Surface wiring", "Slab conduiting"],
    keywords: ["conduit", "pvc pipe", "electrical conduit", "flexible conduit"],
  },
  {
    name: "Cable Trays & Trunking",
    slug: "cable-trays-trunking",
    category: "cables-wires",
    subcategory: "cable-management",
    productType: "Cable Management",
    shortDescription: "Perforated trays, ladders and trunking for organised cable routes.",
    description:
      "Cable trays, ladders and trunking that support and organise cable runs in plant rooms, ceilings and risers, with accessories for bends, tees and reducers.",
    specifications: [
      { label: "Material", value: "Pre-galvanised or hot-dip galvanised steel" },
      { label: "Types", value: "Perforated tray, ladder, trunking" },
    ],
    variants: ["100mm", "200mm", "300mm", "450mm"],
    applications: ["Plant rooms", "Ceiling voids", "Risers"],
    keywords: ["cable tray", "trunking", "ladder", "cable management"],
  },

  // ------------------------------------------------------------------ Lighting
  {
    name: "LED Panel Lights",
    slug: "led-panel-lights",
    category: "lighting",
    subcategory: "indoor-lighting",
    productType: "Luminaire",
    shortDescription: "Recessed and surface LED panels for offices and interiors.",
    description:
      "Slim LED panels for false-ceiling and surface installation in offices, clinics and retail interiors, offering even light distribution and straightforward maintenance.",
    specifications: [
      { label: "Mounting", value: "Recessed or surface" },
      { label: "Colour Temperature", value: "3000K / 4000K / 6500K" },
    ],
    variants: ["600x600", "300x1200", "Round 18W", "Round 24W"],
    applications: ["Offices", "Retail", "Clinics", "Corridors"],
    featured: true,
    keywords: ["led panel", "ceiling light", "office lighting", "luminaire"],
  },
  {
    name: "LED Downlights & Spotlights",
    slug: "led-downlights-spotlights",
    category: "lighting",
    subcategory: "indoor-lighting",
    productType: "Luminaire",
    shortDescription: "Recessed downlights and adjustable spots for accent lighting.",
    description:
      "Recessed LED downlights and adjustable spotlights for general and accent lighting in residential, hospitality and retail interiors.",
    specifications: [
      { label: "Type", value: "Fixed and adjustable" },
      { label: "Cut-out", value: "Multiple standard cut-outs" },
    ],
    variants: ["7W", "12W", "18W", "COB Spot"],
    applications: ["Residential", "Hospitality", "Showrooms"],
    keywords: ["downlight", "spotlight", "cob", "recessed"],
  },
  {
    name: "LED Floodlights",
    slug: "led-floodlights",
    category: "lighting",
    subcategory: "outdoor-lighting",
    productType: "Luminaire",
    shortDescription: "Weather-resistant floodlights for facades, yards and car parks.",
    description:
      "Outdoor LED floodlights for facades, yards, car parks and site areas, built with weather-resistant housings for continuous external use.",
    specifications: [
      { label: "Protection", value: "Outdoor rated housing" },
      { label: "Beam", value: "Wide flood distribution" },
    ],
    variants: ["50W", "100W", "150W", "200W"],
    applications: ["Car parks", "Facades", "Construction sites"],
    keywords: ["floodlight", "outdoor lighting", "site light"],
  },
  {
    name: "Industrial High Bay Lights",
    slug: "industrial-high-bay-lights",
    category: "lighting",
    subcategory: "industrial-lighting",
    productType: "Luminaire",
    shortDescription: "High-output fittings for warehouses and production halls.",
    description:
      "High bay LED luminaires for warehouses, factories and production halls with elevated ceilings, delivering strong output with efficient energy use.",
    specifications: [
      { label: "Mounting", value: "Suspended or hook mount" },
      { label: "Optics", value: "Standard and narrow beam options" },
    ],
    variants: ["100W", "150W", "200W", "240W"],
    applications: ["Warehouses", "Factories", "Logistics facilities"],
    keywords: ["high bay", "warehouse lighting", "industrial light"],
  },
  {
    name: "Emergency & Exit Lighting",
    slug: "emergency-exit-lighting",
    category: "lighting",
    subcategory: "emergency-lighting",
    productType: "Luminaire",
    shortDescription: "Battery-backed exit signs and emergency luminaires.",
    description:
      "Emergency luminaires and illuminated exit signage with integral battery backup, supporting safe evacuation routes in commercial and industrial buildings.",
    specifications: [
      { label: "Backup", value: "Integral rechargeable battery" },
      { label: "Type", value: "Maintained and non-maintained options" },
    ],
    variants: ["Exit Sign", "Twin Spot", "Bulkhead"],
    applications: ["Escape routes", "Stairwells", "Commercial buildings"],
    keywords: ["emergency light", "exit sign", "evacuation"],
  },

  // ------------------------------------------------------------------ Plumbing
  {
    name: "PVC & UPVC Pipes",
    slug: "pvc-upvc-pipes",
    category: "plumbing-pipes",
    subcategory: "pipes",
    productType: "Pipe",
    image: prodPlumbing,
    shortDescription: "Pressure and drainage pipes in a range of diameters.",
    description:
      "PVC and UPVC pipe for water supply and drainage applications, supplied in standard lengths with matching fittings for complete installations.",
    specifications: [
      { label: "Material", value: "PVC / UPVC" },
      { label: "Use", value: "Pressure and drainage" },
    ],
    variants: ["20mm", "32mm", "50mm", "110mm", "160mm"],
    applications: ["Water supply", "Drainage", "MEP installations"],
    featured: true,
    keywords: ["pipe", "pvc", "upvc", "drainage", "plumbing"],
  },
  {
    name: "PPR Pipes & Fittings",
    slug: "ppr-pipes-fittings",
    category: "plumbing-pipes",
    subcategory: "pipe-fittings",
    productType: "Pipe System",
    shortDescription: "Hot and cold water pipe system with fusion fittings.",
    description:
      "PPR pipe and fitting systems for hot and cold potable water distribution, joined by heat fusion for durable, leak-resistant connections.",
    specifications: [
      { label: "Material", value: "Polypropylene random copolymer" },
      { label: "Jointing", value: "Heat fusion" },
    ],
    variants: ["20mm", "25mm", "32mm", "40mm"],
    applications: ["Potable water", "Hot water lines", "Residential plumbing"],
    keywords: ["ppr", "hot water pipe", "fittings"],
  },
  {
    name: "Brass & GI Fittings",
    slug: "brass-gi-fittings",
    category: "plumbing-pipes",
    subcategory: "pipe-fittings",
    productType: "Fitting",
    shortDescription: "Elbows, tees, sockets, nipples and adaptors in brass and GI.",
    description:
      "Threaded brass and galvanised iron fittings for connecting, branching and adapting pipe runs across plumbing and mechanical services.",
    specifications: [
      { label: "Material", value: "Brass / galvanised iron" },
      { label: "Connection", value: "Threaded" },
    ],
    variants: ['1/2"', '3/4"', '1"', '2"'],
    applications: ["Plumbing", "MEP", "Maintenance"],
    keywords: ["brass fitting", "gi fitting", "elbow", "tee", "nipple"],
  },
  {
    name: "Gate, Ball & Check Valves",
    slug: "gate-ball-check-valves",
    category: "plumbing-pipes",
    subcategory: "valves",
    productType: "Valve",
    shortDescription: "Isolation and non-return valves for water and utility lines.",
    description:
      "Gate, ball and check valves for isolating and controlling flow in water and utility lines, available in brass, bronze and cast iron bodies.",
    specifications: [
      { label: "Types", value: "Gate, ball, check" },
      { label: "Body", value: "Brass, bronze, cast iron" },
    ],
    variants: ['1/2"', '1"', '2"', '4"'],
    applications: ["Plant rooms", "Risers", "Maintenance isolation"],
    keywords: ["valve", "ball valve", "gate valve", "check valve"],
  },
  {
    name: "Faucets & Sanitary Accessories",
    slug: "faucets-sanitary-accessories",
    category: "plumbing-pipes",
    subcategory: "faucets-sanitary",
    productType: "Sanitary Ware",
    shortDescription: "Mixers, taps, showers and bathroom accessories.",
    description:
      "Faucets, mixers, shower sets and bathroom accessories for residential and commercial washrooms, selected to suit project specification and finish requirements.",
    specifications: [
      { label: "Finish", value: "Chrome and brushed options" },
      { label: "Types", value: "Basin, sink, shower" },
    ],
    variants: ["Basin Mixer", "Sink Mixer", "Shower Set", "Angle Valve"],
    applications: ["Washrooms", "Kitchens", "Hotel fit-out"],
    keywords: ["faucet", "tap", "mixer", "sanitary", "shower"],
  },

  // ------------------------------------------------------------ Hardware/tools
  {
    name: "Hand Tool Range",
    slug: "hand-tool-range",
    category: "hardware-tools",
    subcategory: "hand-tools",
    productType: "Tool",
    shortDescription: "Spanners, pliers, screwdrivers, hammers and measuring tools.",
    description:
      "A general range of hand tools for construction, electrical and maintenance work, covering cutting, gripping, fixing and measuring tasks on site.",
    specifications: [{ label: "Range", value: "Individual tools and sets" }],
    variants: ["Spanner Set", "Plier Set", "Screwdriver Set", "Measuring Tape"],
    applications: ["Site works", "Maintenance", "Workshops"],
    keywords: ["hand tools", "spanner", "plier", "screwdriver", "hammer"],
  },
  {
    name: "Power Tools & Accessories",
    slug: "power-tools-accessories",
    category: "hardware-tools",
    subcategory: "power-tools",
    productType: "Tool",
    shortDescription: "Drills, grinders, cutters and consumable accessories.",
    description:
      "Corded and cordless power tools for drilling, grinding and cutting, together with the bits, discs and blades that keep them working on site.",
    specifications: [{ label: "Supply", value: "Corded and cordless options" }],
    variants: ["Impact Drill", "Angle Grinder", "Cut-off Machine", "Drill Bits"],
    applications: ["Construction", "Fabrication", "Fit-out"],
    keywords: ["power tool", "drill", "grinder", "cutting disc"],
  },
  {
    name: "Fasteners & Fixings",
    slug: "fasteners-fixings",
    category: "hardware-tools",
    subcategory: "fasteners",
    productType: "Fastener",
    image: prodFasteners,
    shortDescription: "Bolts, nuts, screws and washers in assorted sizes.",
    description:
      "General-purpose fasteners for structural and finishing work, including bolts, nuts, self-tapping screws, washers and threaded rod in a range of sizes and finishes.",
    specifications: [
      { label: "Finish", value: "Zinc plated, galvanised, stainless" },
      { label: "Sizes", value: "Assorted metric sizes" },
    ],
    variants: ["M6", "M8", "M10", "M12", "Self-tapping screws"],
    applications: ["Construction", "Fabrication", "Maintenance"],
    featured: true,
    keywords: ["bolt", "nut", "screw", "washer", "fastener", "fixing"],
  },
  {
    name: "Anchors & Wall Plugs",
    slug: "anchors-wall-plugs",
    category: "hardware-tools",
    subcategory: "anchors",
    productType: "Fastener",
    shortDescription: "Mechanical and chemical anchors for concrete and masonry.",
    description:
      "Anchoring products for fixing into concrete, block and masonry, covering expansion anchors, sleeve anchors, chemical anchors and general wall plugs.",
    specifications: [{ label: "Types", value: "Mechanical and chemical anchors" }],
    variants: ["Wedge Anchor", "Sleeve Anchor", "Chemical Anchor", "Nylon Plug"],
    applications: ["Structural fixing", "MEP supports", "Facade fixing"],
    keywords: ["anchor", "wall plug", "chemical anchor", "fixing"],
  },
  {
    name: "Door & Builders Hardware",
    slug: "door-builders-hardware",
    category: "hardware-tools",
    subcategory: "builders-hardware",
    productType: "Ironmongery",
    shortDescription: "Hinges, locks, handles, closers and general ironmongery.",
    description:
      "Ironmongery for doors and joinery — hinges, locksets, handles, door closers and stops — for fit-out, refurbishment and maintenance requirements.",
    specifications: [{ label: "Finish", value: "Stainless, chrome and powder-coated" }],
    variants: ["Hinges", "Cylinder Lock", "Lever Handle", "Door Closer"],
    applications: ["Fit-out", "Refurbishment", "Facility maintenance"],
    keywords: ["hinge", "lock", "handle", "door closer", "ironmongery"],
  },

  // ------------------------------------------------------- Construction materials
  {
    name: "Cement & Aggregates",
    slug: "cement-aggregates",
    category: "construction-materials",
    subcategory: "cement-aggregates",
    productType: "Construction Material",
    shortDescription: "Cement, sand, aggregates and ready-mix products.",
    description:
      "Cement and aggregate supply for concrete, masonry and screed works, arranged to suit programme quantities and site delivery requirements.",
    specifications: [{ label: "Supply", value: "Bagged and bulk options" }],
    variants: ["OPC Cement", "White Cement", "Sand", "Aggregate"],
    applications: ["Concrete works", "Masonry", "Screeding"],
    keywords: ["cement", "sand", "aggregate", "concrete"],
  },
  {
    name: "Steel Rebar & Sections",
    slug: "steel-rebar-sections",
    category: "construction-materials",
    subcategory: "steel-metal",
    productType: "Steel Product",
    shortDescription: "Reinforcement bar, mesh, angles, channels and sheets.",
    description:
      "Steel products for structural and fabrication work, including reinforcement bar and mesh alongside angles, channels, hollow sections and sheets.",
    specifications: [{ label: "Forms", value: "Bar, mesh, sections, sheet" }],
    variants: ["8mm Rebar", "12mm Rebar", "16mm Rebar", "Mesh Sheet"],
    applications: ["Structural works", "Fabrication", "Formwork support"],
    keywords: ["steel", "rebar", "reinforcement", "mesh", "angle"],
  },
  {
    name: "Gypsum Boards & Profiles",
    slug: "gypsum-boards-profiles",
    category: "construction-materials",
    subcategory: "gypsum-boards",
    productType: "Board",
    shortDescription: "Plasterboard, ceiling tiles and metal framing profiles.",
    description:
      "Gypsum board systems for partitions and ceilings, supplied with metal studs, tracks, ceiling profiles and jointing accessories.",
    specifications: [
      { label: "Board Types", value: "Standard, moisture and fire resistant" },
    ],
    variants: ["12.5mm Board", "Moisture Resistant", "Ceiling Tile", "Stud & Track"],
    applications: ["Partitions", "Ceilings", "Interior fit-out"],
    keywords: ["gypsum", "plasterboard", "ceiling", "partition", "stud"],
  },
  {
    name: "Waterproofing Materials",
    slug: "waterproofing-materials",
    category: "construction-materials",
    subcategory: "waterproofing",
    productType: "Protective Material",
    shortDescription: "Membranes, liquid coatings and protection boards.",
    description:
      "Waterproofing systems for roofs, wet areas, basements and podiums, covering bituminous membranes, liquid-applied coatings and associated protection layers.",
    specifications: [{ label: "Systems", value: "Membrane and liquid applied" }],
    variants: ["Bitumen Membrane", "Liquid Coating", "Protection Board"],
    applications: ["Roofs", "Basements", "Wet areas"],
    keywords: ["waterproofing", "membrane", "bitumen", "coating"],
  },
  {
    name: "Adhesives & Sealants",
    slug: "adhesives-sealants",
    category: "construction-materials",
    subcategory: "adhesives-sealants",
    productType: "Chemical",
    shortDescription: "Silicone, PU sealants, tile adhesives and foams.",
    description:
      "Sealing and bonding products for construction and fit-out, including silicone and polyurethane sealants, tile adhesives, grouts and expanding foams.",
    specifications: [{ label: "Types", value: "Silicone, PU, cementitious" }],
    variants: ["Silicone Sealant", "PU Sealant", "Tile Adhesive", "PU Foam"],
    applications: ["Joint sealing", "Tiling", "Glazing", "Fit-out"],
    keywords: ["silicone", "sealant", "adhesive", "grout", "foam"],
  },
  {
    name: "Paints & Protective Coatings",
    slug: "paints-protective-coatings",
    category: "construction-materials",
    subcategory: "paints-coatings",
    productType: "Coating",
    shortDescription: "Interior, exterior and protective coating systems.",
    description:
      "Decorative and protective coatings for interior and exterior surfaces, including primers, emulsions, enamels and coatings for steel and concrete substrates.",
    specifications: [{ label: "Systems", value: "Primer, undercoat, finish" }],
    variants: ["Emulsion", "Enamel", "Primer", "Epoxy Coating"],
    applications: ["Interior finishing", "Facades", "Steel protection"],
    keywords: ["paint", "coating", "primer", "emulsion", "epoxy"],
  },

  // -------------------------------------------------------------------- Safety
  {
    name: "Safety Helmets",
    slug: "safety-helmets",
    category: "safety-products",
    subcategory: "head-face",
    productType: "PPE",
    shortDescription: "Industrial head protection with adjustable harness.",
    description:
      "Industrial safety helmets with adjustable harness and optional chin strap, available in multiple colours for role identification on site.",
    specifications: [{ label: "Adjustment", value: "Ratchet or slip harness" }],
    variants: ["White", "Yellow", "Blue", "Red"],
    applications: ["Construction sites", "Industrial plants", "Site visitors"],
    keywords: ["helmet", "hard hat", "ppe", "head protection"],
  },
  {
    name: "Safety Goggles & Face Shields",
    slug: "safety-goggles-face-shields",
    category: "safety-products",
    subcategory: "head-face",
    productType: "PPE",
    shortDescription: "Eye and face protection for cutting, grinding and chemicals.",
    description:
      "Eye and face protection for grinding, cutting, drilling and chemical handling, including clear and tinted lenses and full face shields.",
    specifications: [{ label: "Lens", value: "Clear and tinted options" }],
    variants: ["Clear Spectacles", "Tinted Spectacles", "Goggles", "Face Shield"],
    applications: ["Cutting and grinding", "Chemical handling", "General site"],
    keywords: ["goggles", "safety glasses", "face shield", "eye protection"],
  },
  {
    name: "Safety Gloves",
    slug: "safety-gloves",
    category: "safety-products",
    subcategory: "hand-body",
    productType: "PPE",
    shortDescription: "Cotton, coated, cut-resistant and chemical gloves.",
    description:
      "Hand protection for a range of site tasks, from general handling gloves to cut-resistant and chemical-resistant options.",
    specifications: [{ label: "Types", value: "General, cut and chemical resistant" }],
    variants: ["Cotton", "Nitrile Coated", "Cut Resistant", "Chemical"],
    applications: ["Material handling", "Fabrication", "Cleaning"],
    keywords: ["gloves", "hand protection", "ppe"],
  },
  {
    name: "High Visibility Clothing",
    slug: "high-visibility-clothing",
    category: "safety-products",
    subcategory: "hand-body",
    productType: "PPE",
    shortDescription: "Reflective vests, coveralls and workwear.",
    description:
      "High-visibility vests, coveralls and workwear with reflective banding to keep site personnel visible in busy and low-light working areas.",
    specifications: [{ label: "Sizes", value: "S to XXL" }],
    variants: ["Vest", "Coverall", "Jacket"],
    applications: ["Construction sites", "Logistics yards", "Road works"],
    keywords: ["hi vis", "vest", "coverall", "workwear"],
  },
  {
    name: "Safety Harness & Lanyards",
    slug: "safety-harness-lanyards",
    category: "safety-products",
    subcategory: "fall-protection",
    productType: "PPE",
    shortDescription: "Full-body harnesses and lanyards for work at height.",
    description:
      "Full-body safety harnesses with shock-absorbing lanyards and connectors for work at height on scaffolds, roofs and elevated platforms.",
    specifications: [{ label: "Type", value: "Full body harness" }],
    variants: ["Single Lanyard", "Double Lanyard", "Shock Absorbing"],
    applications: ["Work at height", "Scaffolding", "Roof works"],
    keywords: ["harness", "lanyard", "fall protection", "height safety"],
  },
  {
    name: "Site Safety Equipment",
    slug: "site-safety-equipment",
    category: "safety-products",
    subcategory: "site-safety",
    productType: "Site Safety",
    shortDescription: "Cones, barriers, signage and warning tape.",
    description:
      "Traffic and site management products including cones, barriers, warning tape, safety signage and first aid provisions for organised, compliant sites.",
    specifications: [{ label: "Range", value: "Signage, barriers, consumables" }],
    variants: ["Traffic Cone", "Safety Barrier", "Warning Tape", "Safety Signage"],
    applications: ["Site management", "Traffic control", "Temporary works"],
    keywords: ["cone", "barrier", "signage", "warning tape", "site safety"],
  },
];

const categoryBySlug = new Map(productCategories.map((c) => [c.slug, c]));

export const products: Product[] = drafts.map((d, i) => {
  const category = categoryBySlug.get(d.category)!;
  const subcategory = category.subcategories.find((s) => s.slug === d.subcategory)!;
  const image = d.image ?? category.image;

  return {
    id: `p-${String(i + 1).padStart(3, "0")}`,
    name: d.name,
    slug: d.slug,
    category: d.category,
    categorySlug: d.category,
    categoryName: category.name,
    subcategory: d.subcategory,
    subcategoryName: subcategory.name,
    productType: d.productType,
    brand: null,
    brands: [],
    image,
    gallery: [image],
    shortDescription: d.shortDescription,
    description: d.description,
    specifications: d.specifications ?? [],
    variants: d.variants ?? [],
    applications: d.applications ?? [],
    featured: d.featured ?? false,
    keywords: d.keywords ?? [],
  };
});

/* ------------------------------------------------------------------ helpers */

export const getCategory = (slug: string) => categoryBySlug.get(slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const getProduct = (categorySlug: string, productSlug: string) =>
  products.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);

export const featuredProducts = products.filter((p) => p.featured);

export const productCount = (slug: string) =>
  products.filter((p) => p.categorySlug === slug).length;

export const productPath = (p: Pick<Product, "categorySlug" | "slug">) =>
  `/products/${p.categorySlug}/${p.slug}`;

/** Related products from the same category, excluding the current product. */
export const relatedProducts = (p: Product, limit = 4) =>
  products
    .filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id)
    .slice(0, limit);

/** Free-text search across name, category, subcategory, type and keywords. */
export function searchProducts(query: string, list: Product[] = products) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  const terms = q.split(/\s+/);
  return list.filter((p) => {
    const haystack = [
      p.name,
      p.categoryName,
      p.subcategoryName,
      p.productType,
      p.shortDescription,
      p.description,
      ...p.variants,
      ...p.applications,
      ...p.keywords,
      ...p.specifications.map((s) => `${s.label} ${s.value}`),
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}
