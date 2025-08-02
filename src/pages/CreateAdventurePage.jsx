import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAdventure } from '../store/adventureSlice';

const CreateAdventurePage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const resultAction = await dispatch(createAdventure({ name, description }));
      if (createAdventure.fulfilled.match(resultAction)) {
        setMessage('Adventure created successfully!');
        setName('');
        setDescription('');
        const { adventureId } = resultAction.payload;
        navigate(`/creator/${adventureId}`);
      } else if (createAdventure.rejected.match(resultAction)) {
        setMessage(`Error: ${resultAction.payload || resultAction.error.message}`);
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Adventure</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">
            Adventure Name
          </label>
          <input
            type="text"
            id="name"
              className="w-full p-4 text-white bg-transparent border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-400">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full p-4 text-white bg-transparent border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-4 font-bold text-white rounded-lg bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 shadow-lg"        >
          Create Adventure
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-sm ${message.startsWith('Error') || message.startsWith('Network') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CreateAdventurePage;