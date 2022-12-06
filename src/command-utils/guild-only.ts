import type { CommandInteraction } from 'discord.js';

const replyGuildOnly = async (interaction: CommandInteraction) => {
  await interaction.reply({
    content: 'This command is unavailable in DM channels!',
    ephemeral: true,
  });
};

export default replyGuildOnly;
