import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";

import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Nav />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
