import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New message from Alice", isNew: true, timestamp: new Date() },
    { id: 2, text: "Bob mentioned you in a comment", isNew: true, timestamp: new Date() },
    { id: 3, text: "Your post was liked by Carol", isNew: false, timestamp: new Date() }
  ]);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle marking notifications as read
  const markAsRead = (notificationId) => {
    setNotifications(notifications.map(notification => 
      notification.id === notificationId 
        ? { ...notification, isNew: false }
        : notification
    ));
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isNew: false
    })));
  };

  // Remove a notification
  const removeNotification = (notificationId) => {
    setNotifications(notifications.filter(
      notification => notification.id !== notificationId
    ));
  };

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.notification-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Format timestamp
  const formatTime = (date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date - new Date()) / (1000 * 60)), 
      'minute'
    );
  };

  return (
    <div className="notification-container relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 relative"
      >
        <Bell
          size={20}
          className={`${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-teal-500`}
        />
        {notifications.some(n => n.isNew) && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Notifications
            </h3>
            <button
              onClick={markAllAsRead}
              className="text-sm text-teal-500 hover:text-teal-600"
            >
              Mark all as read
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No notifications
              </div>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                    notification.isNew ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {notification.text}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatTime(notification.timestamp)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {notification.isNew && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-teal-500 hover:text-teal-600"
                        >
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="text-xs text-gray-400 hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;