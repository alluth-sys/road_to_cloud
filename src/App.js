import React from "react";
import Header from "./Components/Header";

//Router
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Pages
import Landing from "./Pages/Landing";
import Aws from "./Pages/Aws";
import Gcp from "./Pages/Gcp";
import Azure from "./Pages/Azure";
import StoragePage from "./Pages/StoragePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/aws" exact element={<Aws />} />
        <Route path="/gcp" exact element={<Gcp />} />
        <Route path="/azure" exact element={<Azure />} />
        <Route path="/aws/storage" exact element={<StoragePage />} />
      </Routes>
    </Router>
  );
}

export default App;
