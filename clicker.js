let cps = Number(localStorage.getItem("cps"))
let clicks = Number(localStorage.getItem("clicks"));

if (localStorage.getItem("cps") === null) {
  cps = 0;   
}

function setClicks() {
  document.getElementById("Count").innerText = "Clicks: " + clicks;
  localStorage.setItem("clicks", clicks);
};

function setCPS() {
  if (cps % 1 === 0) {
    document.getElementById("cps").innerText = "CPS: " + cps + "x";
  } else {
    document.getElementById("cps").innerText = "CPS: " + cps.toFixed(1) + "x";
  }
  localStorage.setItem("cps", cps)
  updateCPS()
};

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
  clicks += 1;
  setClicks()
};

// CPS Interval
let CPSInterval = setInterval(() => {alert("Infinity Seconds Have Passed, You Have Conquered The Redundant SetInterval()\n\
This means the game is broken btw, try refreshing the page")}, Infinity)

function updateCPS() {
  clearInterval(CPSInterval)
  CPSInterval = setInterval(() => {
    if (cps <= 0) return;
    clicks += 1
    setClicks()
  }, 1000/cps)
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

    // Clicks
    clicks = 0;
    setClicks();

    // CPS
    cps = 0;
    setCPS();
    updateCPS()

    // Upgrades
    upgrades.cursorPrice = 15
    setUpgrades("cursor")
  };
};

// Figure out a way to store a users clicks in storage.
// preferable server side storage so they can't change it.
// For github readers, i'll probably use localStorage for a long time because it's easy to change
// variables and test as I update the code

// These run when the site loads
// I've put them down here so I don't have to deal with error "Can't access x before initialization"
setClicks();
setCPS();

function fetchOEmbed() {
  // Replace "oembed.json" with the path to your JSON file
  fetch("oembed.json")
    .then(response => response.json())
    .then(data => {
      if (data.html) {
        document.getElementById('embed-container').innerHTML = data.html;
      } else {
        console.error('Failed to retrieve oEmbed data');
      }
    })
    .catch(error => console.error('Error fetching oEmbed:', error));
}

fetchOEmbed()