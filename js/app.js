// ==========================================
// RÉNÓ KUTYAOTTHON - KUTYÁK ADATBÁZISA ÉS GALÉRIA LOGIKA
// ==========================================

const DOGS_DATA = [
  {
    id: "k1",
    name: "Borisz",
    gender: "kan",
    size: "nagy",
    ageCategory: "fiatal",
    ageText: "2 éves",
    housing: "mindketto",
    virtualOwner: "Kovács Anna",
    gallery: [
      "images/GAZDIT KERESNEK/K1 (1).jpg",
      "images/GAZDIT KERESNEK/K1 (2).jpg",
      "images/GAZDIT KERESNEK/K1 (3).jpg",
      "images/GAZDIT KERESNEK/K1 (4).jpg"
    ],
    tags: ["barátságos", "aktív", "gyermekbarát"],
    description: "Borisz egy rendkívül barátságos, energikus fiatal kan, aki imád emberi körben lenni. Kiváló választás aktív gazdik számára, szeret mozogni és tanulni.",
    featured: true
  },
  {
    id: "k2",
    name: "Betyár",
    gender: "kan",
    size: "nagy",
    ageCategory: "felnott",
    ageText: "3 éves",
    housing: "kint",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K2 (1).jpg",
      "images/GAZDIT KERESNEK/K2 (2).jpg",
      "images/GAZDIT KERESNEK/K2 (3).jpg",
      "images/GAZDIT KERESNEK/K2 (4).jpg",
      "images/GAZDIT KERESNEK/K2 (5).jpg"
    ],
    tags: ["értékes", "nyugodt", "hűséges"],
    description: "Betyár egy magabiztos, méltóságteljes kutya, aki hűséges társra lelt benned, ha megkapja a megfelelő türelmet és törődést.",
    featured: true
  },
  {
    id: "k3",
    name: "Csoki",
    gender: "kan",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "8 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K3 (1).jpg",
      "images/GAZDIT KERESNEK/K3 (2).jpg",
      "images/GAZDIT KERESNEK/K3 (3).jpg",
      "images/GAZDIT KERESNEK/K3 (4).jpg",
      "images/GAZDIT KERESNEK/K3 (5).jpg",
      "images/GAZDIT KERESNEK/K3 (6).jpg"
    ],
    tags: ["játékos", "kölyök", "cuki"],
    description: "Csoki egy igazi örökmozgó apróság, aki imád játszani, és mindenben benne van, ami izgalmas. Ideális választás odafigyelő gazdiknak.",
    featured: true
  },
  {
    id: "k4",
    name: "Cili",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "fiatal",
    ageText: "1.5 éves",
    housing: "bent",
    virtualOwner: "Szabó Péter",
    gallery: [
      "images/GAZDIT KERESNEK/K4 (1).jpg",
      "images/GAZDIT KERESNEK/K4 (2).jpg",
      "images/GAZDIT KERESNEK/K4 (3).jpg",
      "images/GAZDIT KERESNEK/K4 (4).jpg",
      "images/GAZDIT KERESNEK/K4 (5).jpg"
    ],
    tags: ["ragaszkodó", "lakásban tartható", "szeretnivaló"],
    description: "Cili egy kicsi termetű, bújós szuka, aki a nap nagy részében szívesen pihen a gazdája ölében. Lakásban is könnyen tartható.",
    featured: false
  },
  {
    id: "k5",
    name: "Mici",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "felnott",
    ageText: "4 éves",
    housing: "mindketto",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K5 (1).jpg",
      "images/GAZDIT KERESNEK/K5 (2).jpg",
      "images/GAZDIT KERESNEK/K5 (3).jpg",
      "images/GAZDIT KERESNEK/K5 (4).jpg"
    ],
    tags: ["kedves", "nyugodt", "barátságos"],
    description: "Mici egy kiegyensúlyozott, nyugodt lelkű kutyus, aki jól jön ki más kutyákkal is, és imádja a nyugodt sétákat.",
    featured: false
  },
  {
    id: "k6",
    name: "Pityu",
    gender: "kan",
    size: "kozepes",
    ageCategory: "fiatal",
    ageText: "2 éves",
    housing: "mindketto",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K6 (1).jpg",
      "images/GAZDIT KERESNEK/K6 (2).jpg",
      "images/GAZDIT KERESNEK/K6 (3).jpg",
      "images/GAZDIT KERESNEK/K6 (4).jpg",
      "images/GAZDIT KERESNEK/K6 (5).jpg",
      "images/GAZDIT KERESNEK/K6 (6).jpg"
    ],
    tags: ["okos", "tanulékony", "mozgékony"],
    description: "Pityu egy okos és figyelmes fiú, aki kifejezetten örül az emberi társaságnak, gyorsan tanul és imád labdázni.",
    featured: true
  },
  {
    id: "k7",
    name: "Rozsi",
    gender: "szuka",
    size: "kozepes",
    ageCategory: "felnott",
    ageText: "3 éves",
    housing: "mindketto",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K7 (1).jpg",
      "images/GAZDIT KERESNEK/K7 (2).jpg",
      "images/GAZDIT KERESNEK/K7 (3).jpg",
      "images/GAZDIT KERESNEK/K7 (4).jpg",
      "images/GAZDIT KERESNEK/K7 (5).jpg"
    ],
    tags: ["békés", "szelíd", "hálás"],
    description: "Rozsi egy csodás bundájú, rendkívül szelíd teremtés, aki keresi a nyugodt, biztonságos otthont, ahol végre leteheti a múlt terheit.",
    featured: false
  },
  {
    id: "k8",
    name: "Drótos Betti",
    gender: "szuka",
    size: "kozepes",
    ageCategory: "fiatal",
    ageText: "2.5 éves",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K8 (1).jpg",
      "images/GAZDIT KERESNEK/K8 (2).jpg",
      "images/GAZDIT KERESNEK/K8 (3).jpg",
      "images/GAZDIT KERESNEK/K8 (4).jpg"
    ],
    tags: ["barátságos", "különleges", "kedves"],
    description: "Drótos Betti egyedi külsejű, kedves természetű kutyus, aki imádja, ha foglalkoznak vele és simogatják.",
    featured: false
  },
  {
    id: "k9",
    name: "Bodza",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "10 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K9 (1).jpg",
      "images/GAZDIT KERESNEK/K9 (2).jpg",
      "images/GAZDIT KERESNEK/K9 (3).jpg"
    ],
    tags: ["játékos", "bújós", "tündéri"],
    description: "Bodza egy tündéri, hófehér fiatal kutyus, aki tele van szeretettel és nyitott a világra.",
    featured: true
  },
  {
    id: "k10",
    name: "Füles",
    gender: "kan",
    size: "kozepes",
    ageCategory: "fiatal",
    ageText: "2 éves",
    housing: "mindketto",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K10 (1).jpg",
      "images/GAZDIT KERESNEK/K10 (2).jpg",
      "images/GAZDIT KERESNEK/K10 (3).jpg",
      "images/GAZDIT KERESNEK/K10 (4).jpg"
    ],
    tags: ["barátságos", "hűséges", "játékos"],
    description: "Füles egy barátságos, érdeklődő kutyus, aki minden sétát élvez és nagyon embercentrikus.",
    featured: false
  },
  {
    id: "k11",
    name: "Zsebi",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "1 éves",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K11 (1).jpg",
      "images/GAZDIT KERESNEK/K11 (2).jpg",
      "images/GAZDIT KERESNEK/K11 (3).jpg"
    ],
    tags: ["cuki", "bújós", "nyugodt"],
    description: "Zsebi egy igazi bújós kedvenc, aki imádja a simogatást és csendesen elél bárhol.",
    featured: false
  },
  {
    id: "k12",
    name: "Maxi",
    gender: "kan",
    size: "nagy",
    ageCategory: "felnott",
    ageText: "3 éves",
    housing: "kint",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K12 (1).jpg",
      "images/GAZDIT KERESNEK/K12 (2).jpg",
      "images/GAZDIT KERESNEK/K12 (3).jpg"
    ],
    tags: ["nyugodt", "barátságos", "megbízható"],
    description: "Maxi egy kiegyensúlyozott, nyugodt nagytestű kutyus, aki kiváló házőrző és hűséges családi társ.",
    featured: false
  },
  {
    id: "k13",
    name: "Zorka",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "fiatal",
    ageText: "1.5 éves",
    housing: "mindketto",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K13 (1).jpg",
      "images/GAZDIT KERESNEK/K13 (2).jpg",
      "images/GAZDIT KERESNEK/K13 (3).jpg"
    ],
    tags: ["játékos", "barátságos", "aktív"],
    description: "Zorka egy tündéri, aktív kutyus, aki alig várja, hogy gazdára találjon és belevágjon a közös kalandokba.",
    featured: false
  }
];

