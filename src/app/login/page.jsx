"use client"
import '../../../assets/css/login.css';
import { useRouter } from 'next/navigation';
import usuarioApi from '../../../api/usuarioApi';

import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [matriculaError, setmatriculaError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginErros, setloginErros] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    const matricula = event.target.matricula.value;
    const password = event.target.password.value;

    if (!matricula || matricula.length !== 11) {
      setmatriculaError('Matrícula inválida! (Verifique se a matrícula informada possui 11 dígitos)');
      valid = false;
    } 
    else {
      setmatriculaError('');
    }

    if (!password) {
      setPasswordError('Informe uma senha para continuar!');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      usuarioApi.login(matricula, password)
        .then(() => {
          router.push('/clientes');
        })
        .catch(() => {
          setloginErros('Matrícula ou senha inválida!');
        });
    }
  };

  const handlematriculaInput = (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
  };

  return (
    <div className="containerLogin">
      <div className="logo">
        <img src="/logo.svg" alt="CSJ Group" />
      </div>
      <p className="paragraph">Para continuar realize o login<br /> com a sua conta.</p>

      <div className="loginBox">
        <h2 className="loginTittle">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="loginInputGroup">
            <input
              type="text"
              id="matricula"
              name="matricula"
              maxLength="11"
              placeholder="Matrícula *"
              onInput={handlematriculaInput}
            />
            {matriculaError && <span className="loginError">{matriculaError}</span>}
          </div>
          <div className="loginInputGroup">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha *"
            />
            {passwordError && <span className="loginError">{passwordError}</span>}
            {loginErros && <span className="loginError">{loginErros}</span>}
          </div>

          <button type="submit" className="loginButton">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};