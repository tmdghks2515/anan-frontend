import {
  StyledHeader,
  StyledHomeLink,
} from '@/components/layout/headers/Header.styles'
import MainNav from '@/components/layout/navs/MainNav'
import SearchButton from '@/components/common/buttons/SearchButton'
import MakeChatButton from '@/components/common/buttons/MakeChatButton'
import HeaderUser from '@/components/layout/headers/components/HeaderUser'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHomeLink href='/'>Anan</StyledHomeLink>
      <MainNav />

      <div className='h-right'>
        <SearchButton />
        <MakeChatButton />

        <HeaderUser />
      </div>
    </StyledHeader>
  )
}

export default Header