const cardImageIndexes = {};

function formatSize(size) {
  if (size === 'kicsi') return 'Kistestű';
  if (size === 'kozepes') return 'Közepes testű';
  if (size === 'nagy') return 'Nagytestű';
  return size;
}

function formatHousing(housing) {
  if (housing === 'bent') return 'Bent';
  if (housing === 'kint') return 'Kint';
  return 'Bármilyen tartás';
}

// ==========================================
// KÁRTYA SABLON
// ==========================================
function createDogCardHTML(dog) {
  if (cardImageIndexes[dog.id] === undefined) {
    cardImageIndexes[dog.id] = 0;
  }
  const currentIndex = cardImageIndexes[dog.id];
  const currentImage = dog.gallery[currentIndex];
  const totalImages = dog.gallery.length;

  const hasVirtual = dog.virtualOwner && dog.virtualOwner.trim() !== "";
  const virtualSubtextHTML = hasVirtual 
    ? `<span class="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-1"><span>🐾</span> Virtuális gazdi: ${dog.virtualOwner}</span>`
    : `<span class="text-[11px] text-[#c85a32] font-medium flex items-center gap-1 mt-1"><span>⭐</span> Virtuális gazdit keres</span>`;

  const traitsText = dog.tags && dog.tags.length > 0 
    ? dog.tags.slice(0, 2).join(" • ") 
    : "";

  return `
    <div onclick="openDogModal('${dog.id}')" class="bg-white rounded-2xl overflow-hidden border border-[#eedfcc] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col group">
      <div class="relative aspect-[4/5] bg-stone-100 overflow-hidden">
        <img src="${currentImage}" alt="${dog.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
        
        ${totalImages > 1 ? `
          <button onclick="event.stopPropagation(); changeCardImage('${dog.id}', -1)" class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center font-bold shadow-md transition-all opacity-80 hover:opacity-100">
            ❮
          </button>
          <button onclick="event.stopPropagation(); changeCardImage('${dog.id}', 1)" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center font-bold shadow-md transition-all opacity-80 hover:opacity-100">
            ❯
          </button>
        ` : ''}
      </div>
      
      <div class="p-4 flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 mb-0.5">
            <h3 class="font-editorial text-xl font-bold text-stone-900 group-hover:text-[#c85a32] transition-colors leading-snug">
              ${dog.name}
            </h3>
            <span class="text-[11px] font-semibold text-[#c85a32] bg-[#fbeee8] px-2 py-0.5 rounded uppercase">
              ${dog.gender === 'kan' ? 'Kan' : 'Szuka'}
            </span>
          </div>
          <p class="text-xs text-stone-500 font-medium capitalize">${traitsText} • ${dog.ageText}</p>
          ${virtualSubtextHTML}
        </div>

        <span class="w-9 h-9 rounded-xl bg-[#faf7f2] group-hover:bg-[#c85a32] group-hover:text-white text-stone-700 flex items-center justify-center transition-colors text-xs font-bold">
          →
        </span>
      </div>
    </div>
  `;
}

