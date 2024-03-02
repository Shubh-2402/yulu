import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes';
import LoginPage from './pages/Login';
import Users from './pages/Users';
import './App.css';
import SignupPage from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Users />} path="/" exact />
            </Route>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignupPage />} path="/signup" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;