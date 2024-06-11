import "./App.css";
import Home from "./components/Home";
import Save from "./components/Save";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/save"
          element={
            <>
              <Save />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
