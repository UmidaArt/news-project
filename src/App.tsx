import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import AddNews from "./pages/AddNews";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Users from "./pages/Users";

function App() {

  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/addNews" element={<AddNews/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
