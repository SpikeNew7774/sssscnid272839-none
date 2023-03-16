if (!mainVideo.src) {
    document.getElementById("loadgif").style.display = "block"
  }
  
  
  
  
  fetch('https://player.odycdn.com/api/v3/streams/paid/ggg_spedupsong/1a960bccc0007af0264b10e8d36cf6fb7bc38a2f/789972/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJnZ2dfc3BlZHVwc29uZy8xYTk2MGJjY2MwMDA3YWYwMjY0YjEwZThkMzZjZjZmYjdiYzM4YTJmIiwidHhpZCI6Im93bmVyIiwiZXhwIjoxNjc5MDg4NjM4LCJpYXQiOjE2Nzg5ODE5MTl9.clXEIxu96TeChNoujsxwo2liZngY9PkMtDS6i-4FG26WoDhhKQNJ5bWAE9510GDhl_N3IjTFDvZERjGy3PzAEeR501midoSYD2ozZZHvP7Dxow-sfxcMtFYLJgJ-NQ4_gid5VSVAxuuhcfXaLMqEWJhUMcdKRzwvpI7kuQLrtqRs4CQfT6oMYbhKhRCVKzGJklfh5c7ty8GSiKlx8y9e3XdO-jSzSCH5CcGeFCiZ6S3JZBFGPcOTkcMpvRJgFi_94ztZqUNSCAupFnLLghpg10WtX5MmsduG7KekbQV7KvHEDC8gxeujXHj9HNqkVlh-WEtzJI1LVNXt7eYmtwSTSw')
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