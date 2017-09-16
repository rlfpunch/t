import * as mongoose from 'mongoose';

const algorithmSchema = new mongoose.Schema({
  userId: String,
  name: String,
  site: String
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

export default Algorithm;
