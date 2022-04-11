import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMeetUps from "./components/pages/AllMeetUps";
import Favorites from "./components/pages/Favorites";
import NewMeetUps from "./components/pages/NewMeetUps";
import Layout from "./components/Layout/Layout";
import { FavoritesContextProvider } from "./components/store/Favorites-context";

const App = () => {
  return (
    <>
      <FavoritesContextProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<AllMeetUps />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/NewMeetUps" element={<NewMeetUps />} />
            </Routes>
          </Layout>
        </Router>
      </FavoritesContextProvider>
    </>
  );
};

export default App;
