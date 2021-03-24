import React from 'react';

const isAuthenticated = localStorage.getItem('acessToken') ? true : false;


export async function sendLogin(url, body){
    fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      .then(response => {
        let data = response;
        if (data.token){
            localStorage.setItem('acessToken', data.token);
        }
      })
}

export default isAuthenticated;