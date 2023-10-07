import { Header } from "./components/Header";
import { ViewContainer } from "./components/ViewContainer";

function App() {
  return (
    <main className="flex h-screen w-full flex-col items-center gap-4 bg-neutral-400">
      <Header />
      <ViewContainer />
    </main>
  );
}

export default App;
