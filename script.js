const kissTypes = [
  {
    id: "forehead-kiss",
    name: "Forehead Kiss",
    explanation: "A gentle promise of care, protection, and emotional comfort.",
    emoji: "💋",
  },
  {
    id: "cheek-kiss",
    name: "Cheek Kiss",
    explanation: "Sweet affection that feels warm, friendly, and respectful.",
    emoji: "😘",
  },
  {
    id: "hand-kiss",
    name: "Hand Kiss",
    explanation: "Classic romantic admiration and appreciation.",
    emoji: "🤲",
  },
  {
    id: "shoulder-kiss",
    name: "Shoulder Kiss",
    explanation: "A tender gesture that feels comforting, protective, and affectionate.",
    emoji: "🥰",
  },
  {
    id: "french-kiss",
    name: "French Kiss",
    explanation: "Deep romantic passion and strong emotional attraction.",
    emoji: "🔥",
  },
  {
    id: "single-lip-kiss",
    name: "Single-Lip Kiss",
    explanation: "A teasing and intimate moment filled with excitement.",
    emoji: "💞",
  },
  {
    id: "nose-kiss",
    name: "Nose Kiss",
    explanation: "A soft, playful touch that expresses closeness and sweet chemistry.",
    emoji: "🦋",
  },
  {
    id: "waist-kiss",
    name: "Waist Kiss",
    explanation: "An intimate, warm gesture that shows romantic closeness and desire.",
    emoji: "💨",
  },
  {
    id: "neck-kiss",
    name: "Neck Kiss",
    explanation: "A highly intimate gesture expressing desire and closeness.",
    emoji: "❤️‍🔥",
  },
  {
    id: "ankle-kiss",
    name: "Ankle Kiss",
    explanation: "A playful, unique kiss that feels surprising and deeply devoted.",
    emoji: "🕸️",
  },
];

const hugTypes = [
  {
    id: "bear-hug",
    name: "Bear Hug",
    explanation: "A tight hold that says you are safe, loved, and deeply valued.",
    emoji: "🐻",
  },
  {
    id: "side-hug",
    name: "Side Hug",
    explanation: "Comfortable support with a casual but caring vibe.",
    emoji: "🤗",
  },
  {
    id: "waist-hug",
    name: "Waist Hug",
    explanation: "Romantic closeness that feels personal and protective.",
    emoji: "💓",
  },
  {
    id: "back-hug",
    name: "Back Hug",
    explanation: "A surprise embrace that brings trust and emotional warmth.",
    emoji: "🌷",
  },
  {
    id: "heart-to-heart-hug",
    name: "Heart-to-Heart Hug",
    explanation: "A full embrace with chests close, showing sincere emotional bonding.",
    emoji: "💗",
  },
  {
    id: "long-hug",
    name: "Long Hug",
    explanation: "Lingering comfort that says, stay here, everything is okay.",
    emoji: "⏳",
  },
  {
    id: "cuddle-hug",
    name: "Cuddle Hug",
    explanation: "Soft closeness for calm, comfort, and deep tenderness.",
    emoji: "🛋️",
  },
];

const kissGifPool = [
  "https://media.giphy.com/media/26ufcYAkp8e66vanu/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
  "https://media.giphy.com/media/l1J9urAfGd3grKV6E/giphy.gif",
  "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
  "https://media.giphy.com/media/14urMYvFxIKEms/giphy.gif",
  "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  "https://media.giphy.com/media/11fucLQCTOdvBS/giphy.gif",
  "https://media.giphy.com/media/3oriO6qJiXajN0TyDu/giphy.gif",
];

const hugGifPool = [
  "https://media.giphy.com/media/3M4NpbLCTxBqU/giphy.gif",
  "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
  "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
  "https://media.giphy.com/media/VbawWIGNtKYwOFXF7U/giphy.gif",
  "https://media.giphy.com/media/QXhSr6NDR4F5t69GL8/giphy.gif",
  "https://media.giphy.com/media/9SIOr28d2Ud3uJRqel/giphy.gif",
  "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
  "https://media.giphy.com/media/5OqXb948EBkyUcnwHt/giphy.gif",
  "https://media.giphy.com/media/42YlR8u9gV5Cw/giphy.gif",
  "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
];

