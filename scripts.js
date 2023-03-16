document.addEventListener("DOMContentLoaded", function () {
  fetchBlogPosts();
});

function fetchBlogPosts() {
  const blogContainer = document.getElementById("media-container");
  const posts = ["TamingTaxComp.html", "post2.html", "post3.html"];

  posts.forEach((post) => {
    fetch(post)
      .then((response) => response.text())
      .then((html) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("media-post");
        postDiv.innerHTML = html;
        blogContainer.appendChild(postDiv);
      })
      .catch((error) => {
        console.warn("Error fetching post:", error);
      });
  });
}
