import { Link } from '@/components/link'
import { Form } from './form/form'

export const LoginPage = () => {
  return (
    <main className="min-h-screen p-2 flex flex-col">
      <div className="max-w-md w-full m-auto">
        <h1 className="text-4xl mb-8 font-bold text-center">Log in</h1>

        <Form />

        <hr className="my-8" />

        <p className="text-center">
          É novo aqui? Faça seu <Link href="/cadastro">cadastro</Link>.
        </p>
      </div>
    </main>
  )
}
