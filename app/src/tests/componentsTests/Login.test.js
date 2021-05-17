import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/Login';
import '@testing-library/jest-dom';

jest.useFakeTimers();

const data = {
  email: '123456789@aluno.unb.br',
  password: '00000000',
};

describe('Test Login component', () => {
  describe('Snapshot test', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(<Login />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Form submit tests', () => {
    it('Submit email and password fakes must be create div error and close it when click X', async () => {
      render(<Login />);

      const inputEmail = screen.getByTestId('input-login-1');
      userEvent.type(inputEmail, data.email);

      const inputPassword = screen.getByTestId('input-login-2');
      userEvent.type(inputPassword, data.password);

      userEvent.click(screen.getByText('CONFIRMAR'));

      await waitFor(() => {
        expect(screen.queryByTestId('button-login-1')).not.toBeNull();
      }).then(() => {
        userEvent.click(screen.queryByTestId('button-login-1'));
        expect(screen.queryByTestId('button-login-1')).toBeNull();
      });
    });
  });
});
