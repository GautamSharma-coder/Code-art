import React from 'react';
//import Navbar from './Navbar';
//import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 
      
      <Navbar />
      Hero Section 
      */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Code Art</h1>
          <p className="text-lg mb-8">
            Empower your learning journey with interactive courses and hands-on coding experiences.
          </p>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Popular Courses</h2>
          <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-64 flex-shrink-0"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Course+${item}`}
                  alt={`Course ${item}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Course Title {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    A brief description of what this course offers.
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Code Art?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Interactive Learning',
                description: 'Learn by doing with hands-on projects and real-world examples.',
                icon: '💻',
              },
              {
                title: 'Expert Instructors',
                description: 'Get guidance from industry professionals with years of experience.',
                icon: '📚',
              },
              {
                title: 'Flexible Schedules',
                description: 'Learn at your own pace with access to courses anytime, anywhere.',
                icon: '⏰',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white text-gray-800 rounded-lg p-6 shadow-lg"
              >
                <p className="text-sm italic mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi id nisi posuere consectetur."
                </p>
                <h4 className="text-lg font-bold">Student Name</h4>
                <p className="text-sm text-gray-600">Course Completed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer 
      <Footer />
      
      */}
    </div>
  );
};

export default HomePage;
