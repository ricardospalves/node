import { Field } from '@/components/field'
import { Button } from '@/components/ui/button'

export const Form = () => {
  return (
    <form className="grid gap-4">
      <Field label="Nome" type="text" autoFocus />

      <Field label="E-mail" type="email" />

      <Field label="Senha" type="password" />

      <Button type="submit" className="flex w-full">
        Cadastrar
      </Button>
    </form>
  )
}
