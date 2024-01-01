let cps = Number(localStorage.getItem("cps"))
let clicks = Number(localStorage.getItem("clicks"));

if (localStorage.getItem("cps") === null) {
  cps = 1;   
}

function setClicks() {
  document.getElementById("Count").innerText = "Computers: " + Math.round(clicks);
  localStorage.setItem("clicks", clicks);
};
setClicks();

function setCPS() {
  document.getElementById("cps").innerText = "CPS: " + cps + "x";
  localStorage.setItem("cps", cps)
};
setCPS();

let upgrades = {
  cursorPrice: Number(localStorage.getItem("cursorPrice")),
  cursorMultiplier: 0.1
}
if (localStorage.getItem("cursorPrice") === null) {
  upgrades.cursorPrice = 15
}

function setUpgrades(value) {
  document.getElementById(value).innerText = "$" + Math.ceil(upgrades[value + "Price"]);
  localStorage.setItem(value + "Price", upgrades[value + "Price"])
}
setUpgrades("cursor")

function addClicks() {
  clicks += cps;
  setClicks()
};

function addCPS() {
  //setInterval(1, 1/cps)
  //then we need to cancel setInterval() when cps value updates
  //so the trigger will be in setCPS()
  //then we need to make a new setInterval() with the new CPS values
}

function upgrade(value) {
  const price = Math.ceil(upgrades[value + "Price"])
  const multiplier = upgrades[value + "Multiplier"]
  if (clicks >= price) {
    clicks -= price;
    setClicks();
    cps += multiplier;
    setCPS();
    upgrades[value + "Price"] *= 1.15;
    setUpgrades(value)
  } else {
    alert("not enough clicks. you need " + (price - clicks) + " more cookies")
  }
};

function resetData() {
  // Reset all data in localstorage
  const resetProgress = confirm("are you sure you want to reset all your progress?");
  if (resetProgress) {
    localStorage.clear();
    clicks = 0;
    setClicks();
    cps = 1;
    setCPS();
    upgrades.cursorPrice = 15
    setUpgrades("cursor")
  };
};

// Figure out a way to store a users clicks in storage.
// preferable server side storage so they can't change it.