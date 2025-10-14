window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { title: "Post1", author: "Author1", body: "This is body of Post1" },
    { title: "Post2", author: "Author2", body: "This is body of Post2" },
    { title: "Post3", author: "Author3", body: "This is body of Post3" },
  ];

  function createPost(post, cb) {
    // this function creates a new post, but it takes 3 seconds in doing that...

    setTimeout(function () {
      posts.push(post);
      cb(); //this function will be called when new post is alreaddy pushed...
    }, 3000);
  }

  function getPosts() {
    setTimeout(function () {
      posts.forEach((post) => {
        document.querySelector("#output").innerHTML += `${post.title}<br/>`;
      });
    }, 1000);
  }

  //   createPost({
  //     title: "Post4",
  //     author: "Author4",
  //     body: "This is body of Post4",
  //   }); //in execution because it will take actually 3 seconds
  //   getPosts(); //it runs in 1 second,and the createPost() is not done yet inserting the new post, therefore we see only old 3 posts..

  createPost(
    { title: "Post4", author: "Author4", body: "This is body of Post4" },
    getPosts
  );
});
