import api from './Api'

export function getToken() {
  return localStorage.getItem('access_token');
}

export async function sendLogin(email, password, callback) {
  const body = {
    email: email,
    password: password
  }
  
  api.post("/login", body)
    .then(response => {
      const data = response.data;
      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('student', JSON.stringify(data.student));
      }
      else
        localStorage.removeItem('access_token', 'student');
    })
    .then(() => callback())
}

export function logOut() {
  localStorage.removeItem('access_token', 'student');
}

export default function isAuthenticated() {
  return (getToken() != null) ? true : false;
};

