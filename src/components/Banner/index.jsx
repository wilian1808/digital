import './index.css'

import LoginForm from 'components/LoginForm'
import Slogan from 'components/slogan'

export default function Banner ({ header }) {
  console.log('la altura es: ', header)

  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__description">
          <Slogan></Slogan>
        </div>
        <div className="banner__login">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  )
}
