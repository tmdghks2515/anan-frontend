import {
  StyledHeader,
  StyledHomeLink,
} from '@/components/layout/headers/Header.styles'
import MainNav from '@/components/layout/navs/MainNav'
import SearchButton from '@/components/common/buttons/SearchButton'
import { Button } from '@mui/material'
import MakeChatButton from '@/components/common/buttons/MakeChatButton'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHomeLink href='/'>Anan</StyledHomeLink>
      <MainNav />

      <div className='h-right'>
        <MakeChatButton />
        <SearchButton />
      </div>
    </StyledHeader>
  )
}

export default Header
