import React from 'react';
import {
  MenuOptions,
  AuthenticationStyle,
  Content,
  Option,
  Title,
} from './styles';
import Login from '../../components/Login';
import RegisterStudent from '../../components/RegisterStudent';
import RegisterProfessor from '../../components/RegisterProfessor';

function Authentication() {
  const [menu, setMenu] = React.useState(0);

  return (
    <AuthenticationStyle>
      <Menu menu={menu} setMenu={setMenu} />
      <MenuContent menu={menu} setMenu={setMenu} />
    </AuthenticationStyle>
  );
}

const Menu = ({ menu, setMenu }) => (
  <MenuOptions>
    <Option
      className="btnLogin"
      onClick={() => setMenu(0)}
      selected={menu === 0}
    >
      Login
    </Option>
    <Option
      className="btnCadastro"
      onClick={() => setMenu(1)}
      selected={menu >= 1}
    >
      Cadastro
    </Option>
    {menu === 1 && (
      <Option className="btnLogin" onClick={() => setMenu(2)}>
        Professor?
      </Option>
    )}
    {menu === 2 && (
      <Option className="btnLogin" onClick={() => setMenu(1)}>
        Aluno?
      </Option>
    )}
  </MenuOptions>
);

const MenuContent = ({ menu, setMenu }) => {
  const [message, setMessage] = React.useState();

  function onRegister(msg) {
    setMessage(msg);
    setMenu(0);
  }

  return (
    <Content>
      {menu === 0 && <Login msg={message} />}
      {menu >= 1 && <Register menu={menu} onRegister={onRegister} />}
    </Content>
  );
};

const Register = ({ menu, onRegister }) => (
  <>
    {menu === 1 && (
      <>
        <Title>Cadastro de Aluno</Title>
        <RegisterStudent onRegister={onRegister} />
      </>
    )}
    {menu === 2 && (
      <>
        <Title>Cadastro de Professor</Title>
        <RegisterProfessor onRegister={onRegister} />
      </>
    )}
  </>
);

export default Authentication;
