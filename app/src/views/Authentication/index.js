import React from 'react';
import {
  MenuOptions,
  AuthenticationStyle,
  Content,
  Option,
  Title,
  MsgLoading,
} from './styles';
import Login from '../../components/Login';
import RegisterStudent from '../../components/RegisterStudent';
import RegisterProfessor from '../../components/RegisterProfessor';
import Loading from '../../components/Loading';

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
  const [loading, setLoading] = React.useState({
    animation: false,
    message: 'Carregando',
  });

  function onRegister(msg) {
    setMessage(msg);
    setMenu(0);
    setLoading({
      animation: false,
      message: '',
    });
  }

  return (
    <Content>
      {loading.animation && (
        <>
          <Loading />
          <MsgLoading>{loading.message}</MsgLoading>
        </>
      )}
      {menu === 0 && (
        <Login
          message={message}
          setLoading={setLoading}
          setMessage={setMessage}
        />
      )}
      {!loading.animation && menu >= 1 && (
        <Register menu={menu} onRegister={onRegister} setLoading={setLoading} />
      )}
    </Content>
  );
};

const Register = ({ menu, onRegister, setLoading }) => (
  <>
    {menu === 1 && (
      <>
        <Title>Cadastro de Aluno</Title>
        <RegisterStudent onRegister={onRegister} setLoading={setLoading} />
      </>
    )}
    {menu === 2 && (
      <>
        <Title>Cadastro de Professor</Title>
        <RegisterProfessor onRegister={onRegister} setLoading={setLoading} />
      </>
    )}
  </>
);

export default Authentication;
