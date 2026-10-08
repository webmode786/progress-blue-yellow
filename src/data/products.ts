/**
 * Central product catalogue for Skyline Building Material Trading FZC.
 *
 * Source of truth: the Skyline Product Catalogue 2026. Each category is
 * transcribed into `src/data/catalogue/NN-<slug>.ts` and assembled here into
 * the runtime model used by every page (listing, category, detail, search).
 *
 * Images: products carry `image: null` until a verified product photograph is
 * available — the UI then shows a clearly marked placeholder rather than an
 * unrelated stock photo. Drop a real image path into `productImages` below to
 * replace a placeholder.
 */

import type { CategoryInput, ProductInput } from "./catalogue/types";

import { category as c01 } from "./catalogue/01-control-screen-specialty-cables";
import { category as c02 } from "./catalogue/02-silicone-high-temperature-cables";
import { category as c03 } from "./catalogue/03-rubber-pvc-armoured-cables";
import { category as c04 } from "./catalogue/04-enclosures-panel-accessories";
import { category as c05 } from "./catalogue/05-cable-termination";
import { category as c06 } from "./catalogue/06-industrial-plugs-sockets-switchgear";
import { category as c07 } from "./catalogue/07-conduit-pipes-wiring-accessories";
import { category as c08 } from "./catalogue/08-cable-management-jointing-led-lighting";
import { category as c09 } from "./catalogue/09-switchgear-protection-control";
import { category as c10 } from "./catalogue/10-lighting-lamps";
import { category as c11 } from "./catalogue/11-fans-ventilation-hvac";
import { category as c12 } from "./catalogue/12-plumbing-pipes-fittings";
import { category as c13 } from "./catalogue/13-sanitaryware-bathroom-water-heating";
import { category as c14 } from "./catalogue/14-hardware-fasteners-fixings";
import { category as c15 } from "./catalogue/15-tools-equipment";
import { category as c16 } from "./catalogue/16-ppe-safety-site-industrial-supplies";
import { category as c17 } from "./catalogue/17-building-materials-paints-chemicals";
import { category as c18 } from "./catalogue/18-earthing-lightning-protection";
import { category as c19 } from "./catalogue/19-networking-communication";

import imgCables from "@/assets/cat-cables-wires.jpg";
import imgElectrical from "@/assets/cat-electrical.jpg";
import imgElectricalAccessories from "@/assets/cat-electrical-accessories.jpg";
import imgLighting from "@/assets/cat-lighting.jpg";
import imgPlumbing from "@/assets/cat-plumbing.jpg";
import imgHardware from "@/assets/cat-hardware-tools.jpg";
import imgConstruction from "@/assets/cat-construction.jpg";
import imgBuilding from "@/assets/cat-building.jpg";
import imgSafety from "@/assets/cat-safety.jpg";

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  description: string | null;
};

export type ProductCategory = {
  id: string;
  /** Catalogue number, e.g. "01". */
  number: string;
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
  /** Subcategory name, used as the browsable "product type". */
  productType: string;
  productCode: string | null;
  brand: string | null;
  brands: string[];
  /** Null until a verified product photograph is available. */
  image: string | null;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  /** Sizes / ratings / configurations of the same product. */
  sizes: string[];
  /** Alias of `sizes` kept for existing components. */
  variants: string[];
  material: string | null;
  colour: string | null;
  packaging: string | null;
  applications: string[];
  standards: string[];
  featured: boolean;
  keywords: string[];
};

const inputs: CategoryInput[] = [
  c01,
  c02,
  c03,
  c04,
  c05,
  c06,
  c07,
  c08,
  c09,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
];

/** Category cover imagery. Swap for real photography when available. */
const categoryImages: Record<string, string> = {
  "control-screen-specialty-cables": imgCables,
  "silicone-high-temperature-cables": imgCables,
  "rubber-pvc-armoured-cables": imgCables,
  "enclosures-panel-accessories": imgElectrical,
  "cable-termination": imgElectricalAccessories,
  "industrial-plugs-sockets-switchgear": imgElectrical,
  "conduit-pipes-wiring-accessories": imgElectricalAccessories,
  "cable-management-jointing-led-lighting": imgLighting,
  "switchgear-protection-control": imgElectrical,
  "lighting-lamps": imgLighting,
  "fans-ventilation-hvac": imgElectrical,
  "plumbing-pipes-fittings": imgPlumbing,
  "sanitaryware-bathroom-water-heating": imgPlumbing,
  "hardware-fasteners-fixings": imgHardware,
  "tools-equipment": imgHardware,
  "ppe-safety-site-industrial-supplies": imgSafety,
  "building-materials-paints-chemicals": imgConstruction,
  "earthing-lightning-protection": imgBuilding,
  "networking-communication": imgElectricalAccessories,
};

