import type { ApplicationCommandOptionBase } from 'discord.js';

const genericOption =
  <T extends ApplicationCommandOptionBase>(name: string, description: string, required?: boolean) =>
  (option: T) =>
    option.setName(name).setDescription(description).setRequired(!!required);

export default genericOption;
