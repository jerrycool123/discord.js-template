import type { Client, ClientEvents } from 'discord.js';

class CustomBotEventHandler<E extends keyof ClientEvents> {
  readonly name: E;
  readonly once: boolean = false;
  readonly execute: (...args: ClientEvents[E]) => Promise<void>;

  constructor({
    name,
    once,
    execute,
  }: {
    name: E;
    once?: boolean;
    execute: (...args: ClientEvents[E]) => Promise<void>;
  }) {
    this.name = name;
    if (once) this.once = once;
    this.execute = execute;
  }

  register(client: Client<boolean>) {
    if (this.once) {
      client.once(this.name, (...args: ClientEvents[E]) => this.execute(...args));
    } else {
      client.on(this.name, (...args: ClientEvents[E]) => this.execute(...args));
    }
  }
}

export default CustomBotEventHandler;
