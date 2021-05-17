import renderer from 'react-test-renderer';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterProfessor from '../../components/RegisterProfessor';

const validProf = {
  name: 'test',
  reg: '12345678911',
  email: '12345678911@unb.br',
  password: '00000000',
};

describe('Snapshot RegisterProfessor component', () => {
  describe('Snapshot component test', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(<RegisterProfessor />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('test of UX', () => {
    it('window localtion must be change when click on CANCELAR', () => {
      render(<RegisterProfessor />);
      const buttonCancel = screen.getByTestId('btn-1-regProf');
      userEvent.click(buttonCancel);

      expect(window.location.pathname).toEqual('/');
    });
    describe('Tests assyncronous', () => {
      it('Submit Valid Professor', async () => {
        const callback = jest.fn();
        render(<RegisterProfessor redirect={callback} />);

        const inputName = screen.getByTestId('input-1-regProf');
        const inputReg = screen.getByTestId('input-2-regProf');
        const inputEmail = screen.getByTestId('input-3-regProf');
        const inputPassword = screen.getByTestId('input-4-regProf');
        const inputCoPassword = screen.getByTestId('input-5-regProf');
        const btnConfirm = screen.getByTestId('btn-2-regProf');

        userEvent.type(inputName, validProf.name);
        userEvent.type(inputReg, validProf.reg);
        userEvent.type(inputEmail, validProf.email);
        userEvent.type(inputPassword, validProf.password);
        userEvent.type(inputCoPassword, validProf.password);
        userEvent.click(btnConfirm);

        await waitFor(() => {
          expect(callback).toHaveBeenCalled();
        });
      });
    });
  });
});
