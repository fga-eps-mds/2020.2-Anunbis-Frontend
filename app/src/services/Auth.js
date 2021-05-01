import api from './Api'

export function isAuthenticated(){
  return getToken() !== undefined;
}

export function isProfessor(){
  if(getToken()){
    return localStorage.getItem('professor') ? true : false;
  }
}

export function isStudent(){
  if(getToken()){
    return localStorage.getItem('student') ? true : false;
  }
}

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
      localStorage.setItem('student', JSON.stringify(data.user));
    else 
      localStorage.setItem('professor', JSON.stringify(data.user));
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
  localStorage.removeItem('student');
  localStorage.removeItem('professor');
}