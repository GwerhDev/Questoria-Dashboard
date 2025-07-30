import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  const logged = useSelector((state) => state.account.logged);

  const handleLoginRedirect = () => {
    window.location.href = 'https://questoria.cl/login';
  };

  useEffect(() => {
    if (logged) {
      return navigate('/');
    }
  }, [logged]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text-primary">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="text-lg mb-8">You need to be logged in to access this page.</p>
      <button
        onClick={handleLoginRedirect}
        className="bg-gray-700 hover:bg-gray-600 px-6 py-3 text-white rounded-lg shadow-md transition-colors duration-300"
      >
        Go to Login
      </button>
    </div>
  );
};

export default UnauthorizedPage;