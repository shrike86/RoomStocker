//#region Generator Data

const places_1 = ["Burning", "Hallowed", "Mossy", "Synthetic", "Crystalline", "Sterile", "Claggy", "Ethereal", "Encrusted", "Infested", 
"Labyrinthine", "Industrial", "Smoky", "Bloodsoaked", "Cursed", "Acidic", "Milky", "Flooded","Molten", "Frozen", "Verdant", "Dripping", 
"Steaming", "Shadowy", "Shadowy", "Mouldering", "Turbulent", "Sinking", "Floating", "Titanic", "Insectile", "Dusty", "Desecrated", 
"Abandoned", "Abandoned", "Shimmering"];

const places_2 = ["Cage", "Vine", "Bone", "Boulder", "Shrine", "Mushroom", "Brick", "Pit", "Pool", "Machine", "Sewer", "Ore", "Monument", 
"Sand", "Cave", "Glass", "Eye", "Obsidian", "Marble", "Gem", "Refuse", "Fog", "Rain", "Cliff", "Garden", "Vat", "Graveyard", "Canal", 
"Slime", "Shell", "Blade", "Needle", "Nest", "Ring", "Dome", "Vapor"];

const places_3 = ["Island.", "Hill.", "Beach.", "Desert.", "Lake.", "Village.", "Temple.", "Cavern.", "Ruin.", "Crater.", "Mountain.", 
"Bridge.", "Tower.", "Manse.", "Laboratory.", "Plain.", "Jungle.", "Forest.","Factory.", "Prison.", "Library.", "Menagerie.", "Fortress.", 
"River.", "Town.", "Sea.", "Crypt.", "Hive.", "Swamp.", "Palace.", "Dock.", "Reef.", "Volcano.", "Valley.", "Road.", "Market."];

const roomStocking = ["Empty, place of rest.", "Empty, place of recreation.", "Empty, place of physical work.", "Empty, place of physical storage.", 
"Empty, place of sleep.", "Empty, place of ornamentation.", "Empty, place of ritual and worship.", "Empty, place of waste disposal.", "Empty, place of eating.",
 "Empty, place of lavatory.", "Empty, place of mental work and research.", "Empty, place of mental storage.", "Empty, place of bathing.", 
 "Empty, place of mechanics and machinery.", "Empty, place of growing.", "Empty, place of secrets.", "Inhabitant, sleeping or resting.",
 "Inhabitant, conducting relaxation or recreation.", "Inhabitant, physically toiling.", "Inhabitant, hidden and watching.", "Inhabitant, eating or drinking.",
 "Inhabitant, indisposed through sickness or misadventure.", "Inhabitant, conducting ritual or worship.", "Inhabitant, mentally toiling.", 
 "Inhabitant, ignoring treasure.", "Inhabitant, indulging in treasure.", "Inhabitant, transporting or protecting treasure. ", "Inhabitant, searching for known of treasure.", 
 "Treasure, subsumed in location.", "Treasure, out of place and unusual.", "Treasure, focus of work or worship.", "Treasure, hidden.", 
 "Trap, natural hazard inherent in environment.", "Trap, set by nearby foes, evidence of their work. ", "Trap, obvious and menacing.", 
 "Trap, hidden and deadly.", "Inhabitant, trapped in natural hazard of environment.","Inhabitant, using traps to their advantage against interlopers.", 
 "Inhabitant, vaguely aware of trap, but not knowledgeable of specifics.", "Inhabitant, unaware of trap they may be about to trigger.", 
 "Device specific and inherent to environment, expected but intriguing. ", "Device external and unusual to environment, out of place sourced from elsewhere. ", 
 "Device used in regular work of environment, mundane but effective.", "Device with obscure, secret use that belies a shadow use of environment.", 
"Inhabitant, using device to conduct relatively mundane activity.", "Inhabitant, puzzling over the way in which a device is used.", 
"Inhabitant, using device effectively to halt interlopers.", "Inhabitant, using device for a dark, devious and deviant purpose."];

