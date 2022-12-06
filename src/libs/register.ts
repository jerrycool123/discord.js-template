import { REST } from '@discordjs/rest';
import { Routes, type Client } from 'discord.js';

import Env from './env';
import { commands, handlers, routines } from '../config';

const rest = new REST({ version: '10' }).setToken(Env.DISCORD_BOT_TOKEN);

export const registerBotCommands = async (guildId: string) => {
  rest
    .put(Routes.applicationGuildCommands(Env.DISCORD_BOT_CLIENT_ID, guildId), {
      body: commands.map(({ data }) => data),
    })
    .then(() => console.log(`Successfully registered application commands to guild ${guildId}.`))
    .catch(console.error);
};

export const registerBotEvents = (client: Client<boolean>) =>
  handlers.forEach((handler) => handler.register(client));

export const registerBotRoutines = (client: Client<boolean>) =>
  routines.forEach((routine) => routine.start(client));
