import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from "./components/PageOne.tsx";
import PageTwo from "./components/PageTwo.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
