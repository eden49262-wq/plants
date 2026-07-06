import type { Plant, PlantFilters, SortOption } from '../types/plant'
import product1 from "../assets/bb.jpg";
import product2 from "../assets/aa.jpg";
import product3 from "../assets/cc.jpg";
import product4 from "../assets/dd.jpg";
import product5 from "../assets/ee.jpg";
import product6 from "../assets/ff.jpg";
import product7 from "../assets/gg.jpg";
import product8 from "../assets/hh.jpg";
import product9 from "../assets/ii.jpg";
import product10 from "../assets/jj.jpg";
import product11 from "../assets/kk.jpg";
import product12 from "../assets/ll.jpg";
import product13 from "../assets/mm.jpg";
import product14 from "../assets/nn.jpg";
import product15 from "../assets/oo.jpg";
import product16 from "../assets/pp.jpg";
import product17 from "../assets/qq.jpg";
import product18 from "../assets/a.jpg";
import product19 from "../assets/b.jpg";
import product20 from "../assets/c.jpg";
import product21 from "../assets/d.jpg";
import product22 from "../assets/e.jpg";
import product23 from "../assets/f.jpg";
import product24 from "../assets/g.jpg";
import product25 from "../assets/h.jpg";
import product26 from "../assets/i.jpg";
import product27 from "../assets/j.jpg";
import product28 from "../assets/k.jpg";
import product29 from "../assets/l.jpg";
import product30 from "../assets/m.jpg";
import product31 from "../assets/rr.jpg";
import product32 from "../assets/ss.jpg";
import product33 from "../assets/tt.jpg";
import product34 from "../assets/uu.jpg";
import product35 from "../assets/vv.jpg";
import product36 from "../assets/ww.jpg";
import product37 from "../assets/xx.jpg";
import product38 from "../assets/yy.jpg";
import product39 from "../assets/zz.jpg";
import product40 from "../assets/aaa.jpg";












