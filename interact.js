document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function scrollHandler() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const cloud1 = document.querySelector(".cloud1");
  const cloud2 = document.querySelector(".cloud2");
  const cloud3 = document.querySelector(".cloud3");
  const cloud4 = document.querySelector(".cloud4");

  cloud1.style.transform = `translate3d(0, ${scrollTop * 0.4}px, 0)`;
  cloud2.style.transform = `translate3d(0, ${scrollTop * 0.3}px, 0)`;
  cloud3.style.transform = `translate3d(0, ${scrollTop * 0.6}px, 0)`;
  cloud4.style.transform = `translate3d(0, ${scrollTop * 0.6}px, 0)`;
}

window.addEventListener("scroll", scrollHandler);

const toggleSwitch = document.querySelector("#dark-mode-toggle");
const bodyElement = document.querySelector("body");

function applyDarkMode(isDark) {
  if (isDark) {
    bodyElement.setAttribute("data-theme", "dark");
  } else {
    bodyElement.removeAttribute("data-theme");
  }
}

toggleSwitch.addEventListener("change", (e) => {
  applyDarkMode(e.target.checked);
  localStorage.setItem("darkMode", e.target.checked);
});


const savedDarkMode = localStorage.getItem("darkMode") === "true";
toggleSwitch.checked = savedDarkMode;
applyDarkMode(savedDarkMode);

function toggleTheme() {
  var body = document.body;
  var currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
}

// const snippet1 = document.getElementById("snippet1");
// const snippet2 = document.getElementById("snippet2");

// const code1 = snippet1.textContent.trim();
// const code2 = snippet2.textContent.trim();

// snippet1.textContent = "";
// snippet2.textContent = "";

// function typeCode(element, code, index) {
//   if (index < code.length) {
//     element.textContent += code[index];
//     setTimeout(() => typeCode(element, code, index + 1), 5);
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   typeCode(snippet1, code1, 0);
//   setTimeout(() => {
//     typeCode(snippet2, code2, 0);
//   }, code1.length * 5);
// });
// collect all the elements with class 'snippet'
const snippetElements = document.querySelectorAll('.snippet');

const snippets = Array.from(snippetElements).map((snippetElement) => {
  const code = snippetElement.textContent.trim();
  snippetElement.textContent = '';
  return { element: snippetElement, code: code };
});

function typeCode(snippet, index) {
  if (index < snippet.code.length) {
    snippet.element.textContent += snippet.code[index];
    setTimeout(() => typeCode(snippet, index + 1), 5);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  let delay = 0;
  for (let i = 0; i < snippets.length; i++) {
    setTimeout(() => {
      typeCode(snippets[i], 0);
    }, delay);
    delay += snippets[i].code.length * 5;
  }
});




