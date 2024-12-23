import { useState } from 'react';

const Helpbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          onClick={toggleModal}
        >
          <span className="text-2xl">💬</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">How can I help you?</h2>
            <p className="text-gray-700 mb-4">
              This is the Helpbot modal content. Add your features here.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Helpbot;
