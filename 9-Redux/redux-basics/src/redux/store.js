import { legacy_createStore } from "redux";


// state: jo hamari abhi state chal rahi hai means 0 hai ya 1
// action: user ne jo increment kiya hai ya decrement
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;     //agar user INCREMENT pe click karta hai to mujhe state me 1 add karna hai
    case "DECREMENT":
      return state + 1;
    default:
      return state;
  }
};

//1. Is store ko puray app ka access dena hai

//2. index.js/main.jsx mai -Provider- me wrap kardengy is store ko. App Provider k andar wrap ho chuka hai and puray App k paas store ka access hai.

//3. reducer function creation

export const store = legacy_createStore(reducer);  //4. passing reducer function


















//5. humne store and reducer bana liya, ab humay handler function banana hai jis k andar hum events ko dispatch kar saken