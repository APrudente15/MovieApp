import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { Header } from "./components";

//redux stuff here
import {useSelector, useDispatch} from 'react-redux'; 
import { actionCreators } from './action-creators';
import { bindActionCreators } from 'redux';


function App() {
  
  return (
    <>
      <Routes>
        <Route path = "/" element={<Header />}>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/shows" element={<Pages.ShowsPage />} />
        <Route path="/shows/:id" element={<Pages.ShowPage />} />
        <Route path="/search" element={<Pages.SearchPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


//<ShowContext.Provider></ShowContext.Provider> is final part of "providing the context" step in useContext steps