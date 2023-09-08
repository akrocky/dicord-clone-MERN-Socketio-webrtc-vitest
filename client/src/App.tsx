import {

  Routes,
  Route,
  Navigate,

} from "react-router-dom";

import './App.css'
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AlertNotification from "./components/AlertNotification";

function App() {
 

  return (
   <>
   <Routes>
   <Route path="/" element={<Dashboard />} />
   <Route path="/login" element={<LoginPage />} />
   <Route path="/register" element={<RegisterPage />} />
   <Route path="/dashboard" element={<Dashboard />} />
   <Route path="*" element={<Navigate to="/dashboard" replace />} />
    
   {/* <Route path="/" element={<Home />} />
   <Route path="/admin/product" element={<AdminRoute component={ProductCreat} />} /> */}
   </Routes>
   <AlertNotification  />
   </>
  )
}

export default App
