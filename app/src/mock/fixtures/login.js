import mock from '../index';
import { validStudent, validProfessor } from './stored_users'

const mockLogin = (name) => {
    if (name === 'student'){
      mock.onPost('login').reply(200,{
        access_token: 'value_of_test',
        user: validStudent.response
      })
    }
    else {
      mock.onPost('login').reply(200,{
        access_token: 'value_of_test',
        user: validProfessor.response
      })
    }
  }
  
export default mockLogin