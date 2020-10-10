const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
    dialogsPage: {
        messagesBodyData: [{
                messageBody: "Здорова, Андрей!",
                id: 0 //????
            },
            {
                messageBody: "Го в качалку",
                id: 0 //????
            },
            {
                messageBody: "Может в кс поиграем",
                id: 0 //????
            },
            {
                messageBody: "Все ок",
                id: 0 //????
            },
        ],

        dialogItemsData: [{
                id: 2,
                img: "https://sun9-76.userapi.com/c604829/v604829349/17130/3mqMijGE1To.jpg",
                name: "Арсен"
            },
            {
                id: 3,
                img: "https://sun9-5.userapi.com/c858136/v858136201/206a01/_TFSsVFYljI.jpg",
                name: "Александр"
            },
            {
                id: 4,
                img: "https://sun9-34.userapi.com/T3j15nFBhuCH_Zzxu9yDc5PuOF9yznnXlur-9w/TUMpqwlmgOU.jpg",
                name: "Павел"
            },
            {
                id: 5,
                img: "https://sun9-4.userapi.com/o1lmv5tCrRo3GlGhuTHEvJ7fXhP0iHZQr32SfA/9W31_HwCy5Q.jpg",
                name: "Дмитрий"
            },
        ],

        newMessagesBody: ""
    },
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newBody = state.newMessagesBody;
            return {
                ...state,
                messagesBodyData: [...state.newMessagesBody, {
                    id: 0,
                    messageBody: newBody
                }],
                newMessagesBody: ""

            }
        }
        case UPDATE_NEW_MESSAGE: {
            return {

            }
        }
        default:
            return state;
    }

}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageAC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        bodyText: text
    }
}


export default dialogsReducer;