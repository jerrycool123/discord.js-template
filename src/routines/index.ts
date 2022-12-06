import type { Client } from 'discord.js';

class CustomBotRoutine {
  readonly name: string;
  readonly interval: number;
  readonly job: (client: Client) => () => Promise<void>;

  constructor({
    name,
    interval,
    job,
  }: {
    name: string;
    interval: number;
    job: (client: Client) => () => Promise<void>;
  }) {
    this.name = name;
    this.interval = interval;
    this.job = job;
  }

  start(client: Client) {
    setInterval(this.job(client), this.interval);
  }
}

export default CustomBotRoutine;
