import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import useId from '@mui/material/utils/useId'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom'
import { api } from '../../../services/api'

type Book = {
  id: string
  name: string
  author: string
  publishYear: string
}

export const Books = () => {
  const [books, setBooks] = useState<Book[]>([])
  const headingId = useId()
  const { pathname } = useLocation()

  useEffect(() => {
    api.get('/books').then((response) => {
      const data = response.data as Book[]

      if (data) {
        setBooks(data)
      }
    })
  }, [pathname])

  return (
    <>
      <Container component="section" maxWidth="md" disableGutters>
        <Typography id={headingId} variant="h5" component="h2" mb={2}>
          Livros cadastrados
        </Typography>

        {books?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table aria-labelledby={headingId}>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Autor</TableCell>
                  <TableCell>Ano de publicação</TableCell>
                  <TableCell>Editar</TableCell>
                  <TableCell>Deletar</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {books.map(({ author, id, name, publishYear }) => {
                  return (
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>

                      <TableCell>{author}</TableCell>

                      <TableCell>{publishYear}</TableCell>

                      <TableCell>
                        <Tooltip title="Editar">
                          <IconButton
                            to={`/editar/${id}`}
                            component={RouterLink}
                            color="primary"
                            aria-label="Editar"
                          >
                            <EditIcon aria-hidden={true} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell>
                        <Tooltip title="Deletar">
                          <IconButton
                            to={`/deletar/${id}`}
                            component={RouterLink}
                            color="error"
                            aria-label="Deletar"
                          >
                            <DeleteIcon aria-hidden={true} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <>
            <Typography align="center">Nenhum livro cadastrado</Typography>
          </>
        )}
      </Container>

      <Outlet />
    </>
  )
}
