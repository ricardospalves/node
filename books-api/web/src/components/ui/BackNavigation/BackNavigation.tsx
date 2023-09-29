import { Link } from '@mui/material'
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material'
import { Link as RouterLink, To } from 'react-router-dom'

export type BackNavigationPros = {
  href: To
}

export const BackNavigation = ({ href }: BackNavigationPros) => {
  return (
    <Link
      to={href}
      display="inline-flex"
      alignItems="center"
      component={RouterLink}
    >
      <ChevronLeftIcon aria-hidden={true} />
      <span>Voltar</span>
    </Link>
  )
}
