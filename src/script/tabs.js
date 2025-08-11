window.addEventListener("load", () => {
  const messageButton = document.querySelector(".hero .glass .messages-tab");
  const commentsButton = document.querySelector(".hero .glass .comments-tab");
  const messageTab = document.querySelector(".hero .glass .messages");
  const commentTab = document.querySelector(".hero .glass .comments");

  const toggleTo = (page) => {
    if (page === "message") {
      if (messageButton.classList.contains("active")) {
        return;
      }
      commentsButton.classList.remove("active");
      commentTab.classList.add("active");
      messageButton.classList.add("active");
      messageTab.classList.remove("active");
    } else {
      if (commentsButton.classList.contains("active")) {
        return;
      }
      commentsButton.classList.add("active");
      commentTab.classList.remove("active");
      messageButton.classList.remove("active");
      messageTab.classList.add("active");
    }
  };

  messageButton.addEventListener("click", () => toggleTo("message"));
  commentsButton.addEventListener("click", () => toggleTo("comment"));
});
