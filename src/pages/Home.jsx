import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import toysData from '../data/toys.json';

const Home = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setToys(toysData);
    document.title = 'ToyTopia - Your Local Kids Toy Store';
  }, []);

  const sliderToys = toys.slice(0, 3);
  const popularToys = toys.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-96 md:h-[500px]"
        >
          {sliderToys.map((toy) => (
            <SwiperSlide key={toy.toyId}>
              <div className="relative h-full bg-gradient-to-r from-orange-400 to-pink-300 text-white">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {toy.toyName}
                      </h1>
                      <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mb-8">
                        {toy.description}
                      </p>
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="flex items-center">
                          <Star className="h-6 w-6 text-yellow-400 fill-current mr-2" />
                          <span className="text-2xl font-bold">{toy.rating}</span>
                        </div>
                        <span className="text-3xl font-bold">${toy.price}</span>
                      </div>
                      <Link
                        to={`/toy/${toy.toyId}`}
                        className="inline-flex items-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        View Details
                      </Link>
                    </div>
                    <div className="hidden lg:block">
                      <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">100% safe toys for your children</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Premium quality toys from trusted sellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Toys Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Toys
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most loved toys that bring joy and creativity to children's lives
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularToys.map((toy, index) => (
              <div
                key={toy.toyId}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-pink-500" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-pink-600 font-medium">
                      {toy.subCategory}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{toy.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {toy.toyName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {toy.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-pink-600">
                      ${toy.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {toy.availableQuantity} in stock
                    </span>
                  </div>
                  <Link
                    to={`/toy/${toy.toyId}`}
                    className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-200 font-medium text-center block"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-300 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with New Toys
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;