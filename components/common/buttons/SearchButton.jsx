'use client'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { StyledSearchButton } from '@/components/common/buttons/button.styles'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
const SearchButton = () => {
  const router = useRouter()
  return (
    <StyledSearchButton onClick={() => router.push('/search')}>
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
    </StyledSearchButton>
  )
}

export default SearchButton