export const plants: Plant[] = [
  {
    id: 'Burgundy Rubber Plant (Ficus elastica)',
    name: 'Burgundy Rubber Plant (Ficus elastica)',
    image: product2,
    price: 2500,
    type: 'Indoor',
    description: 'A beautiful, low maintenance plant with glossy, deep burgundy leaves that brings a bold, elegant look to any home or office. Perfect for indoor spaces with bright, indirect light.',
    difficulty: 'Easy',
    lightRequirement: 'Bright indirect light',
    waterRequirement: '💧 Water: Water when the top 2–3 cm of soil is dry. Avoid overwatering. 🌿',
    careInstructions: [
      'Place in bright, indirect sunlight near an east or north-facing window.',
      'Water when the top 2 inches of soil feel dry — typically once a week.',
      'Wipe leaves monthly to remove dust and maintain their glossy appearance.',
      'Provide a moss pole for support as the plant grows taller.',
    ],
  },
  {
    id: 'Snake Plant',
    name: 'Snake Plant',
    image: product3,
    price: 1199,
    type: 'Indoor',
    description: 'Nearly indestructible with striking upright sword-like leaves — perfect for beginners.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 2-3 weeks',
    careInstructions: [
      'Tolerates low light but thrives in bright indirect conditions.',
      'Allow soil to dry completely between waterings to prevent root rot.',
      'Avoid overwatering — this is the most common cause of problems.',
      'Fertilize lightly once in spring and once in summer.',
    ],
  },
  {
    id: 'Fiddle Leaf Fig',
    name: 'Fiddle Leaf Fig',
    image: product1,
    price: 1800,
    type: 'Indoor',
    description: 'An elegant statement plant with large, violin-shaped leaves that elevate any interior.',
    difficulty: 'Medium',
    lightRequirement: 'Bright indirect light',
    waterRequirement: 'Water weekly, reduce in winter',
    careInstructions: [
      'Keep in a bright spot with consistent indirect light — avoid moving frequently.',
      'Water when top inch of soil is dry; use lukewarm water.',
      'Rotate the pot quarterly for even growth.',
      'Clean leaves regularly and maintain humidity above 40%.',
    ],
  },
  {
    id: 'Corn Plant (Dracaena fragrans ‘Massangeana’)',
    name: "Corn Plant (Dracaena fragrans ‘Massangeana’)",
    image: product5,
    price: 1200,
    type: 'Indoor',
    description: 'A beautiful, low maintenance plant with lush green leaves and bright yellow stripes. Perfect for homes and offices.',
    difficulty: 'Easy',
    lightRequirement: 'Low to medium indirect light',
    waterRequirement: 'Water every 1-2 weeks',
    careInstructions: [
      'Adaptable to various light conditions; variegation is brighter with more light.',
      'Water when soil feels dry to the touch.',
      'Trim long vines to encourage fuller growth.',
      'Propagate easily in water from stem cuttings.',
    ],
  },
  {
    id: 'Peace Lily',
    name: 'Peace Lily',
    image: product4,
    price: 799,
    type: 'Indoor',
    description: 'Graceful white blooms and glossy green leaves — a natural air purifier for your home.',
    difficulty: 'Easy',
    lightRequirement: 'Low to medium indirect light',
    waterRequirement: 'Water weekly, keep soil moist',
    careInstructions: [
      'Prefers shaded areas; direct sun will scorch leaves.',
      'Keep soil consistently moist but not waterlogged.',
      'Drooping leaves indicate thirst — water promptly.',
      'Remove spent flowers to encourage new blooms.',
    ],
  },
  {
    id: 'Dwarf Umbrella Tree (Schefflera arboricola)',
    name: 'Dwarf Umbrella Tree (Schefflera arboricola)',
    image: product31,
    price: 600,
    type: 'Outdoor',
    description: 'A lush, multi-stemmed shrub featuring glossy green leaflets that fan out in circular clusters like tiny umbrellas.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Golden Pothos (Epipremnum aureum)',
    name: 'Golden Pothos (Epipremnum aureum)',
    image: product32,
    price: 6000,
    type: 'Outdoor',
    description: 'A fast-growing trailing vine with heart-shaped leaves marbled with streaks of yellow and cream.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Yucca Cane (Yucca guatemalensis / Yucca elephantipes)',
    name: 'Yucca Cane (Yucca guatemalensis / Yucca elephantipes)',
    image: product33,
    price: 1700,
    type: 'Outdoor',
    description: 'A structural plant with thick, woody trunks topped by dense rosettes of long, sword-shaped, leathery green leaves.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Ponytail Palm (Beaucarnea recurvata)',
    name: 'Ponytail Palm (Beaucarnea recurvata)',
    image: product34,
    price: 899,
    type: 'Outdoor',
    description: 'A unique succulent featuring a bulbous, water-storing base trunk topped with a fountain of long, curling hair-like leaves.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Bird of Paradise (Strelitzia reginae)',
    name: 'Bird of Paradise (Strelitzia reginae)',
    image: product35,
    price: 9999,
    type: 'Indoor',
    description:'A large, structural tropical plant with oversized, paddle-shaped leaves resembling banana leaves.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: 'Arrowhead Plant (Syngonium podophyllum)',
    name: 'Arrowhead Plant (Syngonium podophyllum)',
    image: product36,
    price: 800,
    type: 'Indoor',
    description:'A lush, trailing or climbing vine with distinct spade- or arrowhead-shaped leaves that can have white or pink variegation.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: 'Philodendron Xanadu (Thaumatophyllum xanadu)',
    name: 'Philodendron Xanadu (Thaumatophyllum xanadu)',
    image: product37,
    price: 2500,
    type: 'Indoor',
    description:'A clump-forming tropical plant with deeply lobed, tooth-edged, glossy dark green leaves growing on long stems.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: 'Flamingo Lily (Anthurium andraeanum)',
    name: 'Flamingo Lily (Anthurium andraeanum)',
    image: product38,
    price: 1000,
    type: 'Indoor',
    description:'A popular tropical houseplant with glossy, heart-shaped dark green leaves and long-lasting, bright red or pink waxy spathes (flowers).',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: 'Rattlesnake Plant (Calathea lancifolia / Goeppertia insignis)',
    name: 'Rattlesnake Plant (Calathea lancifolia / Goeppertia insignis)',
    image: product39,
    price: 2000,
    type: 'Indoor',
    description:'A highly decorative plant with long, wavy-edged pale green leaves marked with dark green spots and rich purple undersides.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: "Variegated Rubber Tree (Ficus elastica 'Tineke')",
    name: "Variegated Rubber Tree (Ficus elastica 'Tineke')",
    image: product40,
    price: 2500,
    type: 'Indoor',
    description:'A striking variety of the rubber plant featuring glossy, oval leaves variegated with shades of cream, mint green, and dark green.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },

  {
    id: 'Desert Rose (Adenium obesum)',
    name: 'Desert Rose (Adenium obesum)',
    image: product6,
    price: 190,
    type: 'Indoor',
    description: 'A structural succulent shrub with a thick, fleshy trunk (caudex), leathery green leaves, and trumpet-shaped pink or red flowers.',
    difficulty: 'Easy',
    lightRequirement: 'Bright indirect light',
    waterRequirement: 'Water every 1-2 weeks',
    careInstructions: [
      'Place near a bright window with filtered light.',
      'Water when top half of soil is dry.',
      'Wipe leaves with a damp cloth to maintain shine.',
      'Prune top growth to control height and encourage branching.',
    ],
  },
  {
    id: 'Ox-Tongue Plant (Gasteria, likely Gasteria obliqua or Gasteria disticha)',
    name: 'Ox-Tongue Plant (Gasteria, likely Gasteria obliqua or Gasteria disticha)',
    image: product7,
    price: 600,
    type: 'Indoor',
    description:'A low-growing succulent featuring thick, tongue-shaped dark green leaves covered in small white warts or spots.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Water every 3-4 weeks',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: "Lawyer's Tongue",
    name: "Lawyer's Tongue",
    image: product8,
    price: 72,
    type: 'Indoor',
    description: 'A compact rosette-forming succulent with sturdy, dimpled leaves that grow in a fan-like pattern.',
    difficulty: 'Medium',
    lightRequirement: 'Bright direct to indirect light',
    waterRequirement: 'Water weekly in summer, biweekly in winter',
    careInstructions: [
      'Needs bright light — a south-facing window is ideal.',
      'Keep soil evenly moist during growing season.',
      'Mist leaves or use a humidifier in dry environments.',
      'Wipe leaves regularly to prevent dust buildup.',
    ],
  },
  {
    id: 'Lace Aloe / Guinea-Fowl Aloe (Aristaloe aristata, formerly Aloe aristata)',
    name: 'Lace Aloe / Guinea-Fowl Aloe (Aristaloe aristata, formerly Aloe aristata)',
    image: product9,
    price: 790,
    type: 'Indoor',
    description: 'Lace Aloe / Guinea-Fowl Aloe (Aristaloe aristata, formerly Aloe aristata)',
    difficulty: 'Hard',
    lightRequirement: 'Medium indirect light',
    waterRequirement: 'Water weekly with filtered water',
    careInstructions: [
      'Avoid direct sunlight which fades the beautiful patterns.',
      'Use distilled or rainwater — sensitive to tap water minerals.',
      'Maintain humidity above 60% with a pebble tray or humidifier.',
      'Keep soil consistently moist but never soggy.',
    ],
  },
  {
    id: 'Lace Aloe (Aristaloe aristata - Top-down view)',
    name: 'Lace Aloe (Aristaloe aristata - Top-down view)',
    image: product10,
    price: 15,
    type: 'Indoor',
    description: 'A top-down view of the compact, geometric rosette showing its intricate patterns and white-toothed leaf edges.',
    difficulty: 'Easy',
    lightRequirement: 'Bright indirect light',
    waterRequirement: 'Water weekly',
    careInstructions: [
      'Thrives in bright, indirect light but tolerates partial shade.',
      'Water when soil surface feels dry.',
      'Remove brown tips by trimming with clean scissors.',
      'Propagate plantlets by placing them in moist soil.',
    ],
  },
  {
    id: 'False Aralia (Plerandra elegantissima, formerly Dizygotheca elegantissima)',
    name: 'False Aralia (Plerandra elegantissima, formerly Dizygotheca elegantissima)',
    image: product11,
    price: 500,
    type: 'Indoor',
    description: 'An elegant plant with slender, coppery-green to dark green leaves that feature deeply serrated, tooth-like edges.',
    difficulty: 'Easy',
    lightRequirement: 'Medium indirect light',
    waterRequirement: 'Water when soil is dry',
    careInstructions: [
      'Prefers cool, humid environments with bright filtered light.',
      'Water thoroughly when top inch of soil is dry.',
      'Pinch back growing tips to maintain bushy form.',
      'Watch for spider mites in dry conditions.',
    ],
  },
  {
    id: "Janet Craig Dracaena (Dracaena deremensis 'Janet Craig' / Dracaena fragrans)",
    name: "Janet Craig Dracaena (Dracaena deremensis 'Janet Craig' / Dracaena fragrans)",
    image: product12,
    price: 800,
    type: 'Indoor',
    description: 'A hardy indoor plant featuring clusters of glossy, solid dark green, sword-shaped leaves that arch gracefully from a central stem.',
    difficulty: 'Easy',
    lightRequirement: 'Bright direct light',
    waterRequirement: 'Water every 3 weeks',
    careInstructions: [
      'Place in a sunny south or west-facing window.',
      'Water deeply but infrequently — soil must dry completely.',
      'Use cactus/succulent potting mix for best drainage.',
      'Harvest outer leaves for gel; plant will regenerate.',
    ],
  },
  {
    id: "Chinese Evergreen (Aglaonema, likely 'Silver Queen' or 'Maria')",
    name: "Chinese Evergreen (Aglaonema, likely 'Silver Queen' or 'Maria')",
    image: product13,
    price: 800,
    type: 'Indoor',
    description: 'A lush, low-growing indoor plant with lance-shaped dark green leaves heavily marbled with silvery-gray patterns.',
    difficulty: 'Medium',
    lightRequirement: 'Medium indirect light',
    waterRequirement: 'Keep soil consistently moist',
    careInstructions: [
      'High humidity is essential — mist daily or place in bathroom.',
      'Never let soil dry out completely.',
      'Avoid direct sun which burns delicate fronds.',
      'Trim brown fronds at the base to encourage new growth.',
    ],
  },
  {
    id: 'Emerald Ripple Peperomia (Peperomia caperata)',
    name: 'Emerald Ripple Peperomia (Peperomia caperata)',
    image: product14,
    price: 600,
    type: 'Indoor',
    description: 'A compact houseplant featuring deeply ridged, heart-shaped leaves that create a distinct, crinkled texture.',
    difficulty: 'Easy',
    lightRequirement: 'Medium indirect light',
    waterRequirement: 'Water every 1-2 weeks',
    careInstructions: [
      'Bright indirect light enhances the variegation.',
      'Water when top 2 inches of soil are dry.',
      'Train on a trellis or let trail from a shelf.',
      'Fertilize monthly during spring and summer.',
    ],
  },
  {
    id: "Croton (Codiaeum variegatum, likely 'Petra')",
    name: "Croton (Codiaeum variegatum, likely 'Petra')",
    image: product15,
    price: 600,
    type: 'Indoor',
    description: 'A bold, colorful tropical shrub with thick, leathery leaves heavily veins and variegated in bright yellow, orange, and red.',
    difficulty: 'Easy',
    lightRequirement: 'Medium to bright indirect light',
    waterRequirement: 'Water every 2 weeks',
    careInstructions: [
      'Tolerates lower light but colors are richer with more brightness.',
      'Let soil dry between waterings.',
      'Remove lower leaves as they naturally yellow.',
      'Sensitive to fluoride — use filtered water if possible.',
    ],
  },
  {
    id: 'ZZ Plant (Zamioculcas zamiifolia)',
    name: 'ZZ Plant (Zamioculcas zamiifolia)',
    image: product16,
    price: 700,
    type: 'Outdoor',
    description: 'An incredibly tough plant with naturally shiny, smooth, oval leaves arranged symmetrically along thick, upright stems.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water weekly, drought tolerant once established',
    careInstructions: [
      'Plant in well-draining soil with full sun exposure.',
      'Water deeply but allow soil to dry between waterings.',
      'Prune after flowering to maintain compact shape.',
      'Avoid overhead watering to prevent fungal issues.',
    ],
  },
  {
    id: "Dumb Cane (Dieffenbachia, likely 'Camille' or 'Compacta')",
    name: "Dumb Cane (Dieffenbachia, likely 'Camille' or 'Compacta')",
    image: product17,
    price: 1300,
    type: 'Outdoor',
    description: 'A lush tropical plant with large, broad leaves featuring a creamy-white or pale green center surrounded by a dark green border.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Requires at least 6 hours of direct sunlight daily.',
      'Water at the base, keeping foliage dry.',
      'Deadhead spent blooms to encourage continuous flowering.',
      'Apply rose fertilizer monthly during growing season.',
    ],
  },
  {
    id: "Goldcrest Wilma Cypress (Cupressus macrocarpa 'Wilma Goldcrest')",
    name: "Goldcrest Wilma Cypress (Cupressus macrocarpa 'Wilma Goldcrest')",
    image: product18,
    price: 1800,
    type: 'Outdoor',
    description: 'A compact evergreen shrub with bright, chartreuse-yellow foliage that smells faintly of lemon when touched.',
    difficulty: 'Medium',
    lightRequirement: 'Partial sun to shade',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Morning sun with afternoon shade is ideal.',
      'Keep soil consistently moist — hydrangeas are thirsty plants.',
      'Soil pH affects bloom color: acidic for blue, alkaline for pink.',
      'Prune immediately after flowering, not in spring.',
    ],
  },
  {
    id: 'Spider Plant (Chlorophytum comosum)',
    name: 'Spider Plant (Chlorophytum comosum)',
    image: product19,
    price: 85,
    type: 'Outdoor',
    description: 'An adaptable plant with arching green-and-white striped leaves that produces hanging baby plantlets on long stems.',
    difficulty: 'Medium',
    lightRequirement: 'Partial shade',
    waterRequirement: 'Water weekly, more in heat',
    careInstructions: [
      'Protect from harsh afternoon sun and strong winds.',
      'Keep soil evenly moist, especially during first year.',
      'Mulch around base to retain moisture and regulate temperature.',
      'Minimal pruning needed — shape in late winter if desired.',
    ],
  },
  {
    id: "Variegated Weeping Fig (Ficus benjamina 'Variegata')",
    name: "Variegated Weeping Fig (Ficus benjamina 'Variegata')",
    image: product20,
    price: 1500,
    type: 'Outdoor',
    description: 'A graceful indoor shrub with dense branches and small, pointed leaves bordered in creamy white.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Water weekly',
    careInstructions: [
      'Plant in well-draining soil with good air circulation.',
      'Water regularly during first growing season.',
      'Trim lightly in late spring to maintain shape.',
      'Apply balanced fertilizer in early spring.',
    ],
  },
  {
    id: 'Weeping Fig (Ficus benjamina)',
    name: 'Weeping Fig (Ficus benjamina)',
    image: product21,
    price: 2499,
    type: 'Outdoor',
    description: 'A classic indoor tree featuring a dense, elegant canopy of glossy, teardrop-shaped green leaves.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (8+ hours)',
    waterRequirement: 'Water deeply 2-3 times per week',
    careInstructions: [
      'Requires full sun and rich, well-amended soil.',
      'Water deeply at the base to encourage strong roots.',
      'Stake or cage plants early for support.',
      'Pinch suckers for larger fruit on indeterminate varieties.',
    ],
  },
  {
    id: 'Sago Palm (Cycas revoluta)',
    name: 'Sago Palm (Cycas revoluta)',
    image: product22,
    price: 6400,
    type: 'Outdoor',
    description: 'A slow-growing, prehistoric plant with a rugged trunk topped by a rigid rosette of feathery, dark green fronds.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water weekly',
    careInstructions: [
      'Direct sow after last frost in fertile, well-draining soil.',
      'Water at the base; tall stems need staking in windy areas.',
      'Deadhead spent flowers or leave for birds to enjoy seeds.',
      'Space plants 2 feet apart for giant varieties.',
    ],
  },
  {
    id: 'Ponytail Palm (Beaucarnea recurvata)',
    name: 'Ponytail Palm (Beaucarnea recurvata)',
    image: product23,
    price: 4999,
    type: 'Outdoor',
    description: 'Not a true palm, but a succulent featuring a distinctive, swollen water-storing base (caudex) topped with a canopy of long, hair-like curling leaves.',
    difficulty: 'Easy',
    lightRequirement: 'Partial to full shade',
    waterRequirement: 'Water weekly, keep soil moist',
    careInstructions: [
      'Ideal for shady spots where few plants thrive.',
      'Keep soil consistently moist but well-draining.',
      'Divide clumps every 3-4 years in early spring.',
      'Protect from slugs with organic deterrents.',
    ],
  },
  {
    id: 'Norfolk Island Pine (Araucaria heterophylla)',
    name: 'Norfolk Island Pine (Araucaria heterophylla)',
    image: product24,
    price: 6999,
    type: 'Outdoor',
    description: 'A stately, symmetrical conifer with tiered horizontal branches covered in soft, bright green needles.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (roots shaded)',
    waterRequirement: 'Water weekly, keep roots cool',
    careInstructions: [
      'Head in sun, feet in shade — mulch roots generously.',
      'Provide a sturdy trellis or arbor for climbing.',
      'Prune according to variety group (A, B, or C).',
      'Water consistently during first year of establishment.',
    ],
  },
  {
    id: "Variegated Yucca (Yucca aloifolia 'Variegata' or similar cultivar)",
    name: "Variegated Yucca (Yucca aloifolia 'Variegata' or similar cultivar)",
    image: product25,
    price: 1799,
    type: 'Outdoor',
    description: 'A tough, structural plant with a rosette of stiff, sword-like leaves bordered with creamy-white stripes.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water weekly, drought tolerant',
    careInstructions: [
      'Plant in sandy, well-draining soil with full sun.',
      'Allow soil to dry between waterings.',
      'Harvest sprigs regularly to encourage bushy growth.',
      'Bring potted plants indoors before first frost in cold climates.',
    ],
  },
  {
    id: "Gold Dust Croton (Codiaeum variegatum 'Gold Dust')",
    name: "Gold Dust Croton (Codiaeum variegatum 'Gold Dust')",
    image: product26,
    price: 799,
    type: 'Outdoor',
    description: 'A colorful tropical shrub with narrow, glossy green leaves heavily speckled with bright yellow dots.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Water weekly during bloom season',
    careInstructions: [
      'Plant in well-draining soil with at least 6 hours of sun.',
      'Avoid planting too deeply — eyes should be 2 inches below soil.',
      'Support heavy blooms with peony rings in spring.',
      'Cut back foliage in fall after first frost.',
    ],
  },
  {
    id: "Variegated Umbrella Tree (Schefflera arboricola 'Variegata')",
    name: "Variegated Umbrella Tree (Schefflera arboricola 'Variegata')",
    image: product27,
    price: 1200,
    type: 'Outdoor',
    description: 'A popular indoor shrub featuring leaf clusters that fan out like umbrella spokes, variegated with green and creamy-yellow.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Requires acidic soil (pH 4.5-5.5) — amend with peat or sulfur.',
      'Plant at least two varieties for cross-pollination.',
      'Mulch with pine needles to maintain acidity.',
      'Net bushes before berries ripen to protect from birds.',
    ],
  },
  {
    id: 'New Zealand Flax (Phormium tenax / Phormium bronze cultivar)',
    name: 'New Zealand Flax (Phormium tenax / Phormium bronze cultivar)',
    image: product28,
    price: 800,
    type: 'Outdoor',
    description: 'A robust, striking perennial clump with long, rigid, strap-like leaves in deep bronze, purple, or olive-green shades.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Water weekly',
    careInstructions: [
      'Plant in average to moist, well-draining soil.',
      'Cut back to ground level in late winter before new growth.',
      'Divide clumps every 3-4 years in spring.',
      'Minimal fertilizer needed — too much causes flopping.',
    ],
  },
  {
    id: 'Pencil Cactus / Firesticks (Euphorbia tirucalli)',
    name: 'Pencil Cactus / Firesticks (Euphorbia tirucalli)',
    image: product29,
    price: 200,
    type: 'Outdoor',
    description: 'A striking succulent composed of dense, slender, pencil-like green branches that can turn bright coral-red in high sunlight.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Water 2-3 times per week',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Madagascar Dragon Tree (Dracaena marginata)',
    name: 'Madagascar Dragon Tree (Dracaena marginata)',
    image: product30,
    price: 200,
    type: 'Outdoor',
    description: 'A slender tree featuring narrow, ribbon-like dark green leaves edged with thin red margins atop thin, woody stalks.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Water weekly, drought tolerant',
    careInstructions: [
      'Thrives in poor to average soil with good drainage.',
      'Drought tolerant once established — avoid overwatering.',
      'Leave seed heads standing for winter bird food.',
      'Divide every 3-4 years to maintain vigor.',
    ],
  },
]

