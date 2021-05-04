import { getToken } from './Auth';

const createUser = (localStorageName, homePath) => {
    return {
        localStorageName: localStorageName,
        homePath: homePath,
        isAuthenticated: () => getToken() ? localStorage.getItem(localStorageName) ? true : false : false
    }
}

const Users = {
    PROFESSOR: createUser("professor", '/professor/'),
    STUDENT: createUser('student', '/student/'),
    VISITANT: createUser('visitant', '/'),
    isAuthenticated: () => getToken() !== null,
    whoAuthenticated: function () {
        if (getToken()) {
            const userName = Object.keys(this).find((user) => 
                localStorage.getItem(this[user]?.localStorageName) !== null
            )
            return this[userName];
        }
        return this.VISITANT;
    }
}

export default Users;