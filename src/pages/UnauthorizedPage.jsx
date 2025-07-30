import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAccountData } from '../store/accountSlice';

const UnauthorizedPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountStatus = useSelector((state) => state.account.status);
  const accountData = useSelector((state) => state.account.data);

  useEffect(() => {
    dispatch(fetchAccountData());
  }, [dispatch]);

  useEffect(() => {
    if (accountStatus === 'succeeded' && accountData) {
      navigate('/');
    }
  }, [accountStatus, accountData, navigate]);

  const handleLoginRedirect = () => {
    window.location.href = 'https://questoria.cl/login';
  };

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