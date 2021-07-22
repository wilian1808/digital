import './index.css'

import IconEmail from 'ui/email'
import IconPassword from 'ui/password'
import { useState } from 'react'

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('mensaje por defecto')
  const [user, setUser] = useState(undefined)

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

  return (
    <div className="loginp">
      <form className="loginform" onSubmit={sendLogin}>
        <legend className="login__title">iniciar sesion</legend>
        <label className="login__label" >
          <IconEmail className="login__icon"></IconEmail>
          <input type="email" className="login__input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo..." required/>
        </label>
        <label className="login__label">
          <IconPassword className="login__icon"></IconPassword>
          <input type="password" className="login__input" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña..." required/>
        </label>
        <input
          type="submit"
          value={`${(!loading) ? 'ingresar' : 'ingresando...'}`}
          className={`${(!loading) ? 'login__input login__submit' : 'login__input login__submit input__disabled'}`}
          disabled={loading}
          />
      </form>

      { (user) &&
        <span className={'response response__true'} >
          { response }
        </span>
      }

      { (response === 'Usuario o contraseña incorrectos') &&
        <span className={'response response__error'} >
          { response }
        </span>
      }

    </div>
  )
}
