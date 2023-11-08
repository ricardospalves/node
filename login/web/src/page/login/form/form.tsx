'use client'

import { Field } from '@/components/field'
import { Button } from '@/components/ui/button'
import { useDialogStore } from '@/stores/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { loginService } from '@/services/api/login.service'
import { AxiosError, isAxiosError } from 'axios'
import { Loader2Icon } from 'lucide-react'

type Fields = {
  email: string
  name: string
  password: string
}

export const Form = () => {
  const { openDialog } = useDialogStore((state) => state)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Fields>({
    resolver: zodResolver(schema),
  })
  const [disabled, setDisabled] = useState(false)

  const onSubmit = async ({ email, name, password }: Fields) => {
    setDisabled(true)

    try {
      await loginService({
        email,
        password,
      })

      router.push('/')
    } catch (exception) {
      if (isAxiosError(exception)) {
        const axiosError = exception as AxiosError<ResponseError>
        const dataError = axiosError.response?.data

        if (dataError?.error) {
          if (dataError?.fieldErrors?.length) {
            dataError.fieldErrors.forEach(({ message, name }, index) => {
              setError(name as keyof Fields, {
                message,
              })
            })
          }

          openDialog({
            title: 'Algo deu errado',
            description: dataError.message,
          })

          return
        }
      }

      openDialog({
        title: 'Erro inesperado',
        description:
          'Ocorreu um erro inesperado, por favor, tente novament mais tarde.',
      })
    } finally {
      setDisabled(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Field
        label="E-mail"
        type="email"
        autoFocus
        {...register('email')}
        error={Boolean(errors.email)}
        helpertext={errors?.email?.message}
        disabled={disabled}
      />

      <Field
        label="Senha"
        type="password"
        {...register('password')}
        error={Boolean(errors.password)}
        helpertext={errors?.password?.message}
        disabled={disabled}
      />

      <Button type="submit" className="flex w-full" disabled={disabled}>
        {disabled ? (
          <Loader2Icon
            className="block shrink-0 w-4 h-4 animate-spin"
            aria-hidden={true}
          />
        ) : (
          <>Entrar</>
        )}
      </Button>
    </form>
  )
}
