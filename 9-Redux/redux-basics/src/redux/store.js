import {legacy_createStore} from 'redux'

// state: jo hamari abhi state chal rahi hai means 0 hai ya 1
// action: user ne jo increment kiya hai ya decrement
const reducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT' : return state + 1;
        case 'DECREMENT' : return state + 1;
        default: return state;
}
}

//1. Is store ko puray app ka access dena hai

//2. index.js/main.jsx mai -Provider- me wrap kardengy is store ko. App Provider k andar wrap ho chuka hai and puray App k paas store ka access hai.

const store = legacy_createStore(reducer);

