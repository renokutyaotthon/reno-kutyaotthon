// ==========================================
// RÉNÓ KUTYAOTTHON - KUTYÁK ADATBÁZISA ÉS GALÉRIA LOGIKA
// ==========================================

const DOGS_DATA = [
  {
    id: "k2",
    name: "Lucky",
    gender: "kan",
    size: "nagy",
    bornAt: "2019-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "7 éves",
    virtualOwner: "Horváthné Bács Katinka",
    gallery: [
      "images/GAZDIT KERESNEK/K2 (1).jpg",
      "images/GAZDIT KERESNEK/K2 (2).jpg",
      "images/GAZDIT KERESNEK/K2 (3).jpg",
      "images/GAZDIT KERESNEK/K2 (4).jpg",
      "images/GAZDIT KERESNEK/K2 (5).jpg"
    ],
    tags: [],
    description: `
      <p>Lucky egy bámulatosan kedves és türelmes bull típusú kan kutya, aki hatalmas szíve ellenére még mindig a gazdáját keresi.</p>
      <p>Bár a múltjában voltak nehéz időszakok, ő ezt teljesen maga mögött hagyta, és mára egy kiegyensúlyozott, tündéri társsá vált.</p>
      <p>Imádja az embereket és a gyerekeket, minden kutyával remekül kijön, ráadásul teljesen szobatiszta és mintaszerűen sétál pórázon. Ha egy hűséges, csodálatos családi kutyát keresel, Lucky boldogan beköltözne a szívedbe!</p>
    `,
    featured: true
  },
  {
    id: "k3",
    name: "Jeffrey",
    gender: "kan",
    size: "kozepes",
    bornAt: "2025-05",
    approxAge: false,
    ageCategory: "fiatal",
    ageText: "1.5 éves",
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
    description: `
      <p>Jeffrey egy szuper helyes, kb. másfél éves pörgős kisfiú, akinél kedvesebb és játékosabb társat keresve sem találnál.</p>
      <p>Bár a múltjában átélt nehézségeket – nehéz körülmények közül mentettük a társaival –, a jelenben egy kifejezetten életvidám kutyus vált belőle.</p>
      <p>Szépen sétál pórázon, a szukákkal remekül kijön, a kanokkal pedig egy kicsit dominánsabb, de megfelelő irányítással imádnivaló társa a családnak. Benti tartással keresi az igazi gazdiját, aki mellett végre megtapasztalhatja a gondtalan boldogságot!</p>
    `,
    featured: true
  },
  {
    id: "k4",
    name: "Kolos",
    gender: "kan",
    size: "kicsi",
    bornAt: "2025-12",
    approxAge: false,
    ageCategory: "fiatal",
    ageText: "11 hónapos",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K4 (1).jpg",
      "images/GAZDIT KERESNEK/K4 (2).jpg",
      "images/GAZDIT KERESNEK/K4 (3).jpg",
      "images/GAZDIT KERESNEK/K4 (4).jpg",
      "images/GAZDIT KERESNEK/K4 (5).jpg"
    ],
    tags: [],
    description: `
      <p>Kolos egy tüneményes, 11 hónapos pincser-tacskó keverék kamasz fiú, aki 5-6 hónapos apróságként érkezett a menhelyre a testvéreivel együtt.</p>
      <p>Mivel itt nevelkedett, az embereket és a gyerekeket tiszta szívéből imádja, egy igazi közvetlen, játékos kiskutya.</p>
      <p>Ivartalanítva, benti tartással várja az igazi családot, akik rengeteg szeretettel halmozzák el őt.</p>
    `,
    featured: false
  },
  {
    id: "k5",
    name: "Ferike",
    gender: "kan",
    size: "kicsi",
    bornAt: "2025-12",
    approxAge: false,
    ageCategory: "fiatal",
    ageText: "11 hónapos",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K5 (1).jpg",
      "images/GAZDIT KERESNEK/K5 (2).jpg",
      "images/GAZDIT KERESNEK/K5 (3).jpg",
      "images/GAZDIT KERESNEK/K5 (4).jpg"
    ],
    tags: [],
    description: `
      <p>Ferike egy tüneményes, vidám energiabomba, aki azonnal belopja magát mindenki szívébe!</p>
      <p>Ez a 11 hónapos spicc-csivava keverék kisfiú szalmabála alól mentve érkezett hozzánk a testvéreivel együtt, de a múltja helyett ő már csak a játékra és a szeretetre fókuszál.</p>
      <p>Vagány, aktív és pörgős kis srác, aki imádja az emberek társaságát, szépen sétál pórázon, és a négylábú pajtásaival is mindig vevő egy jó kis szaladgálásra. Benti tartással keresi azt a szerető családot, ahol a közös játéké és a vidám mindennapoké a főszerep!</p>
    `,
    featured: false
  },
  {
    id: "k6",
    name: "Málna",
    gender: "szuka",
    size: "kicsi",
    bornAt: "2026-06",
    approxAge: false,
    ageCategory: "kolyok",
    ageText: "5 hónapos",
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
    description: `
      <p>Málna egy igazi tündéri kölyöklány, akiért egyszerűen lehetetlen nem rajongani!</p>
      <p>Ez az 5 hónapos kislány a menhely kapuja előtt kapott új esélyt az életre, de a nyitott, vidám természetéből semmit sem veszített: nagyon kiegyensúlyozott, és tiszta szívéből imádja az embereket, a gyerekeket, valamint a többi kutyust is.</p>
      <p>Jelenleg épp a pórázon sétálás alapjaival ismerkedik, és nagyon ügyesen halad. Benti tartással keresi az igazi álomcsaládot, ahová tökéletes, szeretetteljes családi kedvencként költözhet be!</p>
    `,
    featured: true
  },
  {
    id: "k8",
    name: "Nyurga",
    gender: "kan",
    size: "kozepes",
    bornAt: "2021-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "5 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K8 (1).jpg",
      "images/GAZDIT KERESNEK/K8 (2).jpg",
      "images/GAZDIT KERESNEK/K8 (3).jpg",
      "images/GAZDIT KERESNEK/K8 (4).jpg"
    ],
    tags: [],
    description: `
      <p>Nyurga egy végtelenül kedves, kb. 5 éves kan kutyus, aki még 2021-ben került hozzánk az anyukájával együtt egy telepről.</p>
      <p>Ő egy picit több odafigyelést és türelmet igényel: kezdetben óvatos az emberrel, de amint kiépül a bizalom és megismer téged, teljesen megnyílik.</p>
      <p>Gyönyörűen sétál pórázon, más kutyákkal pedig kifejezetten jó és kiegyensúlyozott a viszonya. Egy melegszívű, türelmes gazdi mellett keresi a végleges otthonát, aki szeretettel és odafigyeléssel fogadja őt a családban.</p>
    `,
    featured: false
  },
  {
    id: "k9",
    name: "Zserbó",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2024-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "2 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K9 (1).jpg",
      "images/GAZDIT KERESNEK/K9 (2).jpg",
      "images/GAZDIT KERESNEK/K9 (3).jpg"
    ],
    tags: [],
    description: `
      <p>Zserbó egy nagyon érzékeny lelkű kutyus, akire a kunpeszéri erdőben, egy farakás alatt bukkantunk rá a testvéreivel együtt.</p>
      <p>A múltban átélt megpróbáltatások miatt jelenleg még tart az emberektől, így szakértő rehabilitáción vesz részt nálunk. Örökbefogadni csak a rehabilitációja végeztével, pár hónap múlva lehet majd őt, de higgyétek el, nagyon megéri kivárni ezt a kis csodát!</p>
      <p>Olyan melegszívű és türelmes gazdit keresünk számára, aki örömmel szán időt a fokozatos ismerkedésre, hogy a felkészülési idő alatt szépen, a saját tempójában csiszolódhassanak össze.</p>
    `,
    featured: true
  },
  {
    id: "k10",
    name: "Csicsi",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2020-11",
    approxAge: true,
    ageCategory: "felnott",
    ageText: "~6 éves",
    virtualOwner: "Urbánszki Barbara",
    gallery: [
      "images/GAZDIT KERESNEK/K10 (1).jpg",
      "images/GAZDIT KERESNEK/K10 (2).jpg",
      "images/GAZDIT KERESNEK/K10 (3).jpg",
      "images/GAZDIT KERESNEK/K10 (4).jpg"
    ],
    tags: [],
    description: `
      <p>Csicsi egy végtelenül kedves, körülbelül 6 éves, tüneményes borzas pofijú kislány, aki egy másik szervezettől érkezett hozzánk, miután a testvérével együtt egy elhagyatott tanyáról mentették őket.</p>
      <p>A múltbeli megpróbáltatások miatt az emberekkel még egy kicsit óvatos, de türelemmel és törődéssel szépen feloldódik.</p>
      <p>Más kutyusokkal nagyszerűen megérti magát, és gyönyörűen sétál pórázon is. Kizárólag benti tartással keresi azt a türelmes gazdit, akinél végre igazi biztonságra és szerető otthonra lelhet.</p>
    `,
    featured: false
  },
  {
    id: "k11",
    name: "Blanka",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2026-06",
    approxAge: false,
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K11 (1).jpg",
      "images/GAZDIT KERESNEK/K11 (2).jpg",
      "images/GAZDIT KERESNEK/K11 (3).jpg"
    ],
    tags: [],
    description: `
      <p>Blanka egy tüneményes, 5 hónapos hófehér kölyöklány, aki a testvéreivel együtt a menhely elé kitéve kapott új esélyt az életre.</p>
      <p>Rendkívül cuki, nyitott és szuperül szocializált kiskutya, aki azonnal megtalálja a hangot emberrel és kutyapajtásokkal egyaránt.</p>
      <p>Életvidám, lelkes és nagyon játékos energiabomba, aki alig várja, hogy egy szerető család tagjaként megmutathassa, mekkora szeretet lakozik benne!</p>
    `,
    featured: false
  },
  {
    id: "k12",
    name: "Petra",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2026-06",
    approxAge: false,
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K12 (1).jpg",
      "images/GAZDIT KERESNEK/K12 (2).jpg",
      "images/GAZDIT KERESNEK/K12 (3).jpg"
    ],
    tags: [],
    description: `
      <p>Petra a testvérsoros középső kislánya, egy ragyogó fekete szőrű, 5 hónapos tündér!</p>
      <p>Bár a menhely kapuja előtt indult az élete története, a kedvéből és a szívéből ez semmit nem vett el: egy igazán pörgős, lelkes és játékos kiskutya, aki minden közös kalandra vevő.</p>
      <p>Bárkivel pillanatok alatt barátságot köt, tiszta szívéből rajong a figyelmért, és tökéletes családi kedvencként várja az igazi gazdi érkezését!</p>
    `,
    featured: false
  },
  {
    id: "k13",
    name: "Petike",
    gender: "kan",
    size: "kozepes",
    bornAt: "2026-06",
    approxAge: false,
    ageCategory: "kolyok",
    ageText: "5 hónapos",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K13 (1).jpg",
      "images/GAZDIT KERESNEK/K13 (2).jpg",
      "images/GAZDIT KERESNEK/K13 (3).jpg"
    ],
    tags: [],
    description: `
      <p>Nézzétek ezt az imádnivaló, mackós pofit! Petike a testvérpár 5 hónapos fekete-barna kisfiú tagja, aki a játékos nyelvnyújtogatós mosolyával mindenkit elvarázsol.</p>
      <p>Végtelenül kedves, tüneményes és energiával teli kiskutya, aki imádja a közös mókázást, a szaladgálást és a szeretgetést.</p>
      <p>Bármelyik vidám, aktív család életébe rengeteg mosolyt és napsütést hozna!</p>
    `,
    featured: false
  },
  {
    id: "k14",
    name: "Pitypang",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2022-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "4 év",
    virtualOwner: "Rádi Angéla",
    gallery: [
      "images/GAZDIT KERESNEK/K14 (1).jpg",
      "images/GAZDIT KERESNEK/K14 (2).jpg",
      "images/GAZDIT KERESNEK/K14 (3).jpg",
      "images/GAZDIT KERESNEK/K14 (4).jpg",
      "images/GAZDIT KERESNEK/K14 (5).jpg",
      "images/GAZDIT KERESNEK/K14 (6).jpg",
      "images/GAZDIT KERESNEK/K14 (7).jpg",
      "images/GAZDIT KERESNEK/K14 (8).jpg",
      "images/GAZDIT KERESNEK/K14 (9).jpg",
      "images/GAZDIT KERESNEK/K14 (10).jpg",
      "images/GAZDIT KERESNEK/K14 (11).jpg",
      "images/GAZDIT KERESNEK/K14 (12).jpg",
      "images/GAZDIT KERESNEK/K14 (13).jpg",
      "images/GAZDIT KERESNEK/K14 (14).jpg"
    ],
    tags: [],
    description: `
      <p>Pitypang Tatárszentgyörgyről került hozzánk, úgyhogy már kölyökkora óta velünk él. Van benne terrier vér, ami a határozottabb, öntudatosabb természetét is magyarázza. Pórázon nagyon szépen sétál, emellett imád labdázni és kirándulni.</p>
      <p>Más kutyákkal kevésbé jön ki, így olyan otthont keresünk számára, ahol ő lehet az egyetlen kedvenc. Az emberekkel szemben az elején távolságtartó, azonban egy kis ismerkedéssel és bizalomépítéssel elnyerhető a szíve. Ha valakit elfogad és megszeret, onnantól tűzbe megy érte: rendkívül hűséges, mindent megtesz a gazdájáért és nagyon erősen kötődik.</p>
      <p>Kiváló házőrző tulajdonságokkal rendelkezik, ám fontos kiemelni, hogy kizárólag kerti őrző feladatra a menhely nem adja örökbe – Pitypangnak a törődésre, szeretetre és a közös programokra is éppúgy szüksége van!</p>
    `,
    featured: false
  },
  {
    id: "k15",
    name: "Fenyő",
    gender: "kan",
    size: "nagy",
    bornAt: "2024-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "2 év",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K15 (1).jpg",
      "images/GAZDIT KERESNEK/K15 (2).jpg",
      "images/GAZDIT KERESNEK/K15 (3).jpg",
      "images/GAZDIT KERESNEK/K15 (4).jpg",
      "images/GAZDIT KERESNEK/K15 (5).jpg",
      "images/GAZDIT KERESNEK/K15 (6).jpg",
      "images/GAZDIT KERESNEK/K15 (7).jpg",
      "images/GAZDIT KERESNEK/K15 (8).jpg",
      "images/GAZDIT KERESNEK/K15 (9).jpg",
      "images/GAZDIT KERESNEK/K15 (10).jpg"
    ],
    tags: [],
    description: `
      <p>Fenyőt a menhely melletti fenyőerdőben találtuk meg, innen kapta a nevét is. Ő egy 2 éves, ivartalanított kan kutyus, aki gyönyörű, meleg barna bundájával és csupa szív természetével keresi a gazdáját.</p>
      <p>Rendkívül barátságos, emberközpontú és játékos fiú, akiért rajongani fognak a gyerekek is, hiszen kifejezetten szereti őket! Nagyon szépen sétál pórázon, így a közös séták igazi élményt jelentenek majd vele. A szukákkal remekül kijön, a kanokkal azonban egy picit dominánsabban viselkedik.</p>
      <p>Ha egy aktív, mozgékony és mérhetetlenül szeretetet árasztó társat keresel a mindennapokhoz, Fenyő alig várja, hogy bekuckózhasson az otthonodba – és a szívedbe is!</p>
    `,
    featured: false
  },
  {
    id: "k18",
    name: "Tamara",
    gender: "szuka",
    size: "nagy",
    bornAt: "2015-11",
    approxAge: false,
    ageCategory: "idos",
    ageText: "11 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K18 (1).jpg",
      "images/GAZDIT KERESNEK/K18 (2).jpg",
      "images/GAZDIT KERESNEK/K18 (3).jpg",
      "images/GAZDIT KERESNEK/K18 (4).jpg",
      "images/GAZDIT KERESNEK/K18 (5).jpg",
      "images/GAZDIT KERESNEK/K18 (6).jpg",
      "images/GAZDIT KERESNEK/K18 (7).jpg",
      "images/GAZDIT KERESNEK/K18 (8).jpg"
    ],
    tags: [],
    description: `
      <p>Tamara a Szurkolók az Állatokért Alapítvány segítségével került gondozásunkba. Ő egy 11 éves, ivartalanított, nagytestű labrador keverék kislány, aki korábban már 6 kölyöknek is életet adott – most azonban végre rajta a sor, hogy gondoskodjanak róla, és egy szerető család megbecsült tagja lehessen.</p>
      <p>A korát meghazudtoló módon vidám, kiegyensúlyozott, és ahogy a fotóján is látszik, egy igazi mosolygós, fényes fekete bundájú tündér. Az emberekkel és a gyerekekkel szemben végtelenül kedves, pórázon pedig mintaszerűen, szépen sétál.</p>
      <p>Más kutyákkal nem feltétlenül jön ki – eléggé megválogatja a társaságát –, így olyan otthonba ajánljuk, ahol egyedüli kutyaként kaphatja meg a megérdemelt figyelmet és szeretetet. Ha egy hűséges, kedves és nyugodt társat keresel, aki boldogan és hálásan töltené melletted a nyugdíjas éveit, Tamara tárt mancsokkal vár!</p>
    `,
    featured: false
  },
  {
    id: "k19",
    name: "Kolonc",
    gender: "kan",
    size: "kozepes",
    bornAt: "2020-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "6 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K19 (1).jpg",
      "images/GAZDIT KERESNEK/K19 (2).jpg",
      "images/GAZDIT KERESNEK/K19 (3).jpg",
      "images/GAZDIT KERESNEK/K19 (4).jpg",
      "images/GAZDIT KERESNEK/K19 (5).jpg",
      "images/GAZDIT KERESNEK/K19 (6).jpg",
      "images/GAZDIT KERESNEK/K19 (7).jpg",
      "images/GAZDIT KERESNEK/K19 (8).jpg"
    ],
    tags: [],
    description: `
      <p>Kolonc története igazán szívszorítóan indult: a menhely előtti úton sétált magányosan, egy nehéz kolonccal a nyakában – innen kapta a nevét is, ám a terhet azóta szerencsére már nemcsak a nyakáról, hanem a lelkéről is letette.</p>
      <p>Ő egy 6 éves, ivartalanított kan kutyus, aki gyönyörű, ragyogó vörösesbarna bundájával és megnyerő mosolyával azonnal belopja magát az ember szívébe. Rendkívül barátságos, édes és élettel teli kisfiú, aki szinte szomjazza az emberek szeretetét.</p>
      <p>Imádja a felnőtteket és a gyerekeket is, pórázon pedig nagyon szépen sétál. A szuka kutyákkal remekül kijön, a kanokkal szemben azonban egy kicsit dominánsabb. Ha egy hűséges, csupa szív és élettel teli társat keresel, aki minden egyes simogatást meghálál, Kolonc boldogan elfoglalná a helyét a családodban – és a szívedben is!</p>
    `,
    featured: false
  },
  {
    id: "k20",
    name: "Fanni",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2021-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "5 éves",
    virtualOwner: "Almási Zita és Anna",
    gallery: [
      "images/GAZDIT KERESNEK/K20 (1).jpg",
      "images/GAZDIT KERESNEK/K20 (2).jpg",
      "images/GAZDIT KERESNEK/K20 (3).jpg",
      "images/GAZDIT KERESNEK/K20 (4).jpg",
      "images/GAZDIT KERESNEK/K20 (5).jpg",
      "images/GAZDIT KERESNEK/K20 (6).jpg",
      "images/GAZDIT KERESNEK/K20 (7).jpg"
    ],
    tags: [],
    description: `
      <p>Fanni egy nagyon kedves, aranyos természetű kutyus, aki a Szurkolók az Állatokért Alapítvány segítségével került gondozásunkba, miután elkobozták előző gazdájától, aki rengeteg kutyát tartott, és alkalmatlannak bizonyult a gondozásukra.</p>
      <p>Mivel korábban nem sok emberi figyelem jutott neki, kicsit tart eleinte az emberektől és kell neki egy kis idő, hogy feloldódjon, ám ahogy megérzi a szeretetet és a biztonságot, egy nagyon kötődő és szeretetteljes kutyussá válik. Gyönyörű, csíkos bundája és karcsú, kecses felépítése alapján valószínűleg agár vér is csörgedezik az ereiben, ami a nagy mozgásigényét is magyarázza.</p>
      <p>Igazi aktív, játékos kislány, aki pórázon nagyon szépen sétál. A sok kutyus közötti múltjának köszönhetően más kutyákkal kifejezetten jó a viszonya, így akár egy másik négylábú mellé is remek társ lehet. Olyan türelmes, aktív gazdit keresünk Fanni számára, aki megadja neki a feloldódáshoz szükséges időt, és szívesen mozog vele a mindennapokban – cserébe egy csodálatos, hálás társat kap!</p>
    `,
    featured: false
  },
  {
    id: "k21",
    name: "Alfa",
    gender: "szuka",
    size: "nagy",
    bornAt: "2020-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "6 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K21 (1).jpg",
      "images/GAZDIT KERESNEK/K21 (2).jpg",
      "images/GAZDIT KERESNEK/K21 (3).jpg",
      "images/GAZDIT KERESNEK/K21 (4).jpg",
      "images/GAZDIT KERESNEK/K21 (5).jpg",
      "images/GAZDIT KERESNEK/K21 (6).jpg"
    ],
    tags: [],
    description: `
      <p>Alfát és testvérét, Omegát a menhely elé kötözve hagyta ott a korábbi gazdájuk. A szívszorító kezdetek ellenére Alfa egy cseppet sem vesztette el a hitét az emberekben: egy hihetetlenül okos, kiegyensúlyozott és gyönyörű németjuhász keverék kislány, akinek a tartásán és az értelmes tekintetén is azonnal látszik a fajta esze.</p>
      <p>Végtelenül barátságos, kedves természetű társ, aki imádja az embereket, a gyerekekkel pedig fantasztikusan kijön. Pórázon nagyon szépen sétál, a mindennapokban igazi együttműködő, tündéri kutyus.</p>
      <p>A kan kutyákkal nagyon jó a viszonya, a szukákkal szemben kicsit dominánsabb. Ha egy hűséges, okos és odaadó családtagot keresel, aki minden szeretetedet ezeresen hálálja meg, Alfa tiszta szívvel várja, hogy végre egy igazi otthonra leljen nálad!</p>
    `,
    featured: false
  },
  {
    id: "k22",
    name: "Omega",
    gender: "szuka",
    size: "nagy",
    bornAt: "2020-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "6 éves",
    virtualOwner: "Mészáros Ágnes",
    gallery: [
      "images/GAZDIT KERESNEK/K22 (1).jpg",
      "images/GAZDIT KERESNEK/K22 (2).jpg",
      "images/GAZDIT KERESNEK/K22 (3).jpg",
      "images/GAZDIT KERESNEK/K22 (4).jpg",
      "images/GAZDIT KERESNEK/K22 (5).jpg",
      "images/GAZDIT KERESNEK/K22 (6).jpg",
      "images/GAZDIT KERESNEK/K22 (7).jpg",
      "images/GAZDIT KERESNEK/K22 (8).jpg"
    ],
    tags: [],
    description: `
      <p>Omegát testvérével, Alfával együtt hagyta hátra a korábbi gazdájuk: a menhely elé kikötözve találtak rájuk. A szívszorító kezdetek ellenére Omega egy tündéri, élettel teli kislány, aki cseppet sem veszítette el a jóságát és az emberekbe vetett hitét.</p>
      <p>Végtelenül barátságos, kedves természetű kutyus, aki imádja a felnőtteket, és a gyerekekkel is fantasztikusan jól kijön. Pórázon nagyon szépen sétál, igazi együttműködő társ a mindennapokban.</p>
      <p>A kan kutyákkal remekül kijön, a szukákkal szemben azonban egy kicsit dominánsabb alkat. Ha egy hűséges, ragaszkodó és csupa szív négylábút keresel, aki minden szeretetet sokszorosan hálál meg, Omega alig várja, hogy végre egy igazi, biztonságos otthonra leljen nálad!</p>
    `,
    featured: false
  },
  {
    id: "k23",
    name: "Jessey",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2021-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "5 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K23 (1).jpg",
      "images/GAZDIT KERESNEK/K23 (2).jpg",
      "images/GAZDIT KERESNEK/K23 (3).jpg",
      "images/GAZDIT KERESNEK/K23 (4).jpg",
      "images/GAZDIT KERESNEK/K23 (5).jpg",
      "images/GAZDIT KERESNEK/K23 (6).jpg",
      "images/GAZDIT KERESNEK/K23 (7).jpg"
    ],
    tags: [],
    description: `
      <p>Jessey a Szurkolók az Állatokért Alapítvány segítségével került gondozásunkba – Fannival együtt mentették ki egy olyan helyről, ahol korábbi gazdája rengeteg kutyát tartott, és alkalmatlannak bizonyult a gondozásukra.</p>
      <p>A múltja miatt Jessey az elején még óvatosabb és kicsit félős az emberekkel, idő kell neki, hogy megnyíljon. Viszont amint érzi a törődést és elnyered a bizalmát, egy rendkívül ragaszkodó, mélyen kötődő társra lelsz benne, aki teljes szívéből szeretni fog. Pórázon nagyon szépen sétál.</p>
      <p>A korábbi sok kutyus közötti múltjának köszönhetően más kutyákkal alapvetően jól kijön, a szukákkal szemben egy kicsit dominánsabb. Olyan türelmes gazdit keresünk Jessey számára, aki megadja neki a kezdeti időt a feloldódáshoz, cserébe egy csodálatos, hűséges és ragaszkodó társat kap!</p>
    `,
    featured: false
  },
  {
    id: "k25",
    name: "Zsófia",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2021-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "5 éves",
    virtualOwner: "Rádi Evelin",
    gallery: [
      "images/GAZDIT KERESNEK/K25 (1).jpg",
      "images/GAZDIT KERESNEK/K25 (2).jpg",
      "images/GAZDIT KERESNEK/K25 (3).jpg",
      "images/GAZDIT KERESNEK/K25 (4).jpg",
      "images/GAZDIT KERESNEK/K25 (5).jpg",
      "images/GAZDIT KERESNEK/K25 (6).jpg",
      "images/GAZDIT KERESNEK/K25 (7).jpg",
      "images/GAZDIT KERESNEK/K25 (8).jpg",
      "images/GAZDIT KERESNEK/K25 (9).jpg",
      "images/GAZDIT KERESNEK/K25 (10).jpg"
    ],
    tags: [],
    description: `
      <p>Zsófia a Szurkolók az Állatokért Alapítvány mentettje, egy gyönyörű, tigriscsíkos bundájú, 5 éves ivartalanított kislány. Bár kissé szigorúnak tűnő külseje elsőre megtévesztő lehet, valójában a legédesebb, legbarátságosabb lélek, aki tényleg mindenkit imád.</p>
      <p>Hihetetlenül embercentrikus és ragaszkodó, és nemcsak az emberekkel, hanem a többi állattal (még a baromfiakkal is!) remekül kijön. Pórázon nagyon szépen sétál. A kan kutyákkal kiváló a viszonya, a szukákkal szemben azonban határozottabb, dominánsabb alkat.</p>
      <p>Ideális választás kinti-benti tartásra: mivel szereti az idegenek figyelmét ugatással felkelteni – amivel valójában szintén csak szeretetre és törődésre vágyik –, kiváló házőrző válhat belőle. Ugyanakkor emellett hatalmas szüksége van a szeretetre, a gondoskodásra és a gazdájával töltött közös időre is. Ha egy hűséges, odaadó és csupa szív társat keresel, Zsófia alig várja, hogy bizonyíthasson az új otthonában!</p>
    `,
    featured: false
  },
  {
    id: "k26",
    name: "Milor",
    gender: "kan",
    size: "kozepes",
    bornAt: "2014-11",
    approxAge: false,
    ageCategory: "idos",
    ageText: "12 év",
    virtualOwner: "Rádi Ferenc",
    gallery: [
      "images/GAZDIT KERESNEK/K26 (1).jpg",
      "images/GAZDIT KERESNEK/K26 (2).jpg",
      "images/GAZDIT KERESNEK/K26 (3).jpg",
      "images/GAZDIT KERESNEK/K26 (4).jpg",
      "images/GAZDIT KERESNEK/K26 (5).jpg",
      "images/GAZDIT KERESNEK/K26 (6).jpg"
    ],
    tags: [],
    description: `
      <p>Milor egy másik menhelyről érkezett hozzánk jó pár éve, abban a reményben, hogy hamarosan rá is rátalál az Igazi. A kedves, őszes pofiján és bölcs tekintetén is látszik, hogy egy sokat megélt, érett kutyus, aki hihetetlenül megérdemelné már a békés, boldog öregkort.</p>
      <p>Bár a múltja nem volt könnyű, Milor tiszta szívvel fordul a világ felé: rendkívül barátságos, kedves és aranyos, és egyszerűen imádja a simogatást meg a törődést. A mindennapokban kiegyensúlyozott társ, pórázon pedig nagyon szépen sétál. A szuka kutyákkal nagyon jó a viszonya, a kanokkal szemben kicsit dominánsabb.</p>
      <p>Olyan türelmes, szerető gazdit keresünk Milor számára, aki örökbefogadásával megadja neki a lehetőséget, hogy élete hátralévő részében végre ő is megtapasztalhassa, milyen az, amikor igazán szeretik!</p>
    `,
    featured: false
  },
  {
    id: "k27",
    name: "Gyémánt",
    gender: "szuka",
    size: "kozepes",
    bornAt: "2024-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "2 év",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K27 (1).jpg",
      "images/GAZDIT KERESNEK/K27 (2).jpg",
      "images/GAZDIT KERESNEK/K27 (3).jpg",
      "images/GAZDIT KERESNEK/K27 (4).jpg",
      "images/GAZDIT KERESNEK/K27 (5).jpg",
      "images/GAZDIT KERESNEK/K27 (6).jpg",
      "images/GAZDIT KERESNEK/K27 (7).jpg",
      "images/GAZDIT KERESNEK/K27 (8).jpg",
      "images/GAZDIT KERESNEK/K27 (9).jpg",
      "images/GAZDIT KERESNEK/K27 (10).jpg"
    ],
    tags: [],
    description: `
      <p>Gyémánt egy állatvédő szervezet mentettje: leírhatatlanul rossz állapotban, egy háztól láncra verve vették ki a sanyarú körülményei közül. Borzasztó sorsa volt, ám ennek ellenére hihetetlen módon továbbra is ennyire bízik az emberekben, és egy cseppet sem vesztette el a jóságát.</p>
      <p>Ő egy igazán imádni való, szinte tökéletes kutyus, akiről egyszerűen nem lehet rosszat mondani. Hihetetlenül barátságos, játékos és kedves természetű, aki imádja az embereket, a gyerekekkel pedig fantasztikusan kijön. Ráadásul igazi béketeremtő: minden egyes kutyatárssal remekül megtalálja a közös hangot.</p>
      <p>Mindent megérdemel, hogy végre egy szerető gazdára találjon, aki kárpótolja a nehéz múltért! Ha egy csupa szív, vidám és hűséges négylábú társat keresel, Gyémánt tiszta szívvel várja, hogy végre egy igazán gondoskodó család kincse lehessen.</p>
    `,
    featured: false
  },
  {
    id: "k28",
    name: "King",
    gender: "kan",
    size: "nagy",
    bornAt: "2023-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "3 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K28 (1).jpg",
      "images/GAZDIT KERESNEK/K28 (2).jpg",
      "images/GAZDIT KERESNEK/K28 (3).jpg",
      "images/GAZDIT KERESNEK/K28 (4).jpg",
      "images/GAZDIT KERESNEK/K28 (5).jpg",
      "images/GAZDIT KERESNEK/K28 (6).jpg",
      "images/GAZDIT KERESNEK/K28 (7).jpg",
      "images/GAZDIT KERESNEK/K28 (8).jpg",
      "images/GAZDIT KERESNEK/K28 (9).jpg",
      "images/GAZDIT KERESNEK/K28 (10).jpg",
      "images/GAZDIT KERESNEK/K28 (11).jpg"
    ],
    tags: [],
    description: `
      <p>King egy lovastanya környékén bukkant fel, onnan mentették, miután magányosan kóborolt. Mivel még nemrég érkezett hozzánk, jelenleg az ismerkedés és a beilleszkedés fázisában jár, de máris megmutatta csodálatos, nyitott természetét.</p>
      <p>Ő egy kifejezetten kedves, okos és barátságos fiú, aki napról napra bátrabban nyit az emberek felé, és keresi a társaságukat. A mindennapokban nagyon együttműködő, pórázon kifejezetten szépen sétál.</p>
      <p>Olyan türelmes és szerető gazdit keresünk King számára, aki örökbefogadásával megadja neki a biztonságot, és segít neki teljesen feloldódni, hogy egy igazán hűséges, csodálatos társsá válhasson az új otthonában!</p>
    `,
    featured: false
  },
  {
    id: "k29",
    name: "Lucky",
    gender: "kan",
    size: "nagy",
    bornAt: "2019-11",
    approxAge: false,
    ageCategory: "felnott",
    ageText: "7 éves",
    virtualOwner: "",
    gallery: [
      "images/GAZDIT KERESNEK/K29 (1).jpg",
      "images/GAZDIT KERESNEK/K29 (2).jpg",
      "images/GAZDIT KERESNEK/K29 (3).jpg",
      "images/GAZDIT KERESNEK/K29 (4).jpg",
      "images/GAZDIT KERESNEK/K29 (5).jpg",
      "images/GAZDIT KERESNEK/K29 (6).jpg",
      "images/GAZDIT KERESNEK/K29 (7).jpg",
      "images/GAZDIT KERESNEK/K29 (8).jpg",
      "images/GAZDIT KERESNEK/K29 (9).jpg",
      "images/GAZDIT KERESNEK/K29 (10).jpg",
      "images/GAZDIT KERESNEK/K29 (11).jpg",
      "images/GAZDIT KERESNEK/K29 (12).jpg",
      "images/GAZDIT KERESNEK/K29 (13).jpg"
    ],
    tags: [],
    description: `
      <p>Lucky egy gyönyörű, németjuhász fiú, aki élete első 7 évét egy telephelyen töltötte őrkutyaként, kis helyre bezárva. Bár a múltja miatt most időre van szüksége a megnyugváshoz, a szíve mélyén egy hihetetlenül barátságos társ.</p>
      <p>Az esze a fajtájához méltóan rendkívli, és a főbb vezényszavakat is ismeri, ám az együttműködést és azt, hogy igazán figyeljen az emberekre, még tanulnia kell – éppen ezért jár jelenleg fejlesztő terápiára. Emberekkel ettől függetlenül kifejezetten közvetlen, imádja a társaságukat.</p>
      <p><strong>Fontos információ:</strong> Lucky jelenleg még nem fogadható örökbe, de már lehet rá jelentkezni, valamint személyesen is meg lehet vele ismerkedni a menhelyen! Ha egy okos, hűséges és csodálatos németjuhász társra vágysz, akivel már most el lehet kezdeni az ismerkedést a közös jövő reményében, Lucky izgatottan várja a jelentkezésedet!</p>
    `,
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

function getDogTotalMonths(dog) {
  if (!dog || !dog.bornAt) return null;

  const [yearStr, monthStr] = String(dog.bornAt).split("-");
  const birthYear = Number(yearStr);
  const birthMonth = Number(monthStr);

  if (!birthYear || !birthMonth || birthMonth < 1 || birthMonth > 12) {
    return null;
  }

  const now = new Date();
  const months = (now.getFullYear() - birthYear) * 12 + (now.getMonth() + 1 - birthMonth);
  return Math.max(0, months);
}

function getDogAgeText(dog) {
  const totalMonths = getDogTotalMonths(dog);
  if (totalMonths === null) {
    return dog.ageText || "—";
  }

  const prefix = dog.approxAge ? "~" : "";

  if (totalMonths < 12) {
    const months = Math.max(1, totalMonths);
    return `${prefix}${months} hónapos`;
  }

  const years = Math.floor(totalMonths / 12);
  return `${prefix}${years} éves`;
}

function getDogAgeCategory(dog) {
  const totalMonths = getDogTotalMonths(dog);
  if (totalMonths === null) {
    return dog.ageCategory || "felnott";
  }

  if (totalMonths <= 6) return "kolyok";   // 0–6 hónapos
  if (totalMonths <= 18) return "fiatal";  // 7–18 hónapos
  if (totalMonths < 96) return "felnott";  // 1,5–8 éves (19–95 hónap)
  return "idos";                           // 8 éves kortól (96+ hónap)
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
  const ageLabel = getDogAgeText(dog);

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
          <p class="text-xs text-stone-500 font-medium capitalize">${formatSize(dog.size)} • ${ageLabel}</p>
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

  const ageLabel = getDogAgeText(dog);

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

          <!-- Életkor és méret -->
          <div class="grid grid-cols-2 gap-2 text-stone-700">
            <div class="bg-[#faf7f2] p-2.5 rounded-xl border border-[#eedfcc]">
              <span class="text-[10px] text-stone-400 block uppercase font-bold">Életkor</span>
              <strong class="text-xs font-semibold">${ageLabel}</strong>
            </div>
            <div class="bg-[#faf7f2] p-2.5 rounded-xl border border-[#eedfcc]">
              <span class="text-[10px] text-stone-400 block uppercase font-bold">Méret</span>
              <strong class="text-xs font-semibold">${formatSize(dog.size)}</strong>
            </div>
          </div>

          <div class="space-y-3 text-stone-600 text-sm leading-relaxed">
            ${dog.description}
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