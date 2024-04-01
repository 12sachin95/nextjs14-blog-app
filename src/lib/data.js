const users = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "jane",
  },
];
const posts = [
  {
    id: 1,
    title: "post 1",
    body: "lorem ipsume some thext",
    userId: 1,
  },
  {
    id: 2,
    title: "post 2",
    body: "lorem ipsume other text",
    userId: 2,
  },
  {
    id: 3,
    title: "post 3",
    body: "lorem ipsume some thext",
    userId: 1,
  },
  {
    id: 4,
    title: "post 4",
    body: "lorem ipsume other text",
    userId: 2,
  },
];
// get all users
export function getUsers() {
  return users;
}
//get a single user by its ID
export function getUser(id) {
  return users.find((user) => user.id === id);
}

//get all posts
export function getPosts() {
  return posts;
}

//get a single post by its ID
export function getPost(id) {
  let foundPost = posts.find((post) => post.id.toString() === id);
  return foundPost;
}
