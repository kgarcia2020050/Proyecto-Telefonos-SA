import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import CallsComponent from "./components/CallsComponent";
import AddCallsComponent from "./components/AddCallsComponent";
import CallsHistory from "./components/CallsHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/home"  element={<CallsComponent />} />
          <Route path="/myCalls" element={<AddCallsComponent />} />
          <Route path="/history" element={<CallsHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
