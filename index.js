import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(async () => {
  const res = await fetch("https://api.bloxflip.com/chat/history")
  const data = await res.json()
  client.guilds.cache.get("981177116357967872")
}, 30000)

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'rain') {
    const res = await fetch("https://api.bloxflip.com/chat/history")
    const data = await res.json()
    console.log(data.rain)
    await interaction.reply(`rain: ${data.rain.active}\nprize: ${data.rain.prize}\n`);
  }
});

client.login("ODEzNDg3MzMzNDc0Njk3Mjk2.GSny_D.RZnoCJHqUrZA4S3dhpHRRY_M3WSR_FHsLUwkpA");