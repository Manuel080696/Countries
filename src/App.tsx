import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Root } from "./pages/Root";

import { CountryPage } from "./pages/Country";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
