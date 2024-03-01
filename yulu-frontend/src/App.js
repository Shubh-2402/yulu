import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes';
import LoginPage from './pages/Login';
import Users from './pages/Users';
import './App.css';
import SignupPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Users />} path="/" exact/>
            </Route>
            <Route element={<LoginPage/>} path="/login"/>
            <Route element={<SignupPage/>} path="/signup"/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;