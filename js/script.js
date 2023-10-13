const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],

    datasets: [
      {
        label: "BTC",
        data: [
          29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116,
          61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          90000, 61000, 71800, 26000, 32698, 5000, 3000, 18656, 24832, 36844,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "EUR",
        data: [
          24300, 4000, 87600, 26080, 36798, 5900, 38700, 18436, 24112, 32194,
        ],
        borderColor: "yellow",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// SHOW AND HIDE SIDEBAR

const menuBtn = document.querySelector(".menu__btn");
const closeBtn = document.querySelector("#close__btn");
const sideBar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});

// TOGGLE LIGHT AND DARK MODE
const themeBtn = document.querySelector(".theme__btn");

themeBtn.addEventListener("click", () => {
  let bodyClass = document.body.className;
  if (!bodyClass) {
    bodyClass = "dark__theme";
    document.body.className = bodyClass;
    // change theme icon
    themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
    // save theme to local storage
    window.localStorage.setItem("theme", bodyClass);
  } else {
    bodyClass = "";
    document.body.className = bodyClass;
    // change theme icon
    themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
    // save theme to local storage
    window.localStorage.setItem("theme", bodyClass);
  }
});

// load already existing theme
window.addEventListener("load", () => {
  document.body.className = window.localStorage.getItem("theme");
});
