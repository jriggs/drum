let sound = {
    init : () => 
        {
            document.addEventListener('click', handleClick);
            window.addEventListener('keydown', performClick);
        },


}

let library = 1;

function performClick(event){

    let element = document.getElementById(event.key);
    element.click();

}

function handleClick(event) {
    playSound(event.target.id);

	// If the clicked element doesn't have the right selector, bail

	// Don't follow the link
	event.preventDefault();
console.log(event.target.id);
	// Log the clicked element in the console
    event.target.classList.add("active");
    removeClass(event.target);
};


function playSound (number) {
    let x = document.getElementById("play" + number)
    x.currentTime = 0; 
    x.play();
}

function removeClass(target){
    setTimeout(
        ()=>{
        target.classList.remove("active");
        }, 100);
}