const roomAtmosphere = ["Mutatative Overgrowth and frenzied, manic healing","Holy, religious and sacred.","Welcoming, calming and accommodating.",
"Secure, locked and quarantined.","Outer space, interstellar planets and stars.","Wax, flame and candles.","Wisdom, knowledge and greybeards.",
"Flowing, blowing and leaking voluminous gas.","Cracked and unworking reality, a fundamental malfunction.","Transcendental meditation, utter calm and dangerously soothing.",
"Frozen, preserved, pickled, documented and caught.","Wings - leathered and feathered. ","Air apparati, tube and tanks.",
"Ethereal and vaporous - twisting, flowing and floating.","Crystalline coating - mould like pestilence.","Billowing spirits, ghostlike fabrics and hauntings.",
"Schemes, hidden costs and charges, tolls and payments.","Overfluid movement, frenzied speed and savage quickness.","A myriad of amulets, charms, fetishes and trinkets.",
"Beast of burdenesque, four legs, load bearing and carrying.","Shrunken, small and shriveled - rotted and wrecked.",
"Clambering hordes of vermin and insects, controlled and wild.","Bare, barren, stripped of splendour and excess.","Ooze ridden and globular, slime covered and excreting.",
"Hidden power, force and horror, barely trapped away.","Fake, disguised and misleading, nothing is as it appears.","All is eyes and sentinels, never ending watching.",
"Regrown and rebuilt - clearly signs of limbs and quarters once missing.","Gourmet, gourmand and gassy - flabbular feasting.","Clear, translucent, delicate and dazzling.",
"Obesily opulent, gilded and bejewelled ","Hordes, crowds and hives.","Brains, books, minds and libraries.","Encroachment of the psychic realms and dreamlands.",
"Mindless, drooling, thoughtless and lobotomized.","Internal organs on display, fleshy, bloody and sanguine.","Self consumptive and destructive.",
"Reflection, mirrored image and repetition.","Entombment, gilded prisons and grand cages.","Metal and minerals.","The sun and or the moon.",
"Aquatic creatures, scales, fins and gills.","Oppressive heat, dryness and flame.","Frozen, cold, frigid and icy. ","Spring new life, or autumn decay.",
"Liquid waste, sewage and stinking effluent.","Sizzling acid or burning magma.","Measurement, judgement, jealousy and control.",
"Thick plating and armour, layers of protective outer coating.","Bars,locks, spikes, poles and pikes.",
"Shamanic effigies, virule animism and encroachment from the spirit world.","Vegetative construction, swirling vines, leaves and flowers.",
"Overgrown, gigantic and cyclopic.","Meat, butchers, carcesses, bones, carrion beasts and birds.","Toothy, hairy and boney feral.",
"Many limbed, headed, eyed and tentacled.","Visions of unreality, psychedelia and the not quite real. ","Scents, over alluring or oppressive. ",
"Petals, pollens, bursting ripe fruit. ","Chance, luck, unbelievable odds balancing delicately on the precipice","Fire, flames and burning. ",
"Lanterns, bonfires, fireplaces and braziers. ","Destruction, ruin, rubble, rocks and wreck. ","Mountainous rubbish, rolling refuse and towering waste. ",
"Wheels, cogs, gears and ever turning mechanisms. ","Sailing and ships, maps and exploration. ","Automatons, robots, man replicas, simulacrum and sentient copies. ",
"Alien, beyond exotic and otherworldly. ","Mechanical, gears, chains and motors. ","Molluscs, cephalopods and gastropods. ",
"Beastial visage - theeth, claws, fur, scales, tails, hooves and the like. ","Oversized, enormous, overgrown - repulsive in mass. ","Masks and mockery, fakery and disguises. ",
"Fins, scales, tentacles and jellyfish. ","Monstrous and horrible, misshapen and obscene. ","Silk, robes, flowing cloth, luxurious, soft and enveloping. ",
"Pillars, stilts, stalks and ladders. ","Wood - worked, raw, polished, painted and bare. ","Chains and binding, ropes, knots and bondage. ",
"Inebriation, sensualness, orgies and panic. ","Tunnels, holes and craters. ","Bugs, beetles, carapacea and compound eyes. ",
"Encasement in crystal and mineral calcification. ","Dirt, mud, soil, humus, sand. ","Ornate and polished stone, smooth, shiny marble. ",
"Interdimensional rifts, gates and portals - things creeping though. ","Time slow and fast. ","Dust, crumbling, ash and ruin. ",
"Samples, fetishes, preserved parts of dead wholes."," Beneath, upside down, covered and hidden. ","Contorted - twisting forms of tortured pain. ",
"Things in places they should not be - the world topsy turvy. ","Relics, gravestones, holy skeletons and bodies. ","Mazes, labyrinths and puzzles. ",
"Shadows, darkness, malformity. ","Rotted, liquefying and putrid to the point of slop. ","Sickness, disease and plague. ","Deformed, demented and wrong. ",
"Bones, tusks and skulls. ","Veins and vines. "];

