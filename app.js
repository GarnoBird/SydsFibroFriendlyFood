const flowSteps = ["energy", "food", "time", "meal", "today", "pantry"];

const options = {
  energy: [
    { value: "barely", label: "Barely Anything", icon: "🛌", note: "No chopping. No stove. 2 to 5 minutes." },
    { value: "little", label: "A Little", icon: "🥄", note: "Microwave, toaster, one bowl, maybe 10 minutes." },
    { value: "cook", label: "I Can Cook", icon: "🍳", note: "One pan or one pot, 15 to 25 minutes." },
    { value: "future", label: "Make Future Me Happy", icon: "📦", note: "Batch cook, freezer food, leftovers." }
  ],
  food: [
    { value: "fish", label: "Fish", icon: "🐟", note: "Salmon, tuna, or white fish." },
    { value: "chicken", label: "Chicken / Turkey", icon: "🍗", note: "Rotisserie chicken, bowls, turkey roll-ups." },
    { value: "eggs", label: "Eggs", icon: "🥚", note: "Toast, rice bowl, omelette, boiled eggs." },
    { value: "veggie", label: "Veggie Bowl", icon: "🥗", note: "Sweet potato, rice, greens, chickpeas if tolerated." },
    { value: "soup", label: "Soup", icon: "🍜", note: "Miso, chicken soup, lentil soup, tomato soup." },
    { value: "snack", label: "Snack Plate", icon: "🧺", note: "No cooking. Just assemble." },
    { value: "smoothie", label: "Smoothie / Yogurt Bowl", icon: "🥣", note: "Cool, soft, and easy to sip." }
  ],
  time: [
    { value: "2-5", label: "2 to 5 min", icon: "⏱️", note: "Assemble only." },
    { value: "10", label: "10 min", icon: "🕰️", note: "Toast, microwave, eggs, tuna bowl." },
    { value: "15", label: "15 min", icon: "🍽️", note: "Simple pan meal." },
    { value: "20+", label: "20+ min", icon: "🫕", note: "Batch or dinner." }
  ],
  meal: [
    { value: "breakfast", label: "Breakfast", icon: "☀️", note: "Morning or anytime." },
    { value: "lunch", label: "Lunch", icon: "🌤️", note: "Midday steady." },
    { value: "dinner", label: "Dinner", icon: "🌙", note: "Warm and simple." },
    { value: "snack", label: "Snack / Emergency Food", icon: "🧺", note: "Quick food for right now." }
  ],
  today: [
    { value: "gentle", label: "Gentle food only", icon: "🫖", note: "Simple, soft, not spicy." },
    { value: "noDairy", label: "No dairy today", icon: "🥛", note: "Use dairy-free ideas or swaps." },
    { value: "noBeans", label: "No beans today", icon: "🫘", note: "Skip beans, lentils, hummus, tofu." },
    { value: "noWheat", label: "No wheat today", icon: "🌾", note: "Rice, potatoes, oats, or gluten-free swaps." },
    { value: "noRawVeg", label: "No raw veg today", icon: "🥕", note: "Cooked, soft, or skip the veg." }
  ],
  pantry: [
    { value: "eggs", label: "Eggs" },
    { value: "rice", label: "Rice" },
    { value: "oats", label: "Oats" },
    { value: "yogurt", label: "Yogurt" },
    { value: "tuna", label: "Tuna" },
    { value: "salmon", label: "Salmon" },
    { value: "chicken", label: "Chicken" },
    { value: "turkey", label: "Turkey" },
    { value: "soup", label: "Soup or broth" },
    { value: "sweetPotato", label: "Sweet potato" },
    { value: "banana", label: "Banana" },
    { value: "berries", label: "Berries" },
    { value: "spinach", label: "Spinach" },
    { value: "hummus", label: "Hummus" },
    { value: "crackers", label: "Crackers" },
    { value: "avocado", label: "Avocado" },
    { value: "peanutButter", label: "Peanut butter" }
  ]
};

