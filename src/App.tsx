import { ViewComponent } from "./components/ViewComponent";
import { ViewContainer } from "./components/ViewContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/loginContext";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewContainer />} />
          <Route path="/home" element={<ViewComponent />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
