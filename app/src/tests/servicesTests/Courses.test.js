import { getCourses } from '../../services/Courses';

describe('Snapshot Auth component', () => {
    test('must call the callback on getting Courses', done => {
        const json = {
            message: "Courses Collected"
        }
        function callback(data){
            expect(data).toStrictEqual([json]);
            done();
        }
        getCourses(callback);
    })
})