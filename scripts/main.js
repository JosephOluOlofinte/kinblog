import { posts } from "./posts.js";

// main.js
document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const postTitle = document.getElementById('post-title');
    const postImg = document.getElementById('post-img');
    const postSum = document.getElementById('post-sum');
    const postLink = document.getElementById('post-link');
  
    // Loop through the posts array and create a summary for each post
    // posts.forEach(post => {
    //   const postElement = document.createElement('div');
    //   postElement.className = "post";
  
    //   postElement.innerHTML = `
    //     <h2>${post.title}</h2>
    //     <img src="${post.coverImage}" alt="${post.title}">
    //     <p>${post.summary}</p>
    //     <a href="full-post.html?id=${post.id}">Read More</a>
    //   `;

    postList.innerHTML = posts.map(post => `
      <div class="post-box">
        <h2>${post.title}</h2>
        <img src="${post.coverImage}" alt="${post.title}">
        <p>${post.summary}</p>
        <div class="button-box">
          <a href="full-post.html?id=${post.id}">Read More</a>
        </div>  
      </div>
      `)


  
    //   postList.appendChild(postElement);
    // });
  });
  