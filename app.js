const flowSteps = ["energy", "food", "time", "meal"];

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
    { value: "veggie", label: "Veggie Bowl", icon: "🥗", note: "Sweet potato, rice, greens, chickpeas optional." },
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
    ingredients: ["Tuna pouch or can", "Crackers or rice crackers", "Olive oil or mayo", "Lemon or pickle optional"],
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
    ingredients: ["Toast, gluten-free toast, or rice cake", "Peanut butter", "Banana", "Cinnamon optional"],
    steps: ["Toast the bread if you want it toasted.", "Spread peanut butter.", "Add banana slices or banana chunks.", "Dust with cinnamon if wanted."],
    easierVersion: "Dip banana into peanut butter and skip the toast.",
    swaps: ["Use a rice cake for no wheat.", "Use sunflower butter if peanut butter does not work."]
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
    steps: ["Put everything in the blender.", "Blend until smooth.", "Enjoy."],
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
    ingredients: ["Turkey slices", "Avocado", "Rice crackers if wanted", "Pickles or olives optional"],
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
    ingredients: ["Sweet potato", "Greek yogurt, olive oil, or hummus", "Pumpkin seeds", "Greens optional"],
    steps: ["Microwave the sweet potato until soft.", "Split it open, or mash it.", "Top with yogurt, olive oil, or hummus.", "Add seeds if wanted."],
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
    ingredients: ["Miso paste", "Soft tofu from a sealed package", "Thin rice noodles", "Spinach optional", "Boiling water"],
    steps: ["Put miso paste in a bowl.", "Add thin rice noodles and small tofu cubes.", "Pour boiling water over everything.", "Let sit 3 to 5 minutes, until noodles soften and tofu is warm.", "Stir gently. Add spinach if wanted."],
    easierVersion: "Use instant miso soup and skip the tofu or noodles.",
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
    ingredients: ["Boxed/canned chicken or vegetable broth (soup liquid), or a bouillon cube plus water", "Egg", "Microwave rice if wanted", "Spinach optional"],
    steps: ["Warm the broth until steaming.", "Beat the egg in a cup.", "Stir the broth while slowly pouring in the egg.", "Add rice if you want it fuller."],
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
    steps: ["Put salmon and frozen vegetables in a pan or on a sheet pan.", "Add olive oil and salt.", "If using the oven, bake at 400 F for 12 to 15 minutes, until salmon flakes.", "Add lemon if it sounds good."],
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
    ingredients: ["Ground turkey", "Spinach", "Pasta or gluten-free pasta", "Olive oil", "Parmesan optional"],
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
    ingredients: ["Rotisserie chicken", "Boxed/canned chicken or vegetable broth (soup liquid), or a bouillon cube plus water", "Frozen vegetables", "Rice or noodles"],
    steps: ["Warm the broth.", "Add chicken and frozen vegetables.", "Add rice or noodles.", "Simmer until warm."],
    easierVersion: "Heat boxed soup and put chicken beside it.",
    swaps: ["Use rice for no wheat."]
  },
  {
    id: "chickpea-cucumber-bowl",
    title: "Chickpea Cucumber Bowl",
    emoji: "🥗",
    goodWhen: "fresh, tangy food sounds okay and beans sound okay.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["veggie"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["bowl"],
    tags: ["mediterranean-ish", "no-cook", "steady energy"],
    todayFilters: ["noDairy", "noWheat"],
    pantryItems: ["hummus"],
    ingredients: ["Chickpeas", "Cucumber", "Tomato", "Olive oil", "Lemon", "Feta optional"],
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
    steps: ["Put chicken and vegetables on a sheet pan.", "Coat with olive oil and salt.", "Bake at 400 F for 20 to 25 minutes, until chicken is cooked through.", "Save leftovers if you want."],
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
    ingredients: ["Lentils", "Boxed/canned chicken or vegetable broth (soup liquid), or a bouillon cube plus water", "Frozen carrots or spinach", "Olive oil"],
    steps: ["Simmer lentils in the broth.", "Add frozen vegetables.", "Cook until soft.", "Eat one bowl and freeze another if you want."],
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
    ingredients: ["Eggs", "Frozen spinach", "Leftover potatoes or rice", "Cheese optional"],
    steps: ["Whisk eggs in a baking dish.", "Stir in spinach and leftovers.", "Bake at 350 F for 20 to 25 minutes, until set.", "Cut into squares."],
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
  },
  {
    id: "avocado-egg-rice-cake",
    title: "Avocado Egg Rice Cake",
    emoji: "🥑",
    goodWhen: "a tiny open-face thing sounds better than a whole meal.",
    mealTypes: ["breakfast", "lunch", "snack"],
    foodTypes: ["eggs", "snack"],
    timeMinutes: 15,
    energyLevel: "little",
    equipment: ["pot"],
    tags: ["gentle", "soft", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs", "avocado", "crackers"],
    ingredients: ["Rice cake", "Boiled egg, or egg to boil", "Avocado", "Salt or everything seasoning optional"],
    steps: ["If the egg is not already boiled, boil it 10 to 12 minutes, cool, and peel.", "Put avocado on the rice cake.", "Slice or crumble the egg.", "Add salt if you want."],
    easierVersion: "Eat the egg and avocado separately. The rice cake can just sit there.",
    swaps: ["Use toast if wheat is okay today.", "Use olive oil instead of avocado if that is easier."]
  },
  {
    id: "cottage-cheese-fruit-bowl",
    title: "Cottage Cheese Fruit Bowl",
    emoji: "🍑",
    goodWhen: "cold, soft, and sweet-salty sounds good.",
    mealTypes: ["breakfast", "lunch", "snack"],
    foodTypes: ["smoothie", "snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["bowl"],
    tags: ["gentle", "soft", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["yogurt", "berries"],
    ingredients: ["Cottage cheese", "Peaches, berries, or banana", "Walnuts or pumpkin seeds if wanted", "Honey or cinnamon if wanted"],
    steps: ["Spoon cottage cheese into a bowl.", "Add fruit.", "Add nuts, seeds, honey, or cinnamon if they sound good."],
    easierVersion: "Use only cottage cheese and fruit from a cup or container.",
    swaps: ["Use Greek yogurt if that sounds better.", "Choose banana or canned peaches for a softer bowl."]
  },
  {
    id: "apple-nut-butter-plate",
    title: "Apple Nut Butter Plate",
    emoji: "🍎",
    goodWhen: "you need food now and crunchy-sweet sounds okay.",
    mealTypes: ["breakfast", "lunch", "snack"],
    foodTypes: ["snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["none"],
    tags: ["steady energy", "no-cook", "low-chop"],
    todayFilters: ["noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["peanutButter"],
    ingredients: ["Apple slices or applesauce cup", "Peanut butter or almond butter", "Crackers or rice cakes if wanted"],
    steps: ["Put apple on a plate.", "Add nut butter.", "Add crackers if you want it more filling."],
    easierVersion: "Use applesauce and a spoonful of nut butter.",
    swaps: ["Use sunflower butter if nuts do not work.", "Use banana instead of apple for a softer option."]
  },
  {
    id: "chicken-avocado-rice-cakes",
    title: "Chicken Avocado Rice Cakes",
    emoji: "🍗",
    goodWhen: "leftover chicken needs to become a low-effort plate.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["chicken", "snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["none"],
    tags: ["gentle", "high-protein", "no-cook", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "avocado", "crackers"],
    ingredients: ["Rice cakes", "Rotisserie or leftover chicken", "Avocado or olive oil", "Salt"],
    steps: ["Put rice cakes on a plate.", "Add chicken.", "Add avocado or a little olive oil."],
    easierVersion: "Skip the stacking and eat chicken with rice cakes.",
    swaps: ["Use turkey slices if that is what is open."]
  },
  {
    id: "tuna-avocado-rice-cakes",
    title: "Tuna Avocado Rice Cakes",
    emoji: "🐟",
    goodWhen: "tuna sounds fine but crackers are not the move.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["fish", "snack"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["none"],
    tags: ["gentle", "mediterranean-ish", "omega-3", "high-protein", "no-cook", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["tuna", "avocado", "crackers"],
    ingredients: ["Tuna pouch or can", "Rice cakes", "Avocado or olive oil", "Salt"],
    steps: ["Open tuna.", "Put it on rice cakes.", "Add avocado or olive oil."],
    easierVersion: "Eat tuna from the pouch and have rice cakes on the side.",
    swaps: ["Use canned salmon if tuna sounds boring."]
  },
  {
    id: "warm-cinnamon-oats",
    title: "Warm Cinnamon Oats",
    emoji: "🥣",
    goodWhen: "breakfast needs to be warm, soft, and predictable.",
    mealTypes: ["breakfast", "snack"],
    foodTypes: ["smoothie"],
    timeMinutes: 5,
    energyLevel: "barely",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "warm", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["oats", "banana"],
    ingredients: ["Quick oats", "Milk, oat milk, or water", "Banana or applesauce", "Cinnamon"],
    steps: ["Put oats and liquid in a bowl.", "Microwave until soft, 30 sec to 1 min.", "Add banana or applesauce.", "Sprinkle cinnamon."],
    easierVersion: "Use instant oatmeal and add banana.",
    swaps: ["Use oat milk or water for no dairy.", "Use certified gluten-free oats for no wheat."]
  },
  {
    id: "scrambled-eggs-pan",
    title: "Scrambled Eggs in a Pan",
    emoji: "🥚",
    goodWhen: "warm, simple eggs sound good.",
    mealTypes: ["breakfast", "lunch", "snack"],
    foodTypes: ["eggs"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["pan"],
    tags: ["gentle", "soft", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs"],
    ingredients: ["Eggs", "Splash of milk or water", "Olive oil or butter", "Spinach optional", "Toast, rice cake, or rice if wanted"],
    steps: ["Beat eggs with a splash of water or milk.", "Warm a pan with a little olive oil or butter.", "Pour in eggs and stir gently for 2 to 4 minutes, until softly set.", "Eat with toast, rice, or a rice cake."],
    easierVersion: "Use a boiled egg with toast, rice, or a rice cake.",
    swaps: ["Use water for no dairy.", "Skip spinach if you want it plain."]
  },
  {
    id: "tomato-soup-rice-cakes",
    title: "Tomato Soup and Rice Cakes",
    emoji: "🍅",
    goodWhen: "warm and simple sounds better than chewing a lot.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["soup", "snack"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave or pot"],
    tags: ["gentle", "soft", "warm", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["soup", "crackers"],
    ingredients: ["Tomato soup", "Rice cakes or crackers", "Olive oil", "Parmesan optional"],
    steps: ["Heat the soup.", "Add a small drizzle of olive oil.", "Eat with rice cakes or crackers."],
    easierVersion: "Use microwave soup and skip toppings.",
    swaps: ["Use rice cakes for no wheat.", "Skip parmesan for no dairy."]
  },
  {
    id: "chicken-rice-soup-cup",
    title: "Chicken Rice Soup Cup",
    emoji: "🍵",
    goodWhen: "a small warm bowl feels more doable than dinner.",
    mealTypes: ["lunch", "dinner", "snack"],
    foodTypes: ["soup", "chicken"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "warm", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "soup", "rice"],
    ingredients: ["Boxed/canned chicken or vegetable broth (soup liquid), or a bouillon cube plus water", "Microwave rice", "Rotisserie chicken", "Frozen carrots or peas optional"],
    steps: ["Warm the broth in a large mug or bowl.", "Add rice and chicken.", "Microwave until hot.", "Add frozen veg if it sounds okay."],
    easierVersion: "Use canned chicken soup and add microwave rice.",
    swaps: ["Skip vegetables if today needs plain food."]
  },
  {
    id: "potato-egg-bowl",
    title: "Potato Egg Bowl",
    emoji: "🥔",
    goodWhen: "soft potatoes and egg sound steady.",
    mealTypes: ["breakfast", "lunch", "dinner"],
    foodTypes: ["eggs", "veggie"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "steady energy", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs"],
    ingredients: ["Microwave potato or frozen potato cubes", "Boiled egg or scrambled egg", "Olive oil", "Salt"],
    steps: ["Microwave the potato until soft, or warm frozen potato cubes.", "Split the potato open or put cubes in a bowl.", "Mash lightly with olive oil and salt.", "Slice, crumble, or scoop the egg on top."],
    easierVersion: "Use a microwave potato and a boiled egg.",
    swaps: ["Add spinach if green food sounds okay."]
  },
  {
    id: "salmon-sweet-potato-plate",
    title: "Salmon Sweet Potato Plate",
    emoji: "🍠",
    goodWhen: "soft, warm, and fishy-in-a-good-way sounds okay.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["fish"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "mediterranean-ish", "omega-3", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["salmon", "sweetPotato"],
    ingredients: ["Microwave sweet potato", "Canned salmon or leftover salmon", "Olive oil", "Salt"],
    steps: ["Microwave the sweet potato until soft.", "Split it open and mash the inside a little with a fork.", "Open salmon and drain if needed.", "Put salmon beside it, or scoop it on top.", "Add olive oil and salt."],
    easierVersion: "Use only salmon and sweet potato. No plating needed.",
    swaps: ["Use tuna if salmon is not available."]
  },
  {
    id: "tahini-rice-bowl",
    title: "Tahini Rice Bowl",
    emoji: "🍚",
    goodWhen: "a warm veggie bowl sounds good without beans.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["veggie"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["microwave"],
    tags: ["gentle", "soft", "mediterranean-ish", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["rice", "spinach"],
    ingredients: ["Microwave rice", "Frozen spinach or carrots", "Tahini", "Olive oil", "Salt"],
    steps: ["Warm rice and vegetables.", "Stir tahini with a little warm water.", "Pour over the bowl.", "Add olive oil or salt if wanted."],
    easierVersion: "Use rice, olive oil, and salt only.",
    swaps: ["Use hummus instead of tahini if beans are okay today."]
  },
  {
    id: "tuna-white-bean-bowl",
    title: "Tuna White Bean Bowl",
    emoji: "🫘",
    goodWhen: "beans are okay and you want a filling no-cook bowl.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["fish", "veggie"],
    timeMinutes: 10,
    energyLevel: "little",
    equipment: ["bowl"],
    tags: ["mediterranean-ish", "omega-3", "high-protein", "no-cook", "low-chop"],
    todayFilters: ["noDairy", "noWheat", "noRawVeg"],
    pantryItems: ["tuna"],
    ingredients: ["Tuna pouch or can", "White beans", "Olive oil", "Lemon or vinegar optional", "Parsley if wanted"],
    steps: ["Rinse beans.", "Add tuna.", "Add olive oil and salt.", "Add lemon, vinegar, or parsley if they sound good."],
    easierVersion: "Use tuna and beans only.",
    swaps: ["Skip this one if beans bother you."]
  },
  {
    id: "chickpea-soup-shortcut",
    title: "Chickpea Soup Shortcut",
    emoji: "🍲",
    goodWhen: "you want a warm bowl and chickpeas sound okay.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["soup", "veggie"],
    timeMinutes: 15,
    energyLevel: "little",
    equipment: ["pot"],
    tags: ["gentle", "soft", "warm", "mediterranean-ish", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noWheat", "noRawVeg"],
    pantryItems: ["soup", "hummus"],
    ingredients: ["Canned chickpeas", "Boxed/canned chicken or vegetable broth (soup liquid), or a bouillon cube plus water", "Frozen spinach or carrots", "Olive oil"],
    steps: ["Warm the broth and chickpeas.", "Add frozen vegetables.", "Simmer until soft.", "Finish with olive oil."],
    easierVersion: "Use canned soup and add chickpeas if the can is already open.",
    swaps: ["Skip this one if beans bother you."]
  },
  {
    id: "sesame-rice-noodle-bowl",
    title: "Sesame Rice Noodle Bowl",
    emoji: "🍜",
    goodWhen: "noodles sound easier than a plate of separate things.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["veggie"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["pot or kettle"],
    tags: ["soft", "steady energy", "low-chop"],
    todayFilters: ["noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["peanutButter", "spinach"],
    ingredients: ["Rice noodles", "Frozen vegetables", "Peanut butter or tahini", "Sesame oil or olive oil", "Tamari optional"],
    steps: ["Cook rice noodles.", "Warm frozen vegetables.", "Stir nut butter with warm water and tamari.", "Mix everything together."],
    easierVersion: "Use rice noodles with olive oil and salt.",
    swaps: ["Use tahini instead of peanut butter.", "Use tamari for no wheat."]
  },
  {
    id: "chicken-quinoa-bowl",
    title: "Chicken Quinoa Bowl",
    emoji: "🥣",
    goodWhen: "a real lunch bowl sounds possible with cooked shortcuts.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["chicken"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["microwave"],
    tags: ["mediterranean-ish", "high-protein", "steady energy", "low-chop"],
    todayFilters: ["noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "spinach"],
    ingredients: ["Microwave quinoa or rice", "Rotisserie chicken", "Microwave spinach", "Olive oil", "Feta optional"],
    steps: ["Warm quinoa or rice.", "Add chicken.", "Add spinach.", "Finish with olive oil and feta if wanted."],
    easierVersion: "Use chicken and microwave rice only.",
    swaps: ["Skip feta for no dairy.", "Use rice if quinoa is not around."]
  },
  {
    id: "freezer-veg-egg-scramble",
    title: "Freezer Veg Egg Scramble",
    emoji: "🍳",
    goodWhen: "eggs sound good and chopping does not.",
    mealTypes: ["breakfast", "lunch", "dinner"],
    foodTypes: ["eggs", "veggie"],
    timeMinutes: 15,
    energyLevel: "cook",
    equipment: ["pan"],
    tags: ["gentle", "soft", "high-protein", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["eggs", "spinach"],
    ingredients: ["Eggs", "Frozen spinach", "Frozen peppers or mushrooms", "Olive oil", "Toast or rice if wanted"],
    steps: ["Warm frozen vegetables in olive oil.", "Add beaten eggs.", "Stir until softly set.", "Eat with rice or toast."],
    easierVersion: "Use only eggs and frozen spinach.",
    swaps: ["Use rice or gluten-free toast for no wheat."]
  },
  {
    id: "turkey-potato-skillet",
    title: "Turkey Potato Skillet",
    emoji: "🍳",
    goodWhen: "one pan can make a sturdy dinner and maybe leftovers.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["chicken"],
    timeMinutes: 20,
    energyLevel: "cook",
    equipment: ["pan"],
    tags: ["gentle", "high-protein", "steady energy"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["turkey"],
    ingredients: ["Ground turkey", "Frozen potato cubes", "Frozen spinach", "Olive oil", "Salt"],
    steps: ["Brown turkey in olive oil.", "Add frozen potatoes.", "Cook until potatoes are soft.", "Stir in spinach."],
    easierVersion: "Use rotisserie chicken and microwave potatoes.",
    swaps: ["Use chicken instead of turkey."]
  },
  {
    id: "future-chicken-rice-cups",
    title: "Future Chicken Rice Cups",
    emoji: "📦",
    goodWhen: "you want containers that can become lunch later.",
    mealTypes: ["lunch", "dinner"],
    foodTypes: ["chicken"],
    timeMinutes: 25,
    energyLevel: "future",
    equipment: ["sheet pan", "microwave"],
    tags: ["gentle", "high-protein", "leftovers", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["chicken", "rice"],
    ingredients: ["Chicken tenders or rotisserie chicken", "Microwave rice", "Frozen vegetables", "Olive oil"],
    steps: ["Use rotisserie chicken, or bake raw chicken tenders at 400 F for 15 to 20 minutes.", "Warm rice and vegetables.", "Divide into containers.", "Add olive oil before eating."],
    easierVersion: "Buy rotisserie chicken and microwave rice. Future containers optional.",
    swaps: ["Use any frozen vegetable that sounds tolerable."]
  },
  {
    id: "overnight-oats-cup",
    title: "Overnight Oats Cup",
    emoji: "🌙",
    goodWhen: "five minutes now could make breakfast easier later.",
    mealTypes: ["breakfast", "snack"],
    foodTypes: ["smoothie"],
    timeMinutes: 5,
    energyLevel: "future",
    equipment: ["jar or container"],
    tags: ["gentle", "soft", "steady energy", "leftovers", "low-chop"],
    todayFilters: ["gentle", "noDairy", "noBeans", "noWheat", "noRawVeg"],
    pantryItems: ["oats", "yogurt", "berries"],
    ingredients: ["Oats", "Milk or oat milk", "Yogurt or coconut yogurt", "Berries or banana", "Chia seeds if wanted"],
    steps: ["Put oats, milk, and yogurt in a container.", "Add fruit.", "Refrigerate overnight.", "Eat cold or warm it up."],
    easierVersion: "Use instant oatmeal tomorrow instead.",
    swaps: ["Use oat milk and coconut yogurt for no dairy.", "Use certified gluten-free oats for no wheat."]
  }
];

const approvedRecipeIds = [
  "tuna-crackers-plate",
  "greek-yogurt-berry-bowl",
  "peanut-butter-banana-toast",
  "hummus-snack-plate",
  "smoothie-that-counts",
  "turkey-avocado-roll-ups",
  "egg-rice-bowl",
  "salmon-rice-bowl",
  "rotisserie-chicken-bowl",
  "microwave-sweet-potato-plate",
  "miso-tofu-soup",
  "tiny-egg-drop-soup",
  "one-pan-salmon-frozen-veg",
  "turkey-spinach-pasta",
  "chicken-soup-shortcut",
  "chickpea-cucumber-bowl",
  "egg-veggie-scramble",
  "warm-veggie-rice-bowl",
  "white-fish-rice-plate",
  "future-me-chicken-tray",
  "gentle-lentil-soup",
  "leftover-frittata-squares",
  "banana-oat-yogurt-bowl",
  "avocado-egg-rice-cake",
  "cottage-cheese-fruit-bowl",
  "apple-nut-butter-plate",
  "chicken-avocado-rice-cakes",
  "tuna-avocado-rice-cakes",
  "warm-cinnamon-oats",
  "scrambled-eggs-pan",
  "tomato-soup-rice-cakes",
  "chicken-rice-soup-cup",
  "potato-egg-bowl",
  "salmon-sweet-potato-plate",
  "tahini-rice-bowl",
  "tuna-white-bean-bowl",
  "chickpea-soup-shortcut",
  "sesame-rice-noodle-bowl",
  "chicken-quinoa-bowl",
  "freezer-veg-egg-scramble",
  "turkey-potato-skillet",
  "future-chicken-rice-cups",
  "overnight-oats-cup"
];
const REVIEW_STORAGE_KEY = "thing-to-eat-approved-recipe-ids";

const state = {
  step: "energy",
  energyLevel: null,
  foodType: null,
  timeBucket: null,
  mealType: null,
  todayFilters: new Set(),
  fallbackSourceId: null,
  expandedRecipeId: null,
  visibleBackupCount: 2,
  reviewFilter: "needs",
  reviewMessage: ""
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
    eyebrow: "Step 1 of 4",
    title: "How much energy do you have?",
    note: "Choose whatever feels easiest right now."
  },
  food: {
    eyebrow: "Step 2 of 4",
    title: "What kind of food sounds okay?",
    note: "Pick the one that sounds best today."
  },
  time: {
    eyebrow: "Step 3 of 4",
    title: "How much time?",
    note: "Short is a complete answer."
  },
  meal: {
    eyebrow: "Step 4 of 4",
    title: "Breakfast, lunch, dinner, or snack?",
    note: "Snack / Emergency Food is a real meal type here."
  }
};

const appView = document.getElementById("app-view");
const progressArea = document.getElementById("progress-area");
const reviewTrigger = document.querySelector("[data-review-trigger]");
let reviewApprovedIds = loadReviewApprovedIds();
let advanceTimer = null;
let restoringFromHistory = false;
let reviewHoldTimer = null;

function render() {
  clearAutoAdvance();
  if (state.step !== "results" && state.step !== "review" && !flowSteps.includes(state.step)) {
    state.step = "energy";
  }
  renderProgress();

  if (state.step === "review") {
    appView.innerHTML = reviewTemplate();
  } else if (state.step === "results") {
    appView.innerHTML = resultsTemplate();
  } else {
    appView.innerHTML = singleChoiceTemplate(state.step);
  }
}

function renderProgress() {
  if (state.step === "results" || state.step === "review") {
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

function reviewTemplate() {
  const approvedRecipes = recipes.filter((recipe) => reviewApprovedIds.has(recipe.id));
  const needsReviewRecipes = recipes.filter((recipe) => !reviewApprovedIds.has(recipe.id));
  const activeFilter = ["approved", "needs", "all"].includes(state.reviewFilter) ? state.reviewFilter : "needs";
  const filterDetails = {
    approved: {
      title: "Approved",
      recipes: approvedRecipes,
      emptyMessage: "No approved recipes yet."
    },
    needs: {
      title: "Needs Review",
      recipes: needsReviewRecipes,
      emptyMessage: "All recipes are approved."
    },
    all: {
      title: "All Recipes",
      recipes,
      emptyMessage: "No recipes found."
    }
  };
  const visibleReview = filterDetails[activeFilter];

  return `
    <section class="screen review-screen">
      <div class="review-heading">
        <div>
          <p class="eyebrow">hidden recipe review</p>
          <h1>Recipe Review</h1>
          <p>Check wording, then move finished recipes into Approved.</p>
        </div>
        <div class="review-actions">
          <button class="secondary-button" type="button" data-action="copy-approved">Copy Approved List</button>
          <button class="primary-button" type="button" data-action="close-review">Back to Picker</button>
        </div>
      </div>
      <div class="review-stats" aria-label="Recipe review progress">
        ${reviewFilterButtonTemplate("needs", `${needsReviewRecipes.length} needs review`, activeFilter)}
        ${reviewFilterButtonTemplate("approved", `${approvedRecipes.length} approved`, activeFilter)}
        ${reviewFilterButtonTemplate("all", `${recipes.length} all`, activeFilter)}
      </div>
      ${state.reviewMessage ? `<p class="review-message">${state.reviewMessage}</p>` : ""}
      ${reviewSectionTemplate(visibleReview.title, visibleReview.recipes, visibleReview.emptyMessage)}
    </section>
  `;
}

function reviewFilterButtonTemplate(filter, label, activeFilter) {
  const isActive = filter === activeFilter;
  return `
    <button class="review-filter-button ${isActive ? "is-active" : ""}" type="button" data-review-filter="${filter}" aria-pressed="${isActive}">
      ${label}
    </button>
  `;
}

function reviewSectionTemplate(title, sectionRecipes, emptyMessage) {
  const sectionId = `review-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return `
    <section class="review-section" aria-labelledby="${sectionId}">
      <h2 id="${sectionId}">${title}</h2>
      ${sectionRecipes.length ? `
        <div class="review-list">
          ${sectionRecipes.map((recipe) => reviewRecipeCardTemplate(recipe, reviewApprovedIds.has(recipe.id))).join("")}
        </div>
      ` : `<p class="review-empty">${emptyMessage}</p>`}
    </section>
  `;
}

function reviewRecipeCardTemplate(recipe, approved) {
  const timeLabel = getTimeLabel(getTimeBucket(recipe.timeMinutes));
  const mealLabels = recipe.mealTypes.map((type) => getOptionLabel("meal", type)).filter(Boolean).join(", ");
  const foodLabels = recipe.foodTypes.map((type) => getOptionLabel("food", type)).filter(Boolean).join(", ");
  const toleranceLabels = recipe.todayFilters.length
    ? recipe.todayFilters.map((filter) => getOptionLabel("today", filter)).join(", ")
    : "Normal-ish";

  return `
    <article class="recipe-card review-card">
      <div class="recipe-top review-recipe-top">
        <span class="recipe-emoji" aria-hidden="true">${recipe.emoji}</span>
        <div>
          <h3>${recipe.title}</h3>
          <p><strong>Good when:</strong> ${recipe.goodWhen}</p>
        </div>
        <span class="review-status ${approved ? "is-approved" : ""}">${approved ? "Approved" : "Needs review"}</span>
      </div>
      <div class="tag-row" aria-label="Recipe details">
        <span>${timeLabel}</span>
        <span>${getOptionLabel("energy", recipe.energyLevel)}</span>
        <span>${foodLabels}</span>
      </div>
      <p class="stomach-line"><strong>Meal types:</strong> ${mealLabels}</p>
      <p class="stomach-line"><strong>Tags:</strong> ${recipe.tags.join(", ")}</p>
      <p class="stomach-line"><strong>Tolerance options:</strong> ${toleranceLabels}</p>
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
      <div class="review-card-actions">
        <button class="${approved ? "secondary-button" : "primary-button"}" type="button" data-review-${approved ? "unapprove" : "approve"}="${recipe.id}">
          ${approved ? "Move back to review" : "Approve"}
        </button>
      </div>
    </article>
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
    : [];

  return [
    getOptionLabel("energy", state.energyLevel),
    getOptionLabel("food", state.foodType),
    getOptionLabel("time", state.timeBucket),
    getOptionLabel("meal", state.mealType),
    ...todayLabels
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
      <p class="stomach-line"><strong>Tolerance options:</strong> ${todayTags}</p>
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
      ${isPrimary ? `<button class="fallback-button" type="button" data-fallback="${recipe.id}">Show me something easier</button>` : ""}
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

function validRecipeIdSet() {
  return new Set(recipes.map((recipe) => recipe.id));
}

function orderedRecipeIdsFromSet(idSet) {
  return recipes
    .filter((recipe) => idSet.has(recipe.id))
    .map((recipe) => recipe.id);
}

function loadReviewApprovedIds() {
  const validIds = validRecipeIdSet();

  try {
    const saved = window.localStorage.getItem(REVIEW_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return new Set(parsed.filter((id) => validIds.has(id)));
      }
    }
  } catch {
    // Local review state is optional; fall back to the committed list.
  }

  return new Set(approvedRecipeIds.filter((id) => validIds.has(id)));
}

function persistReviewApprovedIds() {
  try {
    window.localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(orderedRecipeIdsFromSet(reviewApprovedIds)));
  } catch {
    state.reviewMessage = "Approved list could not be saved in this browser.";
  }
}

function setRecipeApproval(recipeId, approved) {
  if (!validRecipeIdSet().has(recipeId)) {
    return;
  }

  if (approved) {
    reviewApprovedIds.add(recipeId);
  } else {
    reviewApprovedIds.delete(recipeId);
  }

  persistReviewApprovedIds();
  const recipe = recipes.find((item) => item.id === recipeId);
  state.reviewMessage = approved
    ? `${recipe.title} moved to Approved.`
    : `${recipe.title} moved back to Needs Review.`;
  writeHistory("replace");
  render();
}

function buildApprovedExport() {
  return JSON.stringify({
    approvedRecipeIds: orderedRecipeIdsFromSet(reviewApprovedIds)
  }, null, 2);
}

async function copyApprovedList() {
  const approvedExport = buildApprovedExport();

  try {
    await window.navigator.clipboard.writeText(approvedExport);
    state.reviewMessage = "Approved list copied.";
  } catch {
    window.prompt("Copy this approved list:", approvedExport);
    state.reviewMessage = "Approved list opened for copying.";
  }

  writeHistory("replace");
  render();
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

function openReview({ push = true } = {}) {
  clearAutoAdvance();
  state.step = "review";
  state.reviewMessage = "";
  if (push && !restoringFromHistory) {
    writeHistory("push");
  } else if (!restoringFromHistory) {
    writeHistory("replace");
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeReview() {
  clearAutoAdvance();
  state.step = "energy";
  state.reviewMessage = "";
  state.expandedRecipeId = null;
  writeHistory("push");
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
    goToStep(flowSteps[flowSteps.length - 1]);
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

function skipCurrentStep() {
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
    } else if (action === "copy-approved") {
      copyApprovedList();
    } else if (action === "close-review") {
      closeReview();
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

  const reviewFilterButton = event.target.closest("[data-review-filter]");
  if (reviewFilterButton) {
    state.reviewFilter = reviewFilterButton.dataset.reviewFilter;
    render();
    return;
  }

  const approveButton = event.target.closest("[data-review-approve]");
  if (approveButton) {
    setRecipeApproval(approveButton.dataset.reviewApprove, true);
    return;
  }

  const unapproveButton = event.target.closest("[data-review-unapprove]");
  if (unapproveButton) {
    setRecipeApproval(unapproveButton.dataset.reviewUnapprove, false);
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
  if (state.step === "today") {
    state.step = "results";
  }
  if (state.step !== "results" && state.step !== "review" && !flowSteps.includes(state.step)) {
    state.step = "energy";
  }
  state.energyLevel = snapshot.energyLevel || null;
  state.foodType = snapshot.foodType || null;
  state.timeBucket = snapshot.timeBucket || null;
  state.mealType = snapshot.mealType || null;
  state.todayFilters = new Set();
  state.fallbackSourceId = snapshot.fallbackSourceId || null;
  state.expandedRecipeId = snapshot.expandedRecipeId || null;
  state.visibleBackupCount = snapshot.visibleBackupCount || 2;
  state.reviewMessage = "";
  return true;
}

function writeHistory(mode) {
  const snapshot = stateSnapshot();
  const baseUrl = `${window.location.pathname}${window.location.search}`;
  const url = snapshot.step === "review" ? `${baseUrl}#review` : baseUrl;
  if (mode === "replace") {
    window.history.replaceState(snapshot, "", url);
  } else {
    window.history.pushState(snapshot, "", url);
  }
}

function setupReviewTrigger() {
  if (!reviewTrigger) {
    return;
  }

  const startHold = (event) => {
    if (state.step !== "energy") {
      return;
    }

    event.preventDefault();
    clearReviewHold();
    reviewHoldTimer = window.setTimeout(() => {
      reviewHoldTimer = null;
      openReview();
    }, 3000);
  };

  reviewTrigger.addEventListener("pointerdown", startHold);
  reviewTrigger.addEventListener("pointerup", clearReviewHold);
  reviewTrigger.addEventListener("pointercancel", clearReviewHold);
  reviewTrigger.addEventListener("pointerleave", clearReviewHold);
}

function clearReviewHold() {
  if (reviewHoldTimer) {
    window.clearTimeout(reviewHoldTimer);
    reviewHoldTimer = null;
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

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#review" && state.step !== "review") {
    openReview({ push: false });
  }
});

if (window.location.hash === "#review") {
  state.step = "review";
}

setupReviewTrigger();
writeHistory("replace");
render();
