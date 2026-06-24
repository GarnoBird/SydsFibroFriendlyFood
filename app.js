const filterOptions = {
  energy: [
    { value: "barely", label: "Barely Anything", icon: "🛌", note: "Open, scoop, assemble" },
    { value: "little", label: "A Little", icon: "🥄", note: "Tiny prep, low mess" },
    { value: "cook", label: "I Can Cook", icon: "🍳", note: "A pan or pot is okay" },
    { value: "future", label: "Make Future Me Happy", icon: "📦", note: "Batch or leftovers" }
  ],
  food: [
    { value: "fish", label: "Fish", icon: "🐟", note: "Tuna, salmon, sardines" },
    { value: "chicken", label: "Chicken/Turkey", icon: "🍗", note: "Quick protein" },
    { value: "eggs", label: "Eggs", icon: "🥚", note: "Soft, simple, filling" },
    { value: "veggie", label: "Veggie Bowl", icon: "🥗", note: "Warm or soft veg" },
    { value: "soup", label: "Soup", icon: "🍜", note: "Comfort in a bowl" },
    { value: "snack", label: "Snack Plate", icon: "🧀", note: "Bits and pieces" },
    { value: "smoothie", label: "Smoothie/Yogurt", icon: "🥣", note: "Cool and easy" }
  ],
  time: [
    { value: "2-5", label: "2 to 5 min", icon: "⏱️", note: "Almost no cooking" },
    { value: "10", label: "10 min", icon: "🕰️", note: "One small task" },
    { value: "15", label: "15 min", icon: "🍽️", note: "A little more room" },
    { value: "20+", label: "20+ min", icon: "🫕", note: "Make extra if you can" }
  ],
  meal: [
    { value: "breakfast", label: "Breakfast", icon: "☀️", note: "Morning or anytime" },
    { value: "lunch", label: "Lunch", icon: "🌤️", note: "Midday steady" },
    { value: "dinner", label: "Dinner", icon: "🌙", note: "Warm and simple" },
    { value: "snack", label: "Snack/Emergency Food", icon: "🧺", note: "Food now" }
  ],
  avoid: [
    { value: "gentle", label: "Gentle food only" },
    { value: "dairy", label: "No dairy today" },
    { value: "beans", label: "No beans today" },
    { value: "wheat", label: "No wheat today" },
    { value: "rawVeg", label: "No raw veg today" }
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
    { value: "soup", label: "Soup" },
    { value: "sweetPotato", label: "Sweet potato" },
    { value: "banana", label: "Banana" },
    { value: "frozenFruit", label: "Frozen fruit" },
    { value: "spinach", label: "Spinach" },
    { value: "hummus", label: "Hummus" },
    { value: "crackers", label: "Crackers" },
    { value: "avocado", label: "Avocado" }
  ]
};

