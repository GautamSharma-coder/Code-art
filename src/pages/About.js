import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Code Art</h1>
          <p className="text-lg">
            At Code Art, we combine creativity and technology to deliver exceptional e-learning experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                Code Art is dedicated to empowering learners through accessible, engaging, and high-quality educational
                resources. Our mission is to foster a passion for learning and enable individuals to achieve their
                personal and professional goals through the power of technology.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/600x400?text=Our+Mission"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously improving and innovating our methods to stay ahead in education.',
                icon: '🚀',
              },
              {
                title: 'Inclusivity',
                description: 'Ensuring accessibility and inclusion for learners from all walks of life.',
                icon: '🌍',
              },
              {
                title: 'Excellence',
                description: 'Delivering the highest quality in content, teaching, and support.',
                icon: '🏆',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <img
                  src={`https://via.placeholder.com/150?text=Member+${member}`}
                  alt={`Member ${member}`}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Team Member {member}</h3>
                <p className="text-gray-600 text-sm">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Join Us on This Learning Journey</h2>
          <p className="text-lg mb-8">
            Discover how Code Art can help you unlock your potential and achieve your goals.
          </p>
          <button className="bg-white text-indigo-500 font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </section>

     
    </div>
  );
};

export default AboutPage;
