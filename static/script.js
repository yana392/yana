const messageInput = document.getElementById("message-input");

setInterval(() => {
  if (messageInput.value === "") {
    window.location.reload();
  }
}, 5 * 1000);

function sayUser(message) {
  const chatbox ='<li><div class="balloon balloon-r">' + '<p class="say say-r">' + message + '</p>' + '</div></li>';
  $('#chat-area').append(chatbox);
  $(window).scrollTop($('#chat-area')[0].scrollHeight);
  }