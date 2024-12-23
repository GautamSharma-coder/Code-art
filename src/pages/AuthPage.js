import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Github, Twitter, Loader2, Smartphone, AlertCircle, Check } from 'lucide-react';
//import { Alert, AlertDescription } from '@/components/ui/alert';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [show2FA, setShow2FA] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputFocus = (e) => {
    const parent = e.target.parentElement;
    parent.classList.add('ring-2', 'ring-purple-500', 'border-transparent');
  };

  const handleInputBlur = (e) => {
    const parent = e.target.parentElement;
    parent.classList.remove('ring-2', 'ring-purple-500', 'border-transparent');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isLogin) {
        setShow2FA(true);
      } else {
        // Handle signup success
        alert('Account created successfully!');
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handle2FASubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulated 2FA verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Successfully authenticated!');
    } catch (error) {
      console.error('2FA error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = () => {
    const password = formData.password;
    if (password.length === 0) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return (strength / 4) * 100;
  };

  if (show2FA) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="backdrop-blur-lg bg-white bg-opacity-60 rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Smartphone className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Two-Factor Authentication</h2>
            <p className="text-gray-600 mt-2">Enter the verification code sent to your device</p>
          </div>

          <form onSubmit={handle2FASubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border rounded-lg text-lg font-bold"
                  value={verificationCode[i] || ''}
                  onChange={(e) => {
                    const newCode = verificationCode.split('');
                    newCode[i] = e.target.value;
                    setVerificationCode(newCode.join(''));
                    if (e.target.value && e.target.nextElementSibling) {
                      e.target.nextElementSibling.focus();
                    }
                  }}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 rounded-xl hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 mx-auto animate-spin" />
              ) : (
                'Verify'
              )}
            </button>

            <p className="text-center text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button type="button" className="text-purple-600 hover:text-purple-700 font-medium">
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Auth Container */}
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-lg bg-white bg-opacity-60 rounded-2xl shadow-xl p-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Sign in to continue your journey' : 'Start your learning journey today'}
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              {/*
              
              <LucideGoogle className="w-5 h-5" />
              */}
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
              <span className="text-sm font-medium">Twitter</span>
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white bg-opacity-60 text-gray-500">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="group">
                <div className={`flex items-center border border-gray-200 rounded-xl p-3 transition-all duration-200 ${errors.name ? 'border-red-500' : ''}`}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder-gray-500"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) {
                        const newErrors = { ...errors };
                        delete newErrors.name;
                        setErrors(newErrors);
                      }
                    }}
                  />
                  {errors.name && <AlertCircle className="w-5 h-5 text-red-500" />}
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
            )}

            <div className="group">
              <div className={`flex items-center border border-gray-200 rounded-xl p-3 transition-all duration-200 ${errors.email ? 'border-red-500' : ''}`}>
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder-gray-500"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) {
                      const newErrors = { ...errors };
                      delete newErrors.email;
                      setErrors(newErrors);
                    }
                  }}
                />
                {errors.email && <AlertCircle className="w-5 h-5 text-red-500" />}
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="group">
              <div className={`flex items-center border border-gray-200 rounded-xl p-3 transition-all duration-200 ${errors.password ? 'border-red-500' : ''}`}>
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder-gray-500"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    if (errors.password) {
                      const newErrors = { ...errors };
                      delete newErrors.password;
                      setErrors(newErrors);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
              {!isLogin && formData.password && (
                <div className="mt-2">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-300"
                      style={{ width: `${passwordStrength()}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Weak</span>
                    <span>Strong</span>
                  </div>
                </div>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-purple-600 hover:text-purple-700 font-medium">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 rounded-xl hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 mx-auto animate-spin" />
                ) : (
                <span className="flex items-center justify-center">
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <Check className="w-5 h-5 ml-2 opacity-0 group-active:opacity-100 transform group-active:translate-x-1 transition-all" />
                </span>
              )}
            </button>
          </form>

          {/* Success Alert - Show after successful action 
          
          {false && (
            <Alert className="mt-4 bg-green-50 text-green-800 border-green-200">
              <Check className="w-5 h-5" />
              <AlertDescription>
                Successfully authenticated! Redirecting...
              </AlertDescription>
            </Alert>
          )}
          */}

          <p className="text-center mt-6 text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setFormData({ email: '', password: '', name: '' });
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>

          {/* Password Requirements - Show when creating password during signup */}
          {!isLogin && formData.password && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h3>
              <ul className="space-y-2">
                {[
                  { text: 'At least 8 characters', met: formData.password.length >= 8 },
                  { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
                  { text: 'Contains number', met: /[0-9]/.test(formData.password) },
                  { text: 'Contains special character', met: /[^A-Za-z0-9]/.test(formData.password) }
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center text-sm">
                    {requirement.met ? (
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-gray-300 mr-2" />
                    )}
                    <span className={requirement.met ? 'text-green-700' : 'text-gray-500'}>
                      {requirement.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Add custom keyframes for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;