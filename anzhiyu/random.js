var posts=["2025/09/16/hello-world/","2025/09/17/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };