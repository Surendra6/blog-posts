type State = {
  posts: Object[];
};

type Action = {
  type: String;
  payload: Object[];
};

const initialState: State = {
  posts: [],
};

export default function postsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "posts/setPosts": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
}