const roomOrnamentations_1 = ["Vases","Stone hands","Stone hoops","Gloves","Bracelets","Ornate lanterns","Candles in jars","Necklaces","Fabric bunting",
"Masks","Decorative stones","Bundles of feathers","Scarfs","Decorative skulls","Cloaks","Trained beasts","Decorative barrels","Chunks of crystal","Rings",
"Helmets","Headdresses","Amulets","Tall mirrors","Decorative mushrooms","Noble costumes","Decorative weapons","Tiny cages","Capes","Eye patches","Collars",
"Candles","Plants ","Brooches","Belts","Diadems","Crowns","Pendants","Signet rings","Statuettes","Tiny boxes","Chests","Hand mirrors","Glass bottles",
"Fake limbs","Cages","Flasks","Wood carvings","Preserved tiny beasts","Large insects","Shrines","Hats","Eye glasses","Glass boxes","Bowls","Pipes",
"Small contraptions","Decorative scrolls","Decorative maps","Candelabras","Tables","Chairs","Ornate doors","Pots","Tiny trees","Banners",
"Glowing canisters of liquid","Glowing canisters of gas","Large hooks","Stained glass windows","Decorative bones","Jugs","Thrones","Shoes","Boots","Hoods",
"Arches","Columns","Paintings","Earrings","Precious stones"];

const roomOrnamentations_2 = ["Amazingly attractive","Sharply symmetrical","Sturdily strong","Impressively capable ","Bright glowing","Flecked with radiance",
"Swirling with plasma","Blinding to look at","Floating","Leaking gas","Overly bulbous","Far too Flat","Easy to hide","Strangely ghostly","Vaguely incorporeal",
"Coated in mist","Shimmering brightly","Decorated with spikes","Dangerously sharp","Incomplete","Confusing to look at","A jumble of parts and pieces","Skeletal",
"Filled with holes","Dripping with liquid","Translucent","Flickering in and out of vision","Semi intangible","Diffused over a larger area than is normal",
"In pairings of twins","Decorated with limbs","Decorated with heads","Shaped like hands","Gilded with gems","Plated in shining metal","Shimmering with lustour",
"Plainly bare","Made of skin or flesh","Made of preserved organs","Ever warping in appearance","Always camouflaged","Oozing slime","Scaley","Caustic to the touch",
"Covered in thorns","Metal plated","Sizzling with acid","Made of beetle husks","Oversized","Made of plant matter","Covered in flowers","Warped",
"Very poorly constructed","Smoking","Flaming","Burnt","Rotting","Crumbling","Foul","Tattered","Covered in geometric symbols","Blood soaked","Covered in bugs",
"Squirming with worms","Infused with minerals","Rock hard","Infused with eyes","Falling apart with age","Incredibly old","Bladed","Covered in needles",
"Decorated with leering faces","Very soft and padded","Crackling with fey energy","Seeping shadows","Inherently vile","Bubbling with rot","Covered in pustules",
"Made of scavenged material","Leaking a foul gas"]

