const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postsData: [{
            notePost: "",
            likeCount: 0,
            img: ""
        },
        {
            notePost: "",
            likeCount: 0,
            img: ""
        },
        {
            notePost: "",
            likeCount: 0,
            img: ""
        },
        {
            notePost: "",
            likeCount: 0,
            img: ""
        },
        {
            notePost: "",
            likeCount: 0,
            img: ""
        }
    ],

    newNotePost: "Мой новый пост"

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                note: newNotePost,
                img: "",
                likeCount: 0,

            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newNotePost: "",
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newNotePost: action.updateNote
            }
        }
        default:
            return state;
    }
}


export const addPostAC = () => {
    return {
        type: ADD_POST
    }

}


export const updateNewPostAC = (text) => {
    return {
        type: UPDATE_NEW_POST,
        updateNote: text
    }

}

export default profileReducer;