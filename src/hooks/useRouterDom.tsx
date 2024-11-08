import { Home, Login, Register } from '@/pages';
import { useRoutes } from 'react-router-dom';
export default function useRoutesElements() {
  const routeElements = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <h1>404</h1> },
  ]);
  return routeElements;
}
