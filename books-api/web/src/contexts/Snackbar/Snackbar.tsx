import { Alert, AlertProps, Snackbar } from '@mui/material'
import { ReactNode, createContext, useState } from 'react'

export type SnackbarContextData = {
  setOpen?: (open: boolean) => void
  setSeverity?: (severity: AlertProps['severity']) => void
  setMessage?: (message: string) => void
}

export const SnackbarContext = createContext<SnackbarContextData>({})

export type SnackbarProviderProps = {
  children?: ReactNode
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertProps['severity']>('info')
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <SnackbarContext.Provider
      value={{
        setOpen,
        setMessage,
        setSeverity,
      }}
    >
      {children}

      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        onClose={handleClose}
      >
        <Alert severity={severity} onClose={handleClose}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
