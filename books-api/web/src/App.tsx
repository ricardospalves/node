import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Root } from './layout/Root'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
