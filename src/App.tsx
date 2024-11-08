import useRoutesElements from '@/hooks/useRouterDom';

function App() {
  const routerDom = useRoutesElements();
  return <>{routerDom}</>;
}
export default App;
