import {
  AppBar,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const Header = () => {
  return (
    <AppBar position="sticky" sx={{ flexShrink: 0, px: 1 }} color="default">
      <Container maxWidth="md" disableGutters>
        <Toolbar disableGutters>
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            <Link to="/" component={RouterLink} underline="hover" color="black">
              Books
            </Link>
          </Typography>

          <Button
            to="/cadastrar"
            component={RouterLink}
            variant="contained"
            size="large"
            sx={{ flexShrink: 0 }}
          >
            Cadastar
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
