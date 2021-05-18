import api from './Api';

export const getCourses = (setCourses) => {
  api.get('/course').then((response) => {
    setCourses(response.data);
  });
};
