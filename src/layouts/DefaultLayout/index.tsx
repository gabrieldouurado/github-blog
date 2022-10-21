import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <DefaultLayoutContainer>
        <Header />
        <Outlet />
      </DefaultLayoutContainer>
    </div>
  )
}