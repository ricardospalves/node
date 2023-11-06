import { Field } from '@/components/field'
import { Button } from '@/components/ui/button'

export const Form = () => {
  return (
    <form className="grid gap-4">
      <Field label="E-mail" type="email" autoFocus />

      <Field label="Senha" type="password" />

      <Button type="submit" className="flex w-full">
        Entrar
      </Button>
    </form>
  )
}