const recipes = [
  {
    id: "tuna-crackers-plate",
    title: "Tuna Crackers Plate",
    emoji: "🐟",
    goodWhen: "you want a quick pantry plate with almost no prep.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["fish", "snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["none"],
    tags: ["mediterranean-ish", "omega-3", "high-protein", "no-cook", "low-chop"],
    todayFilters: ["noDairy", "noBeans", "noWheat"],
    pantryItems: ["tuna", "crackers"],
    ingredients: ["Tuna pouch or can", "Crackers or rice crackers", "Olive oil or mayo", "Lemon or pickle if tolerated"],
    steps: ["Open the tuna.", "Put crackers on the plate.", "Add olive oil, mayo, or lemon.", "Eat it as little stacks."],
    easierVersion: "Eat tuna straight from the packet with crackers.",
    swaps: ["Use rice cakes for no wheat.", "Skip lemon if sharp food feels bad."]
  },
  {
    id: "greek-yogurt-berry-bowl",
    title: "Greek Yogurt Berry Bowl",
    emoji: "🫐",
    goodWhen: "breakfast needs to be cool, soft, and nearly automatic.",
    mealTypes: ["breakfast", "snack"],
    foodTypes: ["smoothie"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["bowl"],
    tags: ["gentle", "soft", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["yogurt", "berries", "oats"],
    ingredients: ["Greek or coconut yogurt", "Berries", "Oats or granola", "Chia seeds if wanted"],
    steps: ["Spoon yogurt into a bowl.", "Add berries.", "Sprinkle oats or granola on top."],
    easierVersion: "Use drinkable yogurt and eat berries from the container.",
    swaps: ["Use coconut yogurt for no dairy.", "Use certified gluten-free oats for no wheat."]
  },
  {
    id: "peanut-butter-banana-toast",
    title: "Peanut Butter Banana Toast",
    emoji: "🍌",
    goodWhen: "sweet, soft, and familiar sounds good.",
    mealTypes: ["breakfast", "lunch", "snack"],
    foodTypes: ["snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["toaster"],
    tags: ["gentle", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["banana", "peanutButter"],
    ingredients: ["Toast, gluten-free toast, or rice cake", "Peanut butter", "Banana", "Cinnamon"],
    steps: ["Toast the bread if you want it toasted.", "Spread peanut butter.", "Add banana slices or banana chunks.", "Dust with cinnamon."],
    easierVersion: "Dip banana into peanut butter and skip the toast.",
    swaps: ["Use a rice cake for no wheat.", "Use sunflower butter if peanut butter is not tolerated."]
  },
  {
    id: "hummus-snack-plate",
    title: "Hummus Snack Plate",
    emoji: "🧆",
    goodWhen: "a no-cook plate sounds best.",
    mealTypes: ["lunch", "snack"],
    foodTypes: ["snack", "veggie"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["none"],
    tags: ["mediterranean-ish", "no-cook", "low-chop"],
    todayFilters: ["noDairy", "noWheat"],
    pantryItems: ["hummus", "crackers"],
    ingredients: ["Hummus", "Pita or crackers", "Carrots, cucumber, or olives", "Pumpkin seeds if wanted"],
    steps: ["Put hummus on a plate.", "Add pita or crackers.", "Add one crunchy or salty thing if it sounds okay."],
    easierVersion: "Use only hummus and crackers.",
    swaps: ["Skip this one if beans bother you.", "Use rice crackers for no wheat."]
  },
  {
    id: "smoothie-that-counts",
    title: "Smoothie That Counts As Food",
    emoji: "🥤",
    goodWhen: "something cold and sippable sounds best.",
    mealTypes: ["breakfast", "snack"],
    foodTypes: ["smoothie"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["blender"],
    tags: ["gentle", "soft", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["berries", "spinach", "yogurt", "peanutButter"],
    ingredients: ["Frozen berries", "Spinach", "Greek yogurt or coconut yogurt", "Milk or oat milk", "Nut butter"],
    steps: ["Put everything in the blender.", "Blend until smooth.", "Pour into the easiest cup to wash."],
    easierVersion: "Use drinkable yogurt or milk and eat a banana beside it.",
    swaps: ["Use oat milk and coconut yogurt for no dairy.", "Skip spinach if green things sound wrong."]
  },
  {
    id: "turkey-avocado-roll-ups",
    title: "Turkey Avocado Roll-Ups",
    emoji: "🥑",
    goodWhen: "a soft snack plate needs to become lunch.",
    mealTypes: ["lunch", "snack"],
    foodTypes: ["chicken", "snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["none"],
    tags: ["gentle", "high-protein", "no-cook", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["turkey", "avocado", "crackers"],
    ingredients: ["Turkey slices", "Avocado", "Rice crackers if wanted", "Pickles or olives if tolerated"],
    steps: ["Lay turkey slices on a plate.", "Add avocado pieces.", "Roll them up or eat them as little stacks."],
    easierVersion: "Skip rolling. Make piles and eat with your fingers.",
    swaps: ["Use chicken slices if that is what you have."]
  },
  {
    id: "egg-rice-bowl",
    title: "Egg Rice Bowl",
    emoji: "🍳",
    goodWhen: "you want warm food with one bowl and a little protein.",
    mealTypes: ["breakfast", "lunch", "dinner"],
    foodTypes: ["eggs"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave", "pan or mug"],
    tags: ["gentle", "soft", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs", "rice", "spinach", "avocado"],
    ingredients: ["Microwave rice", "Egg", "Spinach", "Avocado", "Olive oil or mild sauce"],
    steps: ["Warm the rice.", "Cook the egg in a pan or microwave-safe mug.", "Wilt spinach or skip it.", "Put egg and avocado on the rice."],
    easierVersion: "Use a boiled egg from the fridge.",
    swaps: ["Skip avocado if you prefer fewer steps."]
  },
  {
    id: "salmon-rice-bowl",
    title: "Salmon Rice Bowl",
    emoji: "🍚",
    goodWhen: "you want real food with very little cooking.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["fish"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "mediterranean-ish", "omega-3", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["salmon", "rice", "avocado"],
    ingredients: ["Microwave rice", "Canned salmon or cooked salmon", "Avocado", "Olive oil", "Lemon", "Salt"],
    steps: ["Warm the rice.", "Add salmon.", "Add avocado if you want.", "Add olive oil, lemon, and salt."],
    easierVersion: "Use canned salmon. Skip the avocado. Eat with seaweed snacks.",
    swaps: ["Skip lemon if acidic food is not friendly today."]
  },
  {
    id: "rotisserie-chicken-bowl",
    title: "Rotisserie Chicken Bowl",
    emoji: "🍗",
    goodWhen: "leftover chicken can do most of the work for you.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["chicken"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "rice", "spinach"],
    ingredients: ["Rotisserie chicken", "Microwave rice", "Bagged greens or microwave spinach", "Olive oil dressing"],
    steps: ["Warm rice.", "Add chicken.", "Add greens or spinach.", "Drizzle with olive oil dressing."],
    easierVersion: "Use only chicken and rice. Add greens another day.",
    swaps: ["Use microwave spinach for no raw veg."]
  },
  {
    id: "microwave-sweet-potato-plate",
    title: "Microwave Sweet Potato Plate",
    emoji: "🍠",
    goodWhen: "soft, warm, and filling sounds kindest.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["veggie"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "mediterranean-ish", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["sweetPotato", "yogurt", "hummus", "spinach"],
    ingredients: ["Sweet potato", "Greek yogurt, olive oil, or hummus", "Pumpkin seeds", "Greens if tolerated"],
    steps: ["Microwave the sweet potato until soft.", "Split it open.", "Top with yogurt, olive oil, or hummus.", "Add seeds if wanted."],
    easierVersion: "Use only sweet potato and olive oil.",
    swaps: ["Use olive oil for no dairy or no beans."]
  },
  {
    id: "miso-tofu-soup",
    title: "Miso Tofu Soup",
    emoji: "🍜",
    goodWhen: "a warm cup or bowl sounds good.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["soup", "veggie"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["kettle or microwave"],
    tags: ["gentle", "soft", "warm", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noWheat", "noRawVeg"],
    pantryItems: ["soup", "spinach"],
    ingredients: ["Miso paste", "Tofu", "Rice noodles", "Spinach", "Hot water"],
    steps: ["Put miso paste in a bowl.", "Add tofu, noodles, and spinach.", "Pour hot water over everything.", "Stir gently."],
    easierVersion: "Use instant miso soup and add tofu only if it is already open.",
    swaps: ["Skip this one if beans or soy bother you."]
  },
  {
    id: "tiny-egg-drop-soup",
    title: "Tiny Egg Drop Soup",
    emoji: "🥣",
    goodWhen: "you want something warm, soft, and spoonable.",
    mealTypes: ["breakfast", "lunch", "dinner", "snack"],
    foodTypes: ["soup", "eggs"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave or stove"],
    tags: ["gentle", "soft", "warm", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs", "soup", "rice"],
    ingredients: ["Broth", "Egg", "Microwave rice if wanted", "Spinach if tolerated"],
    steps: ["Heat broth until steaming.", "Beat the egg in a cup.", "Stir broth while slowly pouring in the egg.", "Add rice if you want it fuller."],
    easierVersion: "Use boxed soup and crack the egg straight in while stirring.",
    swaps: ["Skip spinach if you prefer it simpler."]
  },
  {
    id: "one-pan-salmon-frozen-veg",
    title: "One-Pan Salmon and Frozen Veg",
    emoji: "🐟",
    goodWhen: "you can cook once and want dinner to stay simple.",
    mealTypes: ["dinner", "lunch"],
    foodTypes: ["fish"],
    timeMinutes: 20,
    energyLevel: "cook",
    equipment: ["pan or sheet pan"],
    tags: ["gentle", "mediterranean-ish", "omega-3", "high-protein"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["salmon"],
    ingredients: ["Salmon", "Frozen vegetables", "Olive oil", "Lemon", "Salt"],
    steps: ["Put salmon and frozen vegetables in a pan.", "Add olive oil and salt.", "Cook until salmon is done.", "Add lemon if it sounds good."],
    easierVersion: "Use canned salmon with microwave vegetables instead.",
    swaps: ["Use any frozen veg that already lives in the freezer."]
  },
  {
    id: "turkey-spinach-pasta",
    title: "Turkey Spinach Pasta",
    emoji: "🍝",
    goodWhen: "one pan and one pot feel possible, and leftovers would help.",
    mealTypes: ["dinner", "lunch"],
    foodTypes: ["chicken"],
    timeMinutes: 20,
    energyLevel: "cook",
    equipment: ["pot", "pan"],
    tags: ["high-protein", "steady energy"],
    todayFilters: ["noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["turkey", "spinach"],
    ingredients: ["Ground turkey", "Spinach", "Pasta or gluten-free pasta", "Olive oil", "Parmesan if tolerated"],
    steps: ["Cook pasta.", "Brown turkey in olive oil.", "Stir in spinach until soft.", "Mix with pasta."],
    easierVersion: "Use rotisserie chicken and microwave rice instead.",
    swaps: ["Skip parmesan for no dairy.", "Use gluten-free pasta for no wheat."]
  },
  {
    id: "chicken-soup-shortcut",
    title: "Chicken Soup Shortcut",
    emoji: "🍲",
    goodWhen: "comfort food needs to be mostly assembled.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["soup", "chicken"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["pot"],
    tags: ["gentle", "soft", "warm", "high-protein"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "soup", "rice"],
    ingredients: ["Rotisserie chicken", "Broth", "Frozen vegetables", "Rice or noodles"],
    steps: ["Heat broth.", "Add chicken and frozen vegetables.", "Add rice or noodles.", "Simmer until warm."],
    easierVersion: "Heat boxed soup and put chicken beside it.",
    swaps: ["Use rice for no wheat."]
  },
  {
    id: "chickpea-cucumber-bowl",
    title: "Chickpea Cucumber Bowl",
    emoji: "🥗",
    goodWhen: "fresh, tangy food sounds okay and beans are tolerated.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["veggie"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["bowl"],
    tags: ["mediterranean-ish", "no-cook", "steady energy"],
    todayFilters: ["noDairy", "noWheat"],
    pantryItems: ["hummus"],
    ingredients: ["Chickpeas", "Cucumber", "Tomato", "Olive oil", "Lemon", "Feta if tolerated"],
    steps: ["Rinse chickpeas.", "Add cucumber and tomato.", "Add olive oil and lemon.", "Top with feta if wanted."],
    easierVersion: "Use only chickpeas, olive oil, and salt.",
    swaps: ["Skip this one if beans or raw veg bother you.", "Skip feta for no dairy."]
  },
  {
    id: "egg-veggie-scramble",
    title: "Egg and Veggie Scramble",
    emoji: "🥚",
    goodWhen: "a pan is possible and breakfast-for-dinner sounds kind.",
    mealTypes: ["breakfast", "lunch", "dinner"],
    foodTypes: ["eggs"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["pan"],
    tags: ["gentle", "soft", "high-protein"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs", "spinach"],
    ingredients: ["Eggs", "Spinach", "Frozen peppers", "Toast or rice if wanted"],
    steps: ["Warm spinach and frozen peppers in a pan.", "Add beaten eggs.", "Stir until softly set.", "Eat with toast or rice."],
    easierVersion: "Microwave the eggs and skip the vegetables.",
    swaps: ["Use rice or gluten-free toast for no wheat."]
  },
  {
    id: "warm-veggie-rice-bowl",
    title: "Warm Veggie Rice Bowl",
    emoji: "🥕",
    goodWhen: "soft vegetables and rice sound quiet and enough.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["veggie"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["rice", "spinach"],
    ingredients: ["Microwave rice", "Frozen mixed vegetables", "Olive oil", "Salt or mild sauce"],
    steps: ["Warm rice and frozen vegetables.", "Stir together.", "Add olive oil and salt."],
    easierVersion: "Use rice plus one frozen vegetable only.",
    swaps: ["Add an egg if you need more staying power."]
  },
  {
    id: "white-fish-rice-plate",
    title: "White Fish Rice Plate",
    emoji: "🐟",
    goodWhen: "mild fish and rice sound calm and steady.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["fish"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["pan", "microwave"],
    tags: ["gentle", "mediterranean-ish", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["rice"],
    ingredients: ["White fish fillet", "Microwave rice", "Olive oil", "Salt", "Lemon if wanted"],
    steps: ["Warm the rice.", "Cook fish in olive oil until flaky.", "Put fish on the rice.", "Add salt and lemon if it sounds good."],
    easierVersion: "Use frozen cooked fish or leftover fish with microwave rice.",
    swaps: ["Skip lemon if acidic food is not friendly today."]
  },
  {
    id: "future-me-chicken-tray",
    title: "Future Me Chicken Tray",
    emoji: "📦",
    goodWhen: "you want to make tomorrow a little easier.",
    mealTypes: ["dinner", "lunch"],
    foodTypes: ["chicken"],
    timeMinutes: 25,
    energyLevel: "future",
    equipment: ["sheet pan"],
    tags: ["gentle", "high-protein", "leftovers"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "sweetPotato"],
    ingredients: ["Chicken thighs or tenders", "Sweet potato chunks", "Frozen broccoli or carrots", "Olive oil"],
    steps: ["Put chicken and vegetables on a sheet pan.", "Coat with olive oil and salt.", "Bake until chicken is done.", "Save leftovers if you want."],
    easierVersion: "Buy pre-cut vegetables or use only chicken and sweet potatoes.",
    swaps: ["Use frozen vegetables to avoid chopping."]
  },
  {
    id: "gentle-lentil-soup",
    title: "Gentle-ish Lentil Soup",
    emoji: "🍲",
    goodWhen: "batch soup sounds helpful and lentils are okay today.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["soup", "veggie"],
    timeMinutes: 25,
    energyLevel: "future",
    equipment: ["pot"],
    tags: ["gentle", "soft", "warm", "leftovers"],
    todayFilters: ["gentle", "noDairy", "noWheat", "noRawVeg"],
    pantryItems: ["soup", "spinach"],
    ingredients: ["Lentils", "Broth", "Frozen carrots or spinach", "Olive oil"],
    steps: ["Simmer lentils in broth.", "Add frozen vegetables.", "Cook until soft.", "Eat one bowl and freeze another if you want."],
    easierVersion: "Use canned lentil soup and add olive oil.",
    swaps: ["Skip this one if beans bother you."]
  },
  {
    id: "leftover-frittata-squares",
    title: "Leftover Frittata Squares",
    emoji: "🍳",
    goodWhen: "you can cook once and want soft bites for later.",
    mealTypes: ["breakfast", "lunch", "dinner", "snack"],
    foodTypes: ["eggs"],
    timeMinutes: 25,
    energyLevel: "future",
    equipment: ["oven"],
    tags: ["gentle", "soft", "leftovers", "high-protein"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs", "spinach", "rice"],
    ingredients: ["Eggs", "Frozen spinach", "Leftover potatoes or rice", "Cheese if tolerated"],
    steps: ["Whisk eggs in a baking dish.", "Stir in spinach and leftovers.", "Bake until set.", "Cut into squares."],
    easierVersion: "Make scrambled eggs with the same fillings instead.",
    swaps: ["Skip cheese for no dairy."]
  },
  {
    id: "banana-oat-yogurt-bowl",
    title: "Banana Oat Yogurt Bowl",
    emoji: "🥣",
    goodWhen: "you want a soft bowl with almost no prep.",
    mealTypes: ["breakfast", "snack"],
    foodTypes: ["smoothie"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["bowl"],
    tags: ["gentle", "soft", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["banana", "oats", "yogurt"],
    ingredients: ["Greek or coconut yogurt", "Banana", "Quick oats", "Cinnamon or honey if wanted"],
    steps: ["Spoon yogurt into a bowl.", "Break in banana.", "Sprinkle oats on top."],
    easierVersion: "Use the banana whole and dip it into yogurt.",
    swaps: ["Use coconut yogurt for no dairy.", "Use certified gluten-free oats for no wheat."]
  }
];

const state = {
  step: "energy",
  energyLevel: null,
  foodType: null,
  timeBucket: null,
  mealType: null,
  todayFilters: new Set(),
  pantryItems: new Set(),
  fallbackSourceId: null,
  expandedRecipeId: null,
  visibleBackupCount: 2
};

const fieldByStep = {
  energy: "energyLevel",
  food: "foodType",
  time: "timeBucket",
  meal: "mealType"
};

const energyRank = {
  barely: 0,
  little: 1,
  cook: 2,
  future: 3
};

const timeRank = {
  "2-5": 0,
  "10": 1,
  "15": 2,
  "20+": 3
};

const stepCopy = {
  energy: {
    eyebrow: "Step 1 of 6",
    title: "How much energy do you have?",
    note: "Choose whatever feels easiest right now."
  },
  food: {
    eyebrow: "Step 2 of 6",
    title: "What kind of food sounds okay?",
    note: "Pick the one that sounds best today."
  },
  time: {
    eyebrow: "Step 3 of 6",
    title: "How much time?",
    note: "Short is a complete answer."
  },
  meal: {
    eyebrow: "Step 4 of 6",
    title: "Breakfast, lunch, dinner, or snack?",
    note: "Snack / Emergency Food is a real meal type here."
  },
  today: {
    eyebrow: "Optional",
    title: "Any stomach stuff today?",
    note: "These are Today Filters, not rules."
  },
  pantry: {
    eyebrow: "Optional",
    title: "What do you already have?",
    note: "Tap ingredients if you know. You can also skip this."
  }
};

const appView = document.getElementById("app-view");
const progressArea = document.getElementById("progress-area");
let advanceTimer = null;
let restoringFromHistory = false;

function render() {
  clearAutoAdvance();
  renderProgress();

  if (state.step === "today") {
    appView.innerHTML = todayTemplate();
  } else if (state.step === "pantry") {
    appView.innerHTML = pantryTemplate();
  } else if (state.step === "results") {
    appView.innerHTML = resultsTemplate();
  } else {
    appView.innerHTML = singleChoiceTemplate(state.step);
  }
}

function renderProgress() {
  if (state.step === "results") {
    progressArea.innerHTML = "";
    progressArea.setAttribute("aria-hidden", "true");
    return;
  }

  const index = flowSteps.indexOf(state.step);
  const progress = Math.round(((index + 1) / flowSteps.length) * 100);
  progressArea.removeAttribute("aria-hidden");
  progressArea.innerHTML = `
    <div class="progress-meta">
      <span>${index + 1} of ${flowSteps.length}</span>
      <span>${progress}%</span>
    </div>
    <div class="progress-track" aria-hidden="true">
      <span style="width: ${progress}%"></span>
    </div>
  `;
}

function singleChoiceTemplate(step) {
  const copy = stepCopy[step];
  const selectedValue = state[fieldByStep[step]];

  return `
    <section class="screen">
      ${screenHeaderTemplate(copy)}
      <div class="choice-grid">
        ${options[step].map((option) => choiceCardTemplate(step, option, selectedValue === option.value)).join("")}
      </div>
      ${navTemplate({ canBack: step !== "energy", canSkip: false, primary: null })}
    </section>
  `;
}

function todayTemplate() {
  const normalSelected = state.todayFilters.size === 0;

  return `
    <section class="screen">
      ${screenHeaderTemplate(stepCopy.today)}
      <div class="choice-grid">
        <button class="choice-card ${normalSelected ? "is-selected" : ""}" type="button" data-action="normal-today" aria-pressed="${normalSelected}">
          <span class="icon-bubble" aria-hidden="true">🌿</span>
          <span class="choice-text">
            <span class="choice-title">Normal-ish</span>
            <span class="choice-subtitle">Anything tolerated today.</span>
          </span>
        </button>
        ${options.today.map((option) => choiceCardTemplate("today", option, state.todayFilters.has(option.value), true)).join("")}
      </div>
      ${navTemplate({ canBack: true, canSkip: true, primary: "Continue" })}
    </section>
  `;
}

function pantryTemplate() {
  return `
    <section class="screen">
      ${screenHeaderTemplate(stepCopy.pantry)}
      <div class="pantry-grid">
        ${options.pantry.map((option) => `
          <button class="pantry-chip ${state.pantryItems.has(option.value) ? "is-selected" : ""}" type="button" data-pantry="${option.value}" aria-pressed="${state.pantryItems.has(option.value)}">
            ${option.label}
          </button>
        `).join("")}
      </div>
      ${navTemplate({ canBack: true, canSkip: true, primary: "Show recipes" })}
    </section>
  `;
}

function resultsTemplate() {
  const result = getResultSet();
  const [primary, ...backupPool] = result.items;
  const backups = backupPool.slice(0, state.visibleBackupCount);
  const hiddenBackupCount = Math.max(0, backupPool.length - backups.length);

  return `
    <section class="screen results-screen">
      <div class="results-heading">
        <div>
          <p class="eyebrow">today's easiest match</p>
          <h1>Recipe Idea</h1>
        </div>
      </div>
      <div class="summary-pills" aria-label="Selected choices">
        ${summaryPillsTemplate()}
      </div>
      <p class="match-message">${result.message}</p>
      ${primary ? recipeCardTemplate(primary.recipe, true) : ""}
      ${backups.length ? `
        <div class="backup-section">
          <h2>Also possible</h2>
          <div class="backup-grid">
            ${backups.map((item) => recipeCardTemplate(item.recipe, false)).join("")}
          </div>
          ${hiddenBackupCount ? `<button class="secondary-button show-more-button" type="button" data-action="show-more">Show More</button>` : ""}
        </div>
      ` : ""}
      <div class="result-actions">
        <button class="secondary-button" type="button" data-action="back">Back</button>
        <button class="primary-button" type="button" data-action="restart">Start Over</button>
      </div>
    </section>
  `;
}

function screenHeaderTemplate(copy) {
  return `
    <div class="screen-heading">
      <p class="eyebrow">${copy.eyebrow}</p>
      <h1>${copy.title}</h1>
      <p>${copy.note}</p>
    </div>
  `;
}

function choiceCardTemplate(step, option, selected, multi = false) {
  const attr = multi ? `data-today="${option.value}"` : `data-select-step="${step}" data-select-value="${option.value}"`;

  return `
    <button class="choice-card ${selected ? "is-selected" : ""}" type="button" ${attr} aria-pressed="${selected}">
      <span class="icon-bubble" aria-hidden="true">${option.icon}</span>
      <span class="choice-text">
        <span class="choice-title">${option.label}</span>
        <span class="choice-subtitle">${option.note}</span>
      </span>
    </button>
  `;
}

function navTemplate({ canBack, canSkip, primary }) {
  return `
    <div class="step-actions">
      ${canBack ? `<button class="secondary-button" type="button" data-action="back">Back</button>` : `<span></span>`}
      <div class="step-actions-right">
        ${canSkip ? `<button class="quiet-button" type="button" data-action="skip">Skip</button>` : ""}
        ${primary ? `<button class="primary-button" type="button" data-action="next">${primary}</button>` : ""}
      </div>
    </div>
  `;
}

function summaryPillsTemplate() {
  const todayLabels = state.todayFilters.size
    ? [...state.todayFilters].map((value) => getOptionLabel("today", value))
    : ["Normal-ish"];
  const pantryLabels = state.pantryItems.size
    ? [...state.pantryItems].map((value) => getOptionLabel("pantry", value)).slice(0, 4)
    : ["Pantry skipped"];

  return [
    getOptionLabel("energy", state.energyLevel),
    getOptionLabel("food", state.foodType),
    getOptionLabel("time", state.timeBucket),
    getOptionLabel("meal", state.mealType),
    ...todayLabels,
    ...pantryLabels
  ].filter(Boolean).map((label) => `<span>${label}</span>`).join("");
}

function recipeCardTemplate(recipe, isPrimary) {
  const expanded = isPrimary || state.expandedRecipeId === recipe.id;
  const timeLabel = getTimeLabel(getTimeBucket(recipe.timeMinutes));
  const foodLabel = recipe.foodTypes.map((type) => getOptionLabel("food", type)).filter(Boolean)[0] || "Food";
  const todayTags = recipe.todayFilters.length
    ? recipe.todayFilters.map((filter) => getOptionLabel("today", filter)).join(", ")
    : "Normal-ish";

  return `
    <article class="recipe-card ${isPrimary ? "is-primary" : "is-backup"} ${expanded ? "is-expanded" : ""}">
      ${isPrimary ? `<div class="recipe-top">` : `<button class="recipe-top" type="button" data-expand-recipe="${recipe.id}" aria-expanded="${expanded}">`}
        <span class="recipe-emoji" aria-hidden="true">${recipe.emoji}</span>
        <div>
          <h2>${recipe.title}</h2>
          <p><strong>Good when:</strong> ${recipe.goodWhen}</p>
        </div>
        ${isPrimary ? "" : `<span class="expand-hint">${expanded ? "Hide" : "View"}</span>`}
      ${isPrimary ? `</div>` : `</button>`}
      <div class="tag-row" aria-label="Recipe details">
        <span>${timeLabel}</span>
        <span>${getOptionLabel("energy", recipe.energyLevel)}</span>
        <span>${foodLabel}</span>
      </div>
      <p class="stomach-line"><strong>Today Filters:</strong> ${todayTags}</p>
      <div class="recipe-body">
        <section>
          <h3>Shopping checklist</h3>
          <ul class="checklist">
            ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
          </ul>
        </section>
        <section>
          <h3>Make it</h3>
          <ol class="steps">
            ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </section>
        <section class="make-easier">
          <h3>Make it easier</h3>
          <p>${recipe.easierVersion}</p>
        </section>
        ${recipe.swaps?.length ? `
          <section class="swaps">
            <h3>Swaps</h3>
            <ul>
              ${recipe.swaps.map((swap) => `<li>${swap}</li>`).join("")}
            </ul>
          </section>
        ` : ""}
      </div>
      <button class="fallback-button" type="button" data-fallback="${recipe.id}">Show me something easier</button>
    </article>
  `;
}

function getResultSet() {
  const compatible = recipes.filter(matchesTodayFilters);
  const pool = compatible.length ? compatible : recipes;
  const scored = pool.map((recipe) => ({
    recipe,
    score: scoreRecipe(recipe),
    exact: isExactMatch(recipe)
  })).sort(sortMatches);

  if (state.fallbackSourceId) {
    return {
    message: "Here are lower-effort options.",
      items: easierFallbacks(scored, state.fallbackSourceId)
    };
  }

  const exact = scored.filter((item) => item.exact);
  if (exact.length) {
    const primary = exact[0];
    const backups = scored.filter((item) => item.recipe.id !== primary.recipe.id);
    return {
      message: "This matches your taps. Keep what helps, ignore what does not.",
      items: [primary, ...backups]
    };
  }

  return {
    message: compatible.length
      ? "No exact match, so these are the closest easier ideas."
      : "Here are the closest gentle backups. Trust your own tolerance first.",
    items: scored
  };
}

function matchesTodayFilters(recipe) {
  return [...state.todayFilters].every((filter) => recipe.todayFilters.includes(filter));
}

function isExactMatch(recipe) {
  return recipe.energyLevel === state.energyLevel
    && recipe.foodTypes.includes(state.foodType)
    && getTimeBucket(recipe.timeMinutes) === state.timeBucket
    && recipe.mealTypes.includes(state.mealType)
    && matchesTodayFilters(recipe);
}

function scoreRecipe(recipe) {
  let score = 0;
  const recipeEnergy = energyRank[recipe.energyLevel];
  const selectedEnergy = energyRank[state.energyLevel];
  const recipeTime = timeRank[getTimeBucket(recipe.timeMinutes)];
  const selectedTime = timeRank[state.timeBucket];

  if (state.energyLevel) {
    if (recipeEnergy === selectedEnergy) {
      score += 32;
    } else if (recipeEnergy < selectedEnergy) {
      score += 24 - (selectedEnergy - recipeEnergy);
    } else {
      score -= 12 * (recipeEnergy - selectedEnergy);
    }
  }

  if (state.foodType && recipe.foodTypes.includes(state.foodType)) {
    score += 26;
  }

  if (state.timeBucket) {
    if (recipeTime === selectedTime) {
      score += 24;
    } else if (recipeTime < selectedTime) {
      score += 18 - (selectedTime - recipeTime);
    } else {
      score -= 10 * (recipeTime - selectedTime);
    }
  }

  if (state.mealType && recipe.mealTypes.includes(state.mealType)) {
    score += 20;
  }

  if (state.todayFilters.has("gentle") && recipe.tags.includes("gentle")) {
    score += 8;
  }

  state.pantryItems.forEach((item) => {
    if (recipe.pantryItems.includes(item)) {
      score += 7;
    }
  });

  score -= recipeEnergy * 2;
  score -= recipeTime * 1.5;
  return score;
}

function sortMatches(a, b) {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  const effortA = energyRank[a.recipe.energyLevel] + timeRank[getTimeBucket(a.recipe.timeMinutes)];
  const effortB = energyRank[b.recipe.energyLevel] + timeRank[getTimeBucket(b.recipe.timeMinutes)];
  if (effortA !== effortB) {
    return effortA - effortB;
  }

  return a.recipe.title.localeCompare(b.recipe.title);
}

function easierFallbacks(scored, sourceId) {
  const source = recipes.find((recipe) => recipe.id === sourceId);
  if (!source) {
    return scored;
  }

  const sourceEnergy = energyRank[source.energyLevel];
  const sourceTime = timeRank[getTimeBucket(source.timeMinutes)];
  const easier = scored.filter(({ recipe }) => {
    if (recipe.id === sourceId) {
      return false;
    }

    const recipeEnergy = energyRank[recipe.energyLevel];
    const recipeTime = timeRank[getTimeBucket(recipe.timeMinutes)];
    const notHarder = recipeEnergy <= sourceEnergy && recipeTime <= sourceTime;
    const meaningfullyEasier = recipeEnergy < sourceEnergy || recipeTime < sourceTime;
    return notHarder && meaningfullyEasier;
  });

  return easier.length ? easier : scored.filter(({ recipe }) => recipe.id !== sourceId);
}

function getTimeBucket(minutes) {
  if (minutes <= 5) {
    return "2-5";
  }
  if (minutes <= 10) {
    return "10";
  }
  if (minutes <= 15) {
    return "15";
  }
  return "20+";
}

function getTimeLabel(bucket) {
  return getOptionLabel("time", bucket) || `${bucket} min`;
}

function getOptionLabel(group, value) {
  if (!value) {
    return "";
  }

  const option = options[group]?.find((item) => item.value === value);
  return option ? option.label : value;
}

function goToStep(step, { push = true } = {}) {
  clearAutoAdvance();
  state.step = step;
  if (step !== "results") {
    state.expandedRecipeId = null;
  }
  if (push && !restoringFromHistory) {
    writeHistory("push");
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goNext() {
  clearAutoAdvance();
  const index = flowSteps.indexOf(state.step);
  if (index === -1 || index === flowSteps.length - 1) {
    goToStep("results");
    return;
  }

  goToStep(flowSteps[index + 1]);
}

function goBack() {
  clearAutoAdvance();
  if (state.step === "results") {
    goToStep("pantry");
    return;
  }

  const index = flowSteps.indexOf(state.step);
  if (index <= 0) {
    return;
  }

  goToStep(flowSteps[index - 1]);
}

function restart() {
  clearAutoAdvance();
  state.step = "energy";
  state.energyLevel = null;
  state.foodType = null;
  state.timeBucket = null;
  state.mealType = null;
  state.todayFilters.clear();
  state.pantryItems.clear();
  state.fallbackSourceId = null;
  state.expandedRecipeId = null;
  state.visibleBackupCount = 2;
  writeHistory("push");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectSingle(step, value) {
  state[fieldByStep[step]] = value;
  state.fallbackSourceId = null;
  state.expandedRecipeId = null;
  state.visibleBackupCount = 2;
  render();
  advanceTimer = window.setTimeout(goNext, 180);
}

function toggleToday(value) {
  state.fallbackSourceId = null;
  state.expandedRecipeId = null;
  state.visibleBackupCount = 2;
  if (state.todayFilters.has(value)) {
    state.todayFilters.delete(value);
  } else {
    state.todayFilters.add(value);
  }
  render();
}

function clearTodayFilters() {
  state.todayFilters.clear();
  state.fallbackSourceId = null;
  state.expandedRecipeId = null;
  state.visibleBackupCount = 2;
  render();
}

function togglePantry(value) {
  state.fallbackSourceId = null;
  state.expandedRecipeId = null;
  state.visibleBackupCount = 2;
  if (state.pantryItems.has(value)) {
    state.pantryItems.delete(value);
  } else {
    state.pantryItems.add(value);
  }
  render();
}

function skipCurrentStep() {
  if (state.step === "today") {
    state.todayFilters.clear();
  }
  if (state.step === "pantry") {
    state.pantryItems.clear();
  }
  state.fallbackSourceId = null;
  state.expandedRecipeId = null;
  state.visibleBackupCount = 2;
  goNext();
}

function clearAutoAdvance() {
  if (advanceTimer) {
    window.clearTimeout(advanceTimer);
    advanceTimer = null;
  }
}

document.body.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "next") {
      goNext();
    } else if (action === "back") {
      goBack();
    } else if (action === "skip") {
      skipCurrentStep();
    } else if (action === "restart") {
      restart();
    } else if (action === "normal-today") {
      clearTodayFilters();
    } else if (action === "show-more") {
      state.visibleBackupCount += 4;
      writeHistory("replace");
      render();
    }
    return;
  }

  const selectButton = event.target.closest("[data-select-step]");
  if (selectButton) {
    selectSingle(selectButton.dataset.selectStep, selectButton.dataset.selectValue);
    return;
  }

  const todayButton = event.target.closest("[data-today]");
  if (todayButton) {
    toggleToday(todayButton.dataset.today);
    return;
  }

  const pantryButton = event.target.closest("[data-pantry]");
  if (pantryButton) {
    togglePantry(pantryButton.dataset.pantry);
    return;
  }

  const fallbackButton = event.target.closest("[data-fallback]");
  if (fallbackButton) {
    state.fallbackSourceId = fallbackButton.dataset.fallback;
    state.expandedRecipeId = null;
    state.visibleBackupCount = 2;
    goToStep("results");
    return;
  }

  const expandButton = event.target.closest("[data-expand-recipe]");
  if (expandButton) {
    const recipeId = expandButton.dataset.expandRecipe;
    state.expandedRecipeId = state.expandedRecipeId === recipeId ? null : recipeId;
    writeHistory("replace");
    render();
  }
});

function stateSnapshot() {
  return {
    thingToEat: true,
    step: state.step,
    energyLevel: state.energyLevel,
    foodType: state.foodType,
    timeBucket: state.timeBucket,
    mealType: state.mealType,
    todayFilters: [...state.todayFilters],
    pantryItems: [...state.pantryItems],
    fallbackSourceId: state.fallbackSourceId,
    expandedRecipeId: state.expandedRecipeId,
    visibleBackupCount: state.visibleBackupCount
  };
}

function restoreSnapshot(snapshot) {
  if (!snapshot?.thingToEat) {
    return false;
  }

  state.step = snapshot.step || "energy";
  state.energyLevel = snapshot.energyLevel || null;
  state.foodType = snapshot.foodType || null;
  state.timeBucket = snapshot.timeBucket || null;
  state.mealType = snapshot.mealType || null;
  state.todayFilters = new Set(snapshot.todayFilters || []);
  state.pantryItems = new Set(snapshot.pantryItems || []);
  state.fallbackSourceId = snapshot.fallbackSourceId || null;
  state.expandedRecipeId = snapshot.expandedRecipeId || null;
  state.visibleBackupCount = snapshot.visibleBackupCount || 2;
  return true;
}

function writeHistory(mode) {
  const snapshot = stateSnapshot();
  if (mode === "replace") {
    window.history.replaceState(snapshot, "", window.location.href);
  } else {
    window.history.pushState(snapshot, "", window.location.href);
  }
}

window.addEventListener("popstate", (event) => {
  if (!restoreSnapshot(event.state)) {
    return;
  }

  restoringFromHistory = true;
  render();
  restoringFromHistory = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

writeHistory("replace");
render();
