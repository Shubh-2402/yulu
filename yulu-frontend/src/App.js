import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes';
import LoginPage from './pages/Login';
import Users from './pages/Users';
import './App.css';
import SignupPage from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Show from './pages/Show';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Users />} path="/" exact />
              <Route element={<Show />} path="/user/:id" />
              <Route element={<Edit />} path="/edit/:id" />
            </Route>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignupPage />} path="/signup" />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;