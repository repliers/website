window.addEventListener("load", () => {
  const messageButton = document.querySelector(".hero .glass .messages-tab");
  const commentsButton = document.querySelector(".hero .glass .comments-tab");
  const messageTab = document.querySelector(".hero .glass .messages");
  const commentTab = document.querySelector(".hero .glass .comments");
  const messages = messageTab.querySelectorAll(".message");
  messages.forEach((message, i) => {
    setTimeout(() => {
      message.style.display = "flex";
      message.classList.add("fade-in");
    }, i * 300);
  });
  const toggleTo = (page) => {
    const comments = commentTab.querySelectorAll(".comment");
    const messages = messageTab.querySelectorAll(".message");
    if (page === "message") {
      if (messageButton.classList.contains("active")) {
        return;
      }
      commentsButton.classList.remove("active");
      commentTab.classList.add("active");
      comments.forEach((comment) => {
        comment.classList.remove("fade-in");
        comment.style.display = "hidden";
      });
      messages.forEach((message, i) => {
        setTimeout(() => {
          message.style.display = "flex";
          message.classList.add("fade-in");
        }, i * 300);
      });
      messageButton.classList.add("active");
      messageTab.classList.remove("active");
    } else {
      if (commentsButton.classList.contains("active")) {
        return;
      }
      comments.forEach((comment, i) => {
        setTimeout(() => {
          comment.style.display = "flex";
          comment.classList.add("fade-in");
        }, i * 300);
      });
      messages.forEach((message) => {
        message.classList.remove("fade-in");
        message.style.display = "hidden";
      });
      commentsButton.classList.add("active");
      commentTab.classList.remove("active");
      messageButton.classList.remove("active");
      messageTab.classList.add("active");
    }
  };

  messageButton.addEventListener("click", () => toggleTo("message"));
  commentsButton.addEventListener("click", () => toggleTo("comment"));
});
