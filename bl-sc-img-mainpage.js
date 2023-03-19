 // GGG SPEDUP IMG
  fetch('https://spikenew7774.github.io/sssscnid272839/images-sss/ggg-spedup/ggg-spedup.png')
  .then(res => res.blob())
  .then(res => generateIMG1(res))

function generateIMG1(blob) {

  const urlBlIMG1 = URL.createObjectURL(blob);
	document.querySelector("#ggg-spedup img").src = urlBlIMG1

};


 // BH - JS SPEDUP IMG
 fetch('https://spikenew7774.github.io/sssscnid272839/images-sss/babyhotline-spedup/thumbnail.webp')
 .then(res => res.blob())
 .then(res => generateIMG2(res))

function generateIMG2(blob) {

 const urlBlIMG2 = URL.createObjectURL(blob);
   document.querySelector("#bh-spedup img").src = urlBlIMG2

};

 // GD RETRAY - 1 ATTEMPT IMG
 fetch('https://spikenew7774.github.io/sssscnid272839/images-sss/gd-retray-1attempt/thumbnail.webp')
 .then(res => res.blob())
 .then(res => generateIMG3(res))

function generateIMG3(blob) {

 const urlBlIMG3 = URL.createObjectURL(blob);
   document.querySelector("#gd-retray-1attempt img").src = urlBlIMG3

};
