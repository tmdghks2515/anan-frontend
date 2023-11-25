import {
  StyledHeader,
  StyledHomeLink,
  StyledNav,
} from '@/components/layout/headers/Header.styles'
import Link from 'next/link'
import { pages } from '@/components/layout/headers/Header.constants'
import MainNav from '@/components/layout/navs/MainNav'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHomeLink href='/'>Anan</StyledHomeLink>
      <MainNav />
    </StyledHeader>
  )
}

export default Header
