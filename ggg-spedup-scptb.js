if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('/SzjBijgkuHkoXgRhpmmnpYdrMjNoPBEQvEhvmbkdJ2jg4SLUAS/ggg-spedup/files/stream/485123697/vid/gggvid.mp4')
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