const recipes = [
  {
    id: "banana-oat-yogurt",
    title: "Banana Oat Yogurt Bowl",
    emoji: "🍌",
    description: "Cool, soft, and steady when breakfast needs to be almost automatic.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "barely",
    food: "smoothie",
    meals: ["breakfast", "snack"],
    avoid: ["gentle", "rawVeg"],
    contains: ["dairy"],
    pantry: ["banana", "oats", "yogurt"],
    ingredients: ["Yogurt", "Banana", "Quick oats", "Cinnamon or honey if wanted"],
    steps: ["Spoon yogurt into a bowl.", "Slice or break in banana.", "Sprinkle oats on top and eat."],
    shortcut: "Use the banana whole and dip it into yogurt. Skip the bowl."
  },
  {
    id: "microwave-eggs-toast",
    title: "Soft Microwave Eggs",
    emoji: "🥚",
    description: "Warm protein with one mug, one fork, and very little standing.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "little",
    food: "eggs",
    meals: ["breakfast", "lunch", "snack"],
    avoid: ["gentle", "rawVeg"],
    contains: ["dairy", "wheat"],
    pantry: ["eggs"],
    ingredients: ["2 eggs", "Splash of milk or water", "Salt", "Toast or rice if wanted"],
    steps: ["Beat eggs with a splash of liquid in a mug.", "Microwave 30 seconds, stir, then microwave again until softly set.", "Eat with toast, rice, or straight from the mug."],
    shortcut: "Skip toast and add a spoon of cottage cheese or avocado after cooking."
  },
  {
    id: "tuna-rice-bowl",
    title: "Tuna Rice Bowl",
    emoji: "🐟",
    description: "A pantry bowl with soft rice, easy fish, and a small bright flavor.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "barely",
    food: "fish",
    meals: ["lunch", "dinner", "snack"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["tuna", "rice", "avocado"],
    ingredients: ["Microwave rice", "Tuna pouch or can", "Olive oil or mayo", "Avocado or cucumber if tolerated"],
    steps: ["Warm the rice.", "Open tuna and place it on top.", "Add oil, mayo, or avocado and a pinch of salt."],
    shortcut: "Eat tuna with crackers if rice feels like too much."
  },
  {
    id: "salmon-sweet-potato",
    title: "Salmon Sweet Potato Plate",
    emoji: "🍠",
    description: "Soft, warm, and simple with no chopping if you use microwave sweet potato.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "fish",
    meals: ["lunch", "dinner"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["salmon", "sweetPotato"],
    ingredients: ["Microwave sweet potato", "Canned salmon", "Olive oil", "Salt or lemon"],
    steps: ["Microwave the sweet potato until soft.", "Split it open and add salmon.", "Drizzle with olive oil and season gently."],
    shortcut: "Swap sweet potato for microwave rice or eat salmon on its own."
  },
  {
    id: "rotisserie-chicken-rice",
    title: "Chicken Rice Bowl",
    emoji: "🍚",
    description: "Leftover or rotisserie chicken over rice with something soft and green.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "chicken",
    meals: ["lunch", "dinner"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["chicken", "rice", "spinach"],
    ingredients: ["Cooked chicken", "Microwave rice", "Frozen spinach or peas", "Olive oil or broth"],
    steps: ["Warm rice and frozen veg together.", "Add chicken and warm again.", "Stir in olive oil or a splash of broth."],
    shortcut: "Use only chicken and rice. Add the veg another day."
  },
  {
    id: "turkey-avocado-rollups",
    title: "Turkey Avocado Roll-Ups",
    emoji: "🥑",
    description: "A soft snack-plate meal when cooking is not invited.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "barely",
    food: "chicken",
    meals: ["lunch", "snack"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["turkey", "avocado"],
    ingredients: ["Turkey slices", "Avocado", "Rice cakes or crackers if tolerated", "Pickles or olives if wanted"],
    steps: ["Lay turkey slices on a plate.", "Add avocado pieces.", "Roll them up or eat as little stacks."],
    shortcut: "Skip rolling. Make piles and eat with your fingers."
  },
  {
    id: "egg-drop-soup",
    title: "Tiny Egg Drop Soup",
    emoji: "🍜",
    description: "A warm cup of broth with silky egg when chewing feels like extra work.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "soup",
    meals: ["breakfast", "lunch", "dinner", "snack"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["eggs", "soup"],
    ingredients: ["Broth", "1 egg", "Microwave rice if wanted", "Frozen spinach if tolerated"],
    steps: ["Heat broth until steaming.", "Beat egg in a cup.", "Stir broth while slowly pouring in the egg."],
    shortcut: "Use boxed soup and crack the egg straight in while stirring."
  },
  {
    id: "hummus-snack-plate",
    title: "Hummus Snack Plate",
    emoji: "🧆",
    description: "A snack plate that can become lunch without turning into a project.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "barely",
    food: "snack",
    meals: ["lunch", "snack"],
    avoid: ["dairy"],
    contains: ["beans", "wheat", "rawVeg"],
    pantry: ["hummus", "crackers"],
    ingredients: ["Hummus", "Crackers or pita", "Cucumber, carrots, or olives", "Nuts if wanted"],
    steps: ["Put hummus on a plate.", "Add crackers and one or two sides.", "Eat it as a meal if that is enough."],
    shortcut: "Use only hummus and crackers."
  },
  {
    id: "warm-veggie-rice",
    title: "Warm Veggie Rice Bowl",
    emoji: "🥕",
    description: "Soft vegetables, rice, and olive oil for a quiet bowl.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "veggie",
    meals: ["lunch", "dinner"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["rice", "spinach"],
    ingredients: ["Microwave rice", "Frozen mixed vegetables", "Olive oil", "Salt or mild sauce"],
    steps: ["Warm rice and frozen vegetables.", "Stir together with olive oil.", "Add salt or a mild sauce you tolerate."],
    shortcut: "Use rice plus one frozen vegetable only."
  },
  {
    id: "mediterranean-tuna-plate",
    title: "Tuna Olive Plate",
    emoji: "🫒",
    description: "A little Mediterranean-style plate with fish, crunch, and no stove.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "barely",
    food: "snack",
    meals: ["lunch", "dinner", "snack"],
    avoid: ["dairy", "beans"],
    contains: ["wheat", "rawVeg"],
    pantry: ["tuna", "crackers"],
    ingredients: ["Tuna pouch", "Crackers", "Olives", "Cucumber or roasted peppers"],
    steps: ["Open tuna and place it on a plate.", "Add crackers and olives.", "Add a vegetable only if it sounds okay."],
    shortcut: "Use tuna and crackers only."
  },
  {
    id: "smoothie-cup",
    title: "Banana Berry Smoothie",
    emoji: "🥤",
    description: "Cool, sippable food for low appetite days.",
    time: "2 to 5 min",
    timeTag: "2-5",
    energy: "little",
    food: "smoothie",
    meals: ["breakfast", "snack"],
    avoid: ["gentle", "beans", "wheat", "rawVeg"],
    contains: ["dairy"],
    pantry: ["banana", "frozenFruit", "yogurt"],
    ingredients: ["Banana", "Frozen berries", "Yogurt or milk", "Oats if wanted"],
    steps: ["Add everything to a blender.", "Blend until smooth.", "Pour into the easiest cup to wash."],
    shortcut: "Use drinkable yogurt and eat the banana beside it."
  },
  {
    id: "oatmeal-blueberry",
    title: "Soft Blueberry Oatmeal",
    emoji: "🫐",
    description: "Warm oats with fruit for a soft breakfast or emergency dinner.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "smoothie",
    meals: ["breakfast", "snack", "dinner"],
    avoid: ["gentle", "beans", "wheat", "rawVeg"],
    contains: ["dairy"],
    pantry: ["oats", "frozenFruit"],
    ingredients: ["Quick oats", "Frozen blueberries", "Milk or water", "Nut butter if wanted"],
    steps: ["Microwave oats with milk or water.", "Stir in frozen blueberries.", "Add nut butter if you want more staying power."],
    shortcut: "Use instant oatmeal and toss berries on top."
  },
  {
    id: "chicken-soup-upgrade",
    title: "Chicken Soup Upgrade",
    emoji: "🥣",
    description: "A can or box of soup made a little more filling.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "soup",
    meals: ["lunch", "dinner"],
    avoid: ["gentle", "dairy", "beans", "rawVeg"],
    contains: ["wheat"],
    pantry: ["soup", "chicken", "rice"],
    ingredients: ["Chicken soup", "Cooked chicken", "Microwave rice", "Olive oil if wanted"],
    steps: ["Heat the soup.", "Add chicken and rice.", "Warm until cozy."],
    shortcut: "Just heat the soup and put crackers beside it."
  },
  {
    id: "sheet-pan-chicken",
    title: "Future Me Chicken Tray",
    emoji: "🍗",
    description: "A simple tray that can feed today and leave gentle leftovers.",
    time: "20+ min",
    timeTag: "20+",
    energy: "future",
    food: "chicken",
    meals: ["dinner", "lunch"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["chicken", "sweetPotato"],
    ingredients: ["Chicken thighs or tenders", "Sweet potato chunks", "Frozen broccoli or carrots", "Olive oil"],
    steps: ["Put chicken and vegetables on a sheet pan.", "Coat with olive oil and salt.", "Bake until chicken is done and save leftovers."],
    shortcut: "Buy pre-cut vegetables or use only chicken and sweet potatoes."
  },
  {
    id: "lentil-soup",
    title: "Gentle-ish Lentil Soup",
    emoji: "🍲",
    description: "A future-me pot with soft vegetables and lentils if beans are okay today.",
    time: "20+ min",
    timeTag: "20+",
    energy: "future",
    food: "soup",
    meals: ["lunch", "dinner"],
    avoid: ["dairy", "wheat", "rawVeg"],
    contains: ["beans"],
    pantry: ["soup", "spinach"],
    ingredients: ["Lentils", "Broth", "Frozen carrots or spinach", "Olive oil"],
    steps: ["Simmer lentils in broth.", "Add frozen vegetables.", "Eat one bowl and freeze another if you can."],
    shortcut: "Use canned lentil soup and add olive oil."
  },
  {
    id: "frittata-leftovers",
    title: "Leftover Frittata Squares",
    emoji: "🍳",
    description: "Eggs baked with soft leftovers for several easy bites later.",
    time: "20+ min",
    timeTag: "20+",
    energy: "future",
    food: "eggs",
    meals: ["breakfast", "lunch", "dinner", "snack"],
    avoid: ["gentle", "beans", "wheat", "rawVeg"],
    contains: ["dairy"],
    pantry: ["eggs", "spinach"],
    ingredients: ["Eggs", "Frozen spinach", "Cheese if tolerated", "Leftover potatoes or rice"],
    steps: ["Whisk eggs in a baking dish.", "Stir in spinach and leftovers.", "Bake until set, then cut into squares."],
    shortcut: "Make scrambled eggs with the same fillings instead."
  },
  {
    id: "avocado-egg-rice",
    title: "Avocado Egg Rice",
    emoji: "🥑",
    description: "Soft rice, egg, and avocado for a bowl that feels calm and filling.",
    time: "10 min",
    timeTag: "10",
    energy: "cook",
    food: "eggs",
    meals: ["breakfast", "lunch", "dinner"],
    avoid: ["gentle", "dairy", "beans", "wheat", "rawVeg"],
    contains: [],
    pantry: ["eggs", "rice", "avocado"],
    ingredients: ["Microwave rice", "Egg", "Avocado", "Olive oil or mild sauce"],
    steps: ["Warm rice.", "Fry, scramble, or microwave the egg.", "Top rice with egg and avocado."],
    shortcut: "Use a boiled egg from the fridge."
  },
  {
    id: "sardine-toast",
    title: "Sardine Toast or Rice",
    emoji: "🐟",
    description: "Omega-rich pantry fish with the base that feels easiest today.",
    time: "10 min",
    timeTag: "10",
    energy: "little",
    food: "fish",
    meals: ["breakfast", "lunch", "dinner", "snack"],
    avoid: ["dairy", "beans"],
    contains: ["wheat"],
    pantry: ["rice", "crackers"],
    ingredients: ["Sardines", "Toast, rice, or crackers", "Olive oil", "Lemon if wanted"],
    steps: ["Open sardines.", "Put them on toast, rice, or crackers.", "Add olive oil or lemon if that sounds good."],
    shortcut: "Eat sardines straight from the tin with crackers."
  }
];

const state = {
  energy: null,
  food: null,
  time: null,
  meal: null,
  avoid: new Set(),
  pantry: new Set(),
  fallbackOffset: 0,
  fallbackFrom: null
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

function renderFilterCards() {
  renderSingleChoiceGroup("energy", "choice-card");
  renderSingleChoiceGroup("food", "choice-card");
  renderSingleChoiceGroup("time", "choice-card");
  renderSingleChoiceGroup("meal", "choice-card");
  renderMultiChoiceGroup("avoid", "pill");
  renderMultiChoiceGroup("pantry", "pantry-chip");
}

function renderSingleChoiceGroup(group, className) {
  const container = document.querySelector(`[data-filter-group="${group}"]`);
  container.innerHTML = filterOptions[group].map((option) => `
    <button class="${className}" type="button" data-group="${group}" data-value="${option.value}" aria-pressed="false">
      <span class="icon-bubble" aria-hidden="true">${option.icon}</span>
      <span class="choice-text">
        <span class="choice-title">${option.label}</span>
        <span class="choice-subtitle">${option.note}</span>
      </span>
    </button>
  `).join("");
}

function renderMultiChoiceGroup(group, className) {
  const container = document.querySelector(`[data-filter-group="${group}"]`);
  container.innerHTML = filterOptions[group].map((option) => `
    <button class="${className}" type="button" data-group="${group}" data-value="${option.value}" aria-pressed="false">
      ${option.label}
    </button>
  `).join("");
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-group]");
    if (!button) {
      return;
    }

    const group = button.dataset.group;
    const value = button.dataset.value;

    if (group === "avoid" || group === "pantry") {
      toggleSetValue(group, value);
    } else {
      state[group] = state[group] === value ? null : value;
    }

    state.fallbackOffset = 0;
    state.fallbackFrom = null;
    syncControls();
    renderResults();
  });

  document.getElementById("start-over").addEventListener("click", () => {
    state.energy = null;
    state.food = null;
    state.time = null;
    state.meal = null;
    state.avoid.clear();
    state.pantry.clear();
    state.fallbackOffset = 0;
    state.fallbackFrom = null;
    syncControls();
    renderResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("recipe-list").addEventListener("click", (event) => {
    const fallbackButton = event.target.closest("[data-fallback]");
    if (!fallbackButton) {
      return;
    }

    state.fallbackFrom = fallbackButton.dataset.fallback;
    state.fallbackOffset = 0;
    renderResults();
    document.querySelector(".result-area").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function toggleSetValue(group, value) {
  if (state[group].has(value)) {
    state[group].delete(value);
  } else {
    state[group].add(value);
  }
}

function syncControls() {
  document.querySelectorAll("[data-group]").forEach((button) => {
    const group = button.dataset.group;
    const value = button.dataset.value;
    const selected = group === "avoid" || group === "pantry"
      ? state[group].has(value)
      : state[group] === value;

    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderResults() {
  const scored = recipes
    .map((recipe) => ({ recipe, score: scoreRecipe(recipe), exact: isExactMatch(recipe) }))
    .filter((item) => !hasAvoidedIngredient(item.recipe))
    .sort(sortMatches);

  const message = document.getElementById("match-message");
  const activeFilters = Boolean(state.energy || state.food || state.time || state.meal || state.avoid.size || state.pantry.size);

  if (state.fallbackFrom) {
    const fallbackMatches = easierFallbacks(scored, state.fallbackFrom);
    message.textContent = "That one can wait. Here are easier backups.";
    document.getElementById("recipe-list").innerHTML = fallbackMatches.slice(0, 3).map(({ recipe }) => recipeTemplate(recipe)).join("");
    return;
  }

  let matches = scored.filter((item) => item.exact);

  if (matches.length) {
    message.textContent = activeFilters
      ? "This one matches your taps. Keep what helps, ignore what does not."
      : "Tap any cards above, or start with these very easy ideas.";
  } else {
    matches = scored;
    message.textContent = "No exact match, so here are the closest easy ideas instead.";
  }

  if (!matches.length) {
    matches = recipes
      .map((recipe) => ({ recipe, score: scoreRecipe(recipe), exact: false }))
      .sort(sortMatches);
    message.textContent = "Those filters are very tight, so this is the gentlest backup list.";
  }

  const selected = rotateFallback(matches).slice(0, 3);
  document.getElementById("recipe-list").innerHTML = selected.map(({ recipe }) => recipeTemplate(recipe)).join("");
}

function easierFallbacks(scored, sourceId) {
  const source = recipes.find((recipe) => recipe.id === sourceId);
  if (!source) {
    return scored;
  }

  const easier = scored
    .filter(({ recipe }) => recipe.id !== sourceId)
    .filter(({ recipe }) => {
      const lowerEnergy = energyRank[recipe.energy] < energyRank[source.energy];
      const lowerTime = timeRank[recipe.timeTag] < timeRank[source.timeTag];
      const notHarder = energyRank[recipe.energy] <= energyRank[source.energy] && timeRank[recipe.timeTag] <= timeRank[source.timeTag];
      return notHarder && (lowerEnergy || lowerTime);
    })
    .sort((a, b) => {
      const effortA = energyRank[a.recipe.energy] + timeRank[a.recipe.timeTag];
      const effortB = energyRank[b.recipe.energy] + timeRank[b.recipe.timeTag];
      return effortA - effortB || sortMatches(a, b);
    });

  return easier.length ? easier : scored.filter(({ recipe }) => recipe.id !== sourceId);
}

function isExactMatch(recipe) {
  if (state.energy && recipe.energy !== state.energy) {
    return false;
  }

  if (state.food && recipe.food !== state.food) {
    return false;
  }

  if (state.time && recipe.timeTag !== state.time) {
    return false;
  }

  if (state.meal && !recipe.meals.includes(state.meal)) {
    return false;
  }

  if (state.avoid.has("gentle") && !recipe.avoid.includes("gentle")) {
    return false;
  }

  if (hasAvoidedIngredient(recipe)) {
    return false;
  }

  return true;
}

function hasAvoidedIngredient(recipe) {
  const blockedIngredients = ["dairy", "beans", "wheat", "rawVeg"];
  return blockedIngredients.some((ingredient) => state.avoid.has(ingredient) && recipe.contains.includes(ingredient));
}

function scoreRecipe(recipe) {
  let score = 0;

  if (state.energy) {
    score += recipe.energy === state.energy ? 14 : Math.max(0, 8 - Math.abs(energyRank[recipe.energy] - energyRank[state.energy]) * 3);
    if (energyRank[recipe.energy] < energyRank[state.energy]) {
      score += 2;
    }
  }

  if (state.food) {
    score += recipe.food === state.food ? 14 : 0;
  }

  if (state.time) {
    score += recipe.timeTag === state.time ? 12 : Math.max(0, 7 - Math.abs(timeRank[recipe.timeTag] - timeRank[state.time]) * 3);
    if (timeRank[recipe.timeTag] < timeRank[state.time]) {
      score += 2;
    }
  }

  if (state.meal) {
    score += recipe.meals.includes(state.meal) ? 10 : 0;
  }

  if (state.avoid.has("gentle") && recipe.avoid.includes("gentle")) {
    score += 8;
  }

  state.pantry.forEach((ingredient) => {
    if (recipe.pantry.includes(ingredient)) {
      score += 5;
    }
  });

  score -= energyRank[recipe.energy] * 1.5;
  score -= timeRank[recipe.timeTag];

  return score;
}

function sortMatches(a, b) {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  if (energyRank[a.recipe.energy] !== energyRank[b.recipe.energy]) {
    return energyRank[a.recipe.energy] - energyRank[b.recipe.energy];
  }

  if (timeRank[a.recipe.timeTag] !== timeRank[b.recipe.timeTag]) {
    return timeRank[a.recipe.timeTag] - timeRank[b.recipe.timeTag];
  }

  return a.recipe.title.localeCompare(b.recipe.title);
}

function rotateFallback(matches) {
  if (!matches.length) {
    return matches;
  }

  const offset = state.fallbackOffset % matches.length;
  return [...matches.slice(offset), ...matches.slice(0, offset)];
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <div class="recipe-top">
        <div class="recipe-emoji" aria-hidden="true">${recipe.emoji}</div>
        <div class="recipe-title">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
        </div>
      </div>
      <div class="tag-row" aria-label="Recipe tags">
        <span class="tag">${recipe.time}</span>
        <span class="tag">${energyLabel(recipe.energy)}</span>
      </div>
      <div class="recipe-body">
        <section class="mini-section">
          <h4>Ingredients</h4>
          <ul class="checklist">
            ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
          </ul>
        </section>
        <section class="mini-section">
          <h4>Tiny Steps</h4>
          <ol class="steps">
            ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </section>
        <section class="mini-section full">
          <h4>Make it easier</h4>
          <p class="shortcut">${recipe.shortcut}</p>
          <button class="fallback-button" type="button" data-fallback="${recipe.id}">I can’t do this today</button>
        </section>
      </div>
    </article>
  `;
}

function energyLabel(value) {
  const option = filterOptions.energy.find((item) => item.value === value);
  return option ? option.label : value;
}

renderFilterCards();
bindEvents();
syncControls();
renderResults();
