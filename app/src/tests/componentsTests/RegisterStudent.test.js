import renderer from 'react-test-renderer';
import RegisterStudent from '../../components/RegisterStudent';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


// const validStudent = {
//     name: 'Estudante teste',
//     reg: '123456789',
//     email: '123456789@aluno.unb.br',
//     password: '12345678'
// }

describe('Snapshot RegisterStudent component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<RegisterStudent />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})

describe('Testing forms functionability', () => {

    it('window location must be change when click on CANCELAR', () => {
        render(<RegisterStudent />);
        const buttonCancel = screen.getByText('CANCELAR');
        userEvent.click(buttonCancel);

        expect(window.location.pathname).toEqual('/');
    })

    // it('Submit Valid Student', async () => {
    //     const courses = document.createElement("option");
    //     courses.id_course = "1";
    //     courses.value = "1";
    //     courses.text = 'Engenharia de Software';

    //     const callback = jest.fn();
    //     render(<RegisterStudent redirect={callback} />)

    //     const inputName = screen.getByTestId('input-name')
    //     const selectCourses = screen.getByTestId('select-courses')
    //     const inputReg = screen.getByTestId('input-reg')
    //     const inputEmail = screen.getByTestId('input-email')
    //     const inputPassword = screen.getByTestId('input-password')
    //     const inputCoPassword = screen.getByTestId('input-co-password')
    //     const btnConfirm = screen.getByText('CONFIRMAR')

    //     getCourses()

    //     selectCourses.add(courses, null)
    //     console.log("teste stetar teste " + selectCourses.options.length)
    //     userEvent.type(inputName, validStudent.name)
    //     userEvent.selectOptions(selectCourses, ['1'])
    //     userEvent.type(inputReg, validStudent.reg)
    //     userEvent.type(inputEmail, validStudent.email)
    //     userEvent.type(inputPassword, validStudent.password)
    //     userEvent.type(inputCoPassword, validStudent.password)
    //     userEvent.click(btnConfirm);

    //     //expect(screen.getByRole('option', { name: 'Engenharia de Software' }).selected).toBe(true)

    //     await waitFor(() => {
    //         expect(callback).not.toHaveBeenCalled();
    //     })

    // })
})
