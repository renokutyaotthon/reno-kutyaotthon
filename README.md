# 🐾 Rénó Kutyaotthon - Letisztult, Modern Weboldal

A **Rénó Kutyaotthon & Menhely** modern, letisztult, többoldalas weboldala.

A weboldal azonnal tesztelhető a böngésződben a helyi tesztszerveren:
👉 **http://localhost:8080/**

Vagy megnyitható közvetlenül az `index.html` fájlra duplán kattintva.

---

## 📁 Oldalstruktúra (Különálló oldalak)

- **`index.html`** – **Kezdőlap**: Fő üzenet, a menhely három alappillére, kiemelt gazdikereső kutyusok előnézete, diszkrét támogatási és Adó 1% sáv.
- **`gazdit-keresnek.html`** – **Gazdit keresnek**: Teljes kutyakatalógus valós idejű keresővel, méret-, kor- és nemszűrővel, elmenthető kedvencek (❤️) listával, és részletes profil modallal.
- **`rolunk.html`** – **Rólunk & Hogyan segíthetsz**: A menhely története, altatásmentes hitvallása, önkéntes lehetőségek (séta, ideiglenes befogadás, adomány, fuvar), Adó 1% útmutató és banki adatok.
- **`kapcsolat.html`** – **Kapcsolat & Látogatás**: Elérhetőségek, valós idejű nyitvatartási állapotjelző, cím és modern üzenetküldő űrlap.

---

## 🛠️ Kutyaadatok és szövegek módosítása

A kutyusok adatai a [`js/app.js`](js/app.js) fájl elején található `DOGS_DATA` listában szerkeszthetők:
- Név, életkor, fajta, méret, nem
- Képek (a letöltött fotók az [`images/`](images/) mappában találhatók)
- Leírás és jellemzők
