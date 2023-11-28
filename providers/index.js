import StoreProvider from '@/providers/store.provider'
import ThemeProviderCustom from '@/providers/theme.provider'

const RootProvider = ({ children }) => {
  return (
    <>
      <StoreProvider>
        <ThemeProviderCustom>{children}</ThemeProviderCustom>
      </StoreProvider>
    </>
  )
}

export default RootProvider
