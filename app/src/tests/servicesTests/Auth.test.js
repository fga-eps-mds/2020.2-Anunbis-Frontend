import { sendLogin } from '../../services/Auth';
import mock from '../../mock/index';
import {waitFor} from '@testing-library/react';
import { validStudent, validProfessor } from '../../mock/fixtures/stored_users';
import mockLogin from '../../mock/fixtures/login';

describe('Snapshot Auth component', () => {
  it('Write user student on localStorage', async() => {
    const callback = jest.fn();
    
    mockLogin('student');
    sendLogin(validStudent.email, validStudent.password, callback, {});
    await waitFor(() => {
      expect(callback).toHaveBeenCalled()
    })
    expect(window.localStorage.getItem('student')).toEqual(JSON.stringify(validStudent.response))
  })
  it('Write user professor on localStorage', async() => {
    const callback = jest.fn();

    mock.reset();
    mockLogin('professor');

    sendLogin(validProfessor.email, validProfessor.password, callback, {});
    await waitFor(() => {
      expect(callback).toHaveBeenCalled()
    })
    expect(window.localStorage.getItem('professor')).toEqual(JSON.stringify(validProfessor.response))
  })
  it('Makes logOut on receive response without access_token', async() => {
    const errorCallback = jest.fn();
    mock.reset();

    mock.onPost('login').reply(200,{
      user: validStudent.response
    });

    sendLogin(validStudent.email, validStudent.password, {}, errorCallback);
    await waitFor(() => {
      expect(window.localStorage.getItem('student')).toBeNull();
      expect(window.localStorage.getItem('professor')).toBeNull();
      expect(errorCallback).toHaveBeenCalled();
    })
  })
});