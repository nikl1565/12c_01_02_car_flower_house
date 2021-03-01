window.addEventListener("click", init);

function init() {
    const car = document.querySelector(".car");
    car.addEventListener("mouseover", () => {
        car.querySelector("#wheel-1").classList.add("rotate");
        car.querySelector("#wheel-2").classList.add("rotate");
    });
}
