import { DashboardContainer } from "./components/DashboardContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/loginContext";
import { UnidadesInfo } from "./components/UnidadesInfo";
import { Header } from "./components/Header";
import { Unidades } from "./components/Unidades";
import { LoginPage } from "./components/LoginPage";
import { Navigation } from "./components/Navegação";
import { AvisosModal } from "./components/AvisosModal";
import { MultasModal } from "./components/MultasModal";
import { ReclamacoesModal } from "./components/ReclamacoesModal";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <main className="flex h-screen w-full flex-col items-center gap-4 relative bg-neutral-400">
          <Navigation/>
          <Header />
          <div className="flex bg-white/80 shadow-md rounded-md w-11/12 px-5 h-5/6 items-center justify-center">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<DashboardContainer />}>
                <Route index element={<Unidades />} />
                <Route path="/aviso-modal" element={<AvisosModal />} />
                <Route path="/reclamacoes-modal" element={<ReclamacoesModal />} />
                <Route path="/multas-modal" element={<MultasModal />} />
                <Route path="unidades/:id" element={<UnidadesInfo />} />
              </Route>
            </Routes>
          </div>
        </main>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
