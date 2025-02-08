import { posts } from "./posts.js";

// main.js
document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
  
    // Loop through the posts array and create a summary for each post
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <img src="${post.coverImage}" alt="${post.title}">
        <p>${post.summary}</p>
        <a href="full-post.html?id=${post.id}">Read More</a>
      `;
  
      postList.appendChild(postElement);
    });
  });
  