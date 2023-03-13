import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicHome } from "./pages/PublicHome";
import { Corporate } from "./pages/corporate"; // corrected the component name to start with a capital letter
import { Category } from "./pages/category"; // category page linking
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/category" element={<Category />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
