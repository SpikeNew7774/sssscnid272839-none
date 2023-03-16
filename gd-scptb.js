if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('https://player.odycdn.com/api/v3/streams/paid/5wgfust85sdfhggGf/944bfed241655d7e6dcf4ffad102a78cf171fc58/0e0ed5/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI1d2dmdXN0ODVzZGZoZ2dHZi85NDRiZmVkMjQxNjU1ZDdlNmRjZjRmZmFkMTAyYTc4Y2YxNzFmYzU4IiwidHhpZCI6Im93bmVyIiwiZXhwIjoxNjc5MDQ4Nzc5LCJpYXQiOjE2Nzg5ODQyMjZ9.MWAlPtXYHgpbm5YdtuI_yFCEU9gN33Yb2AkdUwVsSxfsaLe-XUhTlSg60ktlKRrmD7a-VLZ3Cub_iZY0Te5N4NL7e-wJoDJcYIwNw6OjcRR4nJmJjYt8QmuSQS1gp6iYbiy6vyJriyJFZjyBUEgNjpymD_x711Reh-ds-c3V-4yS3O58r6NBVDItu9ef1nMnAMFqblqQgMyKGmuxo6qjUDwrqYmki3wbtskE8KL0ly9eUQNsbgBJwHD1Wr1b5N8PJs51xbrkMk4rNzK8koo9C_MRL0ameUFAdVGiBMj-TRnBnY2NVmkUfzbsDdMcNb85ZZSAJ_jfFpF5UTCRQ_0k1w')
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