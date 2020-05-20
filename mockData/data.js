const Posts = [
  {
    "user_id": "asd",
    "caption": "pic1",
    "likes": 0,
    "comments": 5,
    "id": "2",
    "display_src": "https://cdn.pixabay.com/photo/2020/04/20/20/51/reading-5069826_960_720.jpg",
  },
  {
    "user_id": "asdB",
    "caption": "pic1",
    "likes": 1,
    "comments": 5,
    "id": "3",
    "display_src": "https://cdn.pixabay.com/photo/2020/04/26/07/06/spring-5093894_960_720.jpg",
  },
  {
    "user_id": "asdM",
    "caption": "pic5",
    "likes": 5,
    "comments": 5,
    "id": "5",
    "display_src": "https://cdn.pixabay.com/photo/2020/04/19/20/49/typewriter-5065594_960_720.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "6",
    "display_src": "https://cdn.pixabay.com/photo/2020/05/01/15/18/brand-front-of-the-brandenburg-gate-5117579__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "7",
    "display_src": "https://cdn.pixabay.com/photo/2020/05/02/17/54/tunnel-5122424__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "8",
    "display_src": "https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "9",
    "display_src": "https://cdn.pixabay.com/photo/2020/05/06/14/26/field-5137778__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "10",
    "display_src": "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "11",
    "display_src": "https://cdn.pixabay.com/photo/2020/01/29/20/24/architecture-4803602__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "12",
    "display_src": [
      "https://cdn.pixabay.com/photo/2020/01/29/20/24/architecture-4803602__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/11/15/14/squirrel-5158715__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/07/12/20/kid-5141333__340.jpg",
    ],
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "13",
    "display_src": "https://cdn.pixabay.com/photo/2020/01/29/20/24/architecture-4803602__340.jpg",
  },
  {
    "user_id": "Qsd",
    "caption": "pic2",
    "likes": 1,
    "comments": 5,
    "id": "14",
    "display_src": [
      "https://cdn.pixabay.com/photo/2020/05/11/18/49/island-5159729__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/09/17/04/fairy-5150471__340.jpg",
      "https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269__340.jpg",
    ],
  },
];
exports.Posts = () => {
  return {
    getPosts() {
      return Posts;
    },
    addLike(postId) {
      const post = Posts.find(({ id }) => id == postId).likes;
      post.likes = post.likes + 1;
    }
  }
}

const comments = {
  "1": [
    {
      "text": "What is funny day",
      "user": "Max",
      user_id: 1,
    },
    {
      "text": "What is funny day",
      "user": "Max",
      user_id: 1,
    },
    {
      "text": "What is funny day",
      "user": "Max",
      user_id: 1,
    },
  ],
  "9": [
    {
      "text": "What is funny day",
      "user": "Max",
      user_id: 1,
    },
    {
      "text": "What is funny day",
      "user": "Max",
      user_id: 1,
    },
    {
      "text": "What is funny day",
      "user": "Max",
      user_id: 1,
    },
  ],
};

exports.getCommets = () => {
  return {
    getCommetById(id) {
      return comments[id];
    },
    getAllComments() {
      return comments;
    },
  }
};
