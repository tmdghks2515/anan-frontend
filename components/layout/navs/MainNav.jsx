'use client'
/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import { pages } from '@/components/layout/navs/MainNav.constants'
import {
  activeNavCss,
  StyledNav,
} from '@/components/layout/navs/MainNav.styles'
import { usePathname } from 'next/navigation'

const MainNav = () => {
  const pathname = usePathname()

  return (
    <StyledNav>
      {pages.map((page) => (
        <Link
          href={page.link}
          key={page.label}
          css={pathname === page.link && activeNavCss}
        >
          {page.label}
        </Link>
      ))}
    </StyledNav>
  )
}

export default MainNav
