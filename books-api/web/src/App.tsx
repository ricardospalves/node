import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Root } from './layout/Root'
import { Register } from './pages/Register'
import { Edit } from './pages/Edit'
import { api } from './services/api'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
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