export const featuredPlantIds = [
  'monstera-deliciosa',
  'snake-plant',
  'lavender',
  'japanese-maple',
  'hydrangea',
  'pothos-golden',
]

export function getPlantById(id: string): Plant | undefined {
  return plants.find((plant) => plant.id === id)
}

export function getFeaturedPlants(): Plant[] {
  return featuredPlantIds
    .map((id) => getPlantById(id))
    .filter((plant): plant is Plant => plant !== undefined)
}

export function getPriceRange(): { min: number; max: number } {
  const prices = plants.map((p) => p.price)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}

export function filterAndSortPlants(filters: PlantFilters): Plant[] {
  let result = plants.filter((plant) => {
    const matchesSearch =
      filters.search === '' ||
      plant.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      plant.description.toLowerCase().includes(filters.search.toLowerCase())

    const matchesType = filters.type === 'All' || plant.type === filters.type

    const matchesPrice =
      plant.price >= filters.minPrice && plant.price <= filters.maxPrice

    return matchesSearch && matchesType && matchesPrice
  })

  result = sortPlants(result, filters.sort)
  return result
}

export function sortPlants(items: Plant[], sort: SortOption): Plant[] {
  const sorted = [...items]
  switch (sort) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    default:
      return sorted
  }
}

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
]
