// ==========================================
// RÉNÓ KUTYAOTTHON - KUTYÁK ADATBÁZISA ÉS GALÉRIA LOGIKA
// ==========================================

const DOGS_DATA = [
  {
    id: "k2",
    name: "Lucky",
    gender: "kan",
    size: "nagy",
    ageCategory: "felnott",
    ageText: "7 éves",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K2 (1).jpg",
      "images/GAZDIT KERESNEK/K2 (2).jpg",
      "images/GAZDIT KERESNEK/K2 (3).jpg",
      "images/GAZDIT KERESNEK/K2 (4).jpg",
      "images/GAZDIT KERESNEK/K2 (5).jpg"
    ],
    tags: [],
    description: "Lucky egy bámulatosan kedves és türelmes bull típusú kan kutya, aki hatalmas szíve ellenére még mindig a gazdáját keresi. Bár a múltjában voltak nehéz időszakok, ő ezt teljesen maga mögött hagyta, és mára egy kiegyensúlyozott, tündéri társsá vált. Imádja az embereket és a gyerekeket, minden kutyával remekül kijön, ráadásul teljesen szobatiszta és mintaszerűen sétál pórázon. Ha egy hűséges, csodálatos családi kutyát keresel, Lucky boldogan beköltözne a szívedbe!",
    featured: true
  },
  {
    id: "k3",
    name: "Jeffrey",
    gender: "kan",
    size: "kozepes",
    ageCategory: "kolyok",
    ageText: "1.5 éves",
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
    tags: [],
    description: "Jeffrey egy szuper helyes, kb. másfél éves pörgős kisfiú, akinél kedvesebb és játékosabb társat keresve sem találnál. Bár a múltjában átélt nehézségeket – nehéz körülmények közül mentettük a társaival –, a jelenben egy kifejezetten életvidám kutyus vált belőle. Szépen sétál pórázon, a szukákkal remekül kijön, a kanokkal pedig egy kicsit dominánsabb, de megfelelő irányítással imádnivaló társa a családnak. Benti tartással keresi az igazi gazdiját, aki mellett végre megtapasztalhatja a gondtalan boldogságot!",
    featured: true
  },
  {
    id: "k4",
    name: "Kolos",
    gender: "kan",
    size: "kicsi",
    ageCategory: "fiatal",
    ageText: "11 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K4 (1).jpg",
      "images/GAZDIT KERESNEK/K4 (2).jpg",
      "images/GAZDIT KERESNEK/K4 (3).jpg",
      "images/GAZDIT KERESNEK/K4 (4).jpg",
      "images/GAZDIT KERESNEK/K4 (5).jpg"
    ],
    tags: [],
    description: "Kolos egy tüneményes, 11 hónapos pincser-tacskó keverék kamasz fiú, aki 5-6 hónapos apróságként érkezett a menhelyre a testvéreivel együtt. Mivel itt nevelkedett, az embereket és a gyerekeket tiszta szívéből imádja, egy igazi közvetlen, játékos kiskutya. Ivartalanítva, benti tartással várja az igazi családot, akik rengeteg szeretettel halmozzák el őt.",
    featured: false
  },
  {
    id: "k5",
    name: "Ferike",
    gender: "kan",
    size: "kicsi",
    ageCategory: "fiatal",
    ageText: "11 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K5 (1).jpg",
      "images/GAZDIT KERESNEK/K5 (2).jpg",
      "images/GAZDIT KERESNEK/K5 (3).jpg",
      "images/GAZDIT KERESNEK/K5 (4).jpg"
    ],
    tags: [],
    description: "Ferike egy tüneményes, vidám energiabomba, aki azonnal belopja magát mindenki szívébe! Ez a 11 hónapos spicc-csivava keverék kisfiú szalmabála alól mentve érkezett hozzánk a testvéreivel együtt, de a múltja helyett ő már csak a játékra és a szeretetre fókuszál. Vagány, aktív és pörgős kis srác, aki imádja az emberek társaságát, szépen sétál pórázon, és a négylábú pajtásaival is mindig vevő egy jó kis szaladgálásra. Benti tartással keresi azt a szerető családot, ahol a közös játéké és a vidám mindennapoké a főszerep!",
    featured: false
  },
  {
    id: "k6",
    name: "Málna",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K6 (1).jpg",
      "images/GAZDIT KERESNEK/K6 (2).jpg",
      "images/GAZDIT KERESNEK/K6 (3).jpg",
      "images/GAZDIT KERESNEK/K6 (4).jpg",
      "images/GAZDIT KERESNEK/K6 (5).jpg",
      "images/GAZDIT KERESNEK/K6 (6).jpg"
    ],
    tags: [],
    description: "Málna egy igazi tündéri kölyöklány, akiért egyszerűen lehetetlen nem rajongani! Ez az 5 hónapos kislány a menhely kapuja előtt kapott új esélyt az életre, de a nyitott, vidám természetéből semmit sem veszített: nagyon kiegyensúlyozott, és tiszta szívéből imádja az embereket, a gyerekeket, valamint a többi kutyust is. Jelenleg épp a pórázon sétálás alapjaival ismerkedik, és nagyon ügyesen halad. Benti tartással keresi az igazi álomcsaládot, ahová tökéletes, szeretetteljes családi kedvencként költözhet be!",
    featured: true
  },
  {
    id: "k7",
    name: "Eszter",
    gender: "szuka",
    size: "kozepes",
    ageCategory: "fiatal",
    ageText: "11 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K7 (1).jpg",
      "images/GAZDIT KERESNEK/K7 (2).jpg",
      "images/GAZDIT KERESNEK/K7 (3).jpg",
      "images/GAZDIT KERESNEK/K7 (4).jpg",
      "images/GAZDIT KERESNEK/K7 (5).jpg"
    ],
    tags: [],
    description: "Eszter egy gyönyörű, 11 hónapos kislány – Feri testvére –, aki a szalmabála alól mentve érkezett hozzánk a többi tesójával együtt. Ő egy kicsit érzékenyebb lelkű, óvatosabb kutyus: szüksége van egy kis finom hangolódásra és türelemre az ismerkedésnél, de amint érzi a biztonságot és elfogad, egy végtelenül kedves, ragaszkodó társ válik belőle. Más kutyusokkal nagyszerűen megérti magát. Benti tartással keresi azt a megértő, melegszívű gazdit, aki biztosítja számára a nyugodt és szeretetteljes közeget!",
    featured: false
  },
  {
    id: "k8",
    name: "Nyurga",
    gender: "kan",
    size: "kozepes",
    ageCategory: "felnott",
    ageText: "5 éves",
    housing: "mindketto",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K8 (1).jpg",
      "images/GAZDIT KERESNEK/K8 (2).jpg",
      "images/GAZDIT KERESNEK/K8 (3).jpg",
      "images/GAZDIT KERESNEK/K8 (4).jpg"
    ],
    tags: [],
    description: "Nyurga egy végtelenül kedves, kb. 5 éves kan kutyus, aki még 2021-ben került hozzánk az anyukájával együtt egy telepről. Ő egy picit több odafigyelést és türelmet igényel: kezdetben óvatos az emberrel, de amint kiépül a bizalom és megismer téged, teljesen megnyílik. Gyönyörűen sétál pórázon, más kutyákkal pedig kifejezetten jó és kiegyensúlyozott a viszonya. Egy melegszívű, türelmes gazdi mellett keresi a végleges otthonát, aki szeretettel és odafigyeléssel fogadja őt a családban.",
    featured: false
  },
  {
    id: "k9",
    name: "Zserbó",
    gender: "szuka",
    size: "kozepes",
    ageCategory: "felnott",
    ageText: "2 éves",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K9 (1).jpg",
      "images/GAZDIT KERESNEK/K9 (2).jpg",
      "images/GAZDIT KERESNEK/K9 (3).jpg"
    ],
    tags: [],
    description: "Zserbó egy nagyon érzékeny lelkű kutyus, akire a kunpeszéri erdőben, egy farakás alatt bukkantunk rá a testvéreivel együtt. A múltban átélt megpróbáltatások miatt jelenleg még tart az emberektől, így szakértő rehabilitáción vesz részt nálunk. Örökbefogadni csak a rehabilitációja végeztével, pár hónap múlva lehet majd őt, de higgyétek el, nagyon megéri kivárni ezt a kis csodát! Olyan melegszívű és türelmes gazdit keresünk számára, aki örömmel szán időt a fokozatos ismerkedésre, hogy a felkészülési idő alatt szépen, a saját tempójában csiszolódhassanak össze.",
    featured: true
  },
  {
    id: "k10",
    name: "Csicsi",
    gender: "szuka",
    size: "kozepes",
    ageCategory: "felnott",
    ageText: "~6 éves",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K10 (1).jpg",
      "images/GAZDIT KERESNEK/K10 (2).jpg",
      "images/GAZDIT KERESNEK/K10 (3).jpg",
      "images/GAZDIT KERESNEK/K10 (4).jpg"
    ],
    tags: [],
    description: "Csicsi egy végtelenül kedves, körülbelül 6 éves, tüneményes borzas pofijú kislány, aki egy másik szervezettől érkezett hozzánk, miután a testvérével együtt egy elhagyatott tanyáról mentették őket. A múltbeli megpróbáltatások miatt az emberekkel még egy kicsit óvatos, de türelemmel és törődéssel szépen feloldódik. Más kutyusokkal nagyszerűen megérti magát, és gyönyörűen sétál pórázon is. Kizárólag benti tartással keresi azt a türelmes gazdit, akinél végre igazi biztonságra és szerető otthonra lelhet.",
    featured: false
  },
  {
    id: "k11",
    name: "Blanka",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K11 (1).jpg",
      "images/GAZDIT KERESNEK/K11 (2).jpg",
      "images/GAZDIT KERESNEK/K11 (3).jpg"
    ],
    tags: [],
    description: "Blanka egy tüneményes, 5 hónapos hófehér kölyöklány, aki a testvéreivel együtt a menhely elé kitéve kapott új esélyt az életre. Rendkívül cuki, nyitott és szuperül szocializált kiskutya, aki azonnal megtalálja a hangot emberrel és kutyapajtásokkal egyaránt. Életvidám, lelkes és nagyon játékos energiabomba, aki alig várja, hogy egy szerető család tagjaként megmutathassa, mekkora szeretet lakozik benne!",
    featured: false
  },
  {
    id: "k12",
    name: "Petra",
    gender: "szuka",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K12 (1).jpg",
      "images/GAZDIT KERESNEK/K12 (2).jpg",
      "images/GAZDIT KERESNEK/K12 (3).jpg"
    ],
    tags: [],
    description: "Petra a testvérsoros középső kislánya, egy ragyogó fekete szőrű, 5 hónapos tündér! Bár a menhely kapuja előtt indult az élete története, a kedvéből és a szívéből ez semmit nem vett el: egy igazán pörgős, lelkes és játékos kiskutya, aki minden közös kalandra vevő. Bárkivel pillanatok alatt barátságot köt, tiszta szívéből rajong a figyelmért, és tökéletes családi kedvencként várja az igazi gazdi érkezését!",
    featured: false
  },
  {
    id: "k13",
    name: "Petike",
    gender: "kan",
    size: "kicsi",
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    housing: "bent",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K13 (1).jpg",
      "images/GAZDIT KERESNEK/K13 (2).jpg",
      "images/GAZDIT KERESNEK/K13 (3).jpg"
    ],
    tags: [],
    description: "Nézzétek ezt az imádnivaló, mackós pofit! Petike a testvérpár 5 hónapos fekete-barna kisfiú tagja, aki a játékos nyelvnyújtogatós mosolyával mindenkit elvarázsol. Végtelenül kedves, tüneményes és energiával teli kiskutya, aki imádja a közös mókázást, a szaladgálást és a szeretgetést. Bármelyik vidám, aktív család életébe rengeteg mosolyt és napsütést hozna!",
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
          <p class="text-xs text-stone-500 font-medium capitalize">${formatSize(dog.size)} • ${dog.ageText}</p>
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