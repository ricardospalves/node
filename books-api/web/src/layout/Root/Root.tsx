import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const Root = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />

      <Box flexGrow={1} p={2}>
        <Outlet />
      </Box>
    </Box>
  )
}
