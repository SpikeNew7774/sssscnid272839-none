if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('https://sssstreamvideos.prazenaokurka9.repl.co/gd-retray-1attempt/265314987/streamvids/gd-retray-1attempt.mp4')
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
