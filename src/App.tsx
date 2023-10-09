import { ViewComponent } from "./components/ViewComponent";
import { ViewContainer } from "./components/ViewContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewContainer />} />
        <Route path="/home" element={<ViewComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
