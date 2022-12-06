import type { SlashCommandBuilder, ChatInputCommandInteraction, CacheType } from 'discord.js';

class CustomBotCommand {
  readonly data: Partial<SlashCommandBuilder>;
  readonly execute: (interaction: ChatInputCommandInteraction<CacheType>) => Promise<void>;

  constructor({
    data,
    execute,
  }: {
    data: Partial<SlashCommandBuilder>;
    execute: (interaction: ChatInputCommandInteraction<CacheType>) => Promise<void>;
  }) {
    this.data = data;
    this.execute = execute;
  }
}

export default CustomBotCommand;
