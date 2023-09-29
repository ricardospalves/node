import {
  Alert,
  AlertProps,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { api } from '../../../services/api'
import { BackNavigation } from '../../../components/ui/BackNavigation'
import { SectionHeading } from '../../../components/ui/SectionHeading'

type ReponseLoaderData = {
  id: string
  name: string
  publishYear: number
  author: string
}

type Fields = {
  name: string
  author: string
  publishYear: number
}

const CURRENT_YEAR = new Date().getFullYear()

const schema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  author: z.string().min(1, { message: 'Campo obrigatório' }),
  publishYear: z
    .number({
      coerce: true,
      invalid_type_error: 'Apenas números são aceitos',
      required_error: 'Campo obrigatório',
    })
    .min(1, {
      message: 'Digite um ano válido',
    })
    .max(CURRENT_YEAR, {
      message: `O ano não máximo permitido é ${CURRENT_YEAR}`,
    }),
})

export const Form = () => {
  const loaderData = useLoaderData() as ReponseLoaderData
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertProps['severity']>('info')
  const [alertMessage, setAlertMessage] = useState('')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Fields>({
    resolver: zodResolver(schema),
  })

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  const handleSnackOpen = () => {
    setSnackOpen(true)
  }

  const onSubmit: SubmitHandler<Fields> = ({ author, name, publishYear }) => {
    setLoading(true)

    api
      .patch(`/update/${loaderData.id}`, { author, name, publishYear })
      .then(() => {
        setSeverity('success')
        handleSnackOpen()
        setAlertMessage('Livro atualizado com sucesso!')
      })
      .catch((error) => {
        console.error(error)
        setSeverity('error')
        handleSnackOpen()
        setAlertMessage('Ocorreu um erro.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    setValue('author', loaderData.author)
    setValue('name', loaderData.name)
    setValue('publishYear', loaderData.publishYear)
  }, [loaderData, setValue])

  useEffect(() => {
    setDisabled(loading)
  }, [loading])

  return (
    <>
      <Container component="section" maxWidth="md" disableGutters>
        <Typography variant="body1" align="right">
          <BackNavigation href="/" />
        </Typography>

        <SectionHeading mb={2}>Atualizar</SectionHeading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} mb={2} container>
            <Grid xs={12} item>
              <TextField
                type="text"
                label="Nome do livro"
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
                disabled={disabled}
                autoFocus
                {...register('name')}
                fullWidth
              />
            </Grid>

            <Grid xs={12} item>
              <TextField
                type="text"
                label="Autor"
                error={Boolean(errors.author?.message)}
                helperText={errors.author?.message}
                disabled={disabled}
                {...register('author')}
                fullWidth
              />
            </Grid>

            <Grid xs={12} item>
              <TextField
                type="text"
                label="Ano de publicação"
                inputProps={{
                  maxLength: 4,
                }}
                error={Boolean(errors.publishYear?.message)}
                helperText={errors.publishYear?.message}
                disabled={disabled}
                {...register('publishYear')}
                fullWidth
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={disabled}
            fullWidth
          >
            {disabled ? (
              <>
                <CircularProgress size="1rem" color="inherit" />{' '}
                <span>Atualizando…</span>
              </>
            ) : (
              'Atualizar'
            )}
          </Button>
        </form>
      </Container>

      <Snackbar
        open={snackOpen}
        onClose={handleSnackClose}
        autoHideDuration={5_000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert severity={severity} onClose={handleSnackClose}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  )
}
