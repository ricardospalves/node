import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Root } from './layout/Root'
import { Register } from './pages/Register'

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
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
