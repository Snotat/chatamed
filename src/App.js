import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import Signupgen from "./pages/Signupgen";
import Signuppro from "./pages/Signuppro";
import Signuppat from "./pages/Signuppat";
import List from "./pages/List";
import Footer from "./components/Footer";
import Talk from "./pages/Talk";
import Profsignin from "./pages/Profsignin";
import Patsignin from "./pages/Patsignin";
import GetProf from "./pages/GetProf";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import ChatAI from "./pages/ChatAI";
import { OpenAI } from "openai";
import { Navigate } from "react-router-dom";
function Layout() {
  return (
    <div className="outnav">
      <div className="allnav">
        <TopBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const PrivateRoutes = () => {
  if (
    localStorage.getItem("token") == null ||
    localStorage.getItem("token") == ""
  ) {
    const isAuth = false;

    return isAuth ? <Outlet /> : <Navigate to="/sign" />;
  } else {
    const isAuth = true;

    return isAuth ? <Outlet /> : <Navigate to="/sign" />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Signupgen />} />
          <Route path="/signuppro" element={<Signuppro />} />
          <Route path="/signuppat" element={<Signuppat />} />
          <Route path="/patsignin" element={<Patsignin />} />
          <Route path="/profsignin" element={<Profsignin />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/medics" element={<List />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat/:id" element={<Talk />} />
            <Route path="/getprof/:id" element={<GetProf />} />
            <Route path="/getprof/ai" element={<ChatAI />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
