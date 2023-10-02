import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { BackNavigation } from '../../../components/ui/BackNavigation'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SnackbarContext } from '../../../contexts/Snackbar/Snackbar'
import { isAxiosError } from 'axios'

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
  const snackbar = useContext(SnackbarContext)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Fields>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Fields> = ({ author, name, publishYear }) => {
    setLoading(true)

    api
      .post('/create', { author, name, publishYear })
      .then(({ data }) => {
        snackbar.setSeverity?.('success')
        snackbar.setMessage?.(data.message)

        reset()
      })
      .catch((error) => {
        snackbar.setSeverity?.('error')

        if (isAxiosError(error)) {
          const response = error.response
          const isCustomError = response?.data?.error && response?.data?.message

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
  }

  useEffect(() => {
    setDisabled(loading)
  }, [loading])

  return (
    <Container component="section" maxWidth="md" disableGutters>
      <Typography variant="body1" align="right">
        <BackNavigation href="/" />
      </Typography>

      <SectionHeading mb={2}>Cadastrar</SectionHeading>

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
              <span>Cadastrando…</span>
            </>
          ) : (
            'Cadastrar'
          )}
        </Button>
      </form>
    </Container>
  )
}
