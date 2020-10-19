let sound = {
    init: () => {
        document.addEventListener('click', handleClick);
        window.addEventListener('keydown', performClick);
    },

    library : 1
}

function performClick(event) {

    let element = document.getElementById(event.key);
    element.click();

}

function handleClick(event) {
    playSound(event.target.id);
    event.target.classList.add("active");
    removeClass(event.target);
};


function playSound(number) {
    let x = document.getElementById("play" + number)
    x.currentTime = 0;
    x.play();
}

function removeClass(target) {
    setTimeout(
        () => {
            target.classList.remove("active");
        }, 100);
}