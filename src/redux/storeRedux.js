const {
    combineReducers
} = require("redux");
let reducers = combineReducers({

})

const {
    createStore,
    combineReducers
} = require("redux");
const {
    default: profileReducer
} = require("./profileReducer");
const {
    default: dialogsReducer
} = require("./dialogsReducer");
const {
    default: sidebarReducer
} = require("./sidebarReducer");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})

let store = createStore(reducers);

export default store;