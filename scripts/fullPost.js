// full-post.js

import { posts } from "./posts.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));  // Get post ID from URL
  
    const post = posts.find(post => post.id === postId);  // Find the post by ID
  
    if (post) {
      const postDetail = document.getElementById('post-detail');
      postDetail.innerHTML = `
        <div class="post-meta">
          <h1>${post.title}</h1>
          <p>
            By <a href="author.html?author=${post.author}">${post.author} </a> in <a href ="category.html?category=${post.category}">${post.category}</a>
          </p>
        </div>
        <img src="${post.coverImage}" alt="${post.title}">
        <p>${post.content}</p>
      `;
    } else {
      document.getElementById('post-detail').innerHTML = "<p>Post not found.</p>";
    }
  });
  