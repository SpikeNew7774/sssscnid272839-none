if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('https://player.odycdn.com/api/v3/streams/paid/85sgtd85agtyhd8shyd/6bdc163e0c3847bd9066a2c588a95ab9cdd5873c/f63e00/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI4NXNndGQ4NWFndHloZDhzaHlkLzZiZGMxNjNlMGMzODQ3YmQ5MDY2YTJjNTg4YTk1YWI5Y2RkNTg3M2MiLCJ0eGlkIjoib3duZXIiLCJleHAiOjE2NzkwMTE3NDIsImlhdCI6MTY3ODk4MzcyMn0.S_QrMOHYm4WKriPlIKVObgrF8C1ky7KhXQjx6SIF2HEsxMKtc-R9lMDbwARwxcQxAfIiOP59JjduSQ6Yziq5NvhvMujz00JmHQcXSSCOAYpYURMBJbs7Ed4f_xKlDTIVQ5do61pqsPBL1BjKyXGCqfRaVDFI9DhCiU2dt9QBumSb8hC-HcrH1D3i3585PdXv6pOUWabafJRXaKFfNh40Y3i-0HJdrQ7Z1Ia7nvS_vbEjJGeQwZT8vn-BwoiqcdPk-ucnStz6JHu7yHY2a9QQtO10SwxY8E0ir9uQkvgnqqIgy7qyoUAGovJwFYx2cfInfzW1rDd42cWoRYKaQz44ig')
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