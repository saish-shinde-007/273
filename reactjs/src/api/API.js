const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const signup = (payload) =>
    fetch(`${api}/operations/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const login = (payload) =>
    fetch(`${api}/operations/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const logout = (payload) =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            localStorage.removeItem("UserName");
            localStorage.removeItem("email");
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getImages = () =>
    fetch(`${api}/files/`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });


export const uploadFile = (payload) =>
    fetch(`${api}/files/upload`, {
        method: 'POST',
        body: payload
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });
export const post = (payload) =>
    fetch(`${api}/operations/postproject`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response.projectname);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

handleFileUpload = (event) => {

    const payload = new FormData();

    payload.append('yourpic', event.target.files[0]);

    API.uploadFile(payload)
        .then((status) => {
            if (status === 204) {
                API.getImages()
                    .then((data) => {
                        this.setState({
                            images: data
                        });
                    });
            }
        });

};

export const dash = (payload) =>
    fetch(`${api}/operations/dashboard`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("in Dash API");
            console.log(response.projectname);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const bidder = (payload) =>
    fetch(`${api}/operations/bids`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);

            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });