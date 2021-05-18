import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExcludeAccount from '../../components/ExcludeAccount';
import mock from '../../mock';
import { sendLogin } from '../../services/Auth';
import { validStudent } from '../../mock/fixtures/stored_users';
import mockLogin from '../../mock/fixtures/login';

mock.onDelete('student').reply(204);

describe('Test ExcludeAccount component', () => {
  describe('Tests of functions', () => {
    it('should exec callback on click on button VOLTAR', () => {
      const callback = jest.fn();
      render(<ExcludeAccount close={callback} />);

      const btnBack = screen.getByText('VOLTAR');

      userEvent.click(btnBack);
      expect(callback).toHaveBeenCalled();
    });

    it('the children of buttons must be the same on click', async () => {
      const callback = jest.fn();
      const callbackOne = jest.fn();
      mockLogin('student', 200);
      sendLogin(validStudent.email, validStudent.password, callback, {});

      await waitFor(() => {
        expect(callback).toHaveBeenCalled();
      });

      render(<ExcludeAccount close={callbackOne} />);

      const btnExclude = screen.getByText('EXCLUIR');
      userEvent.click(btnExclude);

      await waitFor(() => {
        expect(callbackOne).not.toHaveBeenCalled();
        expect(window.location.pathname).toEqual('/');
      });
    });
  });
});
