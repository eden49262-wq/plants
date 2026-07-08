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
    waterRequirement: 'Water when the top 2–3 cm of soil is dry. Avoid overwatering.',
    careInstructions: [
      'Place in bright, indirect sunlight near an east or north-facing window.',
      'Water when the top 2 inches of soil feel dry — typically once a week.',
      'Wipe leaves monthly to remove dust and maintain their glossy appearance.',
      'Provide a moss pole for support as the plant grows taller.',
    ],
  },
  {
    id: "Snake Plant (Sansevieria trifasciata)",
    name: "Snake Plant (Sansevieria trifasciata)",
    image: product3,
    price: 1199,
    type: 'Indoor',
    description: 'A hardy, air purifying plant with striking upright leaves. Perfect for homes and offices, and very easy to care for.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Every 2–3 weeks. Let the soil dry completely between watering.',
    careInstructions: [
      'Tolerates low light but thrives in bright indirect conditions.',
      'Allow soil to dry completely between waterings to prevent root rot.',
      'Avoid overwatering — this is the most common cause of problems.',
      'Fertilize lightly once in spring and once in summer.',
    ],
  },
  {
    id: 'Fiddle Leaf Fig (Ficus lyrata)',
    name: 'Fiddle Leaf Fig (Ficus lyrata)',
    image: product1,
    price: 2000,
    type: 'Indoor',
    description: 'A stunning indoor plant with large, glossy green leaves that adds a fresh, modern touch to any space.',
    difficulty: 'Medium',
    lightRequirement: 'Bright indirect light',
    waterRequirement: 'Once a week. Let the soil dry slightly between watering.',
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
    price: 1499,
    type: 'Indoor',
    description: 'A beautiful, low maintenance plant with lush green leaves and bright yellow stripes. Perfect for homes and offices.',
    difficulty: 'Easy',
    lightRequirement: 'Low to medium indirect light',
    waterRequirement: 'Once every 1–2 weeks. Let the top soil dry before watering.',
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
    description: 'An elegant, air purifying plant with lush green leaves and beautiful white blooms. Perfect for homes and offices.',
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
    id: 'Burro’s Tail (Sedum morganianum)',
    name: 'Burro’s Tail (Sedum morganianum)',
    image: product31,
    price: 2490,
    type: 'Outdoor',
    description: 'A beautiful trailing succulent with soft, blue green leaves. Perfect for hanging baskets, shelves, and bright indoor spaces.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Every 2–3 weeks. Let the soil dry completely before watering.',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Philodendron ‘Xanadu’',
    name: 'Philodendron ‘Xanadu’',
    image: product32,
    price: 7990,
    type: 'Outdoor',
    description: 'A lush, tropical plant with deeply lobed green leaves that brings a fresh, elegant look to any home or office.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Once a week. Let the top soil dry slightly before watering.',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: '​Cast Iron Plant (Aspidistra elatior)',
    name: '​Cast Iron Plant (Aspidistra elatior)',
    image: product33,
    price: 1499,
    type: 'Outdoor',
    description: 'An incredibly tough and resilient foliage plant with wide, dark green leaves. Known for surviving low light and neglect, making it ideal for beginners.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Every 2-3 weeks. Allow the soil to dry out halfway down the pot before watering again.',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Croton (Codiaeum variegatum)',
    name: 'Croton (Codiaeum variegatum)',
    image: product34,
    price: 899,
    type: 'Outdoor',
    description: 'A vibrant ornamental plant with colorful green, yellow, orange, and red leaves that adds a bold tropical touch to any space.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Once a week. Keep the soil slightly moist but not soggy.',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Camellia (Camellia japonica)',
    name: 'Camellia (Camellia japonica)',
    image: product35,
    price: 9999,
    type: 'Indoor',
    description:'A stunning, glossy evergreen shrub prized for its formal, rose-like crimson blossoms. It brings spectacular, classic color to semi-shaded outdoor patios and garden walls.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Every 1-2 weeks. Maintain consistently moist, well-draining soil, watering more frequently during hot summer months.',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: 'Asparagus Fern (Asparagus setaceus)',
    name: 'Asparagus Fern (Asparagus setaceus)',
    image: product36,
    price: 599,
    type: 'Indoor',
    description:'An elegant, scrambling vine with delicate, feathery bright green foliage that creates a soft, misty look. It looks beautiful cascading from hanging baskets or raised plant stands.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Every 1-2 weeks. Water thoroughly when the top surface of the soil feels dry, keeping it evenly damp.',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: "​Foxtail Fern (Asparagus densiflorus 'Meyersii')",
    name: "​Foxtail Fern (Asparagus densiflorus 'Meyersii')",
    image: product37,
    price: 2499,
    type: 'Indoor',
    description:'​A unique, clump-forming perennial featuring upright, plume-like stems that resemble fluffy green tails. A wonderful accent plant for both indoor containers and outdoor beds.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Every 1-2 weeks. Allow the top inch of soil to dry out between waterings; it is relatively drought-tolerant once established.',
    careInstructions: [
      'Extremely drought tolerant — less water is better.',
      'Handles fluorescent office lighting with ease.',
      'Clean leaves occasionally with a soft cloth.',
      'Repot every 2-3 years in well-draining soil.',
    ],
  },
  {
    id: 'Sword Fern (Nephrolepis exaltata)',
    name: 'Sword Fern (Nephrolepis exaltata)',
    image: product38,
    price: 699,
    type: 'Indoor',
    description:'A lush, classic fern with long, bright green fronds that gracefully arch outward. It adds a vibrant, tropical texture to shaded gardens, borders, or patio spaces.',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Every 1-2 weeks. Keep the soil consistently moist but never waterlogged.',
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
    id: 'Gasteria (Gasteria spp.)',
    name: 'Gasteria (Gasteria spp.)',
    image: product7,
    price: 799,
    type: 'Indoor',
    description:'A hardy succulent with thick, spotted leaves,Easy to care for and ideal for indoor spaces',
    difficulty: 'Easy',
    lightRequirement: 'Low to bright indirect light',
    waterRequirement: 'Every 2-3 weeks',
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
    price: 720,
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
    id: 'Lace Aloe (Aristaloe aristata)',
    name: 'Lace Aloe (Aristaloe aristata)',
    image: product9,
    price: 690,
    type: 'Indoor',
    description: 'Lace Aloe / Guinea-Fowl Aloe (Aristaloe aristata, formerly Aloe aristata)',
    difficulty: 'Hard',
    lightRequirement: 'Medium indirect light',
    waterRequirement: 'Every 2-3 weeks',
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
    price: 699,
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
    id: 'Zebra Haworthia (Haworthiopsis attenuata)',
    name: 'Zebra Haworthia (Haworthiopsis attenuata)',
    image: product11,
    price: 790,
    type: 'Indoor',
    description: 'A beautiful succulent with bold white stripes, A perfect low maintenance plant for homes and offices.',
    difficulty: 'Easy',
    lightRequirement: 'Medium indirect light',
    waterRequirement: ' Every 2-3 weeks',
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
    id: "Peanut Cactus (Echinopsis chamaecereus)",
    name: "Peanut Cactus (Echinopsis chamaecereus",
    image: product13,
    price: 799,
    type: 'Indoor',
    description: 'A unique trailing cactus with finger like stems ,Great for pots and hanging displays',
    difficulty: 'Medium',
    lightRequirement: 'Medium indirect light',
    waterRequirement: 'Every 2-3 weeks Let the soil drycompletely before watering',

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
    id: "Bunny Ears Cactus (Opuntia microdasys)",
    name: "Bunny Ears Cactus (Opuntia microdasys)",
    image: product15,
    price: 790,
    type: 'Indoor',
    description: 'A charming cactus with bunny ear shaped pads Perfect for bright indoor spaces',
    difficulty: 'Easy',
    lightRequirement: 'Medium to bright indirect light',
    waterRequirement: 'Every 3-4 weeks',
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
    id: "African Spear Plant (Sansevieria cylindrica)",
    name: "African Spear Plant (Sansevieria cylindrica)",
    image: product17,
    price: 1299,
    type: 'Outdoor',
    description: 'A modern, low maintenance plant with tall, cylindrical leaves. Perfect for homes, offices, and minimalist spaces.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Every 2–3 weeks. Let the soil dry completely before watering.',
    careInstructions: [
      'Requires at least 6 hours of direct sunlight daily.',
      'Water at the base, keeping foliage dry.',
      'Deadhead spent blooms to encourage continuous flowering.',
      'Apply rose fertilizer monthly during growing season.',
    ],
  },
  {
    id: "​Lemon Cypress (Cupressus macrocarpa 'Goldcrest')",
    name: "​Lemon Cypress (Cupressus macrocarpa 'Goldcrest')",
    image: product18,
    price: 1799,
    type: 'Outdoor',
    description: 'A striking evergreen shrub featuring vibrant, lime-green foliage that gives off a delightful citrus scent. Perfect for adding a pop of bright color to indoor spaces or patios.',
    difficulty: 'Medium',
    lightRequirement: 'Partial sun to shade',
    waterRequirement: 'Every 1-2 weeks, Keep the soil evenly moist but not waterlogged, watering when the top inch of soil feels dry.',
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
    price: 190,
    type: 'Outdoor',
    description: 'A hardy, air purifying plant with graceful green and white striped leaves. Perfect for hanging baskets, shelves, and tabletops.',
    difficulty: 'Medium',
    lightRequirement: 'Partial shade',
    waterRequirement: 'Once a week. Let the top soil dry slightly before watering.',
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
    price: 1999,
    type: 'Outdoor',
    description: 'An elegant indoor tree with beautiful, glossy green leaves edged in creamy white. It adds a sophisticated, lush touch to bright rooms and offices',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Every 1-2 weeks. Allow the top 2 inches of soil to dry out completely between waterings.',
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
    price: 4999,
    type: 'Outdoor',
    description: 'An ancient, slow-growing plant featuring a rugged trunk and a stiff rosette of feathery, palm-like fronds. It adds a wonderful tropical or architectural vibe to any space.',
    difficulty: 'Easy',
    lightRequirement: 'Every 2-3 weeks. Allow the soil to dry out almost completely between waterings, as it is very sensitive to overwatering.',
    waterRequirement: 'Water weekly',
    careInstructions: [
      'Direct sow after last frost in fertile, well-draining soil.',
      'Water at the base; tall stems need staking in windy areas.',
      'Deadhead spent flowers or leave for birds to enjoy seeds.',
      'Space plants 2 feet apart for giant varieties.',
    ],
  },
  {
    id: 'Italian Cypress (Cupressus sempervirens)',
    name: 'Italian Cypress (Cupressus sempervirens)',
    image: product23,
    price: 4999,
    type: 'Outdoor',
    description: 'A tall, slender, and dramatic evergreen tree that grows in a tight columnar shape. Ideal as a structural focal point or a natural privacy screen for outdoor gardens.',
    difficulty: 'Easy',
    lightRequirement: 'Partial to full shade',
    waterRequirement: 'Every 1-2 weeks for young plants; highly drought-tolerant once established. Allow the soil to dry out well between waterings.',
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
    price: 7999,
    type: 'Outdoor',
    description: 'A lovely, symmetrical evergreen with soft, feathery needles that resemble a classic Christmas tree. It thrives indoors as a year-round houseplant.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (roots shaded)',
    waterRequirement: 'Every 1-2 weeks. Water thoroughly when the top inch of soil feels dry, keeping the soil consistently damp but never soggy.',
    careInstructions: [
      'Head in sun, feet in shade — mulch roots generously.',
      'Provide a sturdy trellis or arbor for climbing.',
      'Prune according to variety group (A, B, or C).',
      'Water consistently during first year of establishment.',
    ],
  },
  {
    id: "​Yucca Plant (Yucca aloifolia / Yucca guatemalensis)",
    name: "​Yucca Plant (Yucca aloifolia / Yucca guatemalensis)",
    image: product25,
    price: 1499,
    type: 'Outdoor',
    description: 'A bold, architectural plant with sturdy rosettes of sword-like, pointed leaves. Very tough and highly adaptable to bright, sunny spots.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Every 2-3 weeks. Allow the soil to dry out completely before watering thoroughly.',
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
    description: 'A vibrant tropical shrub with narrow, deep green leaves completely speckled with bright yellow dots, resembling a splash of gold paint',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Every 1-2 weeks. Keep the soil evenly moist, watering as soon as the top inch feels dry.',
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
    price: 999,
    type: 'Outdoor',
    description: 'A lush, fast-growing plant with distinct clusters of leaves that radiate outward like an umbrella, beautifully patterned with creamy yellow patches.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Every 1-2 weeks. Allow the top inch of soil to dry out before watering again.',
    careInstructions: [
      'Requires acidic soil (pH 4.5-5.5) — amend with peat or sulfur.',
      'Plant at least two varieties for cross-pollination.',
      'Mulch with pine needles to maintain acidity.',
      'Net bushes before berries ripen to protect from birds.',
    ],
  },
  {
    id: 'New Zealand Flax (Phormium tenax)',
    name: 'New Zealand Flax (Phormium tenax)',
    image: product28,
    price: 899,
    type: 'Outdoor',
    description: 'A dramatic, clump-forming perennial featuring long, rigid, strap-like leaves that come in striking shades of bronze, purple, and green. Excellent for adding texture to outdoor landscapes.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Every 1-2 weeks. Water regularly until established; mature plants are quite drought-resistant but prefer moist, well-draining soil.',
    careInstructions: [
      'Plant in average to moist, well-draining soil.',
      'Cut back to ground level in late winter before new growth.',
      'Divide clumps every 3-4 years in spring.',
      'Minimal fertilizer needed — too much causes flopping.',
    ],
  },
  {
    id: '​New Guinea Impatiens (Impatiens hawkeri)',
    name: '​New Guinea Impatiens (Impatiens hawkeri)',
    image: product29,
    price: 150,
    type: 'Outdoor',
    description: 'A compact, prolific bloomer with deep green, pointed foliage contrasted by bright, eye-catching red flowers. It provides non-stop color throughout the warmer months.',
    difficulty: 'Medium',
    lightRequirement: 'Full sun (6+ hours)',
    waterRequirement: 'Every 4-7 days. Requires frequent watering to keep the soil evenly and consistently moist, as the plant will wilt quickly if allowed to dry out.',
    careInstructions: [
      'Plant tubers after last frost in rich, well-draining soil.',
      'Stake tall varieties early to support heavy blooms.',
      'Deadhead regularly for continuous flowering until frost.',
      'Dig up tubers in fall and store in cool, dry place in cold climates.',
    ],
  },
  {
    id: 'Dahlia (Dahlia hortensis)',
    name: 'Dahlia (Dahlia hortensis)',
    image: product30,
    price: 150,
    type: 'Outdoor',
    description: 'A gorgeous, bushy perennial featuring a large, intricately layered velvety red bloom. It makes a perfect bold statement piece for sunny patios, balconies, or garden beds.',
    difficulty: 'Easy',
    lightRequirement: 'Full sun to partial shade',
    waterRequirement: 'Every 1-2 weeks. Water deeply when the top inch of soil feels dry, keeping the root zone consistently moist during blooming season.',
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
