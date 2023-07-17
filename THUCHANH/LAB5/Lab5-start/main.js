const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

//const newImage = document.createElement('img');
//newImage.setAttribute('src', xxx);
//thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

// 20520510 

for(let i=1; i<=5;i++) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic'+ i +'.jpg' );
	thumbBar.appendChild(newImage);
	newImage.onclick = function(e) {
		displayedImage.src = e.target.src;
	}
}

btn.onclick = function(){
	const btnDarkLight = btn.getAttribute('class');
	if(btnDarkLight === 'dark'){
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	} else {
		btn.setAttribute('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
}
