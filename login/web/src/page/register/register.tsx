import { Link } from '@/components/link'
import { Form } from './form/form'

export const RegisterPage = () => {
  return (
    <main className="min-h-screen p-2 flex flex-col">
      <div className="max-w-md w-full m-auto">
        <h1 className="text-4xl mb-8 font-bold text-center">Cadastro</h1>

        <Form />

        <hr className="my-8" />

        <p className="text-center">
          Já tem uma conta? Faça o <Link href="/login">log in</Link>.
        </p>
      </div>
    </main>
  )
}
