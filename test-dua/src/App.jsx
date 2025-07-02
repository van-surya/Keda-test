import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from './components/Layouts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

