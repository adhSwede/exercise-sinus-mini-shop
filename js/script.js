// ===========================================================
//        exercise-sinus-mini-shop
// ===========================================================

// ----- References -----
const a1h3 = document.querySelector(".art-1 h3"); // 1
const homeBtn = document.querySelector("nav").children[0]; // 2
const contactBtn = document.querySelector("nav").children[2]; // 3
const a2info = document.querySelector(".art-2 p"); // 4
const fireBuyBtn = document.querySelector(".art-2 button"); // 5
const fireFigure = document.querySelector(".art-2 figure"); // 6
const adressArt = document.querySelector("footer section").children[1]; // 7
const allPs = document.querySelectorAll("p"); // 8
const buyBtns = document.querySelectorAll("main button"); // 9
const menu = document.querySelector("footer > section").firstElementChild; //12; moved this up to fix the redundant code on 10
const menuHome = menu.children[1]; // 10
const logo = document.querySelector("body > header > img"); // 11
const main = document.querySelector("main"); // 13

// ----- 1 -----
a1h3.innerText = "Potato";

// ----- 2 -----
homeBtn.innerText = "Start";

// ----- 3 -----
contactBtn.innerText = "Mail Us";

// ----- 4 -----
a2info.innerText = "A classic red hoodie, perfect for any occasion.";

// ----- 5 -----
fireBuyBtn.style.backgroundColor = "darkred";
fireBuyBtn.innerText = "sold out";

// ----- 6 -----
fireFigure.style.backgroundColor = "rgba(255, 100, 0, 1)";

// ----- 7 -----
adressArt.querySelector(
  "p"
).innerText = `Sinus skateboards \n Rumpnissevägen 13 \n 133 37, Rumpnäs`;

// ----- 8 -----
allPs.forEach((p) => {
  p.style.color = "hotpink";
});

// ----- 9 -----
buyBtns.forEach((btn) => {
  btn.innerText = "Add To Cart";
});

// ----- 10 -----
if (menuHome?.innerText.trim().toLowerCase() === "home") {
  // Just a check to see if the element I'm targeting is the "Home"-button.
  menuHome.classList.add("active");
}

// ----- 11 -----
//? logo.classList.remove("logo");
// Had to comment this one out to do #14

// ----- 12 -----
const newMenuItem = "<a href='#'>About Us</a>";
//did the heavy lifting in "References" section for this one.
menu.insertAdjacentHTML("beforeend", newMenuItem);

// ----- 13 -----
const newProduct =
  "<article class='art-4'> <figure><img src='img/hoodie-forrest.png' alt='hoodie'></figure><h2>Sinus Hoodie</h2><h3>Forest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p><button>buy</button></article>";

main.insertAdjacentHTML("beforeend", newProduct);

// ----- 14 -----
const foundYou = () => {
  console.log("found you!");
};

logo.addEventListener("click", foundYou);

// ----- 15 -----
const mainArts = document.querySelectorAll("[class^='art-']");

mainArts.forEach((art) => {
  // function to handle the click
  const artColor = () => {
    const colorName = art.querySelector("h3").textContent; // Get the color from h3
    console.log(`Hi, I'm article ${colorName}`);
  };

  // Add the event listener to each article
  art.addEventListener("click", artColor);
});
