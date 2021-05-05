export function getToken() {
  return (localStorage.getItem('access_token'));
}

const createUser = (localStorageName, homePath) => ({
  localStorageName,
  homePath,
  isAuthenticated: () => (getToken() ? !!localStorage.getItem(localStorageName) : false),
});

const Users = {
  PROFESSOR: createUser('professor', '/professor/'),
  STUDENT: createUser('student', '/student/'),
  VISITANT: createUser('visitant', '/'),
  isAuthenticated: () => getToken() !== null,
  whoAuthenticated() {
    if (getToken()) {
      const userName = Object.keys(this).find(
        (user) => localStorage.getItem(this[user]?.localStorageName) !== null,
      );
      return this[userName];
    }
    return this.VISITANT;
  },
};

export default Users;
