import { posts } from "./posts.js";

document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById("post-list");
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <a href="${post.link}">Read More</a>
        `;
        postList.appendChild(postDiv);
    });
});
