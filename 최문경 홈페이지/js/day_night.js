const moonPath = "M19.5 31C19.5 48.1208 33.1611 62 31 62C13.8792 62 0 48.1208 0 31C0 13.8792 13.8792 0 31 0C31 0 19.5 13.8792 19.5 31Z";
const sunPath = "M62 31C62 48.1208 48.1208 62 31 62C13.8792 62 0 48.1208 0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31Z";
const darkMode = document.querySelector("#darkMode");
const mode = document.querySelector(".mode");
let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
        targets: ".sun",
        d: [{value: toggle ? sunPath: moonPath}]
    })
    .add({
        targets: "#darkMode",
        rotate: toggle? 0 : 320
    }, "-=350")
    .add({
        targets: "article",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)",
    }, "-=700")
    mode.innerHTML = toggle ? "Day Mode" : "Dark Mode";
    toggle = !toggle;
});