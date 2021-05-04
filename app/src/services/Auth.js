import api from './Api'
import users from './Users'

export function getToken() {
  return (localStorage.getItem('access_token'));
}

export async function sendLogin(email, password, callback, errorCallback) {
  const body = {
    email: email,
    password: password
  }

  function writeUser(data){
    localStorage.setItem('access_token', data.access_token);
    if (data.user.reg_student)
      localStorage.setItem(users.STUDENT.localStorageName, JSON.stringify(data.user));
    else 
      localStorage.setItem(users.PROFESSOR.localStorageName, JSON.stringify(data.user));
  }

  api.post("/login", body)
    .then(response => {
      const data = response.data;
      if (data.access_token)
        writeUser(data);
      else
        logOut();
    })
    .then(() => callback())
    .catch(() => errorCallback())
}

export function logOut() {
  localStorage.removeItem('access_token');
  Object.keys(users).forEach((userKey) => {
    localStorage.removeItem(users[userKey]?.localStorageName)})
}