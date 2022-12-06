import mongoose from 'mongoose';

import Env from './env';

const dbConnect = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(Env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
  });
};

export default dbConnect;
