import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "07",
  name: "Conduit, Pipes & Wiring Accessories",
  slug: "conduit-pipes-wiring-accessories",
  shortDescription:
    "PVC and GI conduit systems with matching fittings, plus switches and sockets from leading manufacturers.",
  description:
    "Skyline's conduit and wiring accessories range covers electrical PVC pipes and accessories, GI flexible and rigid pipes and fittings, and a full line of electrical switches and accessories, extending to GI conduit pipes and fittings, PVC flexible conduit, bending springs, conduit boxes, covers, fixings and wiring accessories and grid plates for complete final wiring installations.",
  subcategories: [
    {
      name: "Electrical PVC Pipes & Accessories",
      slug: "electrical-pvc-pipes-accessories",
      description:
        "Rigid and flexible PVC electrical conduit used to protect and route electrical wiring in buildings and structures.",
    },
    {
      name: "GI Flexible & Rigid Pipes & Accessories",
      slug: "gi-flexible-rigid-pipes-accessories",
      description:
        "Galvanized steel flexible and rigid conduit pipes and matching fittings for exposed or vulnerable cable routing.",
    },
    {
      name: "Electrical Switches & Accessories",
      slug: "electrical-switches-accessories",
      description:
        "Switches, sockets, outlets, grid frames and plates for final wiring, available in a range of colours and finishes.",
    },
    {
      name: "GI Conduit Fittings & Accessories",
      slug: "gi-conduit-fittings-accessories",
      description:
        "Bends, couplers, boxes, saddles and bushes for GI conduit systems.",
    },
    {
      name: "PVC Conduit Boxes, Covers & Fixings",
      slug: "pvc-conduit-boxes-covers-fixings",
      description:
        "Boxes, loop-in boxes, covers, grommets and fixings for PVC conduit installations.",
    },
  ],
  products: [
    {
      name: "Electrical PVC Conduit Pipe",
      slug: "electrical-pvc-conduit-pipe",
      subcategory: "electrical-pvc-pipes-accessories",
      brands: ["Decoduct", "Multiplast"],
      shortDescription: "Rigid and flexible PVC conduit for protecting and routing electrical wiring.",
      description:
        "An electrical conduit is a tube used to protect and route electrical wiring in a building or structure. Most conduits are rigid, but flexible conduit is used for some purposes, offering a cost-effective, corrosion-resistant alternative to metallic systems.",
      material: "PVC",
      keywords: ["PVC conduit", "electrical conduit pipe", "Decoduct", "Multiplast"],
      featured: true,
    },
    {
      name: "GI Conduit Pipe",
      slug: "gi-conduit-pipe",
      subcategory: "gi-flexible-rigid-pipes-accessories",
      brands: ["Barton", "Kopex", "Burn", "Maruichi"],
      shortDescription: "Galvanized steel conduit pipes for surface and concealed wiring.",
      description:
        "GI conduit pipes are used to secure and route electrical cables or wires in infrastructure or buildings. Conduits are needed where cables are exposed or where they can be damaged, and are installed with well-suited fittings made of the same material.",
      material: "Galvanized steel",
      sizes: ["20 mm", "25 mm", "40 mm"],
      keywords: ["GI conduit pipe", "galvanized conduit", "Barton", "Kopex", "Burn", "Maruichi"],
      featured: true,
    },
    {
      name: "EMT Conduit Pipe",
      slug: "emt-conduit-pipe",
      subcategory: "gi-flexible-rigid-pipes-accessories",
      brands: ["Barton", "Kopex", "Burn", "Maruichi"],
      shortDescription: "EMT conduit pipe for surface-mounted cable routing and protection.",
      description:
        "EMT conduit pipe is used to secure and route electrical cables or wires in infrastructure or buildings, installed with well-suited fittings such as two-hole clamps of the same material.",
      material: "Steel",
      sizes: ["3/4 in"],
      keywords: ["EMT conduit", "conduit pipe", "Barton", "Kopex", "Burn", "Maruichi"],
    },
    {
      name: "GI Flexible Conduit",
      slug: "gi-flexible-conduit",
      subcategory: "gi-flexible-rigid-pipes-accessories",
      brands: ["Barton", "Kopex", "Burn", "Maruichi"],
      shortDescription: "Flexible galvanized steel conduit for routing cables around obstructions.",
      description:
        "GI flexible conduit is used to secure and route electrical cables or wires around bends and obstructions in infrastructure or buildings, providing mechanical protection where rigid conduit cannot be used.",
      material: "Galvanized steel",
      keywords: ["GI flexible conduit", "flexible conduit pipe", "Barton", "Kopex", "Burn", "Maruichi"],
    },
    {
      name: "Conduit Bend",
      slug: "conduit-bend",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI conduit bends for changing direction of conduit runs.",
      description:
        "Conduit bends allow GI conduit pipe runs to change direction while protecting the enclosed cables, available in a range of sizes to match the conduit system.",
      material: "Galvanized steel",
      sizes: ["20 mm", "25 mm", "32 mm", "50 mm"],
      keywords: ["conduit bend", "GI bend", "conduit fitting"],
    },
    {
      name: "GI Elbow",
      slug: "gi-elbow",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI elbow fitting for 90-degree conduit direction changes.",
      description:
        "The GI elbow fitting allows a GI conduit run to change direction, protecting enclosed cables at bends in the installation.",
      material: "Galvanized steel",
      sizes: ["20 mm"],
      keywords: ["GI elbow", "conduit elbow", "conduit fitting"],
    },
    {
      name: "GI Adaptor",
      slug: "gi-adaptor",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI adaptors for connecting conduit sections and fittings.",
      description:
        "GI adaptors connect sections of GI conduit or link conduit to boxes and enclosures, available in a range of sizes to suit different conduit diameters.",
      material: "Galvanized steel",
      sizes: ["16 mm", "20 mm", "25 mm", "32 mm", "40 mm", "50 mm"],
      keywords: ["GI adaptor", "conduit adaptor", "conduit fitting"],
    },
    {
      name: "Brass Adaptor",
      slug: "brass-adaptor",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Brass adaptor for corrosion-resistant conduit connections.",
      description:
        "The brass adaptor connects sections of conduit or links conduit to boxes and enclosures, providing a corrosion-resistant connection point.",
      material: "Brass",
      sizes: ["32 mm"],
      keywords: ["brass adaptor", "conduit adaptor", "conduit fitting"],
    },
    {
      name: "Mechanical Swivel Adaptor, Nickel",
      slug: "mechanical-swivel-adaptor-nickel",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Nickel-finished swivel adaptor allowing angled conduit connections.",
      description:
        "The mechanical swivel adaptor, nickel finish, allows angled connections between conduit sections and enclosures, useful where a fixed adaptor cannot accommodate the required approach angle.",
      material: "Nickel-plated",
      sizes: ["16 mm"],
      keywords: ["swivel adaptor", "mechanical adaptor", "conduit fitting"],
    },
    {
      name: "GI Coupler",
      slug: "gi-coupler",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI couplers for joining lengths of conduit pipe.",
      description:
        "GI couplers join two lengths of GI conduit pipe together, maintaining mechanical protection and continuity of the conduit run.",
      material: "Galvanized steel",
      sizes: ["20 mm", "50 mm"],
      keywords: ["GI coupler", "conduit coupler", "conduit fitting"],
    },
    {
      name: "GI Circular Box",
      slug: "gi-circular-box",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI circular boxes for conduit junctions and wiring branch points.",
      description:
        "GI circular boxes provide junction points within a GI conduit system for branching or terminating cable runs, available in U-way and Y-way configurations.",
      material: "Galvanized steel",
      sizes: ["20 mm U-Way", "25 mm Y-Way"],
      keywords: ["GI circular box", "conduit junction box", "conduit fitting"],
    },
    {
      name: "GI Covers",
      slug: "gi-covers",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI covers, domes, round covers and lids for conduit boxes.",
      description:
        "GI covers close and protect GI conduit boxes and fittings, available as dome covers, round covers, round lids and larger GI covers to suit different box sizes.",
      material: "Galvanized steel",
      sizes: ["20 mm Dome", "Round Cover", "Round Lid", "150 mm"],
      keywords: ["GI cover", "conduit box cover", "conduit fitting"],
    },
    {
      name: "GI Saddle",
      slug: "gi-saddle",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI saddles for securing conduit pipe runs to structures.",
      description:
        "GI saddles secure and fix conduit pipe runs to walls, ceilings or structural steelwork, available in a range of sizes to match the conduit diameter.",
      material: "Galvanized steel",
      sizes: ["20 mm", "25 mm", "32 mm", "40 mm"],
      keywords: ["GI saddle", "conduit saddle", "conduit fitting"],
    },
    {
      name: "Lock Nut / Check Nut",
      slug: "lock-nut-check-nut",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Lock nuts and check nuts for securing conduit fittings to enclosures.",
      description:
        "Lock nuts and check nuts secure conduit adaptors, bushes and fittings to boxes and enclosures, ensuring a firm mechanical connection within the conduit system.",
      sizes: ["20 mm", "50 mm", "M50"],
      keywords: ["lock nut", "check nut", "conduit fitting"],
    },
    {
      name: "GI Tee",
      slug: "gi-tee",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI tee fitting for branching conduit runs in three directions.",
      description:
        "The GI tee fitting allows a GI conduit run to branch in three directions, maintaining mechanical protection at junction points in the system.",
      material: "Galvanized steel",
      sizes: ["50 mm"],
      keywords: ["GI tee", "conduit tee", "conduit fitting"],
    },
    {
      name: "Reducer Bush",
      slug: "reducer-bush",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Reducer bush for connecting conduit sections of different diameters.",
      description:
        "The reducer bush connects conduit sections or fittings of different diameters, allowing a smooth transition within the conduit system.",
      sizes: ["32 x 25 mm"],
      keywords: ["reducer bush", "conduit fitting"],
    },
    {
      name: "Brass Bush",
      slug: "brass-bush",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Brass bush for protecting cable insulation at conduit box entries.",
      description:
        "The brass bush protects cable insulation as cables pass through conduit fitting or box entries, available in a range of sizes to suit different conduit diameters.",
      material: "Brass",
      sizes: ["20 mm", "25 mm", "40 mm", "50 mm", "M50"],
      keywords: ["brass bush", "conduit bush", "conduit fitting"],
    },
    {
      name: "EMT Two-Hole Clamp",
      slug: "emt-two-hole-clamp",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Two-hole clamp for securing EMT conduit to surfaces.",
      description:
        "The EMT two-hole clamp secures EMT conduit pipe to walls, ceilings or structural surfaces, providing a firm fixing point along the conduit run.",
      sizes: ["3/4 in"],
      keywords: ["EMT clamp", "two-hole clamp", "conduit fitting"],
    },
    {
      name: "R-Clamp",
      slug: "r-clamp",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "R-clamp for securing conduit or pipework to structures.",
      description:
        "The R-clamp secures conduit or pipework to walls, ceilings or structural surfaces, supplied as per sample to match project requirements.",
      sizes: ["As per sample"],
      keywords: ["R-clamp", "pipe clamp", "conduit fitting"],
    },
    {
      name: "GI Junction Box",
      slug: "gi-junction-box",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "GI junction box for cable branching and termination within conduit systems.",
      description:
        "The GI junction box provides a branching and termination point within a GI conduit system, protecting cable connections and joints.",
      material: "Galvanized steel",
      sizes: ["150 x 150 x 75 mm"],
      keywords: ["GI junction box", "conduit junction box", "conduit fitting"],
    },
    {
      name: "Band-It Strap, Carbon Steel",
      slug: "band-it-strap-carbon-steel",
      subcategory: "gi-conduit-fittings-accessories",
      shortDescription: "Carbon steel banding strap for securing conduit and cable installations.",
      description:
        "The Band-It strap, carbon steel, secures conduit, cable trays and other fittings in place, supplied in coil lengths for cutting to size on site.",
      material: "Carbon steel",
      sizes: ["12 mm x 10 mtr"],
      keywords: ["Band-It strap", "banding strap", "carbon steel strap"],
    },
    {
      name: "PVC Flexible Pipe",
      slug: "pvc-flexible-pipe",
      subcategory: "electrical-pvc-pipes-accessories",
      shortDescription: "Flexible PVC pipe for routing cables around bends and obstructions.",
      description:
        "PVC flexible pipe routes electrical cables around bends and obstructions where rigid conduit cannot be used, offering a corrosion-resistant, lightweight alternative to metallic conduit.",
      material: "PVC",
      sizes: ["AD 25 mm", "AD 40 mm"],
      keywords: ["PVC flexible pipe", "flexible conduit", "PVC conduit"],
    },
    {
      name: "Bending Spring",
      slug: "bending-spring",
      subcategory: "electrical-pvc-pipes-accessories",
      shortDescription: "Bending springs for forming bends in flexible conduit without kinking.",
      description:
        "Bending springs are inserted into flexible conduit to allow bends to be formed on site without kinking or collapsing the pipe wall.",
      sizes: ["20 mm", "25 mm", "32 mm"],
      keywords: ["bending spring", "conduit bending spring", "PVC conduit accessory"],
    },
    {
      name: "PVC Box",
      slug: "pvc-box",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "PVC boxes for switch, socket and conduit installations.",
      description:
        "PVC boxes house switches, sockets or conduit connections within a wiring installation, available in standard sizes to suit common wiring accessories.",
      material: "PVC",
      sizes: ["HT-8", "30 x 30"],
      keywords: ["PVC box", "conduit box", "electrical box"],
    },
    {
      name: "PVC Junction Box",
      slug: "pvc-junction-box",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "PVC junction box for cable branching and termination points.",
      description:
        "The PVC junction box provides a branching and termination point within a PVC conduit system, protecting cable connections and joints.",
      material: "PVC",
      sizes: ["200 x 150 x 150 mm"],
      keywords: ["PVC junction box", "conduit junction box"],
    },
    {
      name: "Loop-In Box",
      slug: "loop-in-box",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "Loop-in boxes for looping cable connections within conduit runs.",
      description:
        "The loop-in box allows cables to be looped and connected within a conduit run, simplifying wiring and future maintenance access.",
      sizes: ["20 mm", "25 mm"],
      keywords: ["loop-in box", "conduit box", "PVC conduit accessory"],
    },
    {
      name: "Weatherproof Cover",
      slug: "weatherproof-cover",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "Weatherproof covers protecting switches and sockets from the elements.",
      description:
        "Weatherproof covers protect switches, sockets and outlets from moisture and dust in outdoor or exposed installations.",
      sizes: ["3 x 3 clear", "3 x 6"],
      keywords: ["weatherproof cover", "IP cover", "switch cover"],
    },
    {
      name: "PVC Connector",
      slug: "pvc-connector",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "PVC connector for joining conduit sections and boxes.",
      description:
        "The PVC connector joins PVC conduit sections to each other or to boxes and enclosures, maintaining a continuous protective run for the enclosed cables.",
      material: "PVC",
      sizes: ["30 mm"],
      keywords: ["PVC connector", "conduit connector"],
    },
    {
      name: "PVC Clip",
      slug: "pvc-clip",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "PVC clips for securing conduit pipe to surfaces.",
      description:
        "PVC clips fix conduit pipe to walls, ceilings or structural surfaces along the length of a wiring installation.",
      material: "PVC",
      sizes: ["1 in"],
      keywords: ["PVC clip", "conduit clip"],
    },
    {
      name: "Grommet",
      slug: "grommet",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "Grommets for protecting cables passing through box or panel openings.",
      description:
        "Grommets protect cable insulation where cables pass through openings in boxes or panels, available as hollow type or open profile grommets.",
      sizes: ["1/2 in hollow type", "20 mm open"],
      keywords: ["grommet", "cable grommet", "conduit accessory"],
    },
    {
      name: "Expansion Coupler D.D",
      slug: "expansion-coupler-dd",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "Expansion coupler accommodating thermal movement in conduit runs.",
      description:
        "The expansion coupler D.D allows for thermal expansion and contraction within long conduit runs, preventing stress on the conduit system.",
      sizes: ["25 mm", "50 mm"],
      keywords: ["expansion coupler", "conduit coupler", "PVC conduit accessory"],
    },
    {
      name: "End Cap",
      slug: "end-cap",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "End caps sealing the ends of conduit boxes and pipes.",
      description:
        "End caps seal the open ends of conduit boxes or pipes, available in PVC and UPVC to suit different box and conduit sizes.",
      sizes: ["100 x 100 PVC", "32 mm UPVC"],
      keywords: ["end cap", "conduit end cap", "PVC end cap"],
    },
    {
      name: "Threaded Plug",
      slug: "threaded-plug",
      subcategory: "pvc-conduit-boxes-covers-fixings",
      shortDescription: "Threaded plug for sealing unused conduit or box entries.",
      description:
        "The threaded plug seals unused threaded entries in conduit boxes or enclosures, maintaining the ingress protection rating of the installation.",
      sizes: ["M-25"],
      keywords: ["threaded plug", "conduit plug", "blanking plug"],
    },
    {
      name: "Cooker Switch",
      slug: "cooker-switch",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      shortDescription: "45A cooker switch for water heater and cooker circuit control.",
      description:
        "The cooker switch is rated at 45 Amp and used for water heater and cooker circuit control, available in a range of colours and finishes from leading brands.",
      sizes: ["45 Amp"],
      keywords: ["cooker switch", "45 amp switch", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
    {
      name: "Outlet Switch",
      slug: "outlet-switch",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      shortDescription: "45A outlet switch for fixed appliance circuit control.",
      description:
        "The outlet switch is rated at 45 Amp for fixed appliance circuit control, available in a range of colours and finishes from leading brands.",
      sizes: ["45 Amp"],
      keywords: ["outlet switch", "45 amp switch", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
    {
      name: "Flex Outlet",
      slug: "flex-outlet",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      shortDescription: "25A single-gang flex outlet for appliance flex connections.",
      description:
        "The flex outlet, rated at 25 Amp, 1 gang, connects appliance flex leads to a fixed wiring installation, available in a range of colours and finishes from leading brands.",
      sizes: ["25 Amp, 1 gang"],
      keywords: ["flex outlet", "25 amp outlet", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
    {
      name: "Double-Pole Surface Switch",
      slug: "double-pole-surface-switch",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      productCode: "ESM31DR45N",
      shortDescription: "Double-pole surface-mounted switch for fixed circuit isolation.",
      description:
        "The double-pole surface switch, model ESM31DR45N, provides surface-mounted double-pole isolation for fixed electrical circuits.",
      keywords: ["double pole switch", "surface switch", "ESM31DR45N", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
    {
      name: "Grid Mounting Frame",
      slug: "grid-mounting-frame",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      shortDescription: "Grid mounting frame for assembling modular switch and socket layouts.",
      description:
        "The grid mounting frame holds modular switch and socket modules within a single wiring plate, supporting flexible final wiring layouts.",
      sizes: ["2G 4M"],
      keywords: ["grid mounting frame", "grid plate", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
    {
      name: "Module Switch Plate",
      slug: "module-switch-plate",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      shortDescription: "6-gang module switch plate for grouped switch installations.",
      description:
        "The module switch plate, 6 gang, groups multiple switch modules onto a single plate, available in a range of colours and finishes from leading brands.",
      sizes: ["6 gang"],
      keywords: ["module switch plate", "switch plate", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
    {
      name: "Plate Assembly, Moulded",
      slug: "plate-assembly-moulded",
      subcategory: "electrical-switches-accessories",
      brands: ["Eaton"],
      shortDescription: "6-gang moulded plate assembly for wiring accessory installations.",
      description:
        "The moulded plate assembly, 6G, by Eaton, provides a durable moulded finish for grouped wiring accessory installations.",
      sizes: ["6G"],
      keywords: ["plate assembly", "moulded plate", "Eaton"],
    },
    {
      name: "Blank Plate, Aluminium Silver",
      slug: "blank-plate-aluminium-silver",
      subcategory: "electrical-switches-accessories",
      brands: ["Pieno"],
      shortDescription: "Aluminium silver blank plate for unused wiring accessory positions.",
      description:
        "The aluminium silver blank plate, by Pieno, covers unused positions in a wiring accessory installation, maintaining a consistent finish.",
      colour: "Aluminium silver",
      sizes: ["3 x 3"],
      keywords: ["blank plate", "aluminium plate", "Pieno"],
    },
    {
      name: "Metal-Clad Box",
      slug: "metal-clad-box",
      subcategory: "electrical-switches-accessories",
      shortDescription: "GI metal-clad box for surface-mounted switch and socket installations.",
      description:
        "The metal-clad box, in GI, houses switches or sockets for surface-mounted wiring installations requiring additional mechanical protection.",
      material: "Galvanized steel",
      sizes: ["3 x 3"],
      keywords: ["metal clad box", "GI box", "electrical box"],
    },
    {
      name: "Shaver Socket",
      slug: "shaver-socket",
      subcategory: "electrical-switches-accessories",
      brands: ["MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
      shortDescription: "Dual-voltage shaver socket for bathroom and washroom installations.",
      description:
        "The shaver socket, sized 3 x 3 in and rated 200-250 V, provides a dedicated low-power outlet suited to bathroom and washroom installations.",
      sizes: ["3 x 3 in, 200-250 V"],
      keywords: ["shaver socket", "bathroom socket", "MK", "Volex", "R.R. Kabel", "Tenby", "Schneider"],
    },
  ],
};
