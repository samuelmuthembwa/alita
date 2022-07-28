const commandsObj = require("./json/responses");
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

console.log(helpMsg);
