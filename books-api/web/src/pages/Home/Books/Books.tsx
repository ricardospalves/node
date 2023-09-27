import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import useId from '@mui/material/utils/useId'

type Book = {
  id: string
  name: string
  author: string
  publishYear: string
}

export const Books = () => {
  const [books, setBooks] = useState<Book[]>([])
  const headingId = useId()

  useEffect(() => {
    api.get('/books').then((response) => {
      const data = response.data as Book[]

      if (data) {
        setBooks(data)
      }
    })
  }, [])

  return (
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
  )
}
