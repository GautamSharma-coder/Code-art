import React from 'react';
import { ArrowRight, Book, Users, Video, Briefcase, Users2, Compass } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Comprehensive Coding Courses",
      description: "Master programming fundamentals through advanced topics with our structured, hands-on curriculum designed for all skill levels.",
      icon: Book
    },
    {
      title: "One-on-One Mentorship",
      description: "Get personalized guidance from industry experts who will help you overcome challenges and accelerate your learning journey.",
      icon: Users
    },
    {
      title: "Live Coding Workshops",
      description: "Join interactive sessions where you'll build real projects alongside experienced developers and fellow learners.",
      icon: Video
    },
    {
      title: "Portfolio Building",
      description: "Create impressive projects that demonstrate your skills and catch the attention of potential employers.",
      icon: Briefcase
    },
    {
      title: "Community Access",
      description: "Connect with peers, share knowledge, and grow together in our active community of developers and learners.",
      icon: Users2
    },
    {
      title: "Career Guidance",
      description: "Receive expert advice on resume building, interview preparation, and navigating the tech industry landscape.",
      icon: Compass
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Transform Your Coding Journey
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cyan-50">
            Empower yourself with expert-led courses, personalized mentorship, and a supportive community.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition duration-300 flex items-center">
              Explore Courses
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to go from beginner to professional developer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful developers who started their career with us.
          </p>
          <button className="bg-white hover:bg-gray-50 text-purple-600 font-semibold px-8 py-3 rounded-lg transition duration-300 flex items-center mx-auto">
            Get Started Now
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;