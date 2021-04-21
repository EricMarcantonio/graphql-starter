import axios from 'axios'
import {PostInterface} from '../Model/UserData'

export const GetPostFromJSON = axios.request<PostInterface[]>({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
  });
