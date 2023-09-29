import { Button, Typography } from '@mui/material'
import { Add as AddIcon, Inbox as InboxIcon } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

export const Empty = () => {
  return (
    <>
      <InboxIcon sx={{ mx: 'auto', display: 'block' }} fontSize="large" />

      <Typography mb={2} align="center">
        Nenhum livro cadastrado
      </Typography>

      <Button
        to="/cadastrar"
        component={RouterLink}
        variant="contained"
        size="large"
        sx={{ flexShrink: 0 }}
        startIcon={<AddIcon aria-hidden={true} />}
        fullWidth
      >
        Cadastar
      </Button>
    </>
  )
}
