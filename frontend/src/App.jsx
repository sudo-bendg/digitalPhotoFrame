import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Head, Header, IndexMain, Gallery, Settings } from "./Components";
import "./style.css";

function App() {
  return (
    <>
      <Head />
      <BrowserRouter>
        <div id="container">
          <Header />
          <Routes>
            <Route path="/" element={<IndexMain />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
