import type { CategoryInput } from "./types";

export const category: CategoryInput = {
  number: "06",
  name: "Industrial Plugs, Sockets & Switchgear",
  slug: "industrial-plugs-sockets-switchgear",
  shortDescription:
    "Industrial connection devices and switchgear for control, protection and isolation of electrical equipment.",
  description:
    "Skyline supplies industrial and multiphase plugs and sockets for mobile, wall and panel applications, together with a full range of switchgear items including MCBs, RCCBs, ELCBs, MCCBs, contactors, isolators, overload relays and distribution boards for the control, protection and isolation of electrical equipment.",
  subcategories: [
    {
      name: "Industrial Plugs & Sockets",
      slug: "industrial-plugs-sockets",
      description:
        "Mobile, wall and panel type industrial and multiphase plugs and sockets for higher voltages and currents than household types.",
    },
    {
      name: "Electrical Switchgear",
      slug: "electrical-switchgear",
      description:
        "Circuit breakers, contactors, isolators, overload relays, distribution boards and rail connectors for power system control and protection.",
    },
  ],
  products: [
    {
      name: "Mobile Type Plug & Socket",
      slug: "mobile-type-plug-socket",
      subcategory: "industrial-plugs-sockets",
      brands: ["PCE", "Gewiss", "Mennekes"],
      shortDescription: "Mobile industrial plugs and sockets for portable equipment connections.",
      description:
        "Mobile type industrial plugs and sockets connect to the electrical mains at higher voltages and currents than household types. Generally used in polyphase systems with high currents, or where protection from environmental hazards is required.",
      applications: ["Polyphase systems", "Portable equipment connections"],
      keywords: ["mobile plug", "mobile socket", "industrial plug", "PCE", "Gewiss", "Mennekes"],
      featured: true,
    },
    {
      name: "Wall Type Socket & Plug",
      slug: "wall-type-socket-plug",
      subcategory: "industrial-plugs-sockets",
      brands: ["PCE", "Gewiss", "Mennekes"],
      shortDescription: "Wall-mounted industrial sockets and plugs for fixed installations.",
      description:
        "Wall type industrial sockets and plugs connect to the electrical mains at higher voltages and currents than household types, with outlets available with weatherproof covers or interlocking to prevent accidental disconnection of an energized plug.",
      applications: ["Fixed wall installations", "Weatherproof outlet applications"],
      keywords: ["wall socket", "wall plug", "industrial socket", "PCE", "Gewiss", "Mennekes"],
    },
    {
      name: "Panel Type Socket",
      slug: "panel-type-socket",
      subcategory: "industrial-plugs-sockets",
      brands: ["PCE", "Gewiss", "Mennekes"],
      shortDescription: "Panel-mounted industrial sockets for control and distribution panels.",
      description:
        "Panel type industrial sockets are mounted directly onto control or distribution panels, connecting to the electrical mains at higher voltages and currents than household types, generally used in polyphase systems with high currents.",
      keywords: ["panel socket", "industrial socket", "PCE", "Gewiss", "Mennekes"],
    },
    {
      name: "2-Way / 3-Way Extension Plug",
      slug: "2-way-3-way-extension-plug",
      subcategory: "industrial-plugs-sockets",
      brands: ["PCE", "Gewiss", "Mennekes"],
      shortDescription: "Multi-way extension plugs for industrial power distribution.",
      description:
        "2-way and 3-way extension plugs allow multiple industrial connections from a single supply point, used in polyphase systems with high currents where reliable, safe distribution is required.",
      sizes: ["2-way", "3-way"],
      keywords: ["extension plug", "industrial extension", "PCE", "Gewiss", "Mennekes"],
    },
    {
      name: "32 Amp 3-Pin Interlock Socket",
      slug: "32-amp-3-pin-interlock-socket",
      subcategory: "industrial-plugs-sockets",
      brands: ["PCE", "Gewiss", "Mennekes"],
      shortDescription: "32A 3-pin interlock socket preventing disconnection under load.",
      description:
        "The 32 Amp 3-pin interlock socket is interlocked with a switch to prevent accidental disconnection of an energized plug, providing a safe connection point in polyphase systems with high currents.",
      sizes: ["32 Amp"],
      keywords: ["interlock socket", "32 amp socket", "3 pin socket", "PCE", "Gewiss", "Mennekes"],
    },
    {
      name: "32 Amp 3-Pin Male/Female with Isolator",
      slug: "32-amp-3-pin-male-female-isolator",
      subcategory: "industrial-plugs-sockets",
      brands: ["PCE", "Gewiss", "Mennekes"],
      shortDescription: "32A 3-pin male/female plug and socket set with integrated isolator.",
      description:
        "The 32 Amp 3-pin male/female plug and socket set includes an integrated isolator, connecting to the electrical mains at higher voltages and currents than household types for safe isolation of connected equipment.",
      sizes: ["32 Amp"],
      keywords: ["isolator plug", "32 amp plug", "3 pin plug", "PCE", "Gewiss", "Mennekes"],
    },
    {
      name: "Miniature Circuit Breaker (MCB)",
      slug: "miniature-circuit-breaker-mcb",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "MCBs for automatic protection of electrical circuits against overload and short circuit.",
      description:
        "In an electric power system, switchgear such as the miniature circuit breaker (MCB) is used to control, protect and isolate electrical equipment from overload and short-circuit conditions.",
      keywords: ["MCB", "miniature circuit breaker", "Hager", "Schneider", "ABB", "Onka"],
      featured: true,
    },
    {
      name: "Residual Current Circuit Breaker (RCCB)",
      slug: "residual-current-circuit-breaker-rccb",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "RCCBs providing protection against earth leakage and electric shock.",
      description:
        "The residual current circuit breaker (RCCB) is composed of electrical disconnect switches used to control, protect and isolate electrical equipment by detecting residual earth leakage currents.",
      keywords: ["RCCB", "residual current circuit breaker", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Earth Leakage Circuit Breaker (ELCB)",
      slug: "earth-leakage-circuit-breaker-elcb",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "ELCBs for protection against earth faults in electrical installations.",
      description:
        "The earth leakage circuit breaker (ELCB) is used in electric power systems to control, protect and isolate electrical equipment against earth fault currents.",
      keywords: ["ELCB", "earth leakage circuit breaker", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Moulded Case Circuit Breaker (MCCB)",
      slug: "moulded-case-circuit-breaker-mccb",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "MCCBs for protection and isolation of higher-current electrical circuits.",
      description:
        "The moulded case circuit breaker (MCCB) is used in electric power systems to control, protect and isolate electrical equipment at higher current ratings than standard MCBs.",
      keywords: ["MCCB", "moulded case circuit breaker", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Contactor / Magnetic Contactor",
      slug: "contactor-magnetic-contactor",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "Contactors and magnetic contactors for switching electrical power circuits.",
      description:
        "Contactors and magnetic contactors are switchgear items used to control, protect and isolate electrical equipment by switching power circuits on and off, typically in motor control and distribution applications.",
      keywords: ["contactor", "magnetic contactor", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Isolator",
      slug: "isolator",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "Isolators for safely disconnecting electrical equipment from supply.",
      description:
        "The isolator is a switchgear item used to control, protect and isolate electrical equipment, providing a safe means of disconnecting circuits for maintenance.",
      keywords: ["isolator", "electrical isolator", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Overload Relay",
      slug: "overload-relay",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "Overload relays protecting motors and circuits from sustained overcurrent.",
      description:
        "The overload relay is a switchgear item used to control, protect and isolate electrical equipment from sustained overcurrent conditions, commonly used alongside contactors in motor control circuits.",
      keywords: ["overload relay", "motor protection relay", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Distribution Board",
      slug: "distribution-board",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "Distribution boards housing circuit breakers for power distribution.",
      description:
        "The distribution board is composed of electrical disconnect switches, fuses or circuit breakers used to control, protect and isolate electrical equipment across a building or facility's power distribution system.",
      keywords: ["distribution board", "DB board", "Hager", "Schneider", "ABB", "Onka"],
    },
    {
      name: "Rail Connectors",
      slug: "rail-connectors",
      subcategory: "electrical-switchgear",
      brands: ["Hager", "Schneider", "ABB", "Onka"],
      shortDescription: "DIN rail connectors for switchgear and distribution board assembly.",
      description:
        "Rail connectors are used within switchgear and distribution boards to mount and interconnect circuit breakers and other protective devices along a DIN rail.",
      keywords: ["rail connector", "DIN rail connector", "Hager", "Schneider", "ABB", "Onka"],
    },
  ],
};
