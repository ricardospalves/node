import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from '@mui/material'
import { useContext, useId, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { SnackbarContext } from '../../../contexts/Snackbar/Snackbar'
import { isAxiosError } from 'axios'

type ResponseLoaderData = {
  id: string
}

export const DeleteDialog = () => {
  const snackbar = useContext(SnackbarContext)
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
              .then(({ data }) => {
                snackbar.setSeverity?.('success')
                snackbar.setMessage?.(data.message)
                closeDialog()
              })
              .catch((error) => {
                snackbar.setSeverity?.('error')

                if (isAxiosError(error)) {
                  const response = error.response
                  const isCustomError =
                    response?.data?.error && response?.data?.message

                  if (isCustomError) {
                    snackbar.setMessage?.(response.data?.message)
                    return
                  }

                  snackbar.setMessage?.('Ocorreu um erro desconhecido.')

                  return
                }

                snackbar.setMessage?.('Ocorreu um erro desconhecido.')

                console.log(error)
              })
              .finally(() => {
                snackbar.setOpen?.(true)
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
