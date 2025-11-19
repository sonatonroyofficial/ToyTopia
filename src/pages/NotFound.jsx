import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | ToyTopia';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8" data-aos="fade-up">
          <div className="relative">
            <div className="text-9xl font-bold text-pink-500 opacity-20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg">
                <Search className="h-16 w-16 text-pink-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The page you're looking for seems to have wandered off to play with the toys! 
            Don't worry, let's get you back to the fun.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-pink-500 text-pink-600 font-medium rounded-lg hover:bg-pink-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Safety
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200" data-aos="fade-up" data-aos-delay="300">
          <p className="text-sm text-gray-500 mb-4">Maybe you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="text-pink-600 hover:text-pink-700 text-sm font-medium"
            >
              Popular Toys
            </Link>
            <Link
              to="/about"
              className="text-pink-600 hover:text-pink-700 text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="text-pink-600 hover:text-pink-700 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-pink-600 hover:text-pink-700 text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="400">
          <p className="text-sm text-gray-600">
            🧸 While you're here, why not check out our amazing collection of toys? 
            We promise they won't disappear like this page did!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
