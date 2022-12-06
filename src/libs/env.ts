import 'dotenv/config';

import { DEFAULT_PORT } from '../config';

const Env = {
  PORT: '',
  MONGO_URL: '',
  DISCORD_BOT_TOKEN: '',
  DISCORD_BOT_CLIENT_ID: '',
};

for (const key of Object.keys(Env)) {
  const value = process.env[key];
  if (!value) {
    if (key === 'PORT') {
      Env[key] = DEFAULT_PORT.toString();
    } else {
      throw new Error(`'${key}' is undefined in the environment.`);
    }
  } else {
    Env[key as keyof typeof Env] = value;
  }
}

export default Env;
