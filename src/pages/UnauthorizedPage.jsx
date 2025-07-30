import React from 'react';

const UnauthorizedPage = () => {
  const handleLoginRedirect = () => {
    window.location.href = 'https://questoria.cl/login';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text-primary">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="text-lg mb-8">You need to be logged in to access this page.</p>
      <button
        onClick={handleLoginRedirect}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Go to Login
      </button>
    </div>
  );
};

export default UnauthorizedPage;