import { REST, Routes, SlashCommandBuilder } from "discord.js";

const rest = new REST({ version: "10" }).setToken(
  "ODEzNDg3MzMzNDc0Njk3Mjk2.GSny_D.RZnoCJHqUrZA4S3dhpHRRY_M3WSR_FHsLUwkpA"
);
const commands = []
const cmd = new SlashCommandBuilder();
cmd.setName("rain");
cmd.setDescription("Get the info on the current rain.");
commands.push(cmd.toJSON());
(async () => {
  try {
    console.log(
      `Started refreshing 1 application (/) commands.`
    );

    const data = await rest.put(
      Routes.applicationGuildCommands("813487333474697296", "981177116357967872"),
      { body: commands }
    );
    console.log(data)
  } catch (error) {
    console.error(error);
  }
})();
