import { GetPostFromJSON } from "./Requests";

export const GetPostsById = (id: number) => {
  return GetPostFromJSON.then((data) => {
    for (let eachPost of data.data) {
      if (eachPost.id == id) return eachPost;
    }
    return null;
  });
};

export const GetAllPosts = () => {
  return GetPostFromJSON.then((data) => {
    return data.data;
  });
};
