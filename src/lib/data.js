// const users = [
//   {
//     id: 1,
//     name: "john",
//   },
//   {
//     id: 2,
//     name: "jane",
//   },
// ];
// const posts = [
//   {
//     id: 1,
//     title: "post 1",
//     body: "lorem ipsume some thext",
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: "post 2",
//     body: "lorem ipsume other text",
//     userId: 2,
//   },
//   {
//     id: 3,
//     title: "post 3",
//     body: "lorem ipsume some thext",
//     userId: 1,
//   },
//   {
//     id: 4,
//     title: "post 4",
//     body: "lorem ipsume other text",
//     userId: 2,
//   },
// ];

import { connectToDb } from "./connectToDb";
import { Post, User } from "./model";
import { unstable_noStore as noStore } from "next/cache";

// get all users
export const getUsers = async () => {
  //to control caching in api call
  noStore();
  connectToDb();
  try {
    const response = await User.find();
    return response;
  } catch (error) {
    // throw new Error(error);
  }
};
//get a single user by its ID
export const getUser = async (id) => {
  connectToDb();
  try {
    const response = await User.findById(id);
    return response;
  } catch (error) {
    // throw new Error(error);
  }
};

//get all posts
export const getPosts = async () => {
  connectToDb();
  try {
    const response = await Post.find();
    return response;
  } catch (error) {
    // throw new Error(error);
  }
};

//get a single post by its ID
export const getPost = async (slug) => {
  connectToDb();
  try {
    const response = await Post.findOne({ slug });
    return response;
  } catch (error) {
    // throw new Error(error);
  }
};
