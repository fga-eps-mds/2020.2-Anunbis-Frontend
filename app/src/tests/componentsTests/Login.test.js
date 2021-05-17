import renderer from 'react-test-renderer';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/Login';
import mock from '../../mock';
import '@testing-library/jest-dom';
import mockLogin from '../../mock/fixtures/login';
import { validStudent } from '../../mock/fixtures/stored_users';

describe('Test Login component', () => {
  describe('Snapshot test', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(<Login />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })
  describe('Form submit tests', () => {
    it('To submit email, password fakes must be create div error and close it when click X', async () => { 
      mockLogin('student');

      render(<Login />);
      const inputEmail = screen.getByPlaceholderText('Email Instuticional');
      const inputPassword = screen.getByPlaceholderText('Senha');
      const btnConfirm = screen.getByText('CONFIRMAR');

      userEvent.type(inputEmail, validStudent.email);      
      userEvent.type(inputPassword, validStudent.password);
      userEvent.click(btnConfirm);

      await waitFor(() => {
        expect(screen.queryByText('X')).toBeInTheDocument();
      })
      const btnX = screen.queryByText('X');

      userEvent.click(btnX);

      expect(btnX).not.toBeInTheDocument();
    });
  });
});