const roomOrnamentations_3 = ["Amazingly attractive","Sharply symmetrical","Sturdily strong","Impressively capable ","Bright glowing ","Flecked with radiance ",
"Swirling with plasma","Blinding to look at ","Floating","Leaking gas ","Overly bulbous ","Far too Flat","Easy to hide ","Strangely ghostly ","Vaguely incorporeal ",
"Coated in mist ","Shimmering brightly ","Decorated with spikes ","Dangerously sharp","Incomplete ","Confusing to look at ","A jumble of parts and pieces ","Skeletal ",
"Filled with holes ","Dripping with liquid ","Translucent ","Flickering in and out of vision ","Semi intangible ","Diffused over a larger area than is normal ",
"In pairings of twins ","Decorated with limbs ","Decorated with heads ","Shaped like hands ","Gilded with gems ","Plated in shining metal ","Shimmering with lustour ",
"Plainly bare ","Made of skin or flesh ","Made of preserved organs ","Ever warping in appearance ","Always camouflaged ","Oozing slime ","Scaley ","Caustic to the touch ",
"Covered in thorns ","Metal plated ","Sizzling with acid ","Made of beetle husks ","Oversized ","Made of plant matter ","Covered in flowers ","Warped ",
"Very poorly constructed ","Smoking ","Flaming ","Burnt","Rotting ","Crumbling ","Foul","Tattered ","Covered in geometric symbols ","Blood soaked ","Covered in bugs ",
"Squirming with worms ","Infused with minerals","Rock hard ","Infused with eyes ","Falling apart with age ","Incredibly old ","Bladed ","Covered in needles ",
"Decorated with leering faces ","Very soft and padded ","Crackling with fey energy","Seeping shadows ","Inherently vile ","Bubbling with rot ","Covered in pustules ",
"Made of scavenged material ","Leaking a foul gas "]

const neutralInhabitant_1 = ["Musclebound","Enchanted","Enormous","Zealous","Aristocratic","Sneaky","Enlightened","Ghostly","Swift","Hardy","Rich","Mutated","Destructive",
"Prophetic","Terrifying","Ancient","Profane","Sacred","Persuasive","Perceptive","Resourceful","Enduring","Erudite","Versatile","Deceptive","Cunning","Adamant","Haunted","Baleful",
"Dapper","Noxious","Tenacious","Comely","Doomed","Lucky","Armoured"];

const neutralInhabitant_2 = ["Hill","Desert","City","Sea","Dream","Beetle","Bone","Sun","Moon","Crystal","Curse","Street","Worm","Bird","Vermin","Fish","Lizard","Beast","Mountain","River",
"Water","Fire","Ice","Poison","Pestilence","Flesh","Star","Death","Fungi","Invocation","Vine","Sky","Cavern","Mind","Gold","Shadow"];

const neutralInhabitant_3 = ["Paladin.","Wizard.","Knight.","Priest.","Alchemist.","Occultist.","Thief.","Druid.","Merchant.","Troubadour.","Gladiator.","Noble.","Wanderer.","Dragoon.","Physician.",
"Sailor.","Assassin.","Ascetic.","Tamer.","Smith.","Ruffian.","Inquisitor.","Corsair.","Mancer.","Hunter.","Rider.","Archer.","Mason.","Banisher.","Operative.","Scion.","Lancer.","Mystic.","Blade.",
"Pathfinder.","Mountebank."];

const dangerousInhabitant_1 = ["Malformed","Sleek","Overgrown","Reinforced","Gaseous","Spindly","Bloody","Appendaged","Crafty","Phantasmagoric","Fleshy","Intellectual","Plated","Warty","Thorny",
"Grotesque","Acidic","Encased","Insubstantial","Euphoric","Hollow","Brutal","Glacial","Infected","Minuscule","Parasitic","Territorial","Seductive","Venerable","Wily","Aloof","Impenetrable","Chaotic","Serene",
"Deceitful","Crude"];

const dangerousInhabitant_2 = ["Spitting","Whispering","Squirming","Slithering","Dripping","Smouldering","Oozing","Climbing","Crumbling","Flying","Sneaking","Replicating","Suffering","Taunting","Torturing",
"Hiding","Screaming","Corrupting","Enslaving","Devouring","Rotting","Harvesting","Restraining","Exploding","Intoxicating","Thieving","Knowing","Watching","Flowering","Misleading","Stupefying","Dissecting",
"Melting","Draining","Blinding","Building"];

const dangerousInhabitant_3 = ["Blood","Puss","Carapace","Sludge","Shard","Claw","Psychic","Stench","Maw","Sewage","Stone","Weed","Vein","Beast","Gear","Rust","Eye","Ash","Rainbow","Metal","Brain","Horn","Husk",
"Tooth","Bone","Curse","Vision","Spark","Piston","Tendril","Rod","Sword","Circuit","Wire","Disease","Flame"];

