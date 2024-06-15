let btn = document.querySelector(".circle");
let currMode = "light";
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector(".rectangle").style.border = "3px solid white";
        btn.style.border = "3px solid white";
        btn.classList.add("move-right");
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        document.querySelector(".rectangle").style.border = "2px solid black";
        btn.style.border = "2px solid black";
        btn.classList.remove("move-right");
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
