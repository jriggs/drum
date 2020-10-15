document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	event.target.classList.add("active")
    removeClass(event.target);
}, false);

function removeClass(target){
    setTimeout(
        ()=>{
        target.classList.remove("active");
        }, 100);
    
    console.log(1);
}