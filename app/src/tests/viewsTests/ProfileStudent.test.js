import ProfileStudent from '../../views/Profile/Student';
import mock from '../../mock/index';
import { validPost } from '../../mock/fixtures/stored_post';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { sendLogin } from '../../services/Auth';
import { validStudent } from '../../mock/fixtures/stored_users';
import mockLogin from '../../mock/fixtures/login';

mock.onGet('/course').reply(200, [
  {
    id_course: '1',
    name: 'Engenharia de Software',
  },
]);

mock.onGet('post').reply(200, [validPost]);

describe('Snapshot Student Profile view', () => {
  it('Testing the useEffect of Header', async () => {
    const callback = jest.fn();

    mockLogin('student', 200);
    sendLogin(validStudent.email, validStudent.password, callback, () => {});

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    render(<ProfileStudent.Header />);

    await waitFor(() => {
      expect(
        screen.getByText('Nome Completo: Estudante Teste'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('E-mail: 123456789@aluno.unb.br'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('Curso: Engenharia de Software'),
      ).toBeInTheDocument();
    });
  });

  it('Testing the useEffect of Body', async () => {
    render(<ProfileStudent.Body />);

    await waitFor(() => {
      expect(
        screen.getByText('Quantidade de avaliações realizadas: 1'),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Quantidade de pessoas que concordaram com suas avaliações: 2',
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Quantidade de pessoas que discordaram de suas avaliações: 1',
        ),
      ).toBeInTheDocument();
    });
  });
});