const categoryIcons: Record<string, string> = {
  "control-screen-specialty-cables": "Cable",
  "silicone-high-temperature-cables": "Flame",
  "rubber-pvc-armoured-cables": "Cable",
  "enclosures-panel-accessories": "Box",
  "cable-termination": "Wrench",
  "industrial-plugs-sockets-switchgear": "Plug",
  "conduit-pipes-wiring-accessories": "PipeIcon",
  "cable-management-jointing-led-lighting": "Lightbulb",
  "switchgear-protection-control": "ShieldCheck",
  "lighting-lamps": "Lightbulb",
  "fans-ventilation-hvac": "Fan",
  "plumbing-pipes-fittings": "Droplets",
  "sanitaryware-bathroom-water-heating": "ShowerHead",
  "hardware-fasteners-fixings": "Bolt",
  "tools-equipment": "Hammer",
  "ppe-safety-site-industrial-supplies": "HardHat",
  "building-materials-paints-chemicals": "Building2",
  "earthing-lightning-protection": "Zap",
  "networking-communication": "Network",
};

/**
 * Verified product photography, keyed by `"<category-slug>/<product-slug>"`.
 * Add entries here to replace a placeholder tile with a real image.
 */
const productImages: Record<string, string> = {
  "control-screen-specialty-cables/control-cable-ysly-jz": "/images/products/control-cable-ysly-jz.jpg",
  "control-screen-specialty-cables/flat-cable-h05vvh6-f-h07vvh6-f": "/images/products/flat-cable-h05vvh6-f-h07vvh6-f.jpg",
  "silicone-high-temperature-cables/silicone-cable-fg4-2": "/images/products/silicone-cable-fg4-2.jpg",
  "silicone-high-temperature-cables/multicore-silicone-cable-fg4og4-2":
    "/images/products/multicore-silicone-cable-fg4og4-2.jpg",
  "rubber-pvc-armoured-cables/armoured-cables-lv-range": "/images/products/armoured-cables-lv-range.jpg",
  "enclosures-panel-accessories/metal-enclosures": "/images/products/metal-enclosures.jpg",
  "cable-termination/bimetallic-cable-lugs": "/images/products/bimetallic-cable-lugs.jpg",
  "cable-termination/bw-cable-glands": "/images/products/bw-cable-glands.jpg",
  "industrial-plugs-sockets-switchgear/miniature-circuit-breaker-mcb": "/images/products/miniature-circuit-breaker-mcb.jpg",
  "conduit-pipes-wiring-accessories/electrical-pvc-conduit-pipe": "/images/products/electrical-pvc-conduit-pipe.jpg",
  "switchgear-protection-control/magnetic-contactor": "/images/products/magnetic-contactor.jpg",
  "lighting-lamps/square-recessed-led-panel": "/images/products/square-recessed-led-panel.jpg",
  "lighting-lamps/led-floodlight": "/images/products/led-floodlight.jpg",
  "lighting-lamps/led-bulb-e27": "/images/products/led-bulb-e27.jpg",
  "fans-ventilation-hvac/exhaust-fan-square": "/images/products/exhaust-fan-square.jpg",
  "plumbing-pipes-fittings/upvc-pipe": "/images/products/upvc-pipe.jpg",
  "plumbing-pipes-fittings/ppr-pipe": "/images/products/ppr-pipe.jpg",
  "sanitaryware-bathroom-water-heating/electric-storage-water-heater": "/images/products/electric-storage-water-heater.jpg",
  "hardware-fasteners-fixings/gi-bolt": "/images/products/gi-bolt.jpg",
  "ppe-safety-site-industrial-supplies/safety-shoes": "/images/products/safety-shoes.jpg",
  "earthing-lightning-protection/earth-rod": "/images/products/earth-rod.jpg",
  "networking-communication/rj45-connector": "/images/products/rj45-connector.jpg",
  "networking-communication/faceplate": "/images/products/networking-faceplate.jpg",
  "networking-communication/rj11-connector": "/images/products/networking-rj11-connector.jpg",
  "networking-communication/power-cable": "/images/products/networking-power-cable.jpg",
  "networking-communication/data-telephone-socket": "/images/products/networking-data-telephone-socket.jpg",
  "sanitaryware-bathroom-water-heating/shower-head": "/images/products/grohe-tempesta-100-shower-head.jpg",
  "rubber-pvc-armoured-cables/rubber-cable-range": "/images/products/rubber-cable-h07rn-f.jpg",
  "conduit-pipes-wiring-accessories/gi-conduit-pipe": "/images/products/gi-conduit-pipe.jpg",
  "cable-management-jointing-led-lighting/gi-ss-cable-tray-trunking-unistrut-channel":
    "/images/products/gi-cable-tray.jpg",
  "fans-ventilation-hvac/ceiling-fan": "/images/products/ceiling-fan.jpg",
  "fans-ventilation-hvac/wall-fan": "/images/products/wall-fan.jpg",
  "fans-ventilation-hvac/stand-pedestal-fan": "/images/products/stand-pedestal-fan.jpg",
  "fans-ventilation-hvac/box-fan": "/images/products/box-fan.jpg",
  "fans-ventilation-hvac/ceiling-fan-remote": "/images/products/ceiling-fan-remote.jpg",
  "fans-ventilation-hvac/fan-regulator": "/images/products/fan-regulator.jpg",
  "fans-ventilation-hvac/split-air-conditioner": "/images/products/split-air-conditioner.jpg",
  "fans-ventilation-hvac/thermostat": "/images/products/thermostat.jpg",
  "fans-ventilation-hvac/refrigerant-gas": "/images/products/refrigerant-gas.jpg",
  "fans-ventilation-hvac/brazing-rod": "/images/products/brazing-rod.jpg",
  "fans-ventilation-hvac/industrial-exhaust-fan": "/images/products/industrial-exhaust-fan.jpg",
  "ppe-safety-site-industrial-supplies/hand-gloves": "/images/products/hand-gloves.jpg",
  "building-materials-paints-chemicals/plywood": "/images/products/plywood.jpg",
  "building-materials-paints-chemicals/silicone-sealant": "/images/products/silicone-sealant.jpg",
  "building-materials-paints-chemicals/insulation-tape": "/images/products/insulation-tape.jpg",
  "tools-equipment/screwdriver": "/images/products/screwdriver.jpg",
  "tools-equipment/ladder": "/images/products/ladder.jpg",
  "tools-equipment/crimping-tool": "/images/products/crimping-tool.jpg",
  "tools-equipment/steel-drill-bit": "/images/products/steel-drill-bit.jpg",
  "control-screen-specialty-cables/screen-cable-liycy": "/images/products/screen-cable-liycy.jpg",
  "rubber-pvc-armoured-cables/rubber-cable-h07rn-f": "/images/products/rubber-cable-h07rn-f.jpg",
  "rubber-pvc-armoured-cables/multicore-pvc-flexible-cable-h05vv-f": "/images/products/multicore-pvc-flexible-cable-h05vv-f.jpg",
  "enclosures-panel-accessories/stainless-steel-enclosures": "/images/products/stainless-steel-enclosures.jpg",
  "enclosures-panel-accessories/slotted-panel-trunking": "/images/products/slotted-panel-trunking.jpg",
  "enclosures-panel-accessories/nylon-cable-ties": "/images/products/nylon-cable-ties.jpg",
  "enclosures-panel-accessories/stainless-steel-cable-ties": "/images/products/stainless-steel-cable-ties.jpg",
  "enclosures-panel-accessories/spiral-wrap": "/images/products/spiral-wrap.jpg",
  "cable-termination/copper-cable-lugs": "/images/products/copper-cable-lugs.jpg",
  "cable-termination/cw-cable-glands": "/images/products/cw-cable-glands.jpg",
  "conduit-pipes-wiring-accessories/emt-conduit-pipe": "/images/products/emt-conduit-pipe.jpg",
  "conduit-pipes-wiring-accessories/gi-flexible-conduit": "/images/products/gi-flexible-conduit.jpg",
  "conduit-pipes-wiring-accessories/conduit-bend": "/images/products/conduit-bend.jpg",
  "conduit-pipes-wiring-accessories/gi-circular-box": "/images/products/gi-circular-box.jpg",
  "conduit-pipes-wiring-accessories/gi-saddle": "/images/products/gi-saddle.jpg",
  "conduit-pipes-wiring-accessories/gi-junction-box": "/images/products/gi-junction-box.jpg",
  "conduit-pipes-wiring-accessories/pvc-junction-box": "/images/products/pvc-junction-box.jpg",
  "conduit-pipes-wiring-accessories/grommet": "/images/products/grommet.jpg",
  "conduit-pipes-wiring-accessories/weatherproof-cover": "/images/products/weatherproof-cover.jpg",
  "conduit-pipes-wiring-accessories/bending-spring": "/images/products/bending-spring.jpg",
  "conduit-pipes-wiring-accessories/gi-elbow": "/images/products/gi-elbow.jpg",
  "conduit-pipes-wiring-accessories/gi-adaptor": "/images/products/gi-adaptor.jpg",
  "conduit-pipes-wiring-accessories/brass-adaptor": "/images/products/brass-adaptor.jpg",
  "conduit-pipes-wiring-accessories/mechanical-swivel-adaptor-nickel": "/images/products/mechanical-swivel-adaptor-nickel.jpg",
  "conduit-pipes-wiring-accessories/gi-coupler": "/images/products/gi-coupler.jpg",
  "conduit-pipes-wiring-accessories/gi-covers": "/images/products/gi-covers.jpg",
  "conduit-pipes-wiring-accessories/lock-nut-check-nut": "/images/products/lock-nut-check-nut.jpg",
  "conduit-pipes-wiring-accessories/gi-tee": "/images/products/gi-tee.jpg",
  "conduit-pipes-wiring-accessories/reducer-bush": "/images/products/reducer-bush.jpg",
  "conduit-pipes-wiring-accessories/brass-bush": "/images/products/brass-bush.jpg",
  "conduit-pipes-wiring-accessories/emt-two-hole-clamp": "/images/products/emt-two-hole-clamp.jpg",
  "conduit-pipes-wiring-accessories/r-clamp": "/images/products/r-clamp.jpg",
  "conduit-pipes-wiring-accessories/band-it-strap-carbon-steel": "/images/products/band-it-strap-carbon-steel.jpg",
  "conduit-pipes-wiring-accessories/pvc-flexible-pipe": "/images/products/pvc-flexible-pipe.jpg",
  "conduit-pipes-wiring-accessories/pvc-box": "/images/products/pvc-box.jpg",
  "conduit-pipes-wiring-accessories/loop-in-box": "/images/products/loop-in-box.jpg",
  "conduit-pipes-wiring-accessories/pvc-connector": "/images/products/pvc-connector.jpg",
  "conduit-pipes-wiring-accessories/pvc-clip": "/images/products/pvc-clip.jpg",
  "conduit-pipes-wiring-accessories/expansion-coupler-dd": "/images/products/expansion-coupler-dd.jpg",
  "conduit-pipes-wiring-accessories/end-cap": "/images/products/end-cap.jpg",
  "control-screen-specialty-cables/lift-2s-pendant-cable": "/images/products/lift-2s-pendant-cable.jpg",
  "silicone-high-temperature-cables/silicone-fibreglass-sleeves-fg4t2-2":
    "/images/products/silicone-fibreglass-sleeves.jpg",
  "enclosures-panel-accessories/heavy-duty-die-cast-connectors": "/images/products/heavy-duty-die-cast-connectors.jpg",
  "enclosures-panel-accessories/cable-markers": "/images/products/cable-markers.jpg",
  "enclosures-panel-accessories/metal-iron-plugs": "/images/products/metal-iron-plugs.jpg",
  "enclosures-panel-accessories/porcelain-connectors": "/images/products/porcelain-connectors.jpg",
  "cable-termination/insulated-cable-lugs-blade-type": "/images/products/insulated-lugs-blade.jpg",
  "cable-termination/insulated-cable-lugs-pin-type": "/images/products/insulated-lugs-pin.jpg",
  "cable-termination/insulated-cable-lugs-fork-type": "/images/products/insulated-lugs-fork.jpg",
  "cable-termination/insulated-cable-lugs-ring-type": "/images/products/insulated-lugs-ring.jpg",
  "cable-termination/pin-type-cable-lugs-copper-ferrules": "/images/products/pin-lugs-copper-ferrules.jpg",
  "cable-termination/e1w-cable-glands": "/images/products/e1w-cable-glands.jpg",
  "cable-termination/a1-a2-cable-glands": "/images/products/a1-a2-cable-glands.jpg",
  "cable-termination/nickel-plated-brass-cable-glands": "/images/products/nickel-brass-cable-glands.jpg",
  "cable-termination/pvc-nylon-cable-glands": "/images/products/pvc-nylon-cable-glands.jpg",
  "industrial-plugs-sockets-switchgear/mobile-type-plug-socket": "/images/products/mobile-plug-socket.jpg",
  "industrial-plugs-sockets-switchgear/wall-type-socket-plug": "/images/products/wall-type-socket-plug.jpg",
  "industrial-plugs-sockets-switchgear/panel-type-socket": "/images/products/panel-type-socket.jpg",
  "industrial-plugs-sockets-switchgear/2-way-3-way-extension-plug": "/images/products/extension-plug-3way.jpg",
  "industrial-plugs-sockets-switchgear/32-amp-3-pin-interlock-socket": "/images/products/interlock-socket-32a.jpg",
  "industrial-plugs-sockets-switchgear/32-amp-3-pin-male-female-isolator": "/images/products/male-female-isolator-32a.jpg",
  "industrial-plugs-sockets-switchgear/residual-current-circuit-breaker-rccb": "/images/products/residual-current-circuit-breaker-rccb.jpg",
  "industrial-plugs-sockets-switchgear/earth-leakage-circuit-breaker-elcb": "/images/products/earth-leakage-circuit-breaker-elcb.jpg",
  "industrial-plugs-sockets-switchgear/moulded-case-circuit-breaker-mccb": "/images/products/moulded-case-circuit-breaker-mccb.jpg",
  "industrial-plugs-sockets-switchgear/contactor-magnetic-contactor": "/images/products/magnetic-contactor.jpg",
  "industrial-plugs-sockets-switchgear/isolator": "/images/products/isolator-switch.jpg",
  "industrial-plugs-sockets-switchgear/distribution-board": "/images/products/distribution-board.jpg",
  "industrial-plugs-sockets-switchgear/rail-connectors": "/images/products/rail-connectors.jpg",
  "conduit-pipes-wiring-accessories/threaded-plug": "/images/products/threaded-plug.jpg",
  "conduit-pipes-wiring-accessories/cooker-switch": "/images/products/cooker-switch.jpg",
  "conduit-pipes-wiring-accessories/outlet-switch": "/images/products/outlet-switch.jpg",
  "conduit-pipes-wiring-accessories/flex-outlet": "/images/products/flex-outlet.jpg",
  "conduit-pipes-wiring-accessories/double-pole-surface-switch": "/images/products/double-pole-surface-switch.jpg",
  "conduit-pipes-wiring-accessories/grid-mounting-frame": "/images/products/grid-mounting-frame.jpg",
  "conduit-pipes-wiring-accessories/module-switch-plate": "/images/products/module-switch-plate.jpg",
  "conduit-pipes-wiring-accessories/plate-assembly-moulded": "/images/products/plate-assembly-moulded.jpg",
  "conduit-pipes-wiring-accessories/blank-plate-aluminium-silver": "/images/products/blank-plate-aluminium-silver.jpg",
  "conduit-pipes-wiring-accessories/metal-clad-box": "/images/products/metal-clad-box.jpg",
  "conduit-pipes-wiring-accessories/shaver-socket": "/images/products/shaver-socket.jpg",
  "cable-management-jointing-led-lighting/resin-filled-lv-cable-joint-kit": "/images/products/resin-filled-lv-cable-joint-kit.jpg",
  "cable-management-jointing-led-lighting/cable-socks": "/images/products/cable-socks.jpg",
  "cable-management-jointing-led-lighting/pulling-spring": "/images/products/pulling-spring.jpg",
  "cable-management-jointing-led-lighting/festoon-c-channel": "/images/products/festoon-c-channel.jpg",
  "cable-management-jointing-led-lighting/festoon-middle-trolley": "/images/products/festoon-middle-trolley.jpg",
  "cable-management-jointing-led-lighting/festoon-support-bracket-hanger": "/images/products/festoon-support-bracket-hanger.jpg",
  "cable-management-jointing-led-lighting/festoon-track-joint": "/images/products/festoon-track-joint.jpg",
  "cable-management-jointing-led-lighting/drag-chain": "/images/products/drag-chain.jpg",
  "cable-management-jointing-led-lighting/pvc-shroud": "/images/products/pvc-shroud.jpg",
  "cable-management-jointing-led-lighting/boot-lug": "/images/products/boot-lug.jpg",
  "cable-management-jointing-led-lighting/end-sleeve": "/images/products/end-sleeve.jpg",
  "cable-management-jointing-led-lighting/heat-shrink-sleeve": "/images/products/heat-shrink-sleeve.jpg",
  "cable-management-jointing-led-lighting/cable-sleeve": "/images/products/cable-sleeve.jpg",
  "cable-management-jointing-led-lighting/fiber-sleeve-white": "/images/products/fiber-sleeve-white.jpg",
  "cable-management-jointing-led-lighting/soft-sleeve-yellow": "/images/products/soft-sleeve-yellow.jpg",
  "cable-management-jointing-led-lighting/heat-proof-ribbon-fiberglass": "/images/products/heat-proof-ribbon-fiberglass.jpg",
  "cable-management-jointing-led-lighting/ferrule-4mm": "/images/products/ferrule-4mm.jpg",
  "cable-management-jointing-led-lighting/pre-insulated-ring-terminal": "/images/products/pre-insulated-ring-terminal.jpg",
  "cable-management-jointing-led-lighting/spade-terminal-flag-type": "/images/products/spade-terminal-flag-type.jpg",
  "cable-management-jointing-led-lighting/female-terminal-fdd": "/images/products/female-terminal-fdd.jpg",
  "cable-management-jointing-led-lighting/female-terminal-fdfd": "/images/products/female-terminal-fdfd.jpg",
  "cable-management-jointing-led-lighting/connector-fldny-red": "/images/products/connector-fldny-red.jpg",
  "cable-management-jointing-led-lighting/pin-terminal-u-type": "/images/products/pin-terminal-u-type.jpg",
  "cable-management-jointing-led-lighting/wire-connector-6-way": "/images/products/wire-connector-6-way.jpg",
  "cable-management-jointing-led-lighting/screw-terminal-e5": "/images/products/screw-terminal-e5.jpg",
  "cable-management-jointing-led-lighting/terminal-block-screw-strip": "/images/products/terminal-block-screw-strip.jpg",
  "cable-management-jointing-led-lighting/end-cover-terminal-block": "/images/products/end-cover-terminal-block.jpg",
  "cable-management-jointing-led-lighting/ground-line-terminal": "/images/products/ground-line-terminal.jpg",
  "cable-management-jointing-led-lighting/fuse-terminal-rail-mounted": "/images/products/fuse-terminal-rail-mounted.jpg",
  "cable-management-jointing-led-lighting/waterproof-connector-straight": "/images/products/waterproof-connector-straight.jpg",
  "cable-management-jointing-led-lighting/cable-pulling-lubricant": "/images/products/cable-pulling-lubricant.jpg",
  "cable-management-jointing-led-lighting/waterproof-connector-t-way": "/images/products/waterproof-connector-t-way.jpg",
  "cable-management-jointing-led-lighting/waterproof-connector-4-core": "/images/products/waterproof-connector-4-core.jpg",
  "cable-management-jointing-led-lighting/metal-connector-male-female": "/images/products/metal-connector-male-female.jpg",
  "switchgear-protection-control/capacitor-duty-contactor": "/images/products/capacitor-duty-contactor.jpg",
  "switchgear-protection-control/auxiliary-contact-block": "/images/products/auxiliary-contact-block.jpg",
  "switchgear-protection-control/rotary-isolator": "/images/products/rotary-isolator.jpg",
  "switchgear-protection-control/switch-disconnector": "/images/products/switch-disconnector.jpg",
  "switchgear-protection-control/changeover-switch": "/images/products/changeover-switch.jpg",
  "switchgear-protection-control/reverse-forward-switch": "/images/products/reverse-forward-switch.jpg",
  "switchgear-protection-control/rotary-switch": "/images/products/rotary-switch.jpg",
  "switchgear-protection-control/db-box": "/images/products/db-box.jpg",
  "switchgear-protection-control/modular-db-box": "/images/products/modular-db-box.jpg",
  "switchgear-protection-control/elcb-box": "/images/products/elcb-box.jpg",
  "switchgear-protection-control/tpn-flush-db": "/images/products/tpn-flush-db.jpg",
  "switchgear-protection-control/tp-surface-db": "/images/products/tp-surface-db.jpg",
  "switchgear-protection-control/distribution-board-mdb": "/images/products/distribution-board-mdb.jpg",
  "switchgear-protection-control/meter-cabinet": "/images/products/meter-cabinet.jpg",
  "switchgear-protection-control/motor-circuit-breaker": "/images/products/motor-circuit-breaker.jpg",
  "switchgear-protection-control/overload-relay": "/images/products/overload-relay.jpg",
  "switchgear-protection-control/special-type-contactor": "/images/products/special-type-contactor.jpg",
  "switchgear-protection-control/isolator-end-cap": "/images/products/isolator-end-cap.jpg",
  "switchgear-protection-control/mccb": "/images/products/moulded-case-circuit-breaker-mccb.jpg",
  "switchgear-protection-control/compact-nsx160h-mccb": "/images/products/compact-nsx160h-mccb.jpg",
  "switchgear-protection-control/over-current-relay": "/images/products/over-current-relay.jpg",
  "switchgear-protection-control/under-voltage-relay": "/images/products/under-voltage-relay.jpg",
  "switchgear-protection-control/control-relay-with-base": "/images/products/control-relay-with-base.jpg",
  "switchgear-protection-control/relay-base": "/images/products/relay-base.jpg",
  "switchgear-protection-control/24-hour-timer": "/images/products/24-hour-timer.jpg",
  "switchgear-protection-control/timer-switch": "/images/products/timer-switch.jpg",
  "cable-management-jointing-led-lighting/3m-wire-pulling-lubricant": "/images/products/3m-wire-pulling-lubricant.jpg",
  "switchgear-protection-control/on-off-delay-timer": "/images/products/on-off-delay-timer.jpg",
  "switchgear-protection-control/star-delta-timer": "/images/products/star-delta-timer.jpg",
  "switchgear-protection-control/delay-unit": "/images/products/delay-unit.jpg",
  "switchgear-protection-control/push-button": "/images/products/push-button.jpg",
  "switchgear-protection-control/mushroom-push-button": "/images/products/mushroom-push-button.jpg",
  "switchgear-protection-control/emergency-stop-button": "/images/products/emergency-stop-button.jpg",
  "switchgear-protection-control/illuminated-push-button": "/images/products/illuminated-push-button.jpg",
  "switchgear-protection-control/on-off-push-station": "/images/products/on-off-push-station.jpg",
  "switchgear-protection-control/toggle-switch": "/images/products/toggle-switch.jpg",
  "switchgear-protection-control/power-push-button": "/images/products/power-push-button.jpg",
  "switchgear-protection-control/selector-switch": "/images/products/selector-switch.jpg",
  "switchgear-protection-control/control-box": "/images/products/control-box.jpg",
  "switchgear-protection-control/indicator-lamp": "/images/products/indicator-lamp.jpg",
  "switchgear-protection-control/led-pilot-light": "/images/products/led-pilot-light.jpg",
  "switchgear-protection-control/m22-led-indicator": "/images/products/m22-led-indicator.jpg",
  "switchgear-protection-control/m22-contact-block": "/images/products/m22-contact-block.jpg",
  "switchgear-protection-control/revolving-light": "/images/products/revolving-light.jpg",
  "switchgear-protection-control/rotary-warning-light": "/images/products/rotary-warning-light.jpg",
  "switchgear-protection-control/tower-light": "/images/products/tower-light.jpg",
  "switchgear-protection-control/mini-siren": "/images/products/mini-siren.jpg",
  "switchgear-protection-control/copper-busbar": "/images/products/copper-busbar.jpg",
  "switchgear-protection-control/pvc-busbar": "/images/products/pvc-busbar.jpg",
  "switchgear-protection-control/busbar-insulator": "/images/products/busbar-insulator.jpg",
  "switchgear-protection-control/busbar-sleeve": "/images/products/busbar-sleeve.jpg",
  "switchgear-protection-control/pin-type-busbar": "/images/products/pin-type-busbar.jpg",
  "switchgear-protection-control/u-type-busbar": "/images/products/u-type-busbar.jpg",
  "switchgear-protection-control/neutral-link": "/images/products/neutral-link.jpg",
  "switchgear-protection-control/earth-bar-link": "/images/products/earth-bar-link.jpg",
  "switchgear-protection-control/short-link": "/images/products/short-link.jpg",
  "switchgear-protection-control/wire-terminal-bar": "/images/products/wire-terminal-bar.jpg",
  "switchgear-protection-control/busbar-end-cap": "/images/products/busbar-end-cap.jpg",
  "switchgear-protection-control/current-collector-controller": "/images/products/current-collector-controller.jpg",
  "switchgear-protection-control/single-phase-single-pole-busbar": "/images/products/single-phase-single-pole-busbar.jpg",
  "switchgear-protection-control/bottle-fuse": "/images/products/bottle-fuse.jpg",
  "switchgear-protection-control/ceramic-fuse": "/images/products/ceramic-fuse.jpg",
  "switchgear-protection-control/glass-fuse": "/images/products/glass-fuse.jpg",
  "switchgear-protection-control/cartridge-fuse": "/images/products/cartridge-fuse.jpg",
  "switchgear-protection-control/fuse-link-10x38": "/images/products/fuse-link-10x38.jpg",
  "switchgear-protection-control/fuse-holder": "/images/products/fuse-holder.jpg",
  "switchgear-protection-control/fuse-carrier": "/images/products/fuse-carrier.jpg",
  "switchgear-protection-control/fuse-base": "/images/products/fuse-base.jpg",
  "switchgear-protection-control/nh-fuse": "/images/products/nh-fuse.jpg",
  "switchgear-protection-control/fuse-general": "/images/products/fuse-general.jpg",
  "switchgear-protection-control/fuse-connection-unit": "/images/products/fuse-connection-unit.jpg",
  "switchgear-protection-control/busbar-mounting-fuse": "/images/products/busbar-mounting-fuse.jpg",
  "switchgear-protection-control/control-transformer": "/images/products/control-transformer.jpg",
  "switchgear-protection-control/transformer": "/images/products/transformer.jpg",
  "switchgear-protection-control/smps-power-supply": "/images/products/smps-power-supply.jpg",
  "switchgear-protection-control/dc-power-supply": "/images/products/dc-power-supply.jpg",
  "switchgear-protection-control/capacitor": "/images/products/capacitor.jpg",
  "switchgear-protection-control/battery": "/images/products/battery.jpg",
  "switchgear-protection-control/dual-capacitor": "/images/products/dual-capacitor.jpg",
  "switchgear-protection-control/pf-controller": "/images/products/pf-controller.jpg",
  "switchgear-protection-control/pf-regulator": "/images/products/pf-regulator.jpg",
  "switchgear-protection-control/hour-meter": "/images/products/hour-meter.jpg",
  "switchgear-protection-control/current-transformer": "/images/products/current-transformer.jpg",
  "switchgear-protection-control/limit-switch": "/images/products/limit-switch.jpg",
  "switchgear-protection-control/micro-limit-switch": "/images/products/micro-limit-switch.jpg",
  "switchgear-protection-control/light-motion-sensor": "/images/products/light-motion-sensor.jpg",
  "switchgear-protection-control/float-switch": "/images/products/float-switch.jpg",
  "switchgear-protection-control/pressure-switch": "/images/products/pressure-switch.jpg",
  "switchgear-protection-control/dol-starter": "/images/products/dol-starter.jpg",
  "switchgear-protection-control/din-rail": "/images/products/din-rail.jpg",
  "switchgear-protection-control/carrier-strip": "/images/products/carrier-strip.jpg",
  "switchgear-protection-control/panel-cooling-fan": "/images/products/panel-cooling-fan.jpg",
  "switchgear-protection-control/cooling-fan-grill": "/images/products/cooling-fan-grill.jpg",
  "switchgear-protection-control/potentiometer": "/images/products/potentiometer.jpg",
  "lighting-lamps/round-led-panel-light": "/images/products/round-led-panel-light.jpg",
  "lighting-lamps/surface-led-panel": "/images/products/surface-led-panel.jpg",
  "lighting-lamps/60x60-led-panel-frame": "/images/products/60x60-led-panel-frame.jpg",
  "switchgear-protection-control/hrc-fuse": "/images/products/hrc-fuse.jpg",
  "switchgear-protection-control/ups": "/images/products/ups.jpg",
  "switchgear-protection-control/power-capacitor": "/images/products/power-capacitor.jpg",
  "switchgear-protection-control/energy-meter": "/images/products/energy-meter.jpg",
  "switchgear-protection-control/sensor": "/images/products/sensor.jpg",
  "switchgear-protection-control/remote-control-switch": "/images/products/remote-control-switch.jpg",
  "switchgear-protection-control/vfd-altivar-atv212": "/images/products/vfd-drive.jpg",
  "lighting-lamps/led-ceiling-globe-light": "/images/products/led-ceiling-globe-light.jpg",
  "lighting-lamps/smd-led-floodlight": "/images/products/smd-led-floodlight.jpg",
  "lighting-lamps/floodlight-dl": "/images/products/floodlight-dl.jpg",
  "lighting-lamps/solar-floodlight": "/images/products/solar-floodlight.jpg",
  "lighting-lamps/led-high-bay-light": "/images/products/led-high-bay-light.jpg",
  "lighting-lamps/metal-halide-high-bay-light": "/images/products/metal-halide-high-bay-light.jpg",
  "lighting-lamps/portable-site-light": "/images/products/portable-site-light.jpg",
  "lighting-lamps/bulkhead-fitting": "/images/products/bulkhead-fitting.jpg",
  "lighting-lamps/garden-light": "/images/products/garden-light.jpg",
  "lighting-lamps/bollard-light": "/images/products/bollard-light.jpg",
  "lighting-lamps/solar-garden-light": "/images/products/solar-garden-light.jpg",
  "lighting-lamps/underwater-led-strip-light": "/images/products/underwater-led-strip-light.jpg",
  "lighting-lamps/led-downlight": "/images/products/led-downlight.jpg",
  "lighting-lamps/gu10-spot": "/images/products/gu10-spot.jpg",
  "lighting-lamps/track-light": "/images/products/track-light.jpg",
  "lighting-lamps/starter": "/images/products/fluorescent-starter-s10.jpg",
  "lighting-lamps/spot-lamp": "/images/products/spot-lamp.jpg",
  "lighting-lamps/mirror-light": "/images/products/mirror-light.jpg",
  "lighting-lamps/table-lamp-dimmer": "/images/products/table-lamp-dimmer.jpg",
  "lighting-lamps/led-lamp-e27": "/images/products/led-lamp-e27.jpg",
  "lighting-lamps/gls-lamp": "/images/products/gls-lamp.jpg",
  "lighting-lamps/halogen-lamp": "/images/products/halogen-lamp.jpg",
  "lighting-lamps/metal-halide-hql-lamp": "/images/products/metal-halide-hql-lamp.jpg",
  "lighting-lamps/ballast": "/images/products/ballast.jpg",
  "lighting-lamps/led-driver": "/images/products/led-driver.jpg",
  "lighting-lamps/led-strip-light": "/images/products/led-strip-light.jpg",
  "lighting-lamps/exit-light": "/images/products/exit-light.jpg",
  "lighting-lamps/emergency-light": "/images/products/emergency-light.jpg",
  "lighting-lamps/mr16-fitting-holder": "/images/products/mr16-fitting-holder.jpg",
};

