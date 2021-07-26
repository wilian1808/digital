import './index.css'

import LoginForm from 'components/LoginForm'
import Slogan from 'components/slogan'

import { useState } from 'react'

export default function Banner ({ header }) {
  const [load, setLoad] = useState(false)

  setTimeout(() => {
    setLoad(true)
  }, 100)

  return (
    <div className="banner">
      <div className="banner__content">
        <div className={`banner__description ${load ? 'bannerd__move' : ''}`}>
          <Slogan></Slogan>
        </div>
        <div className={`banner__login ${load ? 'bannerl__move' : ''}`}>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  )
}
