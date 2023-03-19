// Script.js
fetch('https://spikenew7774.github.io/sssscnid272839/script.js')
    .then(res => res.blob())
    .then(res => generateFIL1(res))

    function generateFIL1(blob) {

    const urlBlFIL1 = URL.createObjectURL(blob);
    document.getElementById("fil1").src = urlBlFIL1
};