const categoriesWithFeatured = new Set([
  "control-screen-specialty-cables",
  "cable-termination",
  "switchgear-protection-control",
  "lighting-lamps",
  "plumbing-pipes-fittings",
  "hardware-fasteners-fixings",
]);

export const productCategories: ProductCategory[] = inputs.map((c) => ({
  id: c.slug,
  number: c.number,
  name: c.name,
  slug: c.slug,
  href: `/products/${c.slug}`,
  image: categoryImages[c.slug] ?? imgConstruction,
  icon: categoryIcons[c.slug] ?? "Package",
  shortDescription: c.shortDescription,
  description: c.description,
  ctaLabel: "View Products",
  featured: categoriesWithFeatured.has(c.slug),
  subcategories: c.subcategories.map((s) => ({
    id: `${c.slug}-${s.slug}`,
    name: s.name,
    slug: s.slug,
    categorySlug: c.slug,
    description: s.description ?? null,
  })),
}));

const categoryBySlug = new Map(productCategories.map((c) => [c.slug, c]));

function buildProduct(cat: CategoryInput, p: ProductInput): Product {
  const subName =
    cat.subcategories.find((s) => s.slug === p.subcategory)?.name ?? p.subcategory;
  const brands = p.brands ?? [];
  const specs = [...(p.specifications ?? [])];
  const addSpec = (label: string, value?: string) => {
    if (value && !specs.some((s) => s.label.toLowerCase() === label.toLowerCase())) {
      specs.push({ label, value });
    }
  };
  addSpec("Material", p.material);
  addSpec("Colour", p.colour);
  addSpec("Packaging", p.packaging);
  if (p.standards?.length) addSpec("Standards", p.standards.join(", "));
  if (p.productCode) addSpec("Product code", p.productCode);
  return {
    id: `${cat.slug}-${p.slug}`,
    name: p.name,
    slug: p.slug,
    category: cat.slug,
    categorySlug: cat.slug,
    categoryName: cat.name,
    subcategory: p.subcategory,
    subcategoryName: subName,
    productType: subName,
    productCode: p.productCode ?? null,
    brand: brands[0] ?? null,
    brands,
    image: productImages[`${cat.slug}/${p.slug}`] ?? null,
    gallery: [],
    shortDescription: p.shortDescription,
    description: p.description ?? p.shortDescription,
    features: p.features ?? [],
    specifications: specs,
    sizes: p.sizes ?? [],
    variants: p.sizes ?? [],
    material: p.material ?? null,
    colour: p.colour ?? null,
    packaging: p.packaging ?? null,
    applications: p.applications ?? [],
    standards: p.standards ?? [],
    featured: p.featured ?? false,
    keywords: p.keywords ?? [],
  };
}

