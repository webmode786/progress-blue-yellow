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
import imgControlCable from "@/assets/products/control-cable-ysly-jz.jpg";
import imgFlatCable from "@/assets/products/flat-cable-h05vvh6-f-h07vvh6-f.jpg";
import imgSiliconeCable from "@/assets/products/silicone-cable-fg4-2.jpg";
import imgMulticoreSiliconeCable from "@/assets/products/multicore-silicone-cable-fg4og4-2.jpg";
import imgArmouredCable from "@/assets/products/armoured-cables-lv-range.jpg";
import imgMetalEnclosure from "@/assets/products/metal-enclosures.jpg";
import imgBimetallicLugs from "@/assets/products/bimetallic-cable-lugs.jpg";
import imgBwGlands from "@/assets/products/bw-cable-glands.jpg";
import imgMcb from "@/assets/products/miniature-circuit-breaker-mcb.jpg";
import imgPvcConduit from "@/assets/products/electrical-pvc-conduit-pipe.jpg";
import imgContactor from "@/assets/products/magnetic-contactor.jpg";
import imgLedPanel from "@/assets/products/square-recessed-led-panel.jpg";
import imgFloodlight from "@/assets/products/led-floodlight.jpg";
import imgLedBulb from "@/assets/products/led-bulb-e27.jpg";
import imgExhaustFan from "@/assets/products/exhaust-fan-square.jpg";
import imgUpvcPipe from "@/assets/products/upvc-pipe.jpg";
import imgPprPipe from "@/assets/products/ppr-pipe.jpg";
import imgWaterHeater from "@/assets/products/electric-storage-water-heater.jpg";
import imgGiBolt from "@/assets/products/gi-bolt.jpg";
import imgHrcFuse from "@/assets/products/hrc-fuse.jpg";
import imgUps from "@/assets/products/ups.jpg";
import imgPowerCapacitor from "@/assets/products/power-capacitor.jpg";
import imgEnergyMeter from "@/assets/products/energy-meter.jpg";
import imgSensor from "@/assets/products/sensor.jpg";
import imgRemoteControlSwitch from "@/assets/products/remote-control-switch.jpg";
import imgVfdDrive from "@/assets/products/vfd-drive.jpg";
import imgLedCeilingGlobe from "@/assets/products/led-ceiling-globe-light.jpg";
import imgSmdLedFloodlight from "@/assets/products/smd-led-floodlight.jpg";
import imgFloodlightDl from "@/assets/products/floodlight-dl.jpg";
import imgSolarFloodlight from "@/assets/products/solar-floodlight.jpg";
import imgLedHighBayLight from "@/assets/products/led-high-bay-light.jpg";
import imgMetalHalideHighBayLight from "@/assets/products/metal-halide-high-bay-light.jpg";
import imgPortableSiteLight from "@/assets/products/portable-site-light.jpg";
import imgBulkheadFitting from "@/assets/products/bulkhead-fitting.jpg";
import imgGardenLight from "@/assets/products/garden-light.jpg";
import imgBollardLight from "@/assets/products/bollard-light.jpg";
import imgSolarGardenLight from "@/assets/products/solar-garden-light.jpg";
import imgUnderwaterLedStripLight from "@/assets/products/underwater-led-strip-light.jpg";
import imgLedDownlight from "@/assets/products/led-downlight.jpg";
import imgSafetyShoes from "@/assets/products/safety-shoes.jpg";
import imgEarthRod from "@/assets/products/earth-rod.jpg";
import imgRj45 from "@/assets/products/rj45-connector.jpg";
import imgGiConduit from "@/assets/products/gi-conduit-pipe.jpg";
import imgCableTray from "@/assets/products/gi-cable-tray.jpg";
import imgCeilingFan from "@/assets/products/ceiling-fan.jpg";
import imgHandGloves from "@/assets/products/hand-gloves.jpg";
import imgPlywood from "@/assets/products/plywood.jpg";
import imgScrewdriver from "@/assets/products/screwdriver.jpg";
import imgLadder from "@/assets/products/ladder.jpg";
import imgCrimpingTool from "@/assets/products/crimping-tool.jpg";
import imgSiliconeSealant from "@/assets/products/silicone-sealant.jpg";
import imgInsulationTape from "@/assets/products/insulation-tape.jpg";
import imgDrillBit from "@/assets/products/steel-drill-bit.jpg";
import imgScreenCable from "@/assets/products/screen-cable-liycy.jpg";
import imgRubberCable from "@/assets/products/rubber-cable-h07rn-f.jpg";
import imgPvcFlexCable from "@/assets/products/multicore-pvc-flexible-cable-h05vv-f.jpg";
import imgSsEnclosure from "@/assets/products/stainless-steel-enclosures.jpg";
import imgPanelTrunking from "@/assets/products/slotted-panel-trunking.jpg";
import imgNylonTies from "@/assets/products/nylon-cable-ties.jpg";
import imgSsTies from "@/assets/products/stainless-steel-cable-ties.jpg";
import imgSpiralWrap from "@/assets/products/spiral-wrap.jpg";
import imgCopperLugs from "@/assets/products/copper-cable-lugs.jpg";
import imgCwGlands from "@/assets/products/cw-cable-glands.jpg";
import imgEmtConduit from "@/assets/products/emt-conduit-pipe.jpg";
import imgGiFlexConduit from "@/assets/products/gi-flexible-conduit.jpg";
import imgConduitBend from "@/assets/products/conduit-bend.jpg";
import imgGiCircularBox from "@/assets/products/gi-circular-box.jpg";
import imgGiSaddle from "@/assets/products/gi-saddle.jpg";
import imgGiJunctionBox from "@/assets/products/gi-junction-box.jpg";
import imgPvcJunctionBox from "@/assets/products/pvc-junction-box.jpg";
import imgGrommet from "@/assets/products/grommet.jpg";
import imgWeatherproofCover from "@/assets/products/weatherproof-cover.jpg";
import imgBendingSpring from "@/assets/products/bending-spring.jpg";
import imgGiElbow from "@/assets/products/gi-elbow.jpg";
import imgGiAdaptor from "@/assets/products/gi-adaptor.jpg";
import imgBrassAdaptor from "@/assets/products/brass-adaptor.jpg";
import imgSwivelAdaptor from "@/assets/products/mechanical-swivel-adaptor-nickel.jpg";
import imgGiCoupler from "@/assets/products/gi-coupler.jpg";
import imgGiCovers from "@/assets/products/gi-covers.jpg";
import imgLockNut from "@/assets/products/lock-nut-check-nut.jpg";
import imgGiTee from "@/assets/products/gi-tee.jpg";
import imgReducerBush from "@/assets/products/reducer-bush.jpg";
import imgBrassBush from "@/assets/products/brass-bush.jpg";
import imgEmtClamp from "@/assets/products/emt-two-hole-clamp.jpg";
import imgRClamp from "@/assets/products/r-clamp.jpg";
import imgBandItStrap from "@/assets/products/band-it-strap-carbon-steel.jpg";
import imgPvcFlexiblePipe from "@/assets/products/pvc-flexible-pipe.jpg";
import imgPvcBox from "@/assets/products/pvc-box.jpg";
import imgLoopInBox from "@/assets/products/loop-in-box.jpg";
import imgPvcConnector from "@/assets/products/pvc-connector.jpg";
import imgPvcClip from "@/assets/products/pvc-clip.jpg";
import imgExpansionCoupler from "@/assets/products/expansion-coupler-dd.jpg";
import imgEndCap from "@/assets/products/end-cap.jpg";
import imgLiftPendant from "@/assets/products/lift-2s-pendant-cable.jpg";
import imgSiliconeSleeves from "@/assets/products/silicone-fibreglass-sleeves.jpg";
import imgDieCastConnectors from "@/assets/products/heavy-duty-die-cast-connectors.jpg";
import imgCableMarkers from "@/assets/products/cable-markers.jpg";
import imgMetalIronPlugs from "@/assets/products/metal-iron-plugs.jpg";
import imgPorcelainConnectors from "@/assets/products/porcelain-connectors.jpg";
import imgLugsBlade from "@/assets/products/insulated-lugs-blade.jpg";
import imgLugsPin from "@/assets/products/insulated-lugs-pin.jpg";
import imgLugsFork from "@/assets/products/insulated-lugs-fork.jpg";
import imgLugsRing from "@/assets/products/insulated-lugs-ring.jpg";
import imgPinLugsFerrules from "@/assets/products/pin-lugs-copper-ferrules.jpg";
import imgE1wGlands from "@/assets/products/e1w-cable-glands.jpg";
import imgA1a2Glands from "@/assets/products/a1-a2-cable-glands.jpg";
import imgNickelBrassGlands from "@/assets/products/nickel-brass-cable-glands.jpg";
import imgNylonGlands from "@/assets/products/pvc-nylon-cable-glands.jpg";
import imgMobilePlugSocket from "@/assets/products/mobile-plug-socket.jpg";
import imgWallSocketPlug from "@/assets/products/wall-type-socket-plug.jpg";
import imgPanelSocket from "@/assets/products/panel-type-socket.jpg";
import imgExtensionPlug from "@/assets/products/extension-plug-3way.jpg";
import imgInterlockSocket from "@/assets/products/interlock-socket-32a.jpg";
import imgMaleFemaleIsolator from "@/assets/products/male-female-isolator-32a.jpg";
import imgRccb from "@/assets/products/residual-current-circuit-breaker-rccb.jpg";
import imgElcb from "@/assets/products/earth-leakage-circuit-breaker-elcb.jpg";
import imgMccb from "@/assets/products/moulded-case-circuit-breaker-mccb.jpg";
import imgIsolator from "@/assets/products/isolator-switch.jpg";
import imgDistributionBoard from "@/assets/products/distribution-board.jpg";
import imgRailConnectors from "@/assets/products/rail-connectors.jpg";
import imgThreadedPlug from "@/assets/products/threaded-plug.jpg";
import imgCookerSwitch from "@/assets/products/cooker-switch.jpg";
import imgOutletSwitch from "@/assets/products/outlet-switch.jpg";
import imgFlexOutlet from "@/assets/products/flex-outlet.jpg";
import imgDoublePoleSurfaceSwitch from "@/assets/products/double-pole-surface-switch.jpg";
import imgGridMountingFrame from "@/assets/products/grid-mounting-frame.jpg";
import imgModuleSwitchPlate from "@/assets/products/module-switch-plate.jpg";
import imgPlateAssemblyMoulded from "@/assets/products/plate-assembly-moulded.jpg";
import imgBlankPlateAluminiumSilver from "@/assets/products/blank-plate-aluminium-silver.jpg";
import imgMetalCladBox from "@/assets/products/metal-clad-box.jpg";
import imgShaverSocket from "@/assets/products/shaver-socket.jpg";
import imgResinJointKit from "@/assets/products/resin-filled-lv-cable-joint-kit.jpg";
import imgCableSocks from "@/assets/products/cable-socks.jpg";
import imgPullingSpring from "@/assets/products/pulling-spring.jpg";
import imgFestoonCChannel from "@/assets/products/festoon-c-channel.jpg";
import imgFestoonMiddleTrolley from "@/assets/products/festoon-middle-trolley.jpg";
import imgFestoonSupportBracket from "@/assets/products/festoon-support-bracket-hanger.jpg";
import imgFestoonTrackJoint from "@/assets/products/festoon-track-joint.jpg";
import imgDragChain from "@/assets/products/drag-chain.jpg";
import imgPvcShroud from "@/assets/products/pvc-shroud.jpg";
import imgBootLug from "@/assets/products/boot-lug.jpg";
import imgEndSleeve from "@/assets/products/end-sleeve.jpg";
import imgHeatShrinkSleeve from "@/assets/products/heat-shrink-sleeve.jpg";
import imgCableSleeve from "@/assets/products/cable-sleeve.jpg";
import imgFiberSleeveWhite from "@/assets/products/fiber-sleeve-white.jpg";
import imgSoftSleeveYellow from "@/assets/products/soft-sleeve-yellow.jpg";
import imgHeatProofRibbonFiberglass from "@/assets/products/heat-proof-ribbon-fiberglass.jpg";
import imgFerrule4mm from "@/assets/products/ferrule-4mm.jpg";
import imgPreInsulatedRingTerminal from "@/assets/products/pre-insulated-ring-terminal.jpg";
import imgSpadeTerminalFlagType from "@/assets/products/spade-terminal-flag-type.jpg";
import imgFemaleTerminalFdd from "@/assets/products/female-terminal-fdd.jpg";
import imgFemaleTerminalFdfd from "@/assets/products/female-terminal-fdfd.jpg";
import imgConnectorFldnyRed from "@/assets/products/connector-fldny-red.jpg";
import imgPinTerminalUType from "@/assets/products/pin-terminal-u-type.jpg";
import imgWireConnector6Way from "@/assets/products/wire-connector-6-way.jpg";
import imgScrewTerminalE5 from "@/assets/products/screw-terminal-e5.jpg";
import imgTerminalBlockScrewStrip from "@/assets/products/terminal-block-screw-strip.jpg";
import imgEndCoverTerminalBlock from "@/assets/products/end-cover-terminal-block.jpg";
import imgGroundLineTerminal from "@/assets/products/ground-line-terminal.jpg";
import imgFuseTerminalRailMounted from "@/assets/products/fuse-terminal-rail-mounted.jpg";
import imgWaterproofConnectorStraight from "@/assets/products/waterproof-connector-straight.jpg";
import imgCablePullingLubricant from "@/assets/products/cable-pulling-lubricant.jpg";
import imgWaterproofConnectorTWay from "@/assets/products/waterproof-connector-t-way.jpg";
import imgWaterproofConnector4Core from "@/assets/products/waterproof-connector-4-core.jpg";
import imgMetalConnectorMaleFemale from "@/assets/products/metal-connector-male-female.jpg";
import imgCapacitorDutyContactor from "@/assets/products/capacitor-duty-contactor.jpg";
import imgAuxiliaryContactBlock from "@/assets/products/auxiliary-contact-block.jpg";
import imgRotaryIsolator from "@/assets/products/rotary-isolator.jpg";
import imgSwitchDisconnector from "@/assets/products/switch-disconnector.jpg";
import imgChangeoverSwitch from "@/assets/products/changeover-switch.jpg";
import imgReverseForwardSwitch from "@/assets/products/reverse-forward-switch.jpg";
import imgRotarySwitch from "@/assets/products/rotary-switch.jpg";
import imgDbBox from "@/assets/products/db-box.jpg";
import imgModularDbBox from "@/assets/products/modular-db-box.jpg";
import imgElcbBox from "@/assets/products/elcb-box.jpg";
import imgTpnFlushDb from "@/assets/products/tpn-flush-db.jpg";
import imgTpSurfaceDb from "@/assets/products/tp-surface-db.jpg";
import imgDistributionBoardMdb from "@/assets/products/distribution-board-mdb.jpg";
import imgMeterCabinet from "@/assets/products/meter-cabinet.jpg";
import imgMotorCircuitBreaker from "@/assets/products/motor-circuit-breaker.jpg";
import imgOverloadRelay from "@/assets/products/overload-relay.jpg";
import imgSpecialTypeContactor from "@/assets/products/special-type-contactor.jpg";
import imgIsolatorEndCap from "@/assets/products/isolator-end-cap.jpg";
import imgCompactNsx160hMccb from "@/assets/products/compact-nsx160h-mccb.jpg";
import imgOverCurrentRelay from "@/assets/products/over-current-relay.jpg";
import imgUnderVoltageRelay from "@/assets/products/under-voltage-relay.jpg";
import imgControlRelayWithBase from "@/assets/products/control-relay-with-base.jpg";
import imgRelayBase from "@/assets/products/relay-base.jpg";
import img24HourTimer from "@/assets/products/24-hour-timer.jpg";
import imgTimerSwitch from "@/assets/products/timer-switch.jpg";
import img3mWirePullingLubricant from "@/assets/products/3m-wire-pulling-lubricant.jpg";
import imgOnOffDelayTimer from "@/assets/products/on-off-delay-timer.jpg";
import imgStarDeltaTimer from "@/assets/products/star-delta-timer.jpg";
import imgDelayUnit from "@/assets/products/delay-unit.jpg";
import imgPushButton from "@/assets/products/push-button.jpg";
import imgMushroomPushButton from "@/assets/products/mushroom-push-button.jpg";
import imgEmergencyStopButton from "@/assets/products/emergency-stop-button.jpg";
import imgIlluminatedPushButton from "@/assets/products/illuminated-push-button.jpg";
import imgOnOffPushStation from "@/assets/products/on-off-push-station.jpg";
import imgToggleSwitch from "@/assets/products/toggle-switch.jpg";
import imgPowerPushButton from "@/assets/products/power-push-button.jpg";
import imgSelectorSwitch from "@/assets/products/selector-switch.jpg";
import imgControlBox from "@/assets/products/control-box.jpg";
import imgIndicatorLamp from "@/assets/products/indicator-lamp.jpg";
import imgLedPilotLight from "@/assets/products/led-pilot-light.jpg";
import imgM22LedIndicator from "@/assets/products/m22-led-indicator.jpg";
import imgM22ContactBlock from "@/assets/products/m22-contact-block.jpg";
import imgRevolvingLight from "@/assets/products/revolving-light.jpg";
import imgRotaryWarningLight from "@/assets/products/rotary-warning-light.jpg";
import imgTowerLight from "@/assets/products/tower-light.jpg";
import imgMiniSiren from "@/assets/products/mini-siren.jpg";
import imgCopperBusbar from "@/assets/products/copper-busbar.jpg";
import imgPvcBusbar from "@/assets/products/pvc-busbar.jpg";
import imgBusbarInsulator from "@/assets/products/busbar-insulator.jpg";
import imgBusbarSleeve from "@/assets/products/busbar-sleeve.jpg";
import imgPinTypeBusbar from "@/assets/products/pin-type-busbar.jpg";
import imgUTypeBusbar from "@/assets/products/u-type-busbar.jpg";
import imgNeutralLink from "@/assets/products/neutral-link.jpg";
import imgEarthBarLink from "@/assets/products/earth-bar-link.jpg";
import imgShortLink from "@/assets/products/short-link.jpg";
import imgWireTerminalBar from "@/assets/products/wire-terminal-bar.jpg";
import imgBusbarEndCap from "@/assets/products/busbar-end-cap.jpg";
import imgCurrentCollectorController from "@/assets/products/current-collector-controller.jpg";
import imgSinglePhaseSinglePoleBusbar from "@/assets/products/single-phase-single-pole-busbar.jpg";
import imgBottleFuse from "@/assets/products/bottle-fuse.jpg";
import imgCeramicFuse from "@/assets/products/ceramic-fuse.jpg";
import imgGlassFuse from "@/assets/products/glass-fuse.jpg";
import imgCartridgeFuse from "@/assets/products/cartridge-fuse.jpg";
import imgFuseLink10x38 from "@/assets/products/fuse-link-10x38.jpg";
import imgFuseHolder from "@/assets/products/fuse-holder.jpg";
import imgFuseCarrier from "@/assets/products/fuse-carrier.jpg";
import imgFuseBase from "@/assets/products/fuse-base.jpg";
import imgNhFuse from "@/assets/products/nh-fuse.jpg";
import imgFuseGeneral from "@/assets/products/fuse-general.jpg";
import imgFuseConnectionUnit from "@/assets/products/fuse-connection-unit.jpg";
import imgBusbarMountingFuse from "@/assets/products/busbar-mounting-fuse.jpg";
import imgControlTransformer from "@/assets/products/control-transformer.jpg";
import imgTransformer from "@/assets/products/transformer.jpg";
import imgSmpsPowerSupply from "@/assets/products/smps-power-supply.jpg";
import imgDcPowerSupply from "@/assets/products/dc-power-supply.jpg";
import imgCapacitor from "@/assets/products/capacitor.jpg";
import imgBattery from "@/assets/products/battery.jpg";
import imgDualCapacitor from "@/assets/products/dual-capacitor.jpg";
import imgPfController from "@/assets/products/pf-controller.jpg";
import imgPfRegulator from "@/assets/products/pf-regulator.jpg";
import imgHourMeter from "@/assets/products/hour-meter.jpg";
import imgCurrentTransformer from "@/assets/products/current-transformer.jpg";
import imgLimitSwitch from "@/assets/products/limit-switch.jpg";
import imgMicroLimitSwitch from "@/assets/products/micro-limit-switch.jpg";
import imgLightMotionSensor from "@/assets/products/light-motion-sensor.jpg";
import imgFloatSwitch from "@/assets/products/float-switch.jpg";
import imgPressureSwitch from "@/assets/products/pressure-switch.jpg";
import imgDolStarter from "@/assets/products/dol-starter.jpg";
import imgDinRail from "@/assets/products/din-rail.jpg";
import imgCarrierStrip from "@/assets/products/carrier-strip.jpg";
import imgPanelCoolingFan from "@/assets/products/panel-cooling-fan.jpg";
import imgCoolingFanGrill from "@/assets/products/cooling-fan-grill.jpg";
import imgPotentiometer from "@/assets/products/potentiometer.jpg";
import imgRoundLedPanelLight from "@/assets/products/round-led-panel-light.jpg";
import imgSurfaceLedPanel from "@/assets/products/surface-led-panel.jpg";
import img60x60LedPanelFrame from "@/assets/products/60x60-led-panel-frame.jpg";
import gu10SpotAsset from "@/assets/products/gu10-spot.jpg.asset.json";
import trackLightAsset from "@/assets/products/track-light.jpg.asset.json";
import mr16FittingHolderAsset from "@/assets/products/mr16-fitting-holder.jpg.asset.json";
import networkingFaceplateAsset from "@/assets/products/networking-faceplate.jpg.asset.json";
import networkingRj11Asset from "@/assets/products/networking-rj11-connector.jpg.asset.json";
import networkingPowerCableAsset from "@/assets/products/networking-power-cable.jpg.asset.json";
import networkingDataSocketAsset from "@/assets/products/networking-data-telephone-socket.jpg.asset.json";
import groheTempestaAsset from "@/assets/products/grohe-tempesta-100-shower-head.jpg.asset.json";
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
  "control-screen-specialty-cables/control-cable-ysly-jz": imgControlCable,
  "control-screen-specialty-cables/flat-cable-h05vvh6-f-h07vvh6-f": imgFlatCable,
  "silicone-high-temperature-cables/silicone-cable-fg4-2": imgSiliconeCable,
  "silicone-high-temperature-cables/multicore-silicone-cable-fg4og4-2":
    imgMulticoreSiliconeCable,
  "rubber-pvc-armoured-cables/armoured-cables-lv-range": imgArmouredCable,
  "enclosures-panel-accessories/metal-enclosures": imgMetalEnclosure,
  "cable-termination/bimetallic-cable-lugs": imgBimetallicLugs,
  "cable-termination/bw-cable-glands": imgBwGlands,
  "industrial-plugs-sockets-switchgear/miniature-circuit-breaker-mcb": imgMcb,
  "conduit-pipes-wiring-accessories/electrical-pvc-conduit-pipe": imgPvcConduit,
  "switchgear-protection-control/magnetic-contactor": imgContactor,
  "lighting-lamps/square-recessed-led-panel": imgLedPanel,
  "lighting-lamps/led-floodlight": imgFloodlight,
  "lighting-lamps/led-bulb-e27": imgLedBulb,
  "fans-ventilation-hvac/exhaust-fan-square": imgExhaustFan,
  "plumbing-pipes-fittings/upvc-pipe": imgUpvcPipe,
  "plumbing-pipes-fittings/ppr-pipe": imgPprPipe,
  "sanitaryware-bathroom-water-heating/electric-storage-water-heater": imgWaterHeater,
  "hardware-fasteners-fixings/gi-bolt": imgGiBolt,
  "ppe-safety-site-industrial-supplies/safety-shoes": imgSafetyShoes,
  "earthing-lightning-protection/earth-rod": imgEarthRod,
  "networking-communication/rj45-connector": imgRj45,
  "networking-communication/faceplate": networkingFaceplateAsset.url,
  "networking-communication/rj11-connector": networkingRj11Asset.url,
  "networking-communication/power-cable": networkingPowerCableAsset.url,
  "networking-communication/data-telephone-socket": networkingDataSocketAsset.url,
  "sanitaryware-bathroom-water-heating/shower-head": groheTempestaAsset.url,
  "conduit-pipes-wiring-accessories/gi-conduit-pipe": imgGiConduit,
  "cable-management-jointing-led-lighting/gi-ss-cable-tray-trunking-unistrut-channel":
    imgCableTray,
  "fans-ventilation-hvac/ceiling-fan": imgCeilingFan,
  "ppe-safety-site-industrial-supplies/hand-gloves": imgHandGloves,
  "building-materials-paints-chemicals/plywood": imgPlywood,
  "building-materials-paints-chemicals/silicone-sealant": imgSiliconeSealant,
  "building-materials-paints-chemicals/insulation-tape": imgInsulationTape,
  "tools-equipment/screwdriver": imgScrewdriver,
  "tools-equipment/ladder": imgLadder,
  "tools-equipment/crimping-tool": imgCrimpingTool,
  "tools-equipment/steel-drill-bit": imgDrillBit,
  "control-screen-specialty-cables/screen-cable-liycy": imgScreenCable,
  "rubber-pvc-armoured-cables/rubber-cable-h07rn-f": imgRubberCable,
  "rubber-pvc-armoured-cables/multicore-pvc-flexible-cable-h05vv-f": imgPvcFlexCable,
  "enclosures-panel-accessories/stainless-steel-enclosures": imgSsEnclosure,
  "enclosures-panel-accessories/slotted-panel-trunking": imgPanelTrunking,
  "enclosures-panel-accessories/nylon-cable-ties": imgNylonTies,
  "enclosures-panel-accessories/stainless-steel-cable-ties": imgSsTies,
  "enclosures-panel-accessories/spiral-wrap": imgSpiralWrap,
  "cable-termination/copper-cable-lugs": imgCopperLugs,
  "cable-termination/cw-cable-glands": imgCwGlands,
  "conduit-pipes-wiring-accessories/emt-conduit-pipe": imgEmtConduit,
  "conduit-pipes-wiring-accessories/gi-flexible-conduit": imgGiFlexConduit,
  "conduit-pipes-wiring-accessories/conduit-bend": imgConduitBend,
  "conduit-pipes-wiring-accessories/gi-circular-box": imgGiCircularBox,
  "conduit-pipes-wiring-accessories/gi-saddle": imgGiSaddle,
  "conduit-pipes-wiring-accessories/gi-junction-box": imgGiJunctionBox,
  "conduit-pipes-wiring-accessories/pvc-junction-box": imgPvcJunctionBox,
  "conduit-pipes-wiring-accessories/grommet": imgGrommet,
  "conduit-pipes-wiring-accessories/weatherproof-cover": imgWeatherproofCover,
  "conduit-pipes-wiring-accessories/bending-spring": imgBendingSpring,
  "conduit-pipes-wiring-accessories/gi-elbow": imgGiElbow,
  "conduit-pipes-wiring-accessories/gi-adaptor": imgGiAdaptor,
  "conduit-pipes-wiring-accessories/brass-adaptor": imgBrassAdaptor,
  "conduit-pipes-wiring-accessories/mechanical-swivel-adaptor-nickel": imgSwivelAdaptor,
  "conduit-pipes-wiring-accessories/gi-coupler": imgGiCoupler,
  "conduit-pipes-wiring-accessories/gi-covers": imgGiCovers,
  "conduit-pipes-wiring-accessories/lock-nut-check-nut": imgLockNut,
  "conduit-pipes-wiring-accessories/gi-tee": imgGiTee,
  "conduit-pipes-wiring-accessories/reducer-bush": imgReducerBush,
  "conduit-pipes-wiring-accessories/brass-bush": imgBrassBush,
  "conduit-pipes-wiring-accessories/emt-two-hole-clamp": imgEmtClamp,
  "conduit-pipes-wiring-accessories/r-clamp": imgRClamp,
  "conduit-pipes-wiring-accessories/band-it-strap-carbon-steel": imgBandItStrap,
  "conduit-pipes-wiring-accessories/pvc-flexible-pipe": imgPvcFlexiblePipe,
  "conduit-pipes-wiring-accessories/pvc-box": imgPvcBox,
  "conduit-pipes-wiring-accessories/loop-in-box": imgLoopInBox,
  "conduit-pipes-wiring-accessories/pvc-connector": imgPvcConnector,
  "conduit-pipes-wiring-accessories/pvc-clip": imgPvcClip,
  "conduit-pipes-wiring-accessories/expansion-coupler-dd": imgExpansionCoupler,
  "conduit-pipes-wiring-accessories/end-cap": imgEndCap,
  "control-screen-specialty-cables/lift-2s-pendant-cable": imgLiftPendant,
  "silicone-high-temperature-cables/silicone-fibreglass-sleeves-fg4t2-2":
    imgSiliconeSleeves,
  "enclosures-panel-accessories/heavy-duty-die-cast-connectors": imgDieCastConnectors,
  "enclosures-panel-accessories/cable-markers": imgCableMarkers,
  "enclosures-panel-accessories/metal-iron-plugs": imgMetalIronPlugs,
  "enclosures-panel-accessories/porcelain-connectors": imgPorcelainConnectors,
  "cable-termination/insulated-cable-lugs-blade-type": imgLugsBlade,
  "cable-termination/insulated-cable-lugs-pin-type": imgLugsPin,
  "cable-termination/insulated-cable-lugs-fork-type": imgLugsFork,
  "cable-termination/insulated-cable-lugs-ring-type": imgLugsRing,
  "cable-termination/pin-type-cable-lugs-copper-ferrules": imgPinLugsFerrules,
  "cable-termination/e1w-cable-glands": imgE1wGlands,
  "cable-termination/a1-a2-cable-glands": imgA1a2Glands,
  "cable-termination/nickel-plated-brass-cable-glands": imgNickelBrassGlands,
  "cable-termination/pvc-nylon-cable-glands": imgNylonGlands,
  "industrial-plugs-sockets-switchgear/mobile-type-plug-socket": imgMobilePlugSocket,
  "industrial-plugs-sockets-switchgear/wall-type-socket-plug": imgWallSocketPlug,
  "industrial-plugs-sockets-switchgear/panel-type-socket": imgPanelSocket,
  "industrial-plugs-sockets-switchgear/2-way-3-way-extension-plug": imgExtensionPlug,
  "industrial-plugs-sockets-switchgear/32-amp-3-pin-interlock-socket": imgInterlockSocket,
  "industrial-plugs-sockets-switchgear/32-amp-3-pin-male-female-isolator": imgMaleFemaleIsolator,
  "industrial-plugs-sockets-switchgear/residual-current-circuit-breaker-rccb": imgRccb,
  "industrial-plugs-sockets-switchgear/earth-leakage-circuit-breaker-elcb": imgElcb,
  "industrial-plugs-sockets-switchgear/moulded-case-circuit-breaker-mccb": imgMccb,
  "industrial-plugs-sockets-switchgear/contactor-magnetic-contactor": imgContactor,
  "industrial-plugs-sockets-switchgear/isolator": imgIsolator,
  "industrial-plugs-sockets-switchgear/distribution-board": imgDistributionBoard,
  "industrial-plugs-sockets-switchgear/rail-connectors": imgRailConnectors,
  "conduit-pipes-wiring-accessories/threaded-plug": imgThreadedPlug,
  "conduit-pipes-wiring-accessories/cooker-switch": imgCookerSwitch,
  "conduit-pipes-wiring-accessories/outlet-switch": imgOutletSwitch,
  "conduit-pipes-wiring-accessories/flex-outlet": imgFlexOutlet,
  "conduit-pipes-wiring-accessories/double-pole-surface-switch": imgDoublePoleSurfaceSwitch,
  "conduit-pipes-wiring-accessories/grid-mounting-frame": imgGridMountingFrame,
  "conduit-pipes-wiring-accessories/module-switch-plate": imgModuleSwitchPlate,
  "conduit-pipes-wiring-accessories/plate-assembly-moulded": imgPlateAssemblyMoulded,
  "conduit-pipes-wiring-accessories/blank-plate-aluminium-silver": imgBlankPlateAluminiumSilver,
  "conduit-pipes-wiring-accessories/metal-clad-box": imgMetalCladBox,
  "conduit-pipes-wiring-accessories/shaver-socket": imgShaverSocket,
  "cable-management-jointing-led-lighting/resin-filled-lv-cable-joint-kit": imgResinJointKit,
  "cable-management-jointing-led-lighting/cable-socks": imgCableSocks,
  "cable-management-jointing-led-lighting/pulling-spring": imgPullingSpring,
  "cable-management-jointing-led-lighting/festoon-c-channel": imgFestoonCChannel,
  "cable-management-jointing-led-lighting/festoon-middle-trolley": imgFestoonMiddleTrolley,
  "cable-management-jointing-led-lighting/festoon-support-bracket-hanger": imgFestoonSupportBracket,
  "cable-management-jointing-led-lighting/festoon-track-joint": imgFestoonTrackJoint,
  "cable-management-jointing-led-lighting/drag-chain": imgDragChain,
  "cable-management-jointing-led-lighting/pvc-shroud": imgPvcShroud,
  "cable-management-jointing-led-lighting/boot-lug": imgBootLug,
  "cable-management-jointing-led-lighting/end-sleeve": imgEndSleeve,
  "cable-management-jointing-led-lighting/heat-shrink-sleeve": imgHeatShrinkSleeve,
  "cable-management-jointing-led-lighting/cable-sleeve": imgCableSleeve,
  "cable-management-jointing-led-lighting/fiber-sleeve-white": imgFiberSleeveWhite,
  "cable-management-jointing-led-lighting/soft-sleeve-yellow": imgSoftSleeveYellow,
  "cable-management-jointing-led-lighting/heat-proof-ribbon-fiberglass": imgHeatProofRibbonFiberglass,
  "cable-management-jointing-led-lighting/ferrule-4mm": imgFerrule4mm,
  "cable-management-jointing-led-lighting/pre-insulated-ring-terminal": imgPreInsulatedRingTerminal,
  "cable-management-jointing-led-lighting/spade-terminal-flag-type": imgSpadeTerminalFlagType,
  "cable-management-jointing-led-lighting/female-terminal-fdd": imgFemaleTerminalFdd,
  "cable-management-jointing-led-lighting/female-terminal-fdfd": imgFemaleTerminalFdfd,
  "cable-management-jointing-led-lighting/connector-fldny-red": imgConnectorFldnyRed,
  "cable-management-jointing-led-lighting/pin-terminal-u-type": imgPinTerminalUType,
  "cable-management-jointing-led-lighting/wire-connector-6-way": imgWireConnector6Way,
  "cable-management-jointing-led-lighting/screw-terminal-e5": imgScrewTerminalE5,
  "cable-management-jointing-led-lighting/terminal-block-screw-strip": imgTerminalBlockScrewStrip,
  "cable-management-jointing-led-lighting/end-cover-terminal-block": imgEndCoverTerminalBlock,
  "cable-management-jointing-led-lighting/ground-line-terminal": imgGroundLineTerminal,
  "cable-management-jointing-led-lighting/fuse-terminal-rail-mounted": imgFuseTerminalRailMounted,
  "cable-management-jointing-led-lighting/waterproof-connector-straight": imgWaterproofConnectorStraight,
  "cable-management-jointing-led-lighting/cable-pulling-lubricant": imgCablePullingLubricant,
  "cable-management-jointing-led-lighting/waterproof-connector-t-way": imgWaterproofConnectorTWay,
  "cable-management-jointing-led-lighting/waterproof-connector-4-core": imgWaterproofConnector4Core,
  "cable-management-jointing-led-lighting/metal-connector-male-female": imgMetalConnectorMaleFemale,
  "switchgear-protection-control/capacitor-duty-contactor": imgCapacitorDutyContactor,
  "switchgear-protection-control/auxiliary-contact-block": imgAuxiliaryContactBlock,
  "switchgear-protection-control/rotary-isolator": imgRotaryIsolator,
  "switchgear-protection-control/switch-disconnector": imgSwitchDisconnector,
  "switchgear-protection-control/changeover-switch": imgChangeoverSwitch,
  "switchgear-protection-control/reverse-forward-switch": imgReverseForwardSwitch,
  "switchgear-protection-control/rotary-switch": imgRotarySwitch,
  "switchgear-protection-control/db-box": imgDbBox,
  "switchgear-protection-control/modular-db-box": imgModularDbBox,
  "switchgear-protection-control/elcb-box": imgElcbBox,
  "switchgear-protection-control/tpn-flush-db": imgTpnFlushDb,
  "switchgear-protection-control/tp-surface-db": imgTpSurfaceDb,
  "switchgear-protection-control/distribution-board-mdb": imgDistributionBoardMdb,
  "switchgear-protection-control/meter-cabinet": imgMeterCabinet,
  "switchgear-protection-control/motor-circuit-breaker": imgMotorCircuitBreaker,
  "switchgear-protection-control/overload-relay": imgOverloadRelay,
  "switchgear-protection-control/special-type-contactor": imgSpecialTypeContactor,
  "switchgear-protection-control/isolator-end-cap": imgIsolatorEndCap,
  "switchgear-protection-control/mccb": imgMccb,
  "switchgear-protection-control/compact-nsx160h-mccb": imgCompactNsx160hMccb,
  "switchgear-protection-control/over-current-relay": imgOverCurrentRelay,
  "switchgear-protection-control/under-voltage-relay": imgUnderVoltageRelay,
  "switchgear-protection-control/control-relay-with-base": imgControlRelayWithBase,
  "switchgear-protection-control/relay-base": imgRelayBase,
  "switchgear-protection-control/24-hour-timer": img24HourTimer,
  "switchgear-protection-control/timer-switch": imgTimerSwitch,
  "cable-management-jointing-led-lighting/3m-wire-pulling-lubricant": img3mWirePullingLubricant,
  "switchgear-protection-control/on-off-delay-timer": imgOnOffDelayTimer,
  "switchgear-protection-control/star-delta-timer": imgStarDeltaTimer,
  "switchgear-protection-control/delay-unit": imgDelayUnit,
  "switchgear-protection-control/push-button": imgPushButton,
  "switchgear-protection-control/mushroom-push-button": imgMushroomPushButton,
  "switchgear-protection-control/emergency-stop-button": imgEmergencyStopButton,
  "switchgear-protection-control/illuminated-push-button": imgIlluminatedPushButton,
  "switchgear-protection-control/on-off-push-station": imgOnOffPushStation,
  "switchgear-protection-control/toggle-switch": imgToggleSwitch,
  "switchgear-protection-control/power-push-button": imgPowerPushButton,
  "switchgear-protection-control/selector-switch": imgSelectorSwitch,
  "switchgear-protection-control/control-box": imgControlBox,
  "switchgear-protection-control/indicator-lamp": imgIndicatorLamp,
  "switchgear-protection-control/led-pilot-light": imgLedPilotLight,
  "switchgear-protection-control/m22-led-indicator": imgM22LedIndicator,
  "switchgear-protection-control/m22-contact-block": imgM22ContactBlock,
  "switchgear-protection-control/revolving-light": imgRevolvingLight,
  "switchgear-protection-control/rotary-warning-light": imgRotaryWarningLight,
  "switchgear-protection-control/tower-light": imgTowerLight,
  "switchgear-protection-control/mini-siren": imgMiniSiren,
  "switchgear-protection-control/copper-busbar": imgCopperBusbar,
  "switchgear-protection-control/pvc-busbar": imgPvcBusbar,
  "switchgear-protection-control/busbar-insulator": imgBusbarInsulator,
  "switchgear-protection-control/busbar-sleeve": imgBusbarSleeve,
  "switchgear-protection-control/pin-type-busbar": imgPinTypeBusbar,
  "switchgear-protection-control/u-type-busbar": imgUTypeBusbar,
  "switchgear-protection-control/neutral-link": imgNeutralLink,
  "switchgear-protection-control/earth-bar-link": imgEarthBarLink,
  "switchgear-protection-control/short-link": imgShortLink,
  "switchgear-protection-control/wire-terminal-bar": imgWireTerminalBar,
  "switchgear-protection-control/busbar-end-cap": imgBusbarEndCap,
  "switchgear-protection-control/current-collector-controller": imgCurrentCollectorController,
  "switchgear-protection-control/single-phase-single-pole-busbar": imgSinglePhaseSinglePoleBusbar,
  "switchgear-protection-control/bottle-fuse": imgBottleFuse,
  "switchgear-protection-control/ceramic-fuse": imgCeramicFuse,
  "switchgear-protection-control/glass-fuse": imgGlassFuse,
  "switchgear-protection-control/cartridge-fuse": imgCartridgeFuse,
  "switchgear-protection-control/fuse-link-10x38": imgFuseLink10x38,
  "switchgear-protection-control/fuse-holder": imgFuseHolder,
  "switchgear-protection-control/fuse-carrier": imgFuseCarrier,
  "switchgear-protection-control/fuse-base": imgFuseBase,
  "switchgear-protection-control/nh-fuse": imgNhFuse,
  "switchgear-protection-control/fuse-general": imgFuseGeneral,
  "switchgear-protection-control/fuse-connection-unit": imgFuseConnectionUnit,
  "switchgear-protection-control/busbar-mounting-fuse": imgBusbarMountingFuse,
  "switchgear-protection-control/control-transformer": imgControlTransformer,
  "switchgear-protection-control/transformer": imgTransformer,
  "switchgear-protection-control/smps-power-supply": imgSmpsPowerSupply,
  "switchgear-protection-control/dc-power-supply": imgDcPowerSupply,
  "switchgear-protection-control/capacitor": imgCapacitor,
  "switchgear-protection-control/battery": imgBattery,
  "switchgear-protection-control/dual-capacitor": imgDualCapacitor,
  "switchgear-protection-control/pf-controller": imgPfController,
  "switchgear-protection-control/pf-regulator": imgPfRegulator,
  "switchgear-protection-control/hour-meter": imgHourMeter,
  "switchgear-protection-control/current-transformer": imgCurrentTransformer,
  "switchgear-protection-control/limit-switch": imgLimitSwitch,
  "switchgear-protection-control/micro-limit-switch": imgMicroLimitSwitch,
  "switchgear-protection-control/light-motion-sensor": imgLightMotionSensor,
  "switchgear-protection-control/float-switch": imgFloatSwitch,
  "switchgear-protection-control/pressure-switch": imgPressureSwitch,
  "switchgear-protection-control/dol-starter": imgDolStarter,
  "switchgear-protection-control/din-rail": imgDinRail,
  "switchgear-protection-control/carrier-strip": imgCarrierStrip,
  "switchgear-protection-control/panel-cooling-fan": imgPanelCoolingFan,
  "switchgear-protection-control/cooling-fan-grill": imgCoolingFanGrill,
  "switchgear-protection-control/potentiometer": imgPotentiometer,
  "lighting-lamps/round-led-panel-light": imgRoundLedPanelLight,
  "lighting-lamps/surface-led-panel": imgSurfaceLedPanel,
  "lighting-lamps/60x60-led-panel-frame": img60x60LedPanelFrame,
  "switchgear-protection-control/hrc-fuse": imgHrcFuse,
  "switchgear-protection-control/ups": imgUps,
  "switchgear-protection-control/power-capacitor": imgPowerCapacitor,
  "switchgear-protection-control/energy-meter": imgEnergyMeter,
  "switchgear-protection-control/sensor": imgSensor,
  "switchgear-protection-control/remote-control-switch": imgRemoteControlSwitch,
  "switchgear-protection-control/vfd-altivar-atv212": imgVfdDrive,
  "lighting-lamps/led-ceiling-globe-light": imgLedCeilingGlobe,
  "lighting-lamps/smd-led-floodlight": imgSmdLedFloodlight,
  "lighting-lamps/floodlight-dl": imgFloodlightDl,
  "lighting-lamps/solar-floodlight": imgSolarFloodlight,
  "lighting-lamps/led-high-bay-light": imgLedHighBayLight,
  "lighting-lamps/metal-halide-high-bay-light": imgMetalHalideHighBayLight,
  "lighting-lamps/portable-site-light": imgPortableSiteLight,
  "lighting-lamps/bulkhead-fitting": imgBulkheadFitting,
  "lighting-lamps/garden-light": imgGardenLight,
  "lighting-lamps/bollard-light": imgBollardLight,
  "lighting-lamps/solar-garden-light": imgSolarGardenLight,
  "lighting-lamps/underwater-led-strip-light": imgUnderwaterLedStripLight,
  "lighting-lamps/led-downlight": imgLedDownlight,
  "lighting-lamps/gu10-spot": gu10SpotAsset.url,
  "lighting-lamps/track-light": trackLightAsset.url,
  "lighting-lamps/mr16-fitting-holder": mr16FittingHolderAsset.url,
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