const localGifById = {
  "forehead-kiss": "assets/forehead-kiss.gif",
  "cheek-kiss": "assets/cheek-kiss.gif",
  "hand-kiss": "assets/hand-kiss.gif",
  "shoulder-kiss": "assets/shoulder-kiss.gif",
  "french-kiss": "assets/french-kiss.gif",
  "single-lip-kiss": "assets/single-lip-kiss.gif",
  "nose-kiss": "assets/nose-kiss.gif",
  "waist-kiss": "assets/waist-kiss.gif",
  "neck-kiss": "assets/neck-kiss.gif",
  "ankle-kiss": "assets/ankle-kiss.gif",
  "bear-hug": "assets/bear-hug.gif",
  "side-hug": "assets/side-hug.gif",
  "waist-hug": "assets/waist-hug.gif",
  "back-hug": "assets/back-hug.gif",
  "heart-to-heart-hug": "assets/heart-to-heart-hug.gif",
  "long-hug": "assets/long-hug.gif",
  "cuddle-hug": "assets/cuddle-hug.gif",
};

const selectedKisses = new Set();
const selectedHugs = new Set();

const kissesGrid = document.getElementById("kissesGrid");
const hugsGrid = document.getElementById("hugsGrid");
const kissCount = document.getElementById("kissCount");
const hugCount = document.getElementById("hugCount");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");
const wishResult = document.getElementById("wishResult");
const actionMessage = document.getElementById("actionMessage");

