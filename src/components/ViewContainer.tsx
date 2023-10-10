import { Header } from "./Header";
import { LoginPage } from "./LoginPage";
import { ViewComponent } from "./ViewComponent";
import { useLogin } from '../context/loginContext'

export function ViewContainer() {
  const { isAuthenticated } = useLogin()
  return (
    <main className="flex h-screen w-full flex-col items-center gap-4 bg-neutral-400">
      <Header/>
      <div className="flex bg-white/80 shadow-md rounded-md w-11/12 px-5 h-5/6 items-center justify-center">
        {isAuthenticated ? <ViewComponent/> : <LoginPage />}
      </div>
    </main>
  );
}
