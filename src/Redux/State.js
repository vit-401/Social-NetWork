let render = () => {
  console.log("state changed");
};
let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hi how are you", likesCount: 30 },
      { id: 2, post: "This is my first post", likesCount: 12 },
      { id: 3, post: "Hello Vitaliy i glad to see you", likesCount: 25 },
      { id: 4, post: "Hello Dima nise to met you", likesCount: 2 },
      { id: 5, post: "Its new POST", likesCount: 500 },
    ],
    newPostText: "",
  },
  dialogPage: {
    dialogs: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Vitaliy" },
      { id: 4, name: "Dima" },
      { id: 5, name: "Pasha" },
    ],
  },
  messages: [
    { id: 1, message: "Hello Andrew" },
    { id: 2, message: "Hello Sasha" },
    { id: 3, message: "Hello Vitaliy" },
    { id: 4, message: ["Hello Dima", "I am hear"] },
    { id: 5, message: ["Hello Pasha", "I am hear too", "Beceose asdafxzc"] },
  ],
};
window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  render(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = "";
  state.profilePage.newPostText = newText;
  render(state);
};

export const subscribe = (observer) => {
  render = observer;
};

export default state;