const infoModal = document.getElementById("infoModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalExplanation = document.getElementById("modalExplanation");
const closeModalBtn = document.getElementById("closeModalBtn");

function makePreviewImage(title, emoji, hueA, hueB) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='960' height='620'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='hsl(${hueA} 95% 90%)'/>
          <stop offset='100%' stop-color='hsl(${hueB} 80% 82%)'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <text x='50%' y='45%' font-size='120' text-anchor='middle'>${emoji}</text>
      <text x='50%' y='62%' font-size='52' text-anchor='middle' font-family='Segoe UI, Arial' fill='#751747'>${title}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function enrichItems(items, type) {
  const gifPool = type === "Kiss" ? kissGifPool : hugGifPool;
  const huePairs =
    type === "Kiss"
      ? [
          [340, 318],
          [350, 330],
          [328, 302],
          [345, 312],
          [5, 338],
          [334, 300],
          [290, 324],
          [355, 310],
          [12, 338],
          [260, 330],
        ]
      : [
          [190, 320],
          [215, 325],
          [160, 332],
          [188, 338],
          [172, 310],
          [200, 300],
          [154, 332],
          [210, 330],
          [174, 302],
          [140, 325],
        ];

  return items.map((item, index) => {
    const [hueA, hueB] = huePairs[index % huePairs.length];
    const gif = localGifById[item.id] ?? gifPool[index % gifPool.length];
    const image = makePreviewImage(item.name, item.emoji, hueA, hueB);

    return {
      ...item,
      type,
      image,
      gif,
    };
  });
}

const kisses = enrichItems(kissTypes, "Kiss");
const hugs = enrichItems(hugTypes, "Hug");
const preloadedGifCache = new Map();

function preloadItemGifs(items) {
  const uniqueGifUrls = [...new Set(items.map((item) => item.gif).filter(Boolean))];

  uniqueGifUrls.forEach((gifUrl) => {
    const image = new Image();
    image.decoding = "async";
    image.src = gifUrl;
    preloadedGifCache.set(gifUrl, image);
  });
}

function createItemCard(item, selectedSet) {
  const card = document.createElement("article");
  card.className = "item-card";

  const heading = document.createElement("h3");
  heading.textContent = item.name;

  const shortText = document.createElement("p");
  shortText.textContent = item.explanation;

  const actions = document.createElement("div");
  actions.className = "actions";

  const selectBtn = document.createElement("button");
  selectBtn.className = "btn";
  selectBtn.type = "button";

  const infoBtn = document.createElement("button");
  infoBtn.className = "btn";
  infoBtn.type = "button";
  infoBtn.textContent = "View";

  const syncButtonState = () => {
    const selected = selectedSet.has(item.id);
    selectBtn.textContent = selected ? "Selected" : "Select";
    selectBtn.classList.toggle("selected", selected);
  };

  selectBtn.addEventListener("click", () => {
    if (selectedSet.has(item.id)) {
      selectedSet.delete(item.id);
    } else {
      selectedSet.add(item.id);
      openModal(item);
    }
    syncButtonState();
    updateCounts();
    renderWish();
  });

  infoBtn.addEventListener("click", () => openModal(item));
  syncButtonState();

  actions.append(selectBtn, infoBtn);
  card.append(heading, shortText, actions);
  return card;
}

function openModal(item) {
  modalImage.dataset.fallback = item.image;
  modalImage.src = item.gif || item.image;
  modalTitle.textContent = item.name;
  modalType.textContent = `${item.type} Type`;
  modalExplanation.textContent = item.explanation;
  modalImage.onerror = () => {
    if (modalImage.src !== modalImage.dataset.fallback) {
      modalImage.src = modalImage.dataset.fallback;
    }
  };
  infoModal.showModal();
}

function closeModal() {
  if (infoModal.open) {
    infoModal.close();
  }
}

closeModalBtn.addEventListener("click", closeModal);
infoModal.addEventListener("click", (event) => {
  if (event.target === infoModal) {
    closeModal();
  }
});

function updateCounts() {
  kissCount.textContent = `${selectedKisses.size} selected`;
  hugCount.textContent = `${selectedHugs.size} selected`;
}

function getSelectedItems() {
  const selectedKissItems = kisses.filter((item) => selectedKisses.has(item.id));
  const selectedHugItems = hugs.filter((item) => selectedHugs.has(item.id));
  return [...selectedKissItems, ...selectedHugItems];
}

function getWishText(selectedItems) {
  const names = selectedItems.map((item) => item.name).join(", ");
  const detailLines = selectedItems
    .map((item) => `• ${item.name}: ${item.explanation}`)
    .join("\n");

  return `Happy Valentine's Day, Ma! ❤️\n\nI choose these special gestures for you today: ${names}. Each one carries its own beautiful meaning, and together they express how much you matter to me.\n\n${detailLines}`;
}

function showActionMessage(message) {
  actionMessage.textContent = message;
}

function renderWish() {
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    wishResult.innerHTML =
      "Please select at least one kiss or hug type, then click <strong>Generate Wish</strong>.";
    return;
  }

  const names = selectedItems.map((item) => item.name).join(", ");
  const intro = `
    <h3>Happy Valentine's Day, My Love! ❤️</h3>
    <p>
      I choose these special gestures for you today: <strong>${names}</strong>.
      Each one carries its own beautiful meaning, and together they express how much you matter to me.
    </p>
    <p>I love you nana ❤️ Na life lo ni sthanam veru nana nee parichayam ayina apudu nunchi ipati varuku nee kosam petina efforts ichina respect chupichina prema and care nee degara dorikina aa comfort and nammakam netho share chesukuna vishyalu ni tho unde lag matladey laga inka evari degara evaritho intha ga ani vishayalu cheptu intha ga comfortable ga undalenu emo asalu andukey ee janmalo elagu avaledu kbaati vachey janmalo ayina nenu nitho vundela korukuntanu always. Nanu chala baga ardam chesukoni support chesav chala sarlu thanks nana. Ma nenu ninu epudu ayina edpichina kopadina sorry about that nana. Nenu ninu chusina kshanam nundi chala sarlu anukunanu nv na life lo vuntey bagundu ani ni parichayam ayyaka inka inka pichidoni ayipoyanu naku telusu idhi avadu ani but enduku start ayindoo chepalenu ni meda feellings roju ni gurinchi alocanalu prathi kshanam ni gurinchi thoughts niku idhi aytey baguntadi adhi aytey baguntadi anatlu and ni smile adhi chustheu chalu na heart full ayipotundi, ni pics chudani roju antha enduku mrng levaganey and padukuney mundu ninu chudakunda vundanu, prathi ganta ki okasari ayina ni pics chusi nalo nenu eni sarlu navukunano nakey telidu. Nenu koni sarlu overcaring chupinchi viskinchina adhi ni meda istam tho chesinavey and jealous tho chesinavi. I will be there for u nana lifelong niku elanti issue vuna edi ayina matladi anukuna prathi kshanam ni notification kosam okadu chusta vuntadu ani gurtunchuko. Ni msg vasthey chalu naku ekada leni happiness vastundi, the most happiest thing currently is msg from u.</p>
    <p>Manam epudu kalustama ani eduru chusta vunta aa moment na life long na heart lo vundipotundi daniki minchina roju ledu ani na feeling.</p>
    <p>I love you so much nana forever and always. You are my everything, and I am so grateful to have you in my life. Happy Valentine's Day! ❤️</p>
  `;

  const cards = selectedItems
    .map(
      (item) => `
      <article class="wish-card">
        <img src="${item.gif || item.image}" data-fallback="${item.image}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>${item.explanation}</p>
      </article>
    `
    )
    .join("");

  wishResult.innerHTML = `${intro}<div class="wish-grid">${cards}</div>`;
  wishResult.querySelectorAll(".wish-card img").forEach((img) => {
    img.addEventListener("error", () => {
      if (img.src !== img.dataset.fallback) {
        img.src = img.dataset.fallback;
      }
    });
  });
  showActionMessage("Wish generated. You can now copy text or download image.");
}