const dangerousInhabitant_4 = ["Cultist","Chemist","Giant","Scoundrel","Corpse","Crab","Snake","Dog","Bear","Tiger","Mantis","Wasp","Slug","Ape","Hog","Snail","Warlock","Worm","Bat","Eagle","Cloud","Spider","Looter",
"Mist","Person","Sentinel","Trap","Marauder","Elephant","Octopus","Roach","Blackguard","Berserker","Wildling","Rat","Shark"];

const inhabitantReaction_1 = ["Calmly and serenely","Cooly and aloofly","Rudely and impatiently","Friendly and gregariously","Mockingly and derisively","Violently and furiously"];

const inhabitantReaction_2 = ["Eager to assist.","Willing to assist.","Open to discussion.","Looking for an argument.","Wanting to attack.","Preparing to attack."];

const traps_1 = ["Are mass produced and abundant ","Are blatantly obvious ","Are hidden by shimmering fog ","Glow and twinkle in darkness ","Float above their victims",
"Are hidden in containers ","Are hidden by decoys ","Hiss softly ","Float unseen in the air ","Roam about in search of victims ","Are hidden in cracks ","Are highly visible contraptions ",
"Are hidden in something dead ","Are hidden in vegetation ","Are baited with opulent pieces of material wealth ","Are hidden in piles of bones ","Are hidden between twin statues ",
"Are hidden in pools of liquid ","Judges victims before harming the unworthy ","Are hidden in areas conspicuously clean and tidy ","Require slaves to operate ","Are organic and self replicating ",
"Are hidden in roaming beasts ","Are unhidden and malfunctioning ","Are hidden in flames ","Are hidden in piles of rubble","Are hidden in ornamentation ","Require an operator for them to trigger ",
"Are hidden in leering and ghastly decorations ","Waft through the air in sweet smelling gas ","Are hidden beneath the floor or ground ","Are hidden within rock or stone ","Are hidden in dark holes ",
"Are hidden in written words ","Are hidden within shrines, holy or profane ","Are hidden in shadows ","Are hidden in broken things ","Are triggered by the uttering of certain words or phrases ",
"Are triggered by noise ","Require payment to not trigger "];
const traps_2 = ["Mind ","Feet ","Legs ","Groin ","Belly ","Chest ","Arms ","Neck ","Head","Ears ","Eyes ","Internal organs "];

const traps_3 = ["A false sense of security. ","Curses that ensure certain rules are followed.","Blinding lights. ","Stupefying gas. ",
"Withering, sucking and consuming vacuums. ","Ghostly tendrils. ","Massive gusts of wind. ","Fast swinging sharp ,or blunt, implements. ",
"Chemicals that wither and waste away. ","Spells that cause physical or mental fading. ","Grasping vegetative tentacles. ","Deadly gems or coinage. ","Unignorable bad ideas.",
"Diseased blood or organs. ","Reflections of themselves. ","Foul liquids. ","Deadly hammers. ","Burning acid. ","Capturing cages. ","Poisonous flowers. ","Hordes of vermin. ",
"Infesting spores. ","Madness. ","Gouts of flame. ","Overwhelming heat. ","Drowning piles of rubble. ","Grasping claws. ","Chained monsters. ","A belated doom or curse. ",
"Enveloping poison. ","Heavy stone. ","Curses of aging. ","Chemicals of blinding and stunning. ","Pain filled spikes. ","Severing blades. ","Mashing maces. ","Choking darkness. ",
"Rotting diseases. ","An undeniable urge to inflict violence. ","Tiny flying monsters. "];

const treasure_1 = ["Alluring","Radiant","Mesmeric","Bubbling","Enthralling","Opalescent","Bloated","Gossamer","Plasmic","Smoking","Deadly","Floating","Sharp","Decomposing",
"Tattered","Skeletal","Metallic","Vegetative","Translucent","Gilded","Sentient","Scaley","Spiney","Gleaming","Quicksilver","Repulsive","Umbral","Roiling","Oily","Ghostly",
"Living","Vile","Rotting","Budding","Tiny","Voracious"];

const treasure_2 = ["Healing","Protecting","Guiding","Seeing","Knowing","Flying","Disguising","Auguring","Repairing","Warping","Beguiling","Hastening","Slowing","Confounding",
"Replenishing","Sedating","Analysing","Reflecting","Cursing","Binding","Intoxicating","Piercing","Excruciating","Blinding","Energising","Beautifying","Draining","Mesmerising","Hiding",
"Cutting","Understanding","Hearing","Growing","Shrinking","Weakening","Strengthening"];

const treasure_3 = ["Jewellery","Scroll","Lantern","Incantation","Map","Seed","Knowledge","Book","Beast","Automaton","Robe","Boots","Armour","Melee weapon","Ranged weapon","Chest","Potion",
"Insect","Pool","Jelly","Fruit","Apparatus","Mask","Stone","Plant","Helmet","Idol","Contraption","Liquid","Tool","Gas","Spirit","Meat","Paraphernalia","Spice","Canister"];

const device_1 = ["Heals.","Protects.","Guides.","Stores.","Resists.","Illuminates.","Flies.","Informs.","Entertains.","Sleeps.","Breathes.","Cleans.","Gases.","Voices.","Programs.","Disguises.",
"Charms.","Speeds.","Weaponises.","Endures.","Shrinks.","Grows.","Clusters.","Repeats.","Reflects.","Smashes.","Tricks.","Sees.","Consumes.","Repairs.","Gilds.","Cuts.","Analysis.","Dreams.",
"Controls.","Sculpts.","Skins.","Destroys.","Regulates.","Neutralises","Replenishes.","Claws.","Times.","Darkness.","Balances.","Melts.","Boils.","Tidies.","Entraps.","Locks.","Seizes.","Fruits.",
"Sensualizes.","Ornaments.","Dissects.","Grinds","Smells.","Projects.","Fakes.","Mutates.","Maddens.","Burns.","Crushes.","Recycles.","Reuses.","Pilfers.","Scavenges.","Turns.","Sucks.","Divines.","Maps.",
"Automates.","Bubbles.","Towers.","Preserves.","Gathers.","Binds.","Softens.","Intoxicates.","Bridges.","Picks.","Probes.","Allures.","Seeks.","Hunts.","Hides.","Decorates.","Records.","Tortures.","Extracts.",
"Poisons.","Frustrates.","Darkens.","Liquifies.","Kills.","Masks.","Reworks.","Dissipates.","Sickens.","Writes."];

const device_2 = ["Bulky but effective.","Is working under pressure.","Also helps those nearby.","Is bluntly obvious in operation.","Detached and separate.","Incredibly specific but effective.",
"Makes everything a little better.","Floating, soft and dissipated.","Ingests and exhausts with abandon.","Is automated or controlled by a ghost ","Subtle and insidious in effect.","Deadly silent.",
"Horrific in application.","Abrupt, obvious and shocking.","Incredibly swift.","Works secretly.","Slowly destroying itself.","Is transparent and clear."," Fading in effectiveness.",
"Is powered by things dead and ruined.","Does not affect the physical realm. ","Decorative more so than useful.","Powered by incredibly rare fuel.","Mostly concerned with the mental realm.",
"Requires a sacrifice to operate.","Affects the body of those nearby.","Impacts internal organs.","Requires time to recharge after each use.","Will only work at appropriate times.","Equalizes those nearby.",
"Self replicates and spreads like a virus.","Strictly focused on a single expertise.","Harvests something from those around it.","Powered by small symbiotic bodies.","Device must eat.",
"Operation is calming and peaceful.","Explodes into action.","Ignites and spreads like flame.","Burns or melts those nearby.","Brings confusion and disarray.","Effect is oversized.",
"Emits pleasure to all those nearby.","Operates within the cracks.","Device’s effects are slowly released.","Creates decoys and distractions.","Incredibly solid and rigid.","Must be reloaded/refilled.",
"Increases hunger and desire.","Is incredibly slow.","Can undo things that have happened.","Must inflict pain.","Increases hatred in those that use it.","Works best in the shadows.","Incredibly lethal.",
"Clarifies nearby surroundings.","Sucks the air out of the nearby area.","Thickens the atmosphere with its operation.","Jostles and buffets the nearby area.","Pumps waste into the air.",
"Reinvigorates the area, bolstering and vivifying it.","Effect of device is incredibly subtle.","Several copies of the device are nearby.","Is gilded and grandiose.","Incredibly efficient and well designed.",
"Internal workings are on display.","Is a Miniscule device. ","Recycles its materials constantly.","Slowly consuming everything in the areas as fuel.","Somehow constrains those nearby.",
"Device is beneath the ground or in the walls.","Device is incredibly old and failing.","Operation is cruel to those nearby.","Is creating an ever-deepening hole.",
"Perfectly designed to operate seamlessly with surrounding environment.","Is in direct opposition and conflict with nearby environment.","Requires users to be enveloped in device.",
"Constantly reaching out and interacting with nearby environment.","Controlled remotely.","Sprawling out, taking up most of nearby area."];

