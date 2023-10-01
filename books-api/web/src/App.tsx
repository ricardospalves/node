import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Root } from './layout/Root'
import { Register } from './pages/Register'
import { Edit } from './pages/Edit'
import { Delete } from './pages/Delete'
import { api } from './services/api'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/deletar/:id',
            element: <Delete />,
            loader: async ({ params }) => {
              if (!params.id) {
                return redirect('/')
              }

              return {
                id: params.id,
              }
            },
          },
        ],
      },
      {
        path: '/cadastrar',
        element: <Register />,
      },
      {
        path: '/editar/:id',
        element: <Edit />,
        loader: async ({ params }) => {
          try {
            const { data } = await api.get(`/book/${params.id}`)

            if (!data) {
              return redirect('/')
            }

            return { ...data }
          } catch (error) {
            console.error(error)

            return redirect('/')
          }
        },
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
