import renderer from 'react-test-renderer';
import Avaliation from '../../components/Avaliation';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Snapshot Avaliation view', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Avaliation />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
    describe('test button PUBLICA and ANONIMA', () => {
        it('children´s of the buttons must be the same on click them', () => {
            render(<Avaliation />);
            const publica = { 
                button: screen.getByText('PÚBLICA'),
                old_children: screen.getByText('PÚBLICA').children
            }
            const anonima = { 
                button: screen.getByText('ANÔNIMA'),
                old_children: screen.getByText('ANÔNIMA').children
            }

            userEvent.click(publica.button);
            expect(publica.old_children).toBe(publica.button.children);

            userEvent.click(anonima.button);
            expect(anonima.old_children).toBe(anonima.button.children);
        })
    })
    // describe('test of submit form', () => {
    //     it('data must be post in api', done => {
    //         const data = {
    //             reg_student: "123456789"
    //         }
    //         const professor = {
    //             id_professor: '',
    //             disciplines: [{
    //                 discipline_code: 1,
    //                 name: "teste1"
    //             },{
    //                 discipline_code: 2,
    //                 name: "teste2"
    //             }]
    //         }
    //         const callback = jest.fn();
    //         localStorage.setItem('student', data);
    //         render(<Avaliation close={callback} professor={professor}/>);
    //         const input = screen.getByTestId('form-aval-1');

    //         const select = screen.getByTestId('select-aval-1');
    //         userEvent.click(select.children[1]);

    //         const star = screen.getByTestId('star-aval-1');
    //         userEvent.click(star.children[4].children[0])
            
    //         const star1 = screen.getByTestId('star-aval-2');
    //         userEvent.click(star1.children[4].children[0])

    //         const star2 = screen.getByTestId('star-aval-3');
    //         userEvent.click(star2.children[4].children[0])

    //         const star3 = screen.getByTestId('star-aval-4');
    //         userEvent.click(star3.children[4].children[0])

    //         const anonima = screen.getByText('ANÔNIMA');
    //         userEvent.click(anonima);

    //         const descricao = screen.getByTestId('form-aval-2');
    //         userEvent.type(descricao, "TESTE DE POST");

    //         fireEvent.submit(input);
      
    //         expect(callback).toHaveBeenCalled();
    //     })
    // })
})