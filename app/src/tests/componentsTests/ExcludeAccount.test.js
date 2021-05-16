import renderer from 'react-test-renderer';
import ExcludeAccount from '../../components/ExcludeAccount';
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe('Snapshot ExcludeAccount component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<ExcludeAccount />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
    describe('tests of click on buttons', () => {
        it('should exec callback on click on button VOLTAR', () => {
            render(<ExcludeAccount close={callback}/>)
            const button = screen.getByText('VOLTAR');
            function callback(){
                button.text = "CLICKED";
            }
            userEvent.click(button);
            expect(button.text).toBe("CLICKED");
        })
        it('the children of buttons must be the same on click', ()=> {
            function callback(){ // CALLBACK NECESSARIO PARA COMPILACAO DO EXCLUDEACCOUNT
                console.log("CLICKED!");
            }
            render(<ExcludeAccount close={callback}/>)
            const voltar = {
                button: screen.getByText('VOLTAR'),
                old_children: screen.getByText('VOLTAR').children
            }
            const excluir = {
                button: screen.getByText('EXCLUIR'),
                old_children: screen.getByText('EXCLUIR').children
            }

            userEvent.click(voltar.button);
            expect(voltar.button.children).toBe(voltar.old_children);

            userEvent.click(excluir.button);
            expect(excluir.button.children).toBe(excluir.old_children);
        })
    })
    
})