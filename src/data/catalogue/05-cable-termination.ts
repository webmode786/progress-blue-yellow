import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "05",
  name: "Cable Termination",
  slug: "cable-termination",
  shortDescription:
    "Cable lugs, ferrules and glands for safe, maintainable termination and mechanical cable entry.",
  description:
    "Skyline supplies a full range of cable termination products including bimetallic, copper and insulated cable lugs, copper ferrules and metallic and non-metallic cable glands. These products provide safe, secure and maintainable connections for power and control cables across industrial and infrastructure projects.",
  subcategories: [
    {
      name: "Cable Lugs & Ferrules",
      slug: "cable-lugs-ferrules",
      description:
        "Bimetallic, copper, insulated and pin type cable lugs plus copper ferrules for terminating cables to electrical devices, panels and machinery.",
    },
    {
      name: "Cable Glands",
      slug: "cable-glands",
      description:
        "Metallic and non-metallic cable glands for mechanical cable entry into enclosures, panels and equipment.",
    },
  ],
  products: [
    {
      name: "Bimetallic Cable Lugs",
      slug: "bimetallic-cable-lugs",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Bimetallic lugs for safe termination of aluminium and copper conductors.",
      description:
        "Bimetallic cable lugs securely connect or terminate cables to electrical devices, power or control panels, junction boxes and machinery, allowing safe transition between aluminium and copper conductors. Termination and removal for maintenance or repair is simple, making lugs broadly preferred over direct fastening methods.",
      applications: [
        "Power and control panel terminations",
        "Junction boxes",
        "Joining power cables together",
      ],
      keywords: ["bimetallic cable lug", "cable terminal", "Braco", "Cabtek", "Duconnect", "Bicon"],
      featured: true,
    },
    {
      name: "Copper Cable Lugs",
      slug: "copper-cable-lugs",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Copper cable lugs for secure termination of copper conductors.",
      description:
        "Copper cable lugs securely connect or terminate cables to electrical devices, power or control panels, junction boxes, equipment and machinery. They are among the safest and most common methods of cable termination, allowing simple removal for maintenance or repair.",
      applications: ["Power and control panel terminations", "Equipment and machinery wiring"],
      keywords: ["copper cable lug", "cable terminal", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "Insulated Cable Lugs — Blade Type",
      slug: "insulated-cable-lugs-blade-type",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Insulated blade type lugs for quick-connect cable terminations.",
      description:
        "Insulated blade type cable lugs provide safe, quick-connect termination of cables to electrical devices, panels, junction boxes and machinery, with insulation for added protection against accidental contact.",
      keywords: ["insulated cable lug", "blade type lug", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "Insulated Cable Lugs — Pin Type",
      slug: "insulated-cable-lugs-pin-type",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Insulated pin type lugs for terminal block connections.",
      description:
        "Insulated pin type cable lugs terminate stranded cables into terminal blocks and connectors, providing a secure and maintainable connection with insulation for protection against accidental contact.",
      keywords: ["insulated cable lug", "pin type lug", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "Insulated Cable Lugs — Fork Type",
      slug: "insulated-cable-lugs-fork-type",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Insulated fork type lugs for easy screw-terminal connections.",
      description:
        "Insulated fork type cable lugs allow cables to be connected to screw terminals without fully removing the screw, simplifying installation and maintenance while remaining insulated for safety.",
      keywords: ["insulated cable lug", "fork type lug", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "Insulated Cable Lugs — Ring Type",
      slug: "insulated-cable-lugs-ring-type",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Insulated ring type lugs for secure, vibration-resistant terminations.",
      description:
        "Insulated ring type cable lugs form a fully enclosed connection around the terminal screw or stud, providing a secure and vibration-resistant termination for cables to electrical devices and panels.",
      keywords: ["insulated cable lug", "ring type lug", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "Pin Type Cable Lugs & Copper Ferrules",
      slug: "pin-type-cable-lugs-copper-ferrules",
      subcategory: "cable-lugs-ferrules",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      shortDescription: "Pin type cable lugs and copper ferrules for stranded conductor termination.",
      description:
        "Pin type cable lugs and copper ferrules terminate stranded copper conductors for connection into terminal blocks, connectors or equipment, providing a safe and maintainable termination method.",
      keywords: ["copper ferrule", "pin type cable lug", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "BW Cable Glands",
      slug: "bw-cable-glands",
      subcategory: "cable-glands",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      material: "Brass",
      shortDescription: "Brass BW cable glands for mechanical cable entry into enclosures.",
      description:
        "BW cable glands are mechanical cable entry devices constructed from brass, used across industries with cable and wiring for electrical, instrumentation and automation systems.",
      keywords: ["BW cable gland", "brass cable gland", "Braco", "Cabtek", "Duconnect", "Bicon"],
      featured: true,
    },
    {
      name: "CW Cable Glands",
      slug: "cw-cable-glands",
      subcategory: "cable-glands",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      material: "Brass",
      shortDescription: "Brass CW cable glands for armoured cable entry.",
      description:
        "CW cable glands are mechanical cable entry devices constructed from brass, suited to armoured cables and used across industries requiring reliable electrical, instrumentation and automation wiring entry.",
      keywords: ["CW cable gland", "brass cable gland", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "E1W Cable Glands",
      slug: "e1w-cable-glands",
      subcategory: "cable-glands",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      material: "Brass",
      shortDescription: "Brass E1W cable glands for single-wire armoured cable entry.",
      description:
        "E1W cable glands are brass mechanical cable entry devices used across industries with cable and wiring for electrical, instrumentation and automation systems.",
      keywords: ["E1W cable gland", "brass cable gland", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "A1/A2 Cable Glands",
      slug: "a1-a2-cable-glands",
      subcategory: "cable-glands",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      material: "Brass",
      shortDescription: "Brass A1/A2 cable glands for unarmoured cable entry.",
      description:
        "A1/A2 cable glands are brass mechanical cable entry devices used across industries with cable and wiring for electrical, instrumentation and automation systems.",
      keywords: ["A1 cable gland", "A2 cable gland", "brass cable gland", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "Metallic Cable Glands — Nickel-Plated Brass",
      slug: "nickel-plated-brass-cable-glands",
      subcategory: "cable-glands",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      material: "Nickel-plated brass",
      shortDescription: "Nickel-plated brass cable glands for corrosion-resistant cable entry.",
      description:
        "Nickel-plated brass cable glands provide mechanical cable entry with added corrosion resistance, used across industries with cable and wiring for electrical, instrumentation and automation systems.",
      keywords: ["nickel plated cable gland", "metallic cable gland", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
    {
      name: "PVC Cable Glands — Nylon",
      slug: "pvc-nylon-cable-glands",
      subcategory: "cable-glands",
      brands: ["Braco / Cabtek", "Duconnect", "Bicon"],
      material: "Nylon",
      shortDescription: "Non-metallic nylon cable glands for lightweight cable entry applications.",
      description:
        "Nylon cable glands are non-metallic mechanical cable entry devices used across industries with cable and wiring for electrical, instrumentation and automation systems.",
      keywords: ["nylon cable gland", "PVC cable gland", "Braco", "Cabtek", "Duconnect", "Bicon"],
    },
  ],
};
