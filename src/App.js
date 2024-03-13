import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="*" element={<HomePage />} />
        </Routes>
        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

