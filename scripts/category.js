

import { posts } from "./posts.js";

// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// Display posts in the selected category
document.title = category + " - My Blog";
const postContainer = document.getElementById("category-posts");
const filteredPosts = posts.filter(post => post.category === category);

if (filteredPosts.length === 0) {
    postContainer.innerHTML = `<p>No posts found in this category.</p>`;
} else {
    filteredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post-item");
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <a href="${post.link}" class="read-more">Read More</a>
        `;
        postContainer.appendChild(postDiv);
    });
}