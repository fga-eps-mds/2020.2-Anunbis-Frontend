import renderer from 'react-test-renderer';
import { sendLogin } from '../../services/Auth';
import { logOut } from '../../services/Auth';

describe('Snapshot Auth component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(sendLogin).toJSON() 
    expect(tree).toMatchSnapshot()
    })

    it('matches the snapshot', () => {
        const tree = renderer.create(logOut).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})