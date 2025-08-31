function loadComments() {
  const commentsContainer = document.getElementById("comments");
  commentsContainer.innerHTML = "Loading comments...";

  if ("fetch" in window) {
    fetchCommentsAsync(commentsContainer);
  } else {
    fetchCommentsXHR(commentsContainer);
  }
}

async function fetchCommentsAsync(container) {
  try {
    const response = await fetch("/api/comments");
    const comments = await response.json();
    renderComments(container, comments);
  } catch (error) {
    container.innerHTML = "Failed to load comments. Please try again later.";
  }
}

function fetchCommentsXHR(container) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/comments");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const comments = JSON.parse(xhr.responseText);
      renderComments(container, comments);
    } else {
      container.innerHTML = "Failed to l,oas comments. Please try again later.";
    }
  };
  xhr.onerror = function () {
    container.innerHTML = "Failed to load comments. Please try again later.";
  };
  xhr.send();
}
