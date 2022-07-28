module.exports = {
  async handleHelp(sock, resolve, m) {
    const commandsObj = require("../json/responses.js");
    const commands = commandsObj.commands;
    let helpMsg = "👸🏾 Help List here friend. \n";
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      msg =
        " 📔 Description : " +
        command.description +
        "\n 🕹️ Command: " +
        command.command +
        "\n Example Usage: " +
        command.example +
        "\n\n";
      helpMsg += msg;
    }
    try {
      sock.sendMessage(resolve.sender, { text: helpMsg }, { quoted: m });
    } catch (er) {
      sock.sendMessage(
        resolve.sender,
        { text: "Help list not available now. " },
        { quoted: m }
      );
    }
  },
};
