import CustomBotEventHandler from '.';

// When the client is ready, run this code (only once)
const ready = new CustomBotEventHandler<'ready'>({
  name: 'ready',
  once: true,
  execute: async (client) => {
    console.log(`${client.user.username} [ID: ${client.user.id}] is ready!`);
  },
});

export default ready;
