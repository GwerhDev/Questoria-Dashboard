import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createQuest } from '../store/questSlice';

const CreateQuestPage = () => {
  const { adventureId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rewardId, setRewardId] = useState('');
  const [levelRequirement, setLevelRequirement] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const questData = {
      title,
      description,
      rewardId: rewardId ? rewardId : null, // Assuming rewardId can be null
      levelRequirement: levelRequirement ? parseInt(levelRequirement) : 0, // Assuming levelRequirement is a number
      adventureId,
    };

    try {
      const resultAction = await dispatch(createQuest(questData));
      if (createQuest.fulfilled.match(resultAction)) {
        setMessage('Quest created successfully!');
        setTitle('');
        setDescription('');
        setRewardId('');
        setLevelRequirement('');
        const { questId } = resultAction.payload;
        navigate(`/creator/${adventureId}/${questId}`);
      } else if (createQuest.rejected.match(resultAction)) {
        setMessage(`Error: ${resultAction.payload || resultAction.error.message}`);
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Quest for Adventure ID: {adventureId}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-400">
            Quest Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-4 text-white bg-transparent border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <div>
          <label htmlFor="rewardId" className="block text-sm font-medium text-gray-400">
            Reward ID (Optional)
          </label>
          <input
            type="text"
            id="rewardId"
            className="w-full p-4 text-white bg-transparent border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            value={rewardId}
            onChange={(e) => setRewardId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="levelRequirement" className="block text-sm font-medium text-gray-400">
            Level Requirement (Optional)
          </label>
          <input
            type="number"
            id="levelRequirement"
            className="w-full p-4 text-white bg-transparent border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            value={levelRequirement}
            onChange={(e) => setLevelRequirement(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 font-bold text-white rounded-lg bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 shadow-lg"
        >
          Create Quest
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

export default CreateQuestPage;