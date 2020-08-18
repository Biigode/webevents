import React from "react";
import "./styles.css";

function Login() {
  return (
    <div id="login" >
      <div>
        <label htmlFor="usuario">Usuário</label>
        <input type="text" id="usuario" />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="text" id="senha" />
      </div>
    </div>
  );
}

export default Login;
