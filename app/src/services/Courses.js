import api from './Api';

export const getCourses = (setCourses) => {
  api.get('/course').then((response) => {
    console.log(response);
    setCourses(response.data);
  });
};
