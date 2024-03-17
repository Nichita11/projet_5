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


let carrousel = document.getElementById("banner")
console.log(carrousel)

let gauche = document.querySelector("#banner .arrow_left")
console.log(gauche)
let droite = document.querySelector("#banner .arrow_right")
console.log(droite)

gauche.addEventListener("click", (event) => {
	console.log("J ai clique sur la gauche")
})
droite.addEventListener("click", (event) => {
	console.log("J ai clique sur la droite")
})

