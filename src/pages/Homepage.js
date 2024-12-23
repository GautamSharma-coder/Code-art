import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

// Mock Data
const courses = [
  {
    title: 'Web Development Mastery',
    description: 'Learn full-stack development with modern technologies and frameworks.',
    price: '$99.99',
    level: 'Advanced',
    duration: '12 weeks',
  },
  {
    title: 'Python Programming',
    description: 'Master Python from basics to advanced concepts with practical projects.',
    price: '$79.99',
    level: 'Beginner',
    duration: '8 weeks',
  },
  {
    title: 'Mobile App Development',
    description: 'Create stunning mobile applications for iOS and Android platforms.',
    price: '$89.99',
    level: 'Intermediate',
    duration: '10 weeks',
  },
  {
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and machine learning basics.',
    price: '$119.99',
    level: 'Advanced',
    duration: '14 weeks',
  },
];

const features = [
  {
    title: 'Interactive Learning',
    description: 'Learn by doing with hands-on projects and real-world examples. Get immediate feedback and support.',
    icon: '💻',
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience in top tech companies.',
    icon: '👨‍🏫',
  },
  {
    title: 'Flexible Schedule',
    description: 'Study at your own pace with lifetime access to all course materials.',
    icon: '⏰',
  },
];

const testimonials = [
  {
    text: "Code Art transformed my career. I went from knowing nothing about coding to landing my dream job in just 6 months!",
    name: 'Sarah Johnson',
    role: 'Frontend Developer at Tech Corp',
  },
  {
    text: "The instructors are amazing and the community support is incredible. Best learning platform I've ever used!",
    name: 'Michael Chen',
    role: 'Full Stack Developer',
  },
  {
    text: "The project-based learning approach really helped me understand complex concepts. Highly recommended!",
    name: 'Emily Rodriguez',
    role: 'Software Engineer',
  },
];

// Reusable Components
const CourseCard = ({ title, description, price, level, duration }) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    Beginner: 'bg-green-400',
    Intermediate: 'bg-yellow-400',
    Advanced: 'bg-red-400',
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`h-48 ${levelColors[level]} flex items-center justify-center`}>
          <span className="text-6xl text-white">{title.slice(0, 1)}</span>
        </div>
        <div className="absolute top-4 right-4 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          {level}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 text-sm">⏱ {duration}</span>
          <span className="text-blue-600 font-bold">{price}</span>
        </div>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ title, description, icon }) => (
  <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const memoizedCourses = useMemo(() => courses, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">Master the Art of Coding</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Transform your future with interactive courses, expert mentorship, and hands-on projects.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-purple-100 font-bold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105">
              Start Learning
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-lg transition duration-300">
              View Courses
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {memoizedCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Code Art?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Student Success Stories</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white text-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="text-5xl text-purple-500 absolute -top-6 left-8">"</div>
              <p className="text-xl italic mb-6">{testimonials[currentTestimonial].text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
