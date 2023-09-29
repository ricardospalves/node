import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from '@mui/material'
import { useId, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'

type ResponseLoaderData = {
  id: string
}

export const DeleteDialog = () => {
  const titleId = useId()
  const textId = useId()
  const navigate = useNavigate()
  const { id } = useLoaderData() as ResponseLoaderData
  const [loading, setLoading] = useState(false)

  const closeDialog = () => {
    navigate('/')
  }

  return (
    <Dialog open aria-label={titleId} aria-describedby={textId}>
      <DialogTitle id={titleId}>Deletar livro</DialogTitle>

      <DialogContent>
        <DialogContentText id={textId} color="black">
          Tem certeza que deseja deletar este livro? Esta ação é irreversível!
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            closeDialog()
          }}
          disabled={loading}
          autoFocus
        >
          Cancelar
        </Button>

        <Button
          type="button"
          variant="text"
          color="error"
          disabled={loading}
          onClick={() => {
            setLoading(true)

            api
              .delete(`/delete/${id}`)
              .then(() => {
                closeDialog()
              })
              .catch((error) => {
                console.error(error)
              })
              .finally(() => {
                setLoading(false)
              })
          }}
        >
          {loading ? (
            <>
              <CircularProgress size="1rem" color="inherit" />{' '}
              <span>Deletando…</span>
            </>
          ) : (
            'Sim, deletar'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
