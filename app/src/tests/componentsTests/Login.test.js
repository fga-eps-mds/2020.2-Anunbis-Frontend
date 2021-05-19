import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/Login';
import mock from '../mock';
import '@testing-library/jest-dom';
import mockLogin from '../mock/fixtures/login';
import { validStudent } from '../mock/fixtures/stored_users';
import { sendLogin } from '../../services/Auth';

mock.onPost('/auth/email').reply(200);

describe('Test Login component', () => {
  describe('Form submit tests', () => {
    it('To submit email and password valid but without email confirmation ', async () => {
      mockLogin('student', 203);
      const setLoading = jest.fn();
      const setMessage = jest.fn();
      const callback = jest.fn();
      const message = '';

      render(<Login message={message} setLoading={setLoading} setMessage={setMessage} />);
      const inputEmail = screen.getByPlaceholderText('Email Instuticional');
      const inputPassword = screen.getByPlaceholderText('Senha');
      const btnConfirm = screen.getByText('CONFIRMAR');

      userEvent.type(inputEmail, validStudent.email);
      userEvent.type(inputPassword, validStudent.password);
      sendLogin(validStudent.email, validStudent.password, callback, () => { });

      await waitFor(() => {
        expect(callback).toHaveBeenCalled();
      });

      userEvent.click(btnConfirm);

      await waitFor(() => {
        expect(setLoading).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(setMessage).toHaveBeenCalled();
      });
    });

    it('To submit email, password fakes must be create div error', async () => {
      mockLogin('student', 200);
      const setLoading = jest.fn();
      const setMessage = jest.fn();
      const message = '';

      render(<Login message={message} setLoading={setLoading} setMessage={setMessage} />);
      const inputEmail = screen.getByPlaceholderText('Email Instuticional');
      const inputPassword = screen.getByPlaceholderText('Senha');
      const btnConfirm = screen.getByText('CONFIRMAR');

      userEvent.type(inputEmail, validStudent.email);
      userEvent.type(inputPassword, validStudent.password);
      userEvent.click(btnConfirm);

      await waitFor(() => {
        expect(setLoading).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(setMessage).toHaveBeenCalled();
      });
    });
  });
});
