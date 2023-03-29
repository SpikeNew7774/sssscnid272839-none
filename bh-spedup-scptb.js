if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('https://spikenew7774.github.io/sss-stream-vids/bhjs-spedup/bhjs-spedup.mp4')
      .then(res => res.blob())
      .then(res => generateURL(res))
  
  function generateURL(blob) {
  
      const url = URL.createObjectURL(blob);
  
      mainVideo.src = url
      mainVideo.textContent = "";
      mainVideo.style.display = "block"
  
      if (mainVideo.src == url) {
        document.getElementById("loadgif").style.display = "none"
        document.getElementById("hst").style.display = "none"
  
      }
  
  };
