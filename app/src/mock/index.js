import MockAdapter from 'axios-mock-adapter';
import api from '../services/Api';


const mock = new MockAdapter(api);

export default mock