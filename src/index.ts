import { Client } from 'discord.js';

import Env from './libs/env';
import dbConnect from './libs/mongodb';
import { registerBotEvents, registerBotRoutines } from './libs/register';
import { requiredIntents, showCustomConfig } from './config';

// Connect to MongoDB
dbConnect();

// Create a new client instance
const client = new Client({ intents: requiredIntents });

// Register event handlers
registerBotEvents(client);

// Register bot routines
registerBotRoutines(client);

// Login to Discord with your client's token
client.login(Env.DISCORD_BOT_TOKEN);

// Print custom config
showCustomConfig();
