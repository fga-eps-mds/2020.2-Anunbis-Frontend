import Post from '../../components/Post';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import mockLogin from '../mock/fixtures/login';
import { validStudent } from '../mock/fixtures/stored_users';
import { sendLogin } from '../../services/Auth';
import mock from '../mock';

mock.onPost('/post/agree', 200);
mock.onPost('/post/disagree', 200);



describe('Snapshot Post component', () => {
  it('Test of click on btnEdition and redirect', async () => {
    mockLogin('student', 200);
    const post = jest.fn();
    const callback = jest.fn();
    render(<Post post={post} />);

    const btnDisagree = screen.getByTestId('btn-disagree'); 
    const btnAgree = screen.getByTestId('btn-agree'); 
    sendLogin(validStudent.email, validStudent.password, callback, () => {});

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    userEvent.click(btnAgree);
    userEvent.click(btnDisagree);

  });
});
