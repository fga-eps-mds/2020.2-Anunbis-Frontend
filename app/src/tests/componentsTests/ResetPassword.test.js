import renderer from 'react-test-renderer';
import ResetPassword from '../../components/ResetPassword';

describe('Snapshot ResetPassword component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<ResetPassword />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})