import React from 'react';

const isAuthenticated = () => {
  return (localStorage.getItem('access_token') != null) ? true : false;
}

export async function sendLogin(email, password){
    const url = process.env.REACT_APP_API_HOST + "/login";
    const body = {
       email: email,
       password: password
    }

    await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.access_token){
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('student', JSON.stringify(data.student));
        }
        else
          localStorage.removeItem('access_token', 'student');
      })
}

export function logOut(){
  localStorage.removeItem('access_token', 'student');
}

export default isAuthenticated;