import ProfileProfessor from '../../views/Profile/Professor';
import mock from '../mock/index';
import { validPost } from '../mock/fixtures/stored_post';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { sendLogin } from '../../services/Auth';
import { validProfessor } from '../mock/fixtures/stored_users';
import mockLogin from '../mock/fixtures/login';

mock.onGet('post').reply(200, [validPost]);

describe('Snapshot Professor Profile view', () => {
  it('Testing the useEffect of Header', async () => {
    const callback = jest.fn();

    mockLogin('professor', 200);
    sendLogin(validProfessor.email, validProfessor.password, callback, {});

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    render(<ProfileProfessor.Header />);

    await waitFor(() => {
      expect(
        screen.getByText('Nome Completo: Professor Teste'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('E-mail: 12345678911@unb.br'),
      ).toBeInTheDocument();
    });
  });
  it('Testing the useEffect of Body', async () => {
    render(<ProfileProfessor.Body />);

    await waitFor(() => {
      expect(
        screen.getByText('Quantidade de avaliações recebidas: 1'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('Pontuação média recebida: 2.5'),
      ).toBeInTheDocument();
    });
  });
});
