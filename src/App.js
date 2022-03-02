import React from "react";
import Header from "./Components/Header";

//Router
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Pages
import LoginPage from "./Pages/LoginPage";
import Landing from "./Pages/Landing";
import Aws from "./Pages/Aws";
import Gcp from "./Pages/Gcp";
import Azure from "./Pages/Azure";
import StoragePage from "./Pages/StoragePage";
import S3Page from "./Pages/Articles/S3Page";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/landing" exact element={<Landing />} />
        <Route path="/aws" exact element={<Aws />} />
        <Route path="/gcp" exact element={<Gcp />} />
        <Route path="/azure" exact element={<Azure />} />
        <Route path="/aws/storage" exact element={<StoragePage />} />
        <Route path="/aws/storage/s3" exact element={<S3Page />} />
      </Routes>
    </Router>
  );
}

export default App;
