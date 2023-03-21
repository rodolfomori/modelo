import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const { pathname } = useLocation()

  const [changeBackground, setChangeBackground] = useState(false)

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 100) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 100) {
      setChangeBackground(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo" />

      <Menu>
        <Li active={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li active={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
        <Li active={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
