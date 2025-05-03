import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from "react-router";
import SellerDashboardHome from './SellerDashboard/SellerDashboardHome/SellerDashboardHome.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App />}/>
  <Route path='/seller' element={<SellerDashboardHome/>}/>
    
  </Routes>
  </BrowserRouter>,
)
