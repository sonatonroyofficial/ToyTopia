import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Star, ShoppingCart, Heart, ArrowLeft, User, Mail, CheckCircle } from 'lucide-react';
import toysData from '../data/toys.json';
import toast from 'react-hot-toast';

const ToyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Find the toy by ID
    const foundToy = toysData.find(t => t.toyId === parseInt(id));
    if (foundToy) {
      setToy(foundToy);
      document.title = `${foundToy.toyName} - ToyTopia`;
    } else {
      navigate('/404');
    }
    setLoading(false);
  }, [id, currentUser, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      setFormSubmitted(true);
      toast.success('Thank you! We\'ll contact you soon about trying this toy.');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-200 font-medium"
                  >
                    Try Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
