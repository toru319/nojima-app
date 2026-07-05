const app = document.getElementById("app");

const state = {
  currentScreen: "home",
  selectedCategory: null,
  currentQuestionIndex: 0,
  answers: {},
  selectedTags: [],
  filteredProducts: [],
  comparisonProducts: loadComparison(),
  categoryFilters: {
    keyword: "",
    maker: "",
    priceBand: "",
    optionIds: []
  },
  janSearchInput: "",
  janSearchResults: [],
  message: ""
};

validateProductData();
renderApp();

function renderApp() {
  if (state.currentScreen === "home") renderHome();
  if (state.currentScreen === "categoryProducts") renderCategoryProducts();
  if (state.currentScreen === "question") renderQuestion();
  if (state.currentScreen === "results") renderResults();
  if (state.currentScreen === "comparison") renderComparison();
  if (state.currentScreen === "jan") renderJanSearch();
  if (state.currentScreen === "unregisteredJan") renderUnregisteredJan(state.janSearchInput);
}

function renderHome() {
  const counts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  app.innerHTML = `
    <section class="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="rounded-lg bg-white p-6 shadow-card ring-1 ring-nojima-border md:p-8">
        <p class="mb-2 text-sm font-bold text-nojima-blue">iPad Safari向け 静的Webアプリ</p>
        <h2 class="text-3xl font-bold tracking-normal text-nojima-navy md:text-4xl">カテゴリを選んで、商品一覧から確認します</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
          まず商品名や特徴を一覧で確認し、必要に応じてメーカー・価格帯・タグで絞り込みます。ヒアリングはカテゴリ一覧画面から開始できます。
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <button class="tap-target rounded-md bg-nojima-red px-5 py-3 font-bold text-white shadow-sm" type="button" onclick="showJanSearch()">JANコードで商品検索</button>
          <button class="tap-target rounded-md bg-nojima-navy px-5 py-3 font-bold text-white shadow-sm" type="button" onclick="showComparison()">比較リストを見る (${state.comparisonProducts.length})</button>
        </div>
      </div>
      <aside class="rounded-lg bg-nojima-navy p-6 text-white shadow-card md:p-8">
        <p class="text-sm font-bold text-blue-100">本日の試験データ</p>
        <h3 class="mt-2 text-2xl font-bold">ドライヤー・イヤホン・スマートウォッチ・プリンター</h3>
        <p class="mt-3 leading-7 text-blue-50">調査データとして、ドライヤー${counts["hair-dryer"] || 0}商品、イヤホン${counts.earphone || 0}商品、スマートウォッチ${counts.smartwatch || 0}商品、プリンター${counts.printer || 0}商品を登録済みです。</p>
        <div class="mt-5 flex flex-wrap gap-3">
          <button class="tap-target rounded-md bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="showCategoryProducts('hair-dryer')">ドライヤー商品を見る</button>
          <button class="tap-target rounded-md bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="showCategoryProducts('earphone')">イヤホン商品を見る</button>
          <button class="tap-target rounded-md bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="showCategoryProducts('smartwatch')">スマートウォッチ商品を見る</button>
          <button class="tap-target rounded-md bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="showCategoryProducts('printer')">プリンター商品を見る</button>
        </div>
      </aside>
    </section>

    <section class="mt-7">
      <div class="mb-4 flex items-center justify-between gap-3">
        <h2 class="text-2xl font-bold text-nojima-navy">部門別カテゴリ</h2>
        <span class="rounded-full bg-white px-4 py-2 text-sm font-bold text-nojima-blue ring-1 ring-nojima-border">登録商品 ${products.length}件</span>
      </div>
      <div class="space-y-5">
        ${departments.map((department) => {
          const departmentCategories = department.categoryIds
            .map((categoryId) => categories.find((category) => category.id === categoryId))
            .filter(Boolean);
          return `
            <section class="rounded-lg bg-white p-4 shadow-card ring-1 ring-nojima-border md:p-5">
              <div class="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 class="text-xl font-bold text-nojima-navy">${escapeHtml(department.name)}</h3>
                  <p class="text-sm leading-6 text-slate-600">${escapeHtml(department.description)}</p>
                </div>
                <span class="text-sm font-bold text-nojima-blue">${departmentCategories.length}カテゴリ</span>
              </div>
              <div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
                ${departmentCategories.map((category) => `
                  <button class="group min-h-28 rounded-lg bg-nojima-bg p-3 text-left ring-1 ring-nojima-border transition hover:bg-white hover:ring-nojima-blue focus:outline-none focus:ring-4 focus:ring-nojima-blue/30" type="button" onclick="showCategoryProducts('${category.id}')">
                    <span class="flex items-center gap-2">
                      <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-nojima-navy text-lg font-black text-white">${escapeHtml(category.icon)}</span>
                      <span class="text-base font-bold leading-5 text-nojima-navy">${escapeHtml(category.name)}</span>
                    </span>
                    <span class="mt-2 block text-sm leading-5 text-slate-600">${escapeHtml(category.description)}</span>
                    <span class="mt-2 inline-flex rounded-full bg-white px-2 py-1 text-xs font-bold text-nojima-blue ring-1 ring-nojima-border">${counts[category.id] || 0}商品</span>
                  </button>
                `).join("")}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function showCategoryProducts(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;
  state.currentScreen = "categoryProducts";
  state.selectedCategory = category;
  resetCategoryFilters(false);
  state.message = "";
  renderApp();
}

function renderCategoryProducts() {
  const categoryProducts = getCategoryProducts();
  const filteredItems = getFilteredCategoryProducts();
  const makers = uniqueValues(categoryProducts.map((product) => product.maker));
  const priceBands = uniqueValues(categoryProducts.map((product) => product.priceBand));
  const filterProfile = getCategoryFilterProfile(state.selectedCategory.id);

  app.innerHTML = `
    <section class="space-y-5">
      <div class="rounded-lg bg-white p-5 shadow-card ring-1 ring-nojima-border md:p-6">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p class="text-sm font-bold text-nojima-blue">${escapeHtml(getDepartmentName(state.selectedCategory.department))}</p>
            <h2 class="mt-1 text-3xl font-bold text-nojima-navy">${escapeHtml(state.selectedCategory.name)} 商品一覧</h2>
            <p class="mt-2 leading-7 text-slate-700">${escapeHtml(state.selectedCategory.description)}。登録商品を確認してから、必要に応じてヒアリングへ進みます。</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button class="tap-target rounded-md bg-nojima-red px-5 py-3 font-bold text-white" type="button" onclick="startHearing('${state.selectedCategory.id}')">ヒアリングへ</button>
            <button class="tap-target rounded-md border border-nojima-border bg-white px-4 py-3 font-bold text-nojima-navy" type="button" onclick="goHome()">ホーム</button>
          </div>
        </div>
        ${state.message ? messageHtml(state.message, state.message.includes("追加") ? "success" : "warn") : ""}
      </div>

      <div class="rounded-lg bg-white p-5 shadow-card ring-1 ring-nojima-border md:p-6">
        <div class="grid gap-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
          <label class="block">
            <span class="mb-2 block text-sm font-bold text-nojima-navy">キーワード</span>
            <input id="categoryKeyword" class="tap-target w-full rounded-md border border-nojima-border px-4 py-3 outline-none focus:border-nojima-blue focus:ring-4 focus:ring-nojima-blue/20" value="${escapeHtml(state.categoryFilters.keyword)}" placeholder="商品名・特徴・型番" />
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-bold text-nojima-navy">メーカー</span>
            <select class="tap-target w-full rounded-md border border-nojima-border px-3 py-3 outline-none focus:border-nojima-blue" onchange="updateCategoryFilter('maker', this.value)">
              <option value="">すべて</option>
              ${makers.map((maker) => `<option value="${escapeHtml(maker)}" ${state.categoryFilters.maker === maker ? "selected" : ""}>${escapeHtml(maker)}</option>`).join("")}
            </select>
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-bold text-nojima-navy">価格帯</span>
            <select class="tap-target w-full rounded-md border border-nojima-border px-3 py-3 outline-none focus:border-nojima-blue" onchange="updateCategoryFilter('priceBand', this.value)">
              <option value="">すべて</option>
              ${priceBands.map((priceBand) => `<option value="${escapeHtml(priceBand)}" ${state.categoryFilters.priceBand === priceBand ? "selected" : ""}>${escapeHtml(priceBand)}</option>`).join("")}
            </select>
          </label>
          <div class="flex items-end gap-2">
            <button class="tap-target rounded-md bg-nojima-navy px-4 py-3 font-bold text-white" type="button" onclick="applyKeywordFilter()">絞り込み</button>
            <button class="tap-target rounded-md border border-nojima-border bg-white px-4 py-3 font-bold text-nojima-navy" type="button" onclick="resetCategoryFilters()">解除</button>
          </div>
        </div>
        ${filterProfile ? renderFieldFilterGroups(filterProfile) : emptyPanel("接客フィルターは未設定です", "このカテゴリはキーワード、メーカー、価格帯で絞り込めます。商品データが増えたら、日本語の接客フィルターを追加できます。")}
      </div>

      <div class="flex items-center justify-between gap-3">
        <h3 class="text-2xl font-bold text-nojima-navy">商品 ${filteredItems.length} / ${categoryProducts.length}件</h3>
        <button class="tap-target rounded-md bg-nojima-red px-5 py-3 font-bold text-white" type="button" onclick="startHearing('${state.selectedCategory.id}')">このカテゴリでヒアリング</button>
      </div>

      ${categoryProducts.length === 0
        ? emptyPanel("このカテゴリの商品はまだ登録されていません", "商品データを追加すると、この画面で一覧表示とフィルターが使えます。")
        : filteredItems.length === 0
          ? emptyPanel("条件に合う商品がありません", "キーワード、メーカー、価格帯、タグを変更してください。")
          : `<div class="grid gap-4 xl:grid-cols-2">${filteredItems.map((product) => renderCatalogProductCard(product)).join("")}</div>`}
    </section>
  `;
}

function renderCatalogProductCard(product) {
  const inComparison = state.comparisonProducts.includes(product.id);
  const features = Array.isArray(product.features) ? product.features.slice(0, 3) : [];
  const fieldLabels = getProductFieldLabels(product);
  const specChips = getProductSpecChips(product);
  return `
    <article class="rounded-lg bg-white p-5 shadow-card ring-1 ring-nojima-border">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div class="flex flex-wrap gap-2">
            <span class="rounded-full bg-nojima-bg px-3 py-1 text-xs font-bold text-nojima-blue ring-1 ring-nojima-border">${escapeHtml(safeValue(product.priceBand))}</span>
            <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-nojima-navy ring-1 ring-nojima-border">${escapeHtml(safeValue(product.productType))}</span>
          </div>
          <h3 class="mt-3 text-xl font-bold leading-7 text-nojima-navy">${escapeHtml(safeValue(product.name))}</h3>
          <p class="mt-1 text-sm font-semibold text-slate-600">${escapeHtml(safeValue(product.maker))} / ${escapeHtml(safeValue(product.modelNumber))}</p>
        </div>
        <button class="tap-target rounded-md ${inComparison ? "bg-slate-200 text-slate-600" : "bg-nojima-red text-white"} px-4 py-2 font-bold" type="button" onclick="addToComparison('${product.id}')">${inComparison ? "追加済み" : "比較に追加"}</button>
      </div>
      <ul class="mt-4 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-3">
        ${features.map((feature) => `<li class="rounded-md bg-nojima-bg p-3">${escapeHtml(safeValue(feature))}</li>`).join("")}
      </ul>
      ${fieldLabels.length ? `
        <div class="mt-4">
          <p class="mb-2 text-xs font-bold text-slate-500">接客で使いやすい切り口</p>
          <div class="flex flex-wrap gap-2">
            ${fieldLabels.slice(0, 6).map((label) => `<span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-nojima-blue ring-1 ring-nojima-border">${escapeHtml(label)}</span>`).join("")}
          </div>
        </div>
      ` : ""}
      ${specChips.length ? `
        <div class="mt-4">
          <p class="mb-2 text-xs font-bold text-slate-500">確認しやすい主な仕様</p>
          <div class="flex flex-wrap gap-2">
            ${specChips.slice(0, 8).map((label) => `<span class="rounded-full bg-nojima-navy px-3 py-1 text-xs font-bold text-white">${escapeHtml(label)}</span>`).join("")}
          </div>
        </div>
      ` : ""}
    </article>
  `;
}

function renderFieldFilterGroups(filterProfile) {
  return `
    <div class="mt-5 border-t border-nojima-border pt-5">
      <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 class="text-lg font-bold text-nojima-navy">${escapeHtml(filterProfile.title)}</h3>
          <p class="mt-1 text-sm leading-6 text-slate-600">${escapeHtml(filterProfile.description)}</p>
        </div>
        <button class="tap-target rounded-md border border-nojima-border bg-white px-4 py-2 text-sm font-bold text-nojima-navy" type="button" onclick="clearFieldFilters()">接客フィルターだけ解除</button>
      </div>
      <div class="mt-4 grid gap-4 xl:grid-cols-2">
        ${filterProfile.groups.map((group) => `
          <section class="rounded-lg bg-nojima-bg p-4 ring-1 ring-nojima-border">
            <h4 class="font-bold text-nojima-navy">${escapeHtml(group.label)}</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              ${group.options.map((option) => {
                const selected = state.categoryFilters.optionIds.includes(option.id);
                return `
                  <button class="tap-target rounded-md px-3 py-2 text-left text-sm font-bold leading-5 ${selected ? "bg-nojima-red text-white" : "bg-white text-nojima-navy ring-1 ring-nojima-border"}" type="button" onclick="toggleFieldFilter('${option.id}')">
                    ${escapeHtml(option.label)}
                    <span class="block text-xs font-semibold ${selected ? "text-red-50" : "text-slate-500"}">${escapeHtml(option.description)}</span>
                  </button>
                `;
              }).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </div>
  `;
}

function getCategoryProducts() {
  if (!state.selectedCategory) return [];
  return products
    .filter((product) => product.category === state.selectedCategory.id)
    .sort((a, b) => safeValue(a.name).localeCompare(safeValue(b.name), "ja"));
}

function getFilteredCategoryProducts() {
  const keyword = state.categoryFilters.keyword.trim().toLowerCase();
  return getCategoryProducts().filter((product) => {
    if (state.categoryFilters.maker && product.maker !== state.categoryFilters.maker) return false;
    if (state.categoryFilters.priceBand && product.priceBand !== state.categoryFilters.priceBand) return false;
    if (!state.categoryFilters.optionIds.every((optionId) => productMatchesFieldFilter(product, optionId))) return false;
    if (!keyword) return true;
    const searchable = [
      product.name,
      product.maker,
      product.modelNumber,
      product.productType,
      product.priceBand,
      product.goodFor,
      product.caution,
      product.talk,
      ...(Array.isArray(product.features) ? product.features : []),
      ...(Array.isArray(product.hearingTips) ? product.hearingTips : []),
      ...(Array.isArray(product.tags) ? product.tags : []),
      ...getSearchableSpecValues(product)
    ].join(" ").toLowerCase();
    return searchable.includes(keyword);
  });
}

function getSearchableSpecValues(product) {
  if (!product.specs) return [];
  return Object.values(product.specs)
    .flatMap((value) => Array.isArray(value) ? value : [value])
    .filter((value) => value !== undefined && value !== null)
    .map((value) => String(value));
}

function applyKeywordFilter() {
  state.categoryFilters.keyword = document.getElementById("categoryKeyword")?.value || "";
  renderApp();
}

function updateCategoryFilter(key, value) {
  state.categoryFilters[key] = value;
  renderApp();
}

function toggleFieldFilter(optionId) {
  const selected = state.categoryFilters.optionIds.includes(optionId);
  state.categoryFilters.optionIds = selected
    ? state.categoryFilters.optionIds.filter((id) => id !== optionId)
    : [...state.categoryFilters.optionIds, optionId];
  renderApp();
}

function clearFieldFilters() {
  state.categoryFilters.optionIds = [];
  renderApp();
}

function resetCategoryFilters(shouldRender = true) {
  state.categoryFilters = {
    keyword: "",
    maker: "",
    priceBand: "",
    optionIds: []
  };
  if (shouldRender) renderApp();
}

function getCategoryFilterProfile(categoryId) {
  return typeof categoryFilterProfiles === "undefined" ? null : categoryFilterProfiles[categoryId] || null;
}

function getAllFieldFilterOptions(categoryId) {
  const profile = getCategoryFilterProfile(categoryId);
  if (!profile) return [];
  return profile.groups.flatMap((group) => group.options);
}

function getFieldFilterOption(categoryId, optionId) {
  return getAllFieldFilterOptions(categoryId).find((option) => option.id === optionId);
}

function productMatchesFieldFilter(product, optionId) {
  const option = getFieldFilterOption(product.category, optionId);
  if (!option) return true;
  const productTags = Array.isArray(product.tags) ? product.tags : [];
  const matchesTags = Array.isArray(option.tags) && option.tags.length
    ? option.tags.some((tag) => productTags.includes(tag))
    : true;
  const matchesPrice = Array.isArray(option.priceBands) && option.priceBands.length
    ? option.priceBands.includes(product.priceBand)
    : true;
  const matchesMaker = Array.isArray(option.makers) && option.makers.length
    ? option.makers.includes(product.maker)
    : true;
  const matchesSpecs = Array.isArray(option.specs) && option.specs.length
    ? option.specs.every((condition) => productMatchesSpecCondition(product, condition))
    : true;
  return matchesTags && matchesPrice && matchesMaker && matchesSpecs;
}

function productMatchesSpecCondition(product, condition) {
  const value = product?.specs?.[condition.key];
  if (isUnknownSpec(value)) return false;
  if (condition.exists) return specExists(value);
  if (Object.prototype.hasOwnProperty.call(condition, "equals")) return value === condition.equals;
  if (Array.isArray(condition.values)) return condition.values.includes(value);
  if (Object.prototype.hasOwnProperty.call(condition, "includes")) {
    return Array.isArray(value)
      ? value.some((item) => String(item).includes(condition.includes))
      : String(value).includes(condition.includes);
  }
  if (typeof condition.min === "number") return typeof value === "number" && value >= condition.min;
  if (typeof condition.max === "number") return typeof value === "number" && value <= condition.max;
  return false;
}

function specExists(value) {
  if (isUnknownSpec(value)) return false;
  if (Array.isArray(value)) return value.some((item) => !isUnknownSpec(item));
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value !== "なし" && value !== "非搭載";
  return value !== null && value !== undefined;
}

function isUnknownSpec(value) {
  if (value === undefined || value === null || value === "" || value === "要確認") return true;
  return Array.isArray(value) && (value.length === 0 || value.every((item) => item === "要確認"));
}

function getProductSpecChips(product) {
  if (product.category !== "earphone" || !product.specs) return [];
  const specs = product.specs;
  const chips = [];
  if (!isUnknownSpec(specs.formFactor)) chips.push(specs.formFactor);
  if (specs.anc === true) chips.push("ANCあり");
  if (specs.anc === false) chips.push("ANCなし");
  if (specs.ambientMode === true) chips.push("外音取り込み");
  if (Array.isArray(specs.codecs) && specs.codecs.includes("LDAC")) chips.push("LDAC");
  if (specs.spatialAudio === true) chips.push("空間オーディオ");
  if (specs.multipoint === true) chips.push("マルチポイント");
  if (!isUnknownSpec(specs.waterResistance)) chips.push(specs.waterResistance);
  if (typeof specs.batteryTotal === "number") chips.push(`最大${specs.batteryTotal}時間`);
  if (typeof specs.weightEach === "number") chips.push(`片耳約${specs.weightEach}g`);
  if (specs.wirelessCharging === true) chips.push("ワイヤレス充電");
  return chips;
}

function getProductFieldLabels(product) {
  return getAllFieldFilterOptions(product.category)
    .filter((option) => productMatchesFieldFilter(product, option.id))
    .map((option) => option.label)
    .filter((label, index, labels) => labels.indexOf(label) === index);
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => safeValue(value)).filter((value) => value !== "未設定"))]
    .sort((a, b) => a.localeCompare(b, "ja"));
}

function getDepartmentName(departmentId) {
  return departments.find((department) => department.id === departmentId)?.name || "未設定部門";
}

function startHearing(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;
  state.currentScreen = "question";
  state.selectedCategory = category;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.selectedTags = [];
  state.filteredProducts = [];
  state.message = "";
  renderApp();
}

function renderQuestion() {
  const categoryQuestions = questions[state.selectedCategory.id] || [];
  if (!categoryQuestions.length) {
    state.currentScreen = "results";
    calculateResults();
    renderApp();
    return;
  }

  const currentQuestion = categoryQuestions[state.currentQuestionIndex];
  const selectedValue = state.answers[currentQuestion.id]?.value;
  const progress = ((state.currentQuestionIndex + 1) / categoryQuestions.length) * 100;

  app.innerHTML = `
    <section class="rounded-lg bg-white p-6 shadow-card ring-1 ring-nojima-border md:p-8">
      <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p class="text-sm font-bold text-nojima-blue">${escapeHtml(state.selectedCategory.name)}</p>
          <h2 class="mt-1 text-2xl font-bold text-nojima-navy md:text-3xl">質問 ${state.currentQuestionIndex + 1} / ${categoryQuestions.length}</h2>
        </div>
        <button class="tap-target rounded-md border border-nojima-border bg-white px-4 py-2 font-bold text-nojima-navy" type="button" onclick="goHome()">ホームに戻る</button>
      </div>
      <div class="mt-5 h-3 overflow-hidden rounded-full bg-nojima-bg" aria-label="質問の進捗">
        <div class="h-full rounded-full bg-nojima-blue" style="width:${progress}%"></div>
      </div>
      <h3 class="mt-8 text-2xl font-bold tracking-normal text-nojima-text md:text-3xl">${escapeHtml(currentQuestion.text)}</h3>
      ${state.message ? messageHtml(state.message, "error") : ""}
      <div class="mt-6 grid gap-3 md:grid-cols-2">
        ${currentQuestion.options.map((option) => {
          const selected = selectedValue === option.value;
          return `
            <button class="min-h-20 rounded-lg border-2 p-4 text-left text-lg font-bold transition ${selected ? "border-nojima-red bg-red-50 text-nojima-navy" : "border-nojima-border bg-white text-slate-700 hover:border-nojima-blue hover:bg-blue-50"}" type="button" onclick="selectAnswer('${currentQuestion.id}', '${option.value}')">
              ${escapeHtml(option.label)}
              ${selected ? `<span class="ml-2 rounded-full bg-nojima-red px-2 py-1 text-xs text-white">選択中</span>` : ""}
            </button>
          `;
        }).join("")}
      </div>
      <div class="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button class="tap-target rounded-md border border-nojima-border bg-white px-5 py-3 font-bold text-nojima-navy disabled:opacity-40" type="button" onclick="prevQuestion()" ${state.currentQuestionIndex === 0 ? "disabled" : ""}>戻る</button>
        <button class="tap-target rounded-md bg-nojima-red px-6 py-3 font-bold text-white" type="button" onclick="nextQuestion()">${state.currentQuestionIndex === categoryQuestions.length - 1 ? "結果を見る" : "次へ"}</button>
      </div>
    </section>
  `;
}

function selectAnswer(questionId, value) {
  const currentQuestion = (questions[state.selectedCategory.id] || []).find((item) => item.id === questionId);
  const option = currentQuestion?.options.find((item) => item.value === value);
  if (!option) return;
  state.answers[questionId] = option;
  state.message = "";
  renderApp();
}

function nextQuestion() {
  const categoryQuestions = questions[state.selectedCategory.id] || [];
  const currentQuestion = categoryQuestions[state.currentQuestionIndex];
  if (!state.answers[currentQuestion.id]) {
    state.message = "回答を選択してください";
    renderApp();
    return;
  }
  if (state.currentQuestionIndex < categoryQuestions.length - 1) {
    state.currentQuestionIndex += 1;
    state.message = "";
    renderApp();
    return;
  }
  calculateResults();
  state.currentScreen = "results";
  state.message = "";
  renderApp();
}

function prevQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    state.message = "";
    renderApp();
  }
}

function calculateResults() {
  state.selectedTags = Object.values(state.answers).flatMap((answer) => answer.tags || []);
  const matchedProducts = products
    .filter((product) => product.category === state.selectedCategory.id)
    .map((product) => ({ ...product, score: calculateProductScore(product, state.selectedTags), referenceOnly: false }))
    .filter((product) => product.score > 0)
    .sort((a, b) => b.score - a.score || safeValue(a.name).localeCompare(safeValue(b.name), "ja"));

  state.filteredProducts = matchedProducts.length
    ? matchedProducts
    : products
      .filter((product) => product.category === state.selectedCategory.id)
      .map((product) => ({ ...product, score: 0, referenceOnly: true }));
}

function calculateProductScore(product, selectedTags) {
  const productTags = Array.isArray(product.tags) ? product.tags : [];
  return selectedTags.reduce((score, tag) => score + (productTags.includes(tag) ? 1 : 0), 0);
}

function renderResults() {
  const noMatched = state.filteredProducts.every((product) => product.referenceOnly);
  app.innerHTML = `
    <section class="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-lg bg-white p-6 shadow-card ring-1 ring-nojima-border md:p-8">
        <p class="text-sm font-bold text-nojima-blue">${escapeHtml(state.selectedCategory.name)} 診断結果</p>
        <h2 class="mt-2 text-3xl font-bold text-nojima-navy">${escapeHtml(generateRecommendationType())}</h2>
        <p class="mt-4 leading-7 text-slate-700">${escapeHtml(generateTalkComment())}</p>
        ${noMatched ? messageHtml("条件に一致する商品が見つかりませんでした。参考候補として、同じカテゴリの商品を表示します。", "warn") : ""}
        <div class="mt-6 rounded-lg bg-nojima-bg p-4">
          <h3 class="font-bold text-nojima-navy">ヒアリング結果</h3>
          <ul class="mt-3 space-y-2 text-slate-700">
            ${generateSummary().map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        </div>
        <div class="mt-6 flex flex-wrap gap-3">
          <button class="tap-target rounded-md bg-nojima-red px-5 py-3 font-bold text-white" type="button" onclick="copyMemo()">接客メモをコピー</button>
          <button class="tap-target rounded-md bg-nojima-navy px-5 py-3 font-bold text-white" type="button" onclick="showComparison()">商品比較へ</button>
          <button class="tap-target rounded-md border border-nojima-border bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="resetHearing()">もう一度ヒアリング</button>
          <button class="tap-target rounded-md border border-nojima-border bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="goHome()">ホーム</button>
        </div>
        ${state.message ? messageHtml(state.message, "success") : ""}
      </div>
      <div class="space-y-4">
        ${state.filteredProducts.length ? state.filteredProducts.map((product) => renderProductCard(product)).join("") : emptyPanel("登録商品がありません", "このカテゴリの商品はまだ登録されていません。JAN検索の未登録テンプレートから追加できます。")}
      </div>
    </section>
  `;
}

function generateRecommendationType() {
  const tags = state.selectedTags;
  const typeMap = [
    ["quick-dry", "速乾重視タイプ"],
    ["hair-care", "髪質ケア重視タイプ"],
    ["price-focused", "価格重視タイプ"],
    ["large-capacity", "容量重視タイプ"],
    ["energy-saving", "省エネ重視タイプ"],
    ["gaming", "ゲーム重視タイプ"],
    ["health", "健康管理タイプ"]
  ];
  return typeMap.find(([tag]) => tags.includes(tag))?.[1] || `${state.selectedCategory.name} バランス提案タイプ`;
}

function generateSummary() {
  const categoryQuestions = questions[state.selectedCategory.id] || [];
  return categoryQuestions
    .filter((item) => state.answers[item.id])
    .map((item) => `${item.text}：${state.answers[item.id].label}`);
}

function generateTalkComment() {
  const summary = generateSummary();
  const topProduct = state.filteredProducts[0];
  if (!summary.length) return "ヒアリング結果をもとに、条件に近い商品から順に提案します。";
  if (topProduct) {
    return `今回のお客様は、${summary.slice(0, 2).join("、")}という傾向です。${safeValue(topProduct.productType)}を軸に、${safeValue(topProduct.talk)}`
  }
  return "今回のお客様の回答傾向に合う商品を追加すると、より具体的な提案ができます。";
}

function renderProductCard(product) {
  const inComparison = state.comparisonProducts.includes(product.id);
  return `
    <article class="rounded-lg bg-white p-5 shadow-card ring-1 ring-nojima-border md:p-6">
      <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div class="flex flex-wrap gap-2">
            ${product.referenceOnly ? `<span class="rounded-full bg-nojima-amber px-3 py-1 text-sm font-bold text-white">参考候補</span>` : `<span class="rounded-full bg-nojima-teal px-3 py-1 text-sm font-bold text-white">スコア ${product.score}</span>`}
            <span class="rounded-full bg-nojima-bg px-3 py-1 text-sm font-bold text-nojima-blue">${escapeHtml(safeValue(product.priceBand))}</span>
          </div>
          <h3 class="mt-3 text-2xl font-bold text-nojima-navy">${escapeHtml(safeValue(product.name))}</h3>
          <p class="mt-1 text-slate-600">${escapeHtml(safeValue(product.maker))} / ${escapeHtml(safeValue(product.modelNumber))}</p>
        </div>
        <button class="tap-target rounded-md ${inComparison ? "bg-slate-200 text-slate-600" : "bg-nojima-red text-white"} px-4 py-3 font-bold" type="button" onclick="addToComparison('${product.id}')">${inComparison ? "追加済み" : "比較に追加"}</button>
      </div>
      <dl class="mt-5 grid gap-3 md:grid-cols-2">
        ${infoBlock("商品タイプ", product.productType)}
        ${infoBlock("JANコード", Array.isArray(product.jan) && product.jan.length ? product.jan.join(" / ") : "")}
        ${infoBlock("向いている人", product.goodFor)}
        ${infoBlock("注意点", product.caution)}
      </dl>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        ${listBlock("主な特徴", product.features)}
        ${listBlock("確認ポイント", product.hearingTips)}
        ${listBlock("提案トーク", [product.talk])}
      </div>
    </article>
  `;
}

function addToComparison(productId) {
  if (state.comparisonProducts.includes(productId)) {
    state.message = "この商品はすでに比較に追加されています";
    renderApp();
    return;
  }
  if (state.comparisonProducts.length >= 3) {
    state.message = "比較できる商品は最大3件までです";
    renderApp();
    return;
  }
  state.comparisonProducts.push(productId);
  saveComparison();
  state.message = "比較リストに追加しました";
  renderApp();
}

function removeFromComparison(productId) {
  state.comparisonProducts = state.comparisonProducts.filter((id) => id !== productId);
  saveComparison();
  renderApp();
}

function showComparison() {
  state.currentScreen = "comparison";
  state.message = "";
  renderApp();
}

function renderComparison() {
  const comparisonItems = state.comparisonProducts
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  app.innerHTML = `
    <section class="rounded-lg bg-white p-6 shadow-card ring-1 ring-nojima-border md:p-8">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm font-bold text-nojima-blue">最大3商品</p>
          <h2 class="text-3xl font-bold text-nojima-navy">商品比較</h2>
        </div>
        <div class="flex flex-wrap gap-2">
          ${comparisonItems.length ? `<button class="tap-target rounded-md bg-nojima-red px-4 py-2 font-bold text-white" type="button" onclick="resetComparison()">比較リストをリセット</button>` : ""}
          <button class="tap-target rounded-md border border-nojima-border bg-white px-4 py-2 font-bold text-nojima-navy" type="button" onclick="goHome()">ホームに戻る</button>
        </div>
      </div>
      ${state.message ? messageHtml(state.message, "success") : ""}
      ${comparisonItems.length === 0 ? emptyPanel("比較したい商品を追加してください", "商品カードの「比較に追加」から最大3件まで追加できます。") : `
        <div class="safe-scroll mt-6 overflow-x-auto rounded-lg border border-nojima-border">
          <table class="min-w-[900px] w-full border-collapse text-left">
            <thead class="bg-nojima-navy text-white">
              <tr>
                <th class="w-44 px-4 py-3">比較項目</th>
                ${comparisonItems.map((product) => `<th class="w-64 px-4 py-3">${escapeHtml(safeValue(product.name))}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${comparisonRow("メーカー", comparisonItems, "maker")}
              ${comparisonRow("型番", comparisonItems, "modelNumber")}
              ${comparisonRow("商品タイプ", comparisonItems, "productType")}
              ${comparisonRow("価格帯", comparisonItems, "priceBand")}
              ${comparisonSpecRows(comparisonItems)}
              ${comparisonRow("主な特徴", comparisonItems, "features")}
              ${comparisonRow("向いている人", comparisonItems, "goodFor")}
              ${comparisonRow("注意点", comparisonItems, "caution")}
              ${comparisonRow("提案トーク", comparisonItems, "talk")}
              <tr class="border-t border-nojima-border">
                <th class="bg-nojima-bg px-4 py-3">操作</th>
                ${comparisonItems.map((product) => `<td class="px-4 py-3"><button class="tap-target rounded-md bg-nojima-red px-4 py-2 font-bold text-white" type="button" onclick="removeFromComparison('${product.id}')">削除</button></td>`).join("")}
              </tr>
            </tbody>
          </table>
        </div>
      `}
    </section>
  `;
}

function showJanSearch() {
  state.currentScreen = "jan";
  state.message = "";
  state.janSearchResults = [];
  renderApp();
}

function resetComparison() {
  state.comparisonProducts = [];
  saveComparison();
  state.message = "比較リストをリセットしました";
  renderApp();
}

function renderJanSearch() {
  app.innerHTML = `
    <section class="rounded-lg bg-white p-6 shadow-card ring-1 ring-nojima-border md:p-8">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm font-bold text-nojima-blue">8桁または13桁</p>
          <h2 class="text-3xl font-bold text-nojima-navy">JANコード検索</h2>
        </div>
        <button class="tap-target rounded-md border border-nojima-border bg-white px-4 py-2 font-bold text-nojima-navy" type="button" onclick="goHome()">ホームに戻る</button>
      </div>
      <div class="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <label class="block">
          <span class="mb-2 block font-bold text-nojima-navy">JANコード</span>
          <input id="janInput" class="tap-target w-full rounded-md border border-nojima-border px-4 py-3 text-xl outline-none focus:border-nojima-blue focus:ring-4 focus:ring-nojima-blue/20" inputmode="numeric" value="${escapeHtml(state.janSearchInput)}" placeholder="例: 4975302157010" oninput="state.janSearchInput = normalizeJan(this.value); this.value = state.janSearchInput" />
        </label>
        <button class="tap-target self-end rounded-md bg-nojima-red px-5 py-3 font-bold text-white" type="button" onclick="searchJan()">検索</button>
        <button class="tap-target self-end rounded-md bg-nojima-navy px-5 py-3 font-bold text-white" type="button" onclick="startJanScanner()">カメラで読み取る</button>
      </div>
      ${state.message ? messageHtml(state.message, state.message.includes("予定") ? "warn" : "error") : ""}
      <div class="mt-6 space-y-4">
        ${state.janSearchResults.map((product) => renderProductCard(product)).join("")}
      </div>
    </section>
  `;
}

function normalizeJan(inputJan) {
  return String(inputJan || "").replace(/\D/g, "");
}

function findProductsByJan(inputJan) {
  const normalizedJan = normalizeJan(inputJan);
  return products.filter((product) =>
    Array.isArray(product.jan) && product.jan.some((code) => code === normalizedJan)
  );
}

function searchJan() {
  const normalizedJan = normalizeJan(state.janSearchInput || document.getElementById("janInput")?.value);
  state.janSearchInput = normalizedJan;
  state.janSearchResults = [];
  if (![8, 13].includes(normalizedJan.length)) {
    state.message = "JANコードは8桁または13桁で入力してください";
    renderApp();
    return;
  }
  const found = findProductsByJan(normalizedJan);
  if (found.length === 0) {
    state.currentScreen = "unregisteredJan";
    state.message = "";
    renderApp();
    return;
  }
  state.janSearchResults = found;
  state.message = found.length > 1 ? "複数候補が見つかりました。データ重複の可能性があります。" : "";
  renderApp();
}

function renderUnregisteredJan(jan) {
  const normalizedJan = normalizeJan(jan);
  app.innerHTML = `
    <section class="rounded-lg bg-white p-6 shadow-card ring-1 ring-nojima-border md:p-8">
      <p class="text-sm font-bold text-nojima-blue">未登録JANコード</p>
      <h2 class="mt-2 text-3xl font-bold text-nojima-navy">このJANコードの商品はまだ登録されていません</h2>
      <p class="mt-4 rounded-lg bg-nojima-bg p-4 text-xl font-bold tracking-normal text-nojima-text">${escapeHtml(normalizedJan)}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button class="tap-target rounded-md bg-nojima-red px-5 py-3 font-bold text-white" type="button" onclick="copyJan('${normalizedJan}')">JANコードをコピー</button>
        <button class="tap-target rounded-md bg-nojima-navy px-5 py-3 font-bold text-white" type="button" onclick="copyProductTemplate('${normalizedJan}')">商品追加用テンプレートをコピー</button>
        <button class="tap-target rounded-md border border-nojima-border bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="showJanSearch()">JAN検索へ戻る</button>
        <button class="tap-target rounded-md border border-nojima-border bg-white px-5 py-3 font-bold text-nojima-navy" type="button" onclick="goHome()">ホーム</button>
      </div>
      ${state.message ? messageHtml(state.message, "success") : ""}
    </section>
  `;
}

function copyJan(jan) {
  copyText(jan, "JANコードをコピーしました");
}

function copyProductTemplate(jan) {
  const today = new Date().toISOString().slice(0, 10);
  const template = `{
  id: "",
  jan: ["${normalizeJan(jan)}"],
  category: "",
  maker: "",
  name: "",
  modelNumber: "",
  productType: "",
  priceBand: "",
  tags: [],
  features: [
    "",
    "",
    ""
  ],
  goodFor: "",
  caution: "",
  hearingTips: [
    "",
    "",
    ""
  ],
  comparePoints: [
    "",
    "",
    ""
  ],
  talk: "",
  lastUpdated: "${today}"
}`;
  copyText(template, "商品追加用テンプレートをコピーしました");
}

function copyMemo() {
  const memo = `【家電提案アシストPad 接客メモ】
カテゴリ：${state.selectedCategory.name}

ヒアリング結果：
${generateSummary().map((line) => `・${line}`).join("\n")}

おすすめ方向性：
${generateRecommendationType()}

提案コメント：
${generateTalkComment()}

※個人情報は含めない設計にしてください。`;
  copyText(memo, "接客メモをコピーしました");
}

function resetHearing() {
  if (state.selectedCategory) startHearing(state.selectedCategory.id);
}

function goHome() {
  state.currentScreen = "home";
  state.selectedCategory = null;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.selectedTags = [];
  state.filteredProducts = [];
  resetCategoryFilters(false);
  state.janSearchInput = "";
  state.janSearchResults = [];
  state.message = "";
  renderApp();
}

function startJanScanner() {
  state.message = "カメラ読み取り機能は今後追加予定です。現在はJANコードを手入力してください。";
  renderApp();
}

function validateProductData() {
  const ids = new Set();
  const janCodes = new Map();
  const categoryIds = new Set(categories.map((category) => category.id));
  const requiredFields = ["id", "jan", "category", "maker", "name", "modelNumber", "productType", "priceBand", "tags", "features", "goodFor", "caution", "hearingTips", "comparePoints", "talk", "lastUpdated"];

  products.forEach((product, index) => {
    requiredFields.forEach((field) => {
      if (!(field in product) || product[field] === "" || (Array.isArray(product[field]) && product[field].length === 0)) {
        console.warn(`products[${index}] ${field} is empty or missing`);
      }
    });
    if (ids.has(product.id)) console.warn(`Duplicate product id: ${product.id}`);
    ids.add(product.id);
    if (!Array.isArray(product.jan)) console.warn(`JAN must be array: ${product.id}`);
    if (!categoryIds.has(product.category)) console.warn(`Unknown category id: ${product.category}`);
    if (!Array.isArray(product.tags) || product.tags.length === 0) console.warn(`Tags are empty: ${product.id}`);
    (Array.isArray(product.jan) ? product.jan : []).forEach((jan) => {
      if (janCodes.has(jan)) console.warn(`Duplicate JAN: ${jan} (${janCodes.get(jan)} / ${product.id})`);
      janCodes.set(jan, product.id);
    });
  });
}

function loadComparison() {
  try {
    const parsed = JSON.parse(localStorage.getItem("comparisonProducts") || "[]");
    return Array.isArray(parsed) ? parsed.slice(0, 3) : [];
  } catch {
    return [];
  }
}

function saveComparison() {
  localStorage.setItem("comparisonProducts", JSON.stringify(state.comparisonProducts.slice(0, 3)));
}

function copyText(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    state.message = successMessage;
    renderApp();
  }).catch(() => {
    state.message = "コピーできませんでした。ブラウザの権限を確認してください。";
    renderApp();
  });
}

function comparisonRow(label, items, key) {
  return `
    <tr class="border-t border-nojima-border align-top">
      <th class="bg-nojima-bg px-4 py-3 text-nojima-navy">${escapeHtml(label)}</th>
      ${items.map((product) => {
        const value = product[key];
        const text = Array.isArray(value) ? value.slice(0, 3).join(" / ") : value;
        return `<td class="px-4 py-3 leading-6">${escapeHtml(safeValue(text))}</td>`;
      }).join("")}
    </tr>
  `;
}

function comparisonSpecRows(items) {
  if (!items.some((product) => product.category === "earphone")) return "";
  const rows = [
    ["装着方式", (specs) => formatSpecValue(specs.formFactor)],
    ["ANC", (specs) => formatBooleanFeature(specs.anc)],
    ["外音取り込み", (specs) => formatBooleanFeature(specs.ambientMode)],
    ["対応コーデック", (specs) => formatArraySpec(specs.codecs)],
    ["空間オーディオ", (specs) => formatBooleanFeature(specs.spatialAudio)],
    ["マルチポイント", (specs) => formatBooleanFeature(specs.multipoint)],
    ["防水", (specs) => formatSpecValue(specs.waterResistance)],
    ["単体再生時間", (specs) => formatHoursSpec(specs.batterySingle)],
    ["ケース込み再生時間", (specs) => formatHoursSpec(specs.batteryTotal)],
    ["片耳重量", (specs) => formatWeightSpec(specs.weightEach)],
    ["ワイヤレス充電", (specs) => formatBooleanFeature(specs.wirelessCharging)],
    ["通話機能", (specs) => formatArraySpec(specs.callFeatures)],
    ["仕様確認", (specs) => formatSpecValue(specs.sourceStatus)]
  ];
  return rows.map(([label, formatter]) => comparisonCustomRow(label, items, (product) => {
    if (product.category !== "earphone") return "対象外";
    return formatter(product.specs || {});
  })).join("");
}

function comparisonCustomRow(label, items, getValue) {
  return `
    <tr class="border-t border-nojima-border align-top">
      <th class="bg-nojima-bg px-4 py-3 text-nojima-navy">${escapeHtml(label)}</th>
      ${items.map((product) => `<td class="px-4 py-3 leading-6">${escapeHtml(safeValue(getValue(product)))}</td>`).join("")}
    </tr>
  `;
}

function formatBooleanFeature(value) {
  if (value === true) return "あり";
  if (value === false) return "なし";
  return formatSpecValue(value);
}

function formatArraySpec(value) {
  if (!Array.isArray(value) || isUnknownSpec(value)) return "要確認";
  return value.join(" / ");
}

function formatHoursSpec(value) {
  if (typeof value === "number") return `最大${value}時間`;
  return formatSpecValue(value);
}

function formatWeightSpec(value) {
  if (typeof value === "number") return `約${value}g`;
  return formatSpecValue(value);
}

function formatSpecValue(value) {
  if (isUnknownSpec(value)) return "要確認";
  return Array.isArray(value) ? value.join(" / ") : value;
}

function infoBlock(label, value) {
  return `
    <div class="rounded-md bg-nojima-bg p-3">
      <dt class="text-sm font-bold text-nojima-blue">${escapeHtml(label)}</dt>
      <dd class="mt-1 leading-6">${escapeHtml(safeValue(value))}</dd>
    </div>
  `;
}

function listBlock(label, values) {
  const items = Array.isArray(values) && values.length ? values : [""];
  return `
    <div>
      <h4 class="font-bold text-nojima-navy">${escapeHtml(label)}</h4>
      <ul class="mt-2 space-y-2 leading-6 text-slate-700">
        ${items.map((value) => `<li>${escapeHtml(safeValue(value))}</li>`).join("")}
      </ul>
    </div>
  `;
}

function messageHtml(message, type) {
  const classes = {
    error: "border-red-200 bg-red-50 text-red-800",
    warn: "border-amber-200 bg-amber-50 text-amber-800",
    success: "border-teal-200 bg-teal-50 text-teal-800"
  };
  return `<div class="mt-5 rounded-md border px-4 py-3 font-bold ${classes[type] || classes.warn}">${escapeHtml(message)}</div>`;
}

function emptyPanel(title, body) {
  return `
    <div class="mt-6 rounded-lg border border-dashed border-nojima-border bg-nojima-bg p-6">
      <h3 class="text-xl font-bold text-nojima-navy">${escapeHtml(title)}</h3>
      <p class="mt-2 leading-7 text-slate-700">${escapeHtml(body)}</p>
    </div>
  `;
}

function safeValue(value) {
  if (value === null || value === undefined || value === "") return "未設定";
  return String(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
