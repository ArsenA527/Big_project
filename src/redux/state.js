let store = {
    _state: {
        myData: {
            name: "Andy Currant",
            img: "https://sun1-21.userapi.com/P9-gotmk8Jfqz3BXyeU_JfS1coHrdPb7fInADg/4Ki1-EmkoSw.jpg",
            description: "Memento mori",
            id: 1
        },

        profilePage: {
            postsData: [{
                    notePost: "",
                    likCount: 0,
                    img: ""
                },
                {
                    notePost: "",
                    likCount: 0,
                    img: ""
                },
                {
                    notePost: "",
                    likCount: 0,
                    img: ""
                },
                {
                    notePost: "",
                    likCount: 0,
                    img: ""
                },
                {
                    notePost: "",
                    likCount: 0,
                    img: ""
                }
            ],

            newPostData: "Мой новый пост"
        },

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


        sidebarPage: {

        }
    }
}

export default store;
