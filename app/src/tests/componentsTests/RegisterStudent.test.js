import renderer from 'react-test-renderer';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterStudent from '../../components/RegisterStudent';
import mock from '../../mock/index';
import { validStudent } from '../../mock/fixtures/stored_users'

mock.onGet('/course').reply(200,
  {
    id_course: 1,
    name: 'Engenharia de Software'
  })

mock.onPost('/student').reply(
  201, {
  name: 'Estudante teste',
  id_course: '1',
  reg: '123456789',
  email: '123456789@aluno.unb.br',
  password: '12345678'
}
)


describe('Snapshot RegisterStudent component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<RegisterStudent />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Testing forms functionability', () => {
  it('window location must be change when click on CANCELAR', () => {
    render(<RegisterStudent />);
    const buttonCancel = screen.getByText('CANCELAR');
    userEvent.click(buttonCancel);

    expect(window.location.pathname).toEqual('/');
  });

  // it('Submit Valid Student', async () => {
  //   const redirect = jest.fn()
  //   render(<RegisterStudent redirect={redirect} />)

  //   const inputName = screen.getByPlaceholderText('Nome')
  //   const selectCourses = screen.getByTestId('select-courses')
  //   const inputReg = screen.getByPlaceholderText('Matrícula')
  //   const inputEmail = screen.getByPlaceholderText('Email Institucional')
  //   const inputPassword = screen.getByPlaceholderText('Senha')
  //   const inputCoPassword = screen.getByPlaceholderText('Confirmar Senha')
  //   const btnConfirm = screen.getByText('CONFIRMAR')

  //   userEvent.type(inputName, validStudent.name)
  //   userEvent.selectOptions(selectCourses, ['1'])
  //   userEvent.type(inputReg, validStudent.reg)
  //   userEvent.type(inputEmail, validStudent.email)
  //   userEvent.type(inputPassword, validStudent.password)
  //   userEvent.type(inputCoPassword, validStudent.password)
  //   userEvent.click(btnConfirm);

  //   await waitFor(() => {
  //     expect(redirect).toHaveBeenCalled();
  //   })

  // })
});
