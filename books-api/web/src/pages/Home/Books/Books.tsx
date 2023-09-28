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
import { Link as RouterLink } from 'react-router-dom'
import { api } from '../../../services/api'
import { DeleteDialog } from './DeleteDialog'

type Book = {
  id: string
  name: string
  author: string
  publishYear: string
}

export const Books = () => {
  const [books, setBooks] = useState<Book[]>([])
  const headingId = useId()
  const [deleteBook, setDeleteBook] = useState(false)
  const [open, setOpen] = useState(false)
  const [bookId, setBookId] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (deleteBook) {
      setLoading(true)

      api
        .delete(`/delete/${bookId}`)
        .then(() => {
          const booksClone = books.slice()
          const bookDeleteId = booksClone.findIndex(({ id }) => id === bookId)

          booksClone.splice(bookDeleteId, 1)

          console.log(booksClone)

          setBooks(booksClone)
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          setLoading(false)
          setDeleteBook(false)
        })
    }
  }, [deleteBook, bookId, books])

  useEffect(() => {
    setDisabled(loading)
  }, [loading])

  useEffect(() => {
    api.get('/books').then((response) => {
      const data = response.data as Book[]

      if (data) {
        setBooks(data)
      }
    })
  }, [])

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
                            disabled={disabled}
                          >
                            <EditIcon aria-hidden={true} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell>
                        <Tooltip title="Deletar">
                          <IconButton
                            type="button"
                            color="error"
                            aria-label="Deletar"
                            disabled={disabled}
                            onClick={() => {
                              setOpen(true)
                              setBookId(id)
                            }}
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

      <DeleteDialog
        onUserChoose={setDeleteBook}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}
