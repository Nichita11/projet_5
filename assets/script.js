const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let image = document.querySelector(".banner-img")

let carrousel = document.getElementById("banner")

let gauche = document.querySelector("#banner .arrow_left")

let droite = document.querySelector("#banner .arrow_right")

let currentIndex = 0 

function afficherSlide (index) {
	image.setAttribute("src", `/assets/images/slideshow/${slides[index].image}`);
}

gauche.addEventListener("click", (event) => {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    afficherSlide(currentIndex);
});
droite.addEventListener("click", (event) => {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    afficherSlide(currentIndex);
});






