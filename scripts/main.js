import { posts } from "./posts.js";

// main.js
document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');

    postList.innerHTML = posts.map(post => `
      <div class="post-box">
        <div>
          <h2><a href="full-post.html?id=${post.id}">${post.title}</a></h2>
          <img src="${post.coverImage}" alt="${post.title}">
          <p>${post.summary}</p>
        </div>
        <div class="button-box">
          <a href="full-post.html?id=${post.id}">Read More</a>
        </div>  
      </div>
      `).join("");

  });
  