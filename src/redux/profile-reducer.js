const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const profileReducer = (state, action) => {

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