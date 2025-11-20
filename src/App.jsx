import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ToyDetails from './pages/ToyDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import About from './pages/About';

// Context
import { AuthProvider } from './contexts/AuthContext';

function App() {
  useEffect(() => {
    // Initialize AOS after component mounts
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        AOS.default.init({
          duration: 1000,
          once: true,
        });
      } catch (error) {
        console.log('AOS not available:', error);
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(initAOS, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/toy/:id" element={
                <ProtectedRoute>
                  <ToyDetails />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;