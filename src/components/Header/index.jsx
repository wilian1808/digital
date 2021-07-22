import './index.css'

import Logo from 'ui/logo'
import Nav from 'components/Nav'

export default function Header () {
  return (
    <header className="header">
      <div className="header__content">
        <Logo className="header__logo"></Logo>
        <>
          <Nav></Nav>
        </>
      </div>
    </header>
  )
}
