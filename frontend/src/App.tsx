import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Evidence from "./pages/Evidence";
import Assessment from "./pages/Assessment";
import Report from "./pages/Report";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/evidence" element={<Evidence/>}/>
      <Route path="/assessment" element={<Assessment/>}/>
      <Route path="/report" element={<Report/>}/>
    </Routes>
  );
}

export default App;
