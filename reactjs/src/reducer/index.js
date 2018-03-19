import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {LOGOUT} from '../actions/loginactions';
import {POST} from '../actions/loginactions';
import {DASH} from '../actions/loginactions';
import {BID} from '../actions/loginactions';
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
                    "email":action.data.email,
                    "login":action.data.status,
                    "username":action.data.Username,
                    "userid":action.data.userid,
                    "loginstatus":true
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
        case POST:
            console.log("im here in POST store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "posted":action.data.value,
                }
            }

        case DASH:
            console.log("im here in DASH store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "dashed":action.data.value,
                }
            }
        case BID:
            console.log("im here in BID store");
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "bids":action.data,
                }
            }
        default :
            return state;

    }
};

export default stores;