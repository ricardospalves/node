import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import { useId } from 'react'

export type DeleteDialogProps = {
  onUserChoose: (confirm: boolean) => void
  open?: boolean
  onClose?: () => void
}

export const DeleteDialog = ({
  onUserChoose,
  open = false,
  onClose,
}: DeleteDialogProps) => {
  const titleId = useId()
  const textId = useId()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-label={titleId}
      aria-describedby={textId}
    >
      <DialogTitle id={titleId}>Deletar livro</DialogTitle>

      <DialogContent>
        <DialogContentText id={textId}>
          Tem certeza que deseja deletar este livro? Esta ação é irreversível!
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            onUserChoose(false)
            onClose?.()
          }}
          autoFocus
        >
          Cancelar
        </Button>

        <Button
          type="button"
          variant="text"
          color="error"
          onClick={() => {
            onUserChoose(true)
            onClose?.()
          }}
        >
          Sim, deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
