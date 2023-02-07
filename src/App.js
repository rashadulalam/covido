import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import TakeAction from "./Pages/TakeAction/TakeAction";
import News from "./Pages/News/News";
import Doctores from "./Pages/Doctores/Doctores";
import Contact from "./Pages/Contact/Contact";
import Covido from "./Pages/Covido/Covido";
import NoPage from "./Pages/NoPage/NoPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="action" element={<TakeAction />} />
            <Route path="covido" element={<Covido />}  />
            <Route path="news" element={<News />} />
            <Route path="doctores" element={<Doctores />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
