import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const LOGOUT ="LOGOUT";
export const SIGNUP ="SIGNUP";


export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {

            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
return {
    type: SIGNUP,
    message: "inside Signup Actions"
}
}

export function actionlogin(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.login(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function login(data) {
    console.log("data in action==>",data);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}

export function actionlogout(userdata) {
    console.log("in logout");
    return function (dispatch) {
        try {
            API.logout(userdata)
                .then((response) => {
                    try {
                        console.log("inside logout action");
                        dispatch(logout(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function logout(data) {
    console.log("data in action==>",data);
    return {
        type: LOGOUT,
        message: "inside logout actions",
        data:data
    }
}