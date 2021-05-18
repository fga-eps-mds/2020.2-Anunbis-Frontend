import mock from '../index';
import { validStudent, validProfessor } from './stored_users';

const mockLogin = (name, status) => {
  if (name === 'student') {
    mock.onPost('login').reply(status, {
      access_token: 'value_of_test',
      user: validStudent.response,
    });
  } else {
    mock.onPost('login').reply(status, {
      access_token: 'value_of_test',
      user: validProfessor.response,
    });
  }
};

export default mockLogin;
