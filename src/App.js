import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useEffect, useState } from "react";
import users from "./data";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  return (
    <>
      <MyContext.Provider value={{ user, setUser, users }}>
        <div>
          <Routes>
            <Route path="/login" element={!user && <LoginPage />} />
            <Route path="/home" element={user && <Home />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
