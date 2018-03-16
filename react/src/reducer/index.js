import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {LOGOUT} from '../actions/loginactions';
const initialState = {
    "stores":{
        "username" : 'saish',
        "email" : 'shinde',
        "status":'200',
        "signup":'false'
    }
};

const stores= (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:
            console.log("im here in login store");
            console.log(state)
            return {
                ...state,
                "stores":{
                    "email":action.data,
                    "login":action.data.status,
                    "loginstatus":true,
                }
            }
        case SIGNUP:
            console.log("im here in Signup store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                   //"signup":action.data
                }
            }
        case LOGOUT:
            console.log("im here in Logout store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "loginstatus":false
                }
            }


        default :
            return state;

    }
};

export default stores;