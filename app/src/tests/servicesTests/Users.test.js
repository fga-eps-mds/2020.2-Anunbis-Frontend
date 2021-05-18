import renderer from 'react-test-renderer';
import Users, { getToken } from '../../services/Users';
import { sendLogin } from '../../services/Auth';
import mock from '../../mock';
import { waitFor } from '@testing-library/react';
import { validStudent, validProfessor } from '../../mock/fixtures/stored_users';
import mockLogin from '../../mock/fixtures/login';

describe('Test Api', () => {
  it('must return professor for the all functions', async () => {
    const callback = jest.fn();

    mockLogin('student', 200);

    sendLogin(validStudent.email, validStudent.password, callback, {});

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    expect(Users.isAuthenticated()).toBe(true);
    expect(Users.STUDENT.isAuthenticated()).toBe(true);
    expect(Users.STUDENT.data()).toEqual(validStudent.response);
    expect(Users.whoAuthenticated()).toEqual(Users.STUDENT);
  });
  it('must return professor for the all functions', async () => {
    const callback = jest.fn();

    mock.reset();
    mockLogin('professor', 200);

    sendLogin(validProfessor.email, validProfessor.password, callback, {});

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    expect(Users.isAuthenticated()).toBe(true);
    expect(Users.PROFESSOR.isAuthenticated()).toBe(true);
    expect(Users.PROFESSOR.data()).toEqual(validProfessor.response);
    expect(Users.whoAuthenticated()).toEqual(Users.PROFESSOR);
  });
});
