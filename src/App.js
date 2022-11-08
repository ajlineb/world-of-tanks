import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout.js";
import Main from "./Pages/Main.js";
import Help from "./Pages/Help.js";
import Contact from "./Pages/Contact.js";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
