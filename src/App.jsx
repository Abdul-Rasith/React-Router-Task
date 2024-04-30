import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { TopBar } from "./TopBar";
import { Home } from "./Home";
import { About } from "./About";
import { Product } from "./Product";
import { Contact } from "./Contact";
import { All } from "./All";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/All" element={<All />}></Route>
          <Route path="/DataScience" element={<About />}></Route>
          <Route path="/CyberSecurity" element={<Product />}></Route>
          <Route path="/Career" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
