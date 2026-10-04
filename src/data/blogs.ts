/**
 * Blog articles. Content is general, practical guidance — no invented
 * statistics, certifications or brand claims. Add new posts to `blogs`.
 */
import catCables from "@/assets/cat-cables-wires.jpg";
import prodCable from "@/assets/prod-cable.jpg";
import catElectrical from "@/assets/cat-electrical.jpg";
import prodBoard from "@/assets/prod-board.jpg";
import catAccessories from "@/assets/cat-electrical-accessories.jpg";
import catConstruction from "@/assets/cat-construction.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import aboutIntro from "@/assets/about-intro.jpg";
import catBuilding from "@/assets/cat-building.jpg";
import catSafety from "@/assets/cat-safety.jpg";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  image?: { src: string; alt: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  /** Internal product links: [label, category slug or null for all products]. */
  links: { label: string; href: string }[];
};

const productsLink = { label: "Browse all products", href: "/products" };

export const blogs: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-electrical-cables-for-construction-projects-in-the-uae",
    title: "How to Choose the Right Electrical Cables for Construction Projects in the UAE",
    metaTitle: "Choosing Electrical Cables for UAE Construction Projects | Skyline",
    metaDescription:
      "A practical guide to selecting electrical cables for construction projects in the UAE: conductor size, insulation, armouring, installation conditions and supplier checks.",
    excerpt:
      "Conductor size, insulation type, armouring and site conditions all affect which cable is right. Here is what to check before you order.",
    category: "Cables & Wires",
    date: "2026-09-28",
    readMinutes: 6,
    image: catCables,
    imageAlt: "Reels of insulated electrical cables ready for a construction site",
    intro:
      "Cables carry power to every part of a building, so the wrong choice can cause overheating, voltage drop or early failure. In the UAE, high ambient temperatures and demanding project schedules make careful selection even more important. This guide covers the main points contractors and buyers should review before placing a cable order.",
    sections: [
      {
        heading: "Start with the load and the circuit",
        paragraphs: [
          "Every cable selection begins with the electrical load it must carry. The current, the circuit length and the type of equipment connected determine the minimum conductor size. Longer runs may need a larger cross-section to keep voltage drop within acceptable limits.",
          "Always work from the project's electrical design and the consultant's specification. Where a size is unclear, confirm it with the project engineer rather than estimating.",
        ],
      },
      {
        heading: "Understand insulation and sheath types",
        paragraphs: [
          "Common options include PVC and XLPE insulated cables, as well as low-smoke, halogen-free types for areas where fire safety and smoke emission are a concern, such as public buildings, corridors and escape routes.",
        ],
        list: [
          "PVC insulated cables – widely used for general building wiring",
          "XLPE insulated cables – often chosen for power distribution",
          "LSZH / LSOH cables – used where low smoke and fume emission is specified",
          "Flexible cables – for equipment and connections that move",
        ],
      },
      {
        heading: "Consider armouring and installation conditions",
        image: { src: prodCable, alt: "Close-up of armoured power cable showing conductor and insulation layers" },
        paragraphs: [
          "Cables laid underground, outdoors or in areas exposed to mechanical damage usually need armouring. Indoor cables in conduit or trunking may not. Think about where the cable will run, how it will be supported and whether it will be exposed to sunlight, moisture or chemicals.",
          "Heat matters too. Cables grouped together or installed in hot spaces may need to be de-rated, which can increase the required size.",
        ],
      },
      {
        heading: "Check documentation before ordering",
        paragraphs: [
          "Ask for product datasheets and confirm the cable meets the standards named in your project specification. Check the cable markings on delivery against the order so that the correct type and size reach the site.",
        ],
      },
    ],
    conclusion:
      "Choosing cables is a balance of electrical design, installation conditions and project requirements. If you have a cable schedule or BOQ, Skyline can help you source suitable cables and accessories for your project.",
    links: [
      { label: "Cable and wire products", href: "/products" },
      { label: "Request a quotation", href: "/contact-us#enquiry-form" },
    ],
  },
  {
    slug: "electrical-cables-vs-wires-understanding-the-difference",
    title: "Electrical Cables vs Wires: Understanding the Difference and Choosing the Right Option",
    metaTitle: "Electrical Cables vs Wires: What's the Difference? | Skyline",
    metaDescription:
      "Learn the difference between electrical wires and cables, where each is used, and how to choose the right option for building and electrical projects.",
    excerpt:
      "The terms are often used interchangeably, but wires and cables are not the same. Knowing the difference helps you order correctly.",
    category: "Cables & Wires",
    date: "2026-09-24",
    readMinutes: 5,
    image: prodCable,
    imageAlt: "Electrical cable cross-section next to single-core building wire",
    intro:
      "On site, people often say 'wire' and 'cable' as if they mean the same thing. In practice they describe different products, and ordering the wrong one can delay an installation. Here is a simple explanation.",
    sections: [
      {
        heading: "What is a wire?",
        paragraphs: [
          "A wire is usually a single conductor, solid or stranded, with or without its own insulation. Single-core building wires are commonly pulled through conduit for lighting and power circuits inside buildings.",
        ],
      },
      {
        heading: "What is a cable?",
        paragraphs: [
          "A cable is two or more insulated conductors grouped together inside an outer sheath. Depending on the type, it may also include an earth conductor, armouring or screening. Cables are used where extra mechanical protection or a combined assembly is needed.",
        ],
        list: [
          "Multi-core power cables for distribution",
          "Armoured cables for underground or exposed routes",
          "Control and instrumentation cables",
          "Flexible cords for equipment connections",
        ],
      },
      {
        heading: "Which one should you use?",
        image: { src: catElectrical, alt: "Electrician installing wiring inside a building distribution point" },
        paragraphs: [
          "Wires are typically used where they will be protected by conduit or trunking. Cables are used where the conductors need their own sheath for protection, for example when clipped directly to surfaces, laid in trays or buried.",
          "The final choice should follow your electrical drawings and specification, which define conductor size, type and installation method.",
        ],
      },
    ],
    conclusion:
      "Understanding the difference makes it easier to read a BOQ and place the right order. Skyline supplies both building wires and a range of cables — send us your list and we will help you match the requirements.",
    links: [productsLink, { label: "Contact our team", href: "/contact-us" }],
  },
  {
    slug: "complete-guide-to-electrical-supplies-for-commercial-and-industrial-projects",
    title: "A Complete Guide to Electrical Supplies for Commercial and Industrial Projects",
    metaTitle: "Electrical Supplies for Commercial & Industrial Projects | Skyline",
    metaDescription:
      "An overview of the main electrical supplies needed for commercial and industrial projects: cables, distribution, protection, containment, lighting and accessories.",
    excerpt:
      "From distribution boards to cable containment, here is an overview of the electrical supplies most commercial and industrial projects need.",
    category: "Electrical Supplies",
    date: "2026-09-20",
    readMinutes: 7,
    image: prodBoard,
    imageAlt: "Electrical distribution board with circuit breakers installed",
    intro:
      "Commercial and industrial projects need a wide range of electrical materials, often from several product groups at once. Planning the full list early helps avoid gaps and delays. This guide outlines the main categories.",
    sections: [
      {
        heading: "Power cables and wiring",
        paragraphs: [
          "Cables form the backbone of any installation, from main incoming supplies to final circuits. Industrial sites may also need control, instrumentation and flexible cables for machinery.",
        ],
      },
      {
        heading: "Distribution and protection",
        paragraphs: [
          "Distribution boards, circuit breakers, isolators and residual current devices control and protect circuits. Their ratings must match the electrical design.",
        ],
        list: [
          "Main and sub-distribution boards",
          "MCBs, MCCBs and RCDs",
          "Isolators and changeover switches",
          "Contactors, relays and control components",
        ],
      },
      {
        heading: "Cable management and containment",
        image: { src: catAccessories, alt: "Selection of electrical accessories including conduit fittings and cable glands" },
        paragraphs: [
          "Conduit, trunking, cable trays and fittings route and protect cables. Glands, lugs and terminals complete the connections at equipment and boards.",
        ],
      },
      {
        heading: "Lighting, switches and accessories",
        paragraphs: [
          "Switches, sockets, lighting fittings and accessories are usually ordered in large quantities, so confirm the range, finish and quantities per area before ordering.",
        ],
      },
    ],
    conclusion:
      "Sourcing from a supplier who covers several product groups can simplify procurement. Skyline supplies electrical products across these categories — share your BOQ and we will prepare a quotation.",
    links: [productsLink, { label: "Request a quotation", href: "/contact-us#enquiry-form" }],
  },
  {
    slug: "how-to-select-the-right-electrical-products-for-your-building-project",
    title: "How to Select the Right Electrical Products for Your Building Project",
    metaTitle: "Selecting Electrical Products for Building Projects | Skyline",
    metaDescription:
      "Tips for selecting electrical products for building projects: follow the specification, match ratings, check compatibility and plan quantities.",
    excerpt:
      "Good product selection starts with the specification. These practical steps help you choose electrical products that fit your project.",
    category: "Buying Guides",
    date: "2026-09-16",
    readMinutes: 5,
    image: catElectrical,
    imageAlt: "Electrical products laid out for a building project",
    intro:
      "Whether it is a villa, an office fit-out or a residential tower, every building project needs electrical products that suit the design and the site. These steps help make selection more straightforward.",
    sections: [
      {
        heading: "Follow the project specification",
        paragraphs: [
          "The consultant's specification and drawings define product types, ratings and approved makes. Use them as the starting point and raise any questions before ordering.",
        ],
      },
      {
        heading: "Match ratings and compatibility",
        paragraphs: [
          "Check that breakers, switches, sockets and enclosures have the right ratings and are compatible with each other — for example, breakers that fit the chosen distribution board.",
        ],
      },
      {
        heading: "Plan quantities by area",
        image: { src: catConstruction, alt: "Building under construction with electrical works in progress" },
        paragraphs: ["Break the order down by floor or area. This makes deliveries easier to manage and reduces leftover stock."],
        list: ["Count points from drawings", "Allow sensible spares", "Group deliveries by project phase"],
      },
    ],
    conclusion:
      "Taking time to select products carefully saves rework later. Skyline can help you source electrical products that match your project list.",
    links: [productsLink, { label: "Contact Skyline", href: "/contact-us" }],
  },
  {
    slug: "what-contractors-should-consider-when-buying-electrical-materials-in-the-uae",
    title: "What Contractors Should Consider When Buying Electrical Materials in the UAE",
    metaTitle: "Buying Electrical Materials in the UAE: Contractor Checklist | Skyline",
    metaDescription:
      "A checklist for contractors buying electrical materials in the UAE: specification compliance, availability, lead times, documentation and supplier support.",
    excerpt:
      "Price matters, but so do availability, documentation and supplier support. A practical checklist for contractors.",
    category: "Buying Guides",
    date: "2026-09-12",
    readMinutes: 5,
    image: heroConstruction,
    imageAlt: "Contractor reviewing electrical material requirements on a UAE construction site",
    intro:
      "Contractors juggle cost, schedule and compliance on every project. When buying electrical materials, a few checks up front can prevent site delays and rejected submittals.",
    sections: [
      {
        heading: "Compliance with the specification",
        paragraphs: [
          "Make sure the products offered match the approved makes and technical requirements in the project specification. Substitutions should be approved before supply.",
        ],
      },
      {
        heading: "Availability and lead times",
        paragraphs: [
          "Confirm stock and delivery timelines, especially for large cable quantities or switchgear. Schedule deliveries in line with site progress.",
        ],
      },
      {
        heading: "Documentation and support",
        image: { src: aboutIntro, alt: "Warehouse shelves stocked with electrical materials" },
        paragraphs: ["Ask for datasheets and any documents needed for submittals. A responsive supplier makes it easier to handle changes during the project."],
        list: ["Datasheets and catalogues", "Clear quotations with item descriptions", "Delivery notes matching the order"],
      },
    ],
    conclusion:
      "The best purchase balances price with reliability and support. Send your material list to Skyline for a quotation.",
    links: [{ label: "Request a quotation", href: "/contact-us#enquiry-form" }, productsLink],
  },
  {
    slug: "essential-building-materials-and-electrical-supplies-for-construction-projects",
    title: "Essential Building Materials and Electrical Supplies for Construction Projects",
    metaTitle: "Essential Building Materials & Electrical Supplies | Skyline",
    metaDescription:
      "An overview of essential building materials and electrical supplies for construction projects, from cables and accessories to fixings, tools and safety products.",
    excerpt:
      "A quick overview of the building materials and electrical supplies most construction projects rely on.",
    category: "Building Materials",
    date: "2026-09-08",
    readMinutes: 5,
    image: catBuilding,
    imageAlt: "Assorted building materials stacked at a construction site",
    intro:
      "Construction projects depend on a steady supply of materials across many trades. Grouping requirements into clear categories helps buyers plan orders and avoid shortages.",
    sections: [
      {
        heading: "Electrical supplies",
        paragraphs: ["Cables, conduit, distribution boards, breakers, switches, sockets and lighting are needed throughout the build."],
      },
      {
        heading: "Hardware, fixings and tools",
        paragraphs: ["Anchors, fasteners, cable ties, clips and hand tools support installation work across trades."],
      },
      {
        heading: "Safety and site supplies",
        image: { src: catSafety, alt: "Personal protective equipment including hard hat and safety gloves" },
        paragraphs: ["PPE and site safety products protect workers and help keep sites compliant with safety requirements."],
        list: ["Hard hats, gloves and safety glasses", "High-visibility clothing", "Barrier and warning products"],
      },
    ],
    conclusion:
      "Having one supplier for several of these categories can simplify procurement. Explore Skyline's product range or send us your list.",
    links: [productsLink, { label: "Contact our team", href: "/contact-us" }],
  },
  {
    slug: "how-to-choose-reliable-electrical-material-suppliers-for-your-business",
    title: "How to Choose Reliable Electrical Material Suppliers for Your Business",
    metaTitle: "Choosing a Reliable Electrical Material Supplier | Skyline",
    metaDescription:
      "What to look for in an electrical material supplier: product range, genuine products, clear quotations, communication and dependable delivery.",
    excerpt:
      "A dependable supplier saves time and risk. Here is what businesses should look for.",
    category: "Buying Guides",
    date: "2026-09-04",
    readMinutes: 4,
    image: aboutIntro,
    imageAlt: "Organised stock of electrical materials in a supplier warehouse",
    intro:
      "Your supplier affects cost, schedule and quality. Choosing well means fewer surprises on site and in the office.",
    sections: [
      {
        heading: "Range and relevance",
        paragraphs: ["A supplier that stocks the categories you use regularly can consolidate orders and reduce admin."],
      },
      {
        heading: "Clear quotations and communication",
        paragraphs: ["Quotations should list items, sizes and quantities clearly. Quick, accurate replies make changes easier to manage."],
      },
      {
        heading: "Reliable delivery",
        paragraphs: ["Ask how deliveries are scheduled and how shortages are handled. Consistency matters more than a one-off low price."],
        list: ["Check product information is clear", "Confirm delivery arrangements", "Start with a small order to test service"],
      },
    ],
    conclusion:
      "Skyline aims to make purchasing simple, from enquiry to delivery. Get in touch to discuss your requirements.",
    links: [{ label: "About Skyline", href: "/about-us" }, { label: "Contact us", href: "/contact-us" }],
  },
  {
    slug: "why-choosing-the-right-electrical-materials-matters-for-safety-performance-and-reliability",
    title: "Why Choosing the Right Electrical Materials Matters for Safety, Performance and Reliability",
    metaTitle: "Why the Right Electrical Materials Matter | Skyline",
    metaDescription:
      "How the choice of electrical materials affects safety, performance and long-term reliability in buildings and industrial installations.",
    excerpt:
      "Electrical materials affect safety and long-term performance. Here is why careful selection pays off.",
    category: "Safety",
    date: "2026-08-31",
    readMinutes: 4,
    image: catAccessories,
    imageAlt: "Electrical accessories and protective devices for safe installations",
    intro:
      "Electrical faults can damage property and endanger people. Many problems trace back to materials that were unsuitable for the job. Choosing correctly is one of the simplest ways to reduce risk.",
    sections: [
      {
        heading: "Safety",
        paragraphs: ["Correctly rated cables and protective devices help prevent overheating and ensure faults are cleared safely."],
      },
      {
        heading: "Performance",
        paragraphs: ["Properly sized conductors reduce voltage drop and energy losses, helping equipment run as intended."],
      },
      {
        heading: "Reliability and maintenance",
        image: { src: prodBoard, alt: "Neatly wired distribution board with protective devices" },
        paragraphs: ["Suitable materials last longer and reduce call-outs, which lowers the total cost over the life of the building."],
      },
    ],
    conclusion:
      "The right material choice protects people, equipment and budgets. Talk to Skyline about the electrical materials your project needs.",
    links: [productsLink, { label: "Request a quotation", href: "/contact-us#enquiry-form" }],
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);

export const formatBlogDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