export const products: Product[] = inputs.flatMap((cat) =>
  cat.products.map((p) => buildProduct(cat, p)),
);

const productByKey = new Map(products.map((p) => [`${p.categorySlug}/${p.slug}`, p]));

export const getCategory = (slug: string) => categoryBySlug.get(slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const getProduct = (categorySlug: string, productSlug: string) =>
  productByKey.get(`${categorySlug}/${productSlug}`);

export const featuredProducts = products.filter((p) => p.featured);

export const productCount = (slug: string) =>
  products.filter((p) => p.categorySlug === slug).length;

export const productPath = (p: Pick<Product, "categorySlug" | "slug">) =>
  `/products/${p.categorySlug}/${p.slug}`;

export const relatedProducts = (p: Product, limit = 4) =>
  products
    .filter(
      (x) =>
        x.id !== p.id &&
        (x.subcategory === p.subcategory || x.categorySlug === p.categorySlug),
    )
    .sort((a, b) =>
      a.subcategory === p.subcategory ? -1 : b.subcategory === p.subcategory ? 1 : 0,
    )
    .slice(0, limit);

/** Free-text search across name, code, brand, category, specs and keywords. */
export function searchProducts(query: string, list: Product[] = products) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  const terms = q.split(/\s+/);
  return list.filter((p) => {
    const haystack = [
      p.name,
      p.productCode ?? "",
      p.categoryName,
      p.subcategoryName,
      p.shortDescription,
      p.brands.join(" "),
      p.keywords.join(" "),
      p.sizes.join(" "),
      p.applications.join(" "),
      p.specifications.map((s) => `${s.label} ${s.value}`).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}
