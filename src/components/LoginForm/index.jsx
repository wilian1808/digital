import './index.css'

import IconEmail from 'ui/email'
import IconPassword from 'ui/password'
import { useState } from 'react'

import IconEye from 'ui/eyes'
import IconEyeClose from 'ui/eyesClose'

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('mensaje por defecto')
  const [user, setUser] = useState(undefined)
  const [check, setCheck] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const sendLogin = e => {
    e.preventDefault()
    setLoading(true)
    setResponse('')
    setUser(undefined)
    setTimeout(() => {
      if (email === 'admin@gmail.com' && password === 'holamundo') {
        setResponse('Bienvenido usuario! 👋🏻')
        setUser(true)
      } else {
        setResponse('Usuario o contraseña incorrectos')
        setUser(false)
      }
      setLoading(false)
    }, 1200)
  }

  const view = e => {
    e.target.setCustomValidity(e.target.validity.patternMismatch ? setValidEmail(true) : setValidEmail(false))
    e.target.setCustomValidity(e.target.validity.patternMismatch ? ' ' : '')
  }

  return (
    <div className="loginp">
      <form className="loginform" onSubmit={sendLogin}>
        <legend className="login__title">iniciar sesion</legend>

        <label className="login__label login__email" >
          <IconEmail className="login__icon"></IconEmail>
          <input
            type="email"
            className="login__input input__email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo..."
            required
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+$"
            onInvalid={view}
            onInput={view}
          />
        </label>

        {validEmail &&
          <span className={`input__alert ${(validEmail) ? 'err' : ''} `}>
            correo electronico no valido!
          </span>
        }

        <label className="login__label">
          <IconPassword className="login__icon"></IconPassword>
          <input
            type={`${(check) ? 'text' : 'password'}`}
            className="login__input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña..."
            required
          />
        </label>

        <label htmlFor="ver" className="login__label login__check">
          { check
            ? <IconEye className={'checked'}></IconEye>
            : <IconEyeClose className={'checked check_true'}></IconEyeClose>
          }
          <input id="ver" type="checkbox" checked={check} onChange={() => setCheck(!check)} />
          ver contraseña
        </label>

        <input
          type="submit"
          value={`${(!loading) ? 'ingresar' : 'ingresando...'}`}
          className={`${(!loading) ? 'login__input login__submit' : 'login__input login__submit input__disabled'}`}
          disabled={loading}
        />

        { (user) &&
          <span className={'response response__true addani'} >
            { response }
          </span>
        }

        { (response === 'Usuario o contraseña incorrectos') &&
          <span className={'response response__error addani'} >
            { response }
          </span>
        }

      </form>
    </div>
  )
}
