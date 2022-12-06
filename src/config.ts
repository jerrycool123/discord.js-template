import {
  // GatewayIntentBits,
  PermissionFlagsBits,
} from 'discord.js';

export const DEFAULT_PORT = 5000;

// Config required gateway intents
export const requiredIntents = [];

// Config admin permission set
export const AdminPermissions = PermissionFlagsBits.Administrator | PermissionFlagsBits.ManageGuild;

// Import custom commands
import test from './commands/test';

export const commands = [test];

// Import custom event handlers
import ready from './handlers/ready';
import interactionCreate from './handlers/interaction-create';

export const handlers = [ready, interactionCreate];

// Import custom routines
import type CustomBotRoutine from './routines';

export const routines: CustomBotRoutine[] = [];

// Print custom config

export const showCustomConfig = () => {
  console.log('\n# Custom Commands:');
  for (const command of commands) {
    console.log(
      '-',
      (command.data.name ?? '<unknown command>') + ':',
      command.data.description?.slice(0, 32) ?? '',
    );
  }
  console.log('\n# Custom Handlers:');
  for (const handler of handlers) {
    console.log('-', handler.name);
  }
  console.log('\n# Custom Routines:');
  for (const routine of routines) {
    console.log('-', routine.name, routine.interval + 'ms');
  }
  console.log('');
};
