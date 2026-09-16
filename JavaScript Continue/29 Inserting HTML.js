// Inserting html using insertAdjacentHTML method

//afterbegin: Inserts the specified HTML as the first child of the element
//beforebegin: Inserts the specified HTML before the element
//afterend: Inserts the specified HTML after the element
//beforeend: Inserts the specified HTML as the last child of the element
let hero = document.querySelector(".hero");
hero.insertAdjacentHTML("afterbegin", "<h1>This is a heading inserted using insertAdjacentHTML afterbegin</h1>");

hero.insertAdjacentHTML("beforebegin", "<p>This is a paragraph inserted using insertAdjacentHTML before the hero element (beforebegin)</p>");

hero.insertAdjacentHTML("afterend", "<p>This is a paragraph inserted using insertAdjacentHTML after the hero element (afterend)</p>");

hero.insertAdjacentHTML("beforeend", "<p>This is a paragraph inserted using insertAdjacentHTML as the last child of the hero element (beforeend)</p>");

