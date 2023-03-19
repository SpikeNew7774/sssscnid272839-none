if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('https://www.youtube.com/watch?v=r48YMsdRwkQ')
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
  
  
  
  
  generateURL(blob);
