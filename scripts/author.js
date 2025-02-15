

import { posts } from "./posts.js";

document.addEventListener('DOMContentLoaded', () => {
  //code only executes after html is fully loaded
  
// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const author = urlParams.get("author");

// Display posts in the selected category
document.title = "Author info - " + author;
const postContainer = document.getElementById("author-posts");
const filteredPosts = posts.filter(post => post.author === author);
const title = document.getElementById("title");

if (filteredPosts.length === 0) {
    postContainer.innerHTML = `<p>No posts found for ${author}.</p>`;
} else {

    title.innerHTML = `Posts by ` + author;
    postContainer.innerHTML = filteredPosts.map(post => `
        <div class="post-box">
          <div>
            <h2><a href="full-post.html?id=${post.id}">${post.title}</a></h2>
            <div>
              <img src="${post.coverImage}" alt="${post.title}">
            </div
            <p>${post.summary}</p>
          </div>
          <div class="button-box">
            <a href="full-post.html?id=${post.id}">Read More</a>
          </div>  
        </div>
        `).join("");
}
});