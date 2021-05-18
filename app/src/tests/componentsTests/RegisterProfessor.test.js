import { screen, render, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterProfessor from '../../components/RegisterProfessor';
import mock from '../mock/index';
import '@testing-library/jest-dom/extend-expect';

const mockPost = (number) => {
  if (number === 409) {
    mock.onPost('/professor').reply(409, {
      name: 'professor repetido',
      reg: '12345678911',
      email: '12345678911@unb.br',
      password: '12345678',
    });
  } else {
    mock.onPost('/professor').reply(201, {
      name: 'test',
      reg: '12345678911',
      email: '12345678911@unb.br',
      password: '00000000',
    });
  }
};

const validProf = {
  name: 'test',
  reg: '12345678911',
  email: '12345678911@unb.br',
  password: '00000000',
};

const invalidProf = {
  name: 'professor repetido',
  reg: '12345678911',
  email: '12345678911@unb.br',
  password: '12345678',
};

afterEach(cleanup);

describe('test of UX', () => {
  it('window localtion must be change when click on CANCELAR', () => {
    render(<RegisterProfessor />);
    const buttonCancel = screen.getByText('CANCELAR');
    userEvent.click(buttonCancel);
    expect(window.location.pathname).toEqual('/');
  });

  describe('Tests assyncronous', () => {
    it('Submit Valid Professor', async () => {
      mockPost(201);
      const redirect = jest.fn();
      render(<RegisterProfessor onRegister={redirect} />);

      const inputName = screen.getByPlaceholderText('Nome');
      const inputReg = screen.getByPlaceholderText('Matrícula');
      const inputEmail = screen.getByPlaceholderText('Email Institucional');
      const inputPassword = screen.getByPlaceholderText('Senha');
      const inputCoPassword = screen.getByPlaceholderText('Confirmar Senha');
      const btnConfirm = screen.getByText('CONFIRMAR');

      userEvent.type(inputName, validProf.name);
      userEvent.type(inputReg, validProf.reg);
      userEvent.type(inputEmail, validProf.email);
      userEvent.type(inputPassword, validProf.password);
      userEvent.type(inputCoPassword, validProf.password);
      userEvent.click(btnConfirm);

      await waitFor(() => {
        expect(redirect).toHaveBeenCalled();
      });
    });
  });

  it('Submit Invalid Professor', async () => {
    const redirect = jest.fn();
    render(<RegisterProfessor redirect={redirect} />);
    mockPost(409);

    const inputName = screen.getByPlaceholderText('Nome');
    const inputReg = screen.getByPlaceholderText('Matrícula');
    const inputEmail = screen.getByPlaceholderText('Email Institucional');
    const inputPassword = screen.getByPlaceholderText('Senha');
    const inputCoPassword = screen.getByPlaceholderText('Confirmar Senha');
    const btnConfirm = screen.getByText('CONFIRMAR');

    userEvent.type(inputName, invalidProf.name);
    userEvent.type(inputReg, invalidProf.reg);
    userEvent.type(inputEmail, invalidProf.email);
    userEvent.type(inputPassword, invalidProf.password);
    userEvent.type(inputCoPassword, invalidProf.password);
    userEvent.click(btnConfirm);

    await waitFor(() => {
      expect(screen.getByText('Professor já cadastrado')).toBeInTheDocument();
      expect(redirect).not.toHaveBeenCalled();
    });
  });
});
