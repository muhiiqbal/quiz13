import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import HomePage from "./Pages/home";
import DetailPage from "./Pages/detail";
import Footer from "./Components/footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/comments" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;