import * as mongoose from 'mongoose';

interface IPost {
  name: string;
  owner: string;
}

const PostSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }

})

export default mongoose.model<IPost & mongoose.Document>('Post', PostSchema)