import mongoose from 'mongoose';

export default class DbConnection {

  private connection = 'mongodb://localhost:27017/btgpactual';

  async connect() {
    await mongoose.connect(this.connection);
  }

  async disconnect() {
    await mongoose.disconnect();
  }
}