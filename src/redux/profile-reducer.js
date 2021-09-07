const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initnalState = {
        newPostText: "it",
        posts: [
            {id: 1, message: 'Hi', likeCount: 23},
            {id: 2, message: 'How is your ..', likeCount: 1},
            {id: 3, message: 'ok', likeCount: 231},
            {id: 4, message: 'ok', likeCount: 238}
        ],
        userName: "ava + description"
}

const profileReducer = (state = initnalState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 10,
                message: state.newPostText,
                likeCount: 0
            }
            state.newPostText = ''
            state.posts.push(newPost)
            break;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            break;
        default:
            return state;
    }

    return state;
}

export const addPostCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreater = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
};

export default profileReducer