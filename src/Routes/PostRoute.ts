import { GetPostsById } from "../Database";
import { GetAllPosts } from "../Database/UserData";
import { PostInterface } from "../Model";





export const HandleGetPost = (
  parent: any,
  args: { id?: number },
  context: any,
  info: any
) => {
  const EmptyPost: PostInterface = {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  };
  if (args.id) {
    return GetPostsById(args.id).then((post) => {
      if (post) return [post];
      else return [EmptyPost];
    });
  } else {
    return GetAllPosts().then((allPosts) => {
      return allPosts;
    });
  }
};
