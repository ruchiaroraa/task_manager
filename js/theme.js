const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener(
"click",
() => {

const html =
document.documentElement;

if(
html.dataset.theme === "light"
){

html.dataset.theme = "dark";

html.setAttribute(
"data-theme",
"dark"
);

html.classList.add("dark");

}else{

html.dataset.theme = "light";

html.setAttribute(
"data-theme",
"light"
);

html.classList.remove("dark");

}

});