import { getCourses } from '../../services/Courses';
import { waitFor, cleanup } from '@testing-library/react';
import mock from '../../mock';

mock.onGet('/course').reply(200,
  {
      id_course: 1,
      name: 'Engenharia de Software'
  })
  
afterEach(cleanup);

describe('Snapshot Courses component', () => {
  test('must call the callback on getting Courses', async () => {
    const callback = jest.fn()
    getCourses(callback);
    await waitFor(() => {
      expect(callback).toHaveBeenCalled()
    })
  });
});