//#endregion

//#region Inhabitant State Data

const inhabitedOnlyValues = ["Inhabitant, sleeping or resting.", "Inhabitant, conducting relaxation or recreation.", "Inhabitant, physically toiling.", "Inhabitant, hidden and watching.", 
    "Inhabitant, eating or drinking.", "Inhabitant, indisposed through sickness or misadventure.", "Inhabitant, conducting ritual or worship.", "Inhabitant, mentally toiling."];
const inhabitedWithTreasure = [ "Inhabitant, ignoring treasure.", "Inhabitant, indulging in treasure.", "Inhabitant, transporting or protecting treasure.", "Inhabitant, searching for known of treasure." ];
const inhabitedWithTrap = ["Inhabitant, trapped in natural hazard of environment.", "Inhabitant, using traps to their advantage against interlopers.", 
    "Inhabitant, vaguely aware of trap, but not knowledgeable of specifics.", "Inhabitant, unaware of trap they may be about to trigger." ];    
const inhabitedWithDevice = [ "Inhabitant, using device to conduct relatively mundane activity.", "Inhabitant, puzzling over the way in which a device is used.", 
    "Inhabitant, using device effectively to halt interlopers.", "Inhabitant, using device for a dark, devious and deviant purpose." ];
const treasureOnly = ["Treasure, subsumed in location.", "Treasure, out of place and unusual.", "Treasure, focus of work or worship.", "Treasure, hidden."];
const trapOnly = ["Trap, natural hazard inherent in environment.", "Trap, set by nearby foes, evidence of their work.", "Trap, obvious and menacing.", "Trap, hidden and deadly." ];
const deviceOnly = ["Device specific and inherent to environment, expected but intriguing.", "Device external and unusual to environment, out of place sourced from elsewhere.", 
"Device used in regular work of environment, mundane but effective.", "Device with obscure, secret use that belies a shad-ow use of environment." ];
//#endregion

const assignInhabitantBehaviour = () => {
    if(Math.floor(Math.random() * 2)) {
        return "Neutral Inhabitant";
    }
    else{
        return "Dangerous Inhabitant";
    }
}

module.exports = {
    getPlace_1: () => {
        return places_1[Math.floor(Math.random() * places_1.length)];
    },
    getPlace_2: () => {
        return places_2[Math.floor(Math.random() * places_2.length)];
    },
    getPlace_3: () => {
        return places_3[Math.floor(Math.random() * places_3.length)];
    },
    getRoomStocking: () => {
        return roomStocking[Math.floor(Math.random() * roomStocking.length)];
    },
    getRoomAtmosphere: () => {
        return roomAtmosphere[Math.floor(Math.random() * roomAtmosphere.length)];
    },
    getOrnamentations_1: () => {
        return roomOrnamentations_1[Math.floor(Math.random() * roomOrnamentations_1.length)];
    },
    getOrnamentations_2: () => {
        return roomOrnamentations_2[Math.floor(Math.random() * roomOrnamentations_2.length)];
    },
    getOrnamentations_3: () => {
        return roomOrnamentations_3[Math.floor(Math.random() * roomOrnamentations_3.length)];
    },
    getNeutralInhabitant_1: () => {
        return neutralInhabitant_1[Math.floor(Math.random() * neutralInhabitant_1.length)];
    },
    getNeutralInhabitant_2: () => {
        return neutralInhabitant_2[Math.floor(Math.random() * neutralInhabitant_2.length)];
    },
    getNeutralInhabitant_3: () => {
        return neutralInhabitant_3[Math.floor(Math.random() * neutralInhabitant_3.length)];
    },
    getDangerousInhabitant_1: () => {
        return dangerousInhabitant_1[Math.floor(Math.random() * dangerousInhabitant_1.length)];
    },
    getDangerousInhabitant_2: () => {
        return dangerousInhabitant_2[Math.floor(Math.random() * dangerousInhabitant_2.length)];
    },
    getDangerousInhabitant_3: () => {
        return dangerousInhabitant_3[Math.floor(Math.random() * dangerousInhabitant_3.length)];
    },
    getDangerousInhabitant_4: () => {
        return dangerousInhabitant_4[Math.floor(Math.random() * dangerousInhabitant_4.length)];
    },
    getInhabitantReaction_1: () => {
        return inhabitantReaction_1[Math.floor(Math.random() * inhabitantReaction_1.length)];
    },
    getInhabitantReaction_2: () => {
        return inhabitantReaction_2[Math.floor(Math.random() * inhabitantReaction_2.length)];
    },
    getTraps_1: () => {
        return traps_1[Math.floor(Math.random() * traps_1.length)];
    },
    getTraps_2: () => {
        return traps_2[Math.floor(Math.random() * traps_2.length)];
    },
    getTraps_3: () => {
        return traps_3[Math.floor(Math.random() * traps_3.length)];
    },
    getTreasure_1: () => {
        return treasure_1[Math.floor(Math.random() * treasure_1.length)];
    },
    getTreasure_2: () => {
        return treasure_2[Math.floor(Math.random() * treasure_2.length)];
    },
    getTreasure_3: () => {
        return treasure_3[Math.floor(Math.random() * treasure_3.length)];
    },
    getDevice_1: () => {
        return device_1[Math.floor(Math.random() * device_1.length)];
    },
    getDevice_2: () => {
        return device_2[Math.floor(Math.random() * device_2.length)];
    },
    addCardsBasedOnRoomState: (setCards, generatedValue) => {
        // This is the default section state.
        const newCards = [{
            title: "Room Location",
            data: ["Place"]
        },
        {
            title: "Room Stocking",
            data: ["Basic Room Stocking", "Room Atmosphere", "Prominent Room Ornamentations"]
        }];;

        // Add the relevant new sections depending on the value of room stocking.
        if(inhabitedOnlyValues.includes(generatedValue[0])){
            newCards[1].data.push(assignInhabitantBehaviour());
            newCards[1].data.push("Inhabitant Reaction to Interlopers");
            setCards(newCards);
        }
        else if(inhabitedWithTrap.includes(generatedValue[0])){
            console.log(generatedValue[0]);
            newCards[1].data.push(assignInhabitantBehaviour());
            newCards[1].data.push("Inhabitant Reaction to Interlopers");
            newCards[1].data.push("Traps");
            setCards(newCards);
        }
        else if(inhabitedWithTreasure.includes(generatedValue[0])){
            newCards[1].data.push(assignInhabitantBehaviour());
            newCards[1].data.push("Inhabitant Reaction to Interlopers");
            newCards[1].data.push("Treasure");
            setCards(newCards);
        }
        else if(inhabitedWithDevice.includes(generatedValue[0])){
            newCards[1].data.push(assignInhabitantBehaviour());
            newCards[1].data.push("Inhabitant Reaction to Interlopers");
            newCards[1].data.push("Device");
            setCards(newCards);
        }
        else if(trapOnly.includes(generatedValue[0])){
            newCards[1].data.push("Traps");
            setCards(newCards);
        }
        else if(treasureOnly.includes(generatedValue[0])){
            newCards[1].data.push("Treasure");
            setCards(newCards);
        }
        else if(deviceOnly.includes(generatedValue[0])){
            newCards[1].data.push("Device");
            setCards(newCards);
        }
    }
}