function changeCardImage(dogId, direction) {
  const dog = DOGS_DATA.find(d => d.id === dogId);
  if (!dog) return;

  let currentIndex = cardImageIndexes[dogId] || 0;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = dog.gallery.length - 1;
  } else if (currentIndex >= dog.gallery.length) {
    currentIndex = 0;
  }

  cardImageIndexes[dogId] = currentIndex;
  refreshGalleryView();
}

// ==========================================
// RÉSZLETES ADATLAP
// ==========================================
function openDogModal(dogId) {
  const dog = DOGS_DATA.find(d => d.id === dogId);
  if (!dog) return;

  let modal = document.getElementById("dog-detail-modal");
  if (modal) modal.remove();

  const galleryHTML = dog.gallery.map(img => `
    <img src="${img}" alt="${dog.name}" class="w-full h-16 sm:h-20 object-cover rounded-xl border border-[#eedfcc] cursor-pointer hover:opacity-90 hover:border-[#c85a32] transition-all" onclick="document.getElementById('modal-main-img').src='${img}'" />
  `).join("");

  const hasVirtual = dog.virtualOwner && dog.virtualOwner.trim() !== "";
  const modalVirtualHTML = hasVirtual
    ? `<div class="text-xs text-emerald-800 font-medium flex items-center gap-1.5 py-1">
         <span>🐾</span> Virtuális gazdája: <strong>${dog.virtualOwner}</strong>
       </div>`
    : `<div class="text-xs text-[#c85a32] font-medium flex items-center justify-between py-1">
         <span>⭐ Még nincs virtuális gazdája</span>
         <a href="kapcsolat.html?dog=${dog.id}&topic=virtualis_gazdi" class="underline font-bold hover:text-[#b34823]">Virtuális gazdi lennék →</a>
       </div>`;

  modal = document.createElement("div");
  modal.id = "dog-detail-modal";
  modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto";
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  modal.innerHTML = `
    <div class="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl border border-[#eedfcc]">
      <button onclick="document.getElementById('dog-detail-modal').remove()" class="absolute top-5 right-5 w-10 h-10 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 flex items-center justify-center font-bold text-sm z-10 transition-colors">
        ✕
      </button>

      <!-- KÉTOSZLOPOS ELRENDEZÉS -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- BAL OLDAL -->
        <div class="lg:col-span-7 space-y-4">
          <div class="w-full aspect-square bg-[#f5efe6] rounded-2xl overflow-hidden flex items-center justify-center border border-[#eedfcc] shadow-sm p-2">
            <img id="modal-main-img" src="${dog.gallery[cardImageIndexes[dog.id] || 0]}" alt="${dog.name}" class="w-full h-full object-contain object-center rounded-xl" />
          </div>

          <div class="grid grid-cols-4 gap-2.5">
            ${galleryHTML}
          </div>
        </div>

        <!-- JOBB OLDAL -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="border-b border-stone-100 pb-5">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-semibold text-stone-500 uppercase">${dog.gender === 'kan' ? 'Kan' : 'Szuka'}</span>
            </div>
            <h2 class="font-editorial text-3xl sm:text-4xl font-bold text-stone-900 mb-2">${dog.name}</h2>
            ${modalVirtualHTML}
          </div>

          <!-- Életkor, méret és tartás -->
          <div class="grid grid-cols-3 gap-2 text-stone-700">
            <div class="bg-[#faf7f2] p-2.5 rounded-xl border border-[#eedfcc]">
              <span class="text-[10px] text-stone-400 block uppercase font-bold">Életkor</span>
              <strong class="text-xs font-semibold">${dog.ageText}</strong>
            </div>
            <div class="bg-[#faf7f2] p-2.5 rounded-xl border border-[#eedfcc]">
              <span class="text-[10px] text-stone-400 block uppercase font-bold">Méret</span>
              <strong class="text-xs font-semibold">${formatSize(dog.size)}</strong>
            </div>
            <div class="bg-[#faf7f2] p-2.5 rounded-xl border border-[#eedfcc]">
              <span class="text-[10px] text-stone-400 block uppercase font-bold">Tartás</span>
              <strong class="text-xs font-semibold">${formatHousing(dog.housing)}</strong>
            </div>
          </div>

          <div class="space-y-2 text-stone-600 text-sm leading-relaxed">
            <p>${dog.description}</p>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-2">
            ${dog.tags.map(tag => `<span class="bg-[#faf7f2] border border-[#eedfcc] text-stone-700 text-xs px-3 py-1 rounded-full font-medium">#${tag}</span>`).join("")}
          </div>

          <div class="pt-6 border-t border-stone-100 flex items-center gap-3">
            <a href="kapcsolat.html?dog=${dog.id}" class="w-full py-3 bg-[#c85a32] hover:bg-[#b34823] text-white text-xs font-bold rounded-xl shadow-sm transition-colors text-center block">
              Örökbefogadom ezt a kutyust
            </a>
          </div>

        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

const FavoritesManager = {
  isFavorite(id) { return false; },
  toggle(id) {}
};

function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text);
  alert(msg);
}