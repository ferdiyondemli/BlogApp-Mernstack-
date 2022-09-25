import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { BrowserRouter, Routes, Route, Link,Navigate } from "react-router-dom";

function App() {
  const user=false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user? <Navigate to="/" /> :<Register />} />
        <Route path="/login" element={user? <Navigate to="/" /> : <Login />} />
        <Route path="/write" element={user?<Write /> :<Navigate to="/login" />} />
        <Route path="/settings" element={user?<Settings />:<Navigate to="/login" />} />
        <Route path="/post/:postid" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
