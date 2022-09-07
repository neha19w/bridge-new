import "./App.css";
import Login from "./Components/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dash" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
