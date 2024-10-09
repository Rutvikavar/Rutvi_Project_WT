import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AirPod from './pages/AirPod';
import Details from './pages/Details';
import AddEditAirPods from './pages/addAirPod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<AirPod />} />
        <Route path="/Airpod/:id" element={<Details />} />
        <Route path="/Airpod/add" element={<AddEditAirPods />} />
        <Route path="/Airpod/add/:id" element={<AddEditAirPods />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
