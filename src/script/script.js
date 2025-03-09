let isClick_menubtn = false;

function toggleMenue() {
  console.log("click");
  const menu = document.getElementById("Dropdown_Menu");

  if (isClick_menubtn) {
    console.log("true");
    menu.style.display = "none";
  } else {
    console.log("false");
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
  }

  isClick_menubtn = !isClick_menubtn;
}

document.getElementById("menue_btn").addEventListener("click", toggleMenue);

const comment = document.getElementById("note");
const User1 = document.getElementById("users_1");
User1.addEventListener("click", function () {
  comment.textContent =
    "I love the clean and modern design of your website! The navigation is intuitive, and everything loads quickly. The color scheme is pleasing to the eye, and the typography is easy to read. Great job on making it mobile-friendly as well!";
});

const User2 = document.getElementById("users_2");
User2.addEventListener("click", function () {
  comment.textContent =
    "The design is visually appealing, but some text elements could use more contrast for better readability. You might want to adjust the font color or background to improve accessibility.";
});

const User3 = document.getElementById("users_3");
User3.addEventListener("click", function () {
  comment.textContent =
    "I really like the layout and responsiveness of the site! However, some images take a bit longer to load. Optimizing image sizes or using lazy loading could enhance performance.";
});

const User4 = document.getElementById("users_4");
User4.addEventListener("click", function () {
  comment.textContent =
    "The website's navigation is intuitive, but a sticky header might make it even easier for users to access the menu without scrolling back up. It would improve the overall user experience!";
});
