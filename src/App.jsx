/* eslint-disable no-undef */
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import "./App.css";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import Navigation from "./components/Navigation";
export const ApiContext = createContext();

function App() {
  const api = "https://boolean-uk-api-server.fly.dev";
  const contactUrl = "${api}/TeinSchoemaker/contact";
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(contactUrl);
      const jsonData = await response.json();
      setContacts(jsonData.results || []);
    };
    fetchContacts();
  }, []);

  return (
    <ApiContext.Provider value={{ api, contact, setContacts }}>
      <div className="container">
        <h1>Menu</h1>

        <div className="container-nav-main">
            <nav className="sidebar">
                <Navigation />
            </nav>
          <main className="main">
            <Routes>
              <Route path="/contact" element={<Contacts />} />

              <Route path="/contact/addContact" element={<AddContact />} />
            </Routes>
          </main>
        </div>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