function wrapText(context, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (context.measureText(candidate).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) {
    lines.push(line);
  }

  return lines;
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function downloadWishImage() {
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    showActionMessage("Select at least one hug or kiss type before downloading.");
    return;
  }

  const cardHeight = 180;
  const width = 1200;
  const padding = 36;
  const canvas = document.createElement("canvas");
  const height = 180 + selectedItems.length * cardHeight + 24;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    showActionMessage("Could not create image in this browser.");
    return;
  }

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#ffe3ef");
  gradient.addColorStop(1, "#fff8fc");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#7c1e4b";
  ctx.font = "700 48px Segoe UI, Arial, sans-serif";
  ctx.fillText("Happy Valentine's Day, My Love! ❤️", padding, 68);

  ctx.fillStyle = "#4f2840";
  ctx.font = "500 25px Segoe UI, Arial, sans-serif";
  const wishLines = wrapText(ctx, getWishText(selectedItems).split("\n\n")[1], width - padding * 2);
  wishLines.slice(0, 3).forEach((line, index) => {
    ctx.fillText(line, padding, 108 + index * 30);
  });

  for (let index = 0; index < selectedItems.length; index += 1) {
    const item = selectedItems[index];
    const top = 170 + index * cardHeight;
    const cardX = padding;
    const cardY = top;
    const cardW = width - padding * 2;
    const cardH = 156;

    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#f4bfd4";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 18);
    ctx.fill();
    ctx.stroke();

    const image = await loadImage(item.image);
    ctx.drawImage(image, cardX + 12, cardY + 12, 210, 132);

    ctx.fillStyle = "#7c1e4b";
    ctx.font = "700 30px Segoe UI, Arial, sans-serif";
    ctx.fillText(item.name, cardX + 238, cardY + 48);

    ctx.fillStyle = "#5d3550";
    ctx.font = "500 22px Segoe UI, Arial, sans-serif";
    const lines = wrapText(ctx, item.explanation, cardW - 260);
    lines.slice(0, 3).forEach((line, lineIndex) => {
      ctx.fillText(line, cardX + 238, cardY + 84 + lineIndex * 28);
    });
  }

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "valentine-wish.png";
  link.click();
  showActionMessage("Wish image downloaded successfully.");
}

async function copyWishText() {
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    showActionMessage("Select at least one hug or kiss type before copying.");
    return;
  }

  const text = getWishText(selectedItems);
  try {
    await navigator.clipboard.writeText(text);
    showActionMessage("Wish text copied to clipboard.");
  } catch (error) {
    showActionMessage("Clipboard access failed. Please allow clipboard permission.");
  }
}

function clearSelections() {
  selectedKisses.clear();
  selectedHugs.clear();
  updateCounts();
  renderKissAndHugGrids();
  wishResult.innerHTML =
    'Select at least one hug or kiss type and click <strong>Generate Wish</strong>.';
  showActionMessage("");
}

function renderKissAndHugGrids() {
  kissesGrid.innerHTML = "";
  hugsGrid.innerHTML = "";

  kisses.forEach((kiss) => {
    kissesGrid.append(createItemCard(kiss, selectedKisses));
  });

  hugs.forEach((hug) => {
    hugsGrid.append(createItemCard(hug, selectedHugs));
  });
}

generateBtn.addEventListener("click", renderWish);
copyBtn.addEventListener("click", copyWishText);
downloadBtn.addEventListener("click", downloadWishImage);
clearBtn.addEventListener("click", clearSelections);

renderKissAndHugGrids();
preloadItemGifs([...kisses, ...hugs]);
updateCounts();