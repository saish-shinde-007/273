const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const add = (payload) =>
    fetch(`${api}/operations/add`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            document.getElementById('col2').innerHTML=" "+response.message+" "+response.value;
            console.log(payload);
            return response;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const subtract = (payload) =>
    fetch(`${api}/operations/sub`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            document.getElementById('col2').innerHTML=" "+response.message+" "+response.value;
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const multiply = (payload) =>
    fetch(`${api}/operations/mul`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            document.getElementById('col2').innerHTML=" "+response.message+" "+response.value;
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const divide = (payload) =>
    fetch(`${api}/operations/div`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            document.getElementById('col2').innerHTML=" "+response.message+" "+response.value;
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

