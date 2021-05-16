import { sendLogin } from '../../services/Auth';

describe('Snapshot Auth component', () => {
    test('been login', done => {
        const email = "123456789@aluno.unb.br";
        const senha = "00000000";
        function callback(data){
            expect(data).toBeUndefined()
            done();
        }
        function errorCallback(data){
            callback(data);
        }
        sendLogin(email, senha, callback, errorCallback);
    })
})