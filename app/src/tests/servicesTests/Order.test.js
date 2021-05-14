import renderer from 'react-test-renderer';
import { orderPop, orderDate, orderHRate, orderLRate, orders } from '../../services/Orders';

describe('Snapshot Order service', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(orderPop).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('matches the snapshot', () => {
        const tree = renderer.create(orderDate).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('matches the snapshot', () => {
        const tree = renderer.create(orderHRate).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('matches the snapshot', () => {
        const tree = renderer.create(orderLRate).toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('matches the snapshot', () => {
        expect(orders).toMatchSnapshot();
    });
})
