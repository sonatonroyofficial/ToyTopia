import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Shield, Star, ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - ToyTopia';
  }, []);

  const stats = [
    { number: '10,000+', label: 'Happy Families', icon: Users },
    { number: '5,000+', label: 'Toys Available', icon: Heart },
    { number: '4.8', label: 'Average Rating', icon: Star },
    { number: '50+', label: 'Local Sellers', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Child Safety First',
      description: 'Every toy in our collection is carefully vetted for safety and age-appropriateness.'
    },
    {
      icon: Users,
      title: 'Supporting Local',
      description: 'We believe in supporting local toy sellers and building stronger communities.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Only the highest quality toys make it to our platform, ensuring lasting joy.'
    },
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Secure transactions and reliable sellers you can trust with your children\'s happiness.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-pink-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            About ToyTopia
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Your trusted local toy marketplace, bringing joy and imagination to children's lives while supporting local sellers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ToyTopia started with a simple vision: to bring joyful,
                 high-quality toys to families while uplifting local toy sellers and creating a stronger community marketplace.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2022, we’ve grown from a small local project into a trusted online destination where parents can confidently find safe,
                 durable, and enriching toys. Our team carefully selects every product to ensure it meets our standards for quality, safety, and
                  educational value.
              </p>
              <p className="text-lg text-gray-600">
                At ToyTopia, we believe play is a powerful part of childhood.
                 That’s why we’re dedicated to making sure every child has access to toys that inspire imagination,
                  encourage creativity, and bring true happiness.
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-pink-600 mb-1">2024</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Safe Toys</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Free</div>
                    <div className="text-sm text-gray-600">Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at ToyTopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" data-aos="fade-up">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="100">
            Our mission is to build a vibrant marketplace where families can discover amazing toys that spark imagination
             and creativity, while supporting local sellers and strengthening communities. We believe every child
              deserves access to high-quality toys that spark joy, inspire growth, and support their overall development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-200"
            >
              Explore Toys
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border-2 border-pink-500 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-all duration-200"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Have Questions?
          </h2>
          <p className="text-xl text-pink-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            We'd love to hear from you! Get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@toytopia.com"
              className="inline-flex items-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
