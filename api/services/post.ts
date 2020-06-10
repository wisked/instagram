import PostModel from '../models/post';

export default class PostService {
  public async getPosts(user): Promise<any[]> {
    return PostModel.find({ owner: user._id }).populate({ path: 'owner', select: '-password -salt' }).exec();
  }

  public async getPost(postId: string, user): Promise<any[]> {
    return PostModel.findOne({ _id: itemId, owner: user._id }).populate({ path: 'owner', select: '-password -salt' });
  }

  public async create(postDTO, user): Promise<any[]> {
    const item = {
      ...postDTO,
      owner: user._id,
    }

    return PostModel.create(item).populate({ path: 'owner', select: '-password -salt' });
  }

  public async updatePost(itemId, postDTO, user): Promise<any[]> {
    const item = {
      ...postDTO,
      _id: itemId,
      owner: user._id,
    }
    return PostModel.findOneAndUpdate({ _id: itemId, owner: user._id }, item, { new: true }).populate({ path: 'owner', select: '-password -salt' });
  }

  public async removePost(itemId, user): Promise<any[]> {
    return PostModel.remove({ _id: itemId, owner: user._id }).exec();
  }

}