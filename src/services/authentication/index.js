import React from 'react';

const isAuthenticated = localStorage.getItem('access_token') ? true : false;


export async function sendLogin(email, password){
    const url = process.env.REACT_APP_API_HOST + "/login";
    const body = {
       email: email,
       password: password
    }

    fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.access_token){
            localStorage.setItem('access_token', data.access_token);
        }
      })
}

export default isAuthenticated;