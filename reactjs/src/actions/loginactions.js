import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const LOGOUT ="LOGOUT";
export const SIGNUP ="SIGNUP";
export const POST ="POST";
export const DASH ="DASH";
export const BID="BID";
export const BIDS="BIDS";
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

    // const payload = new FormData();
    //
    // payload.append(userdata.selectedFile);
    // console.log(payload);

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


export function actionpost(userdata) {
    console.log("in Post");
    return function (dispatch) {
        try {

            API.post(userdata)
                .then((response) => {
                    try {
                        console.log("inside action post");
                        dispatch(post(response));
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

export function post(data) {
    console.log("data in action==>",data);
    return {
        type: POST,
        message: "inside POST actions",
        data:data
    }
}

export function actiondash(userdata) {
    console.log("In Dash");
    return function (dispatch) {
        try {

            API.dash(userdata)
                .then((response) => {
                    try {
                        console.log("inside action dash");
                        dispatch(dash(response));
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

export function dash(data) {
    console.log("data in action==>",data);
    return {
        type: DASH,
        message: "inside DASH actions",
        data:data
    }
}

export function actionbid(userdata) {
    console.log("In Dash");
    return function (dispatch) {
        try {

            console.log("inside action dash");
            dispatch(bid(userdata));
            }
            catch (error) {
            console.log(error);
            }
        }
    }

export function bid(data) {
    console.log("data in action==>",data);
    return {
        type: BID,
        message: "inside BID actions",
        data:data
    }
}

export function actionbidder(userdata) {
    console.log("in bids ctions");
    return function (dispatch) {
        try {

            API.bidder(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(bidder(response));
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
export function bidder(data) {
    console.log("data in action==>",data);
    return {
        type: BIDS,
        message: "inside BID actions",
        data:data
    }
}