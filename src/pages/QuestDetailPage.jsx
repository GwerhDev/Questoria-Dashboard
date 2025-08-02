import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestById } from '../store/questSlice';
import { Loader } from '../components/Loader';

const QuestDetailPage = () => {
  const { adventureId, questId } = useParams();
  const dispatch = useDispatch();
  const { selectedQuest: quest, status, error } = useSelector((state) => state.quests);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuestById(questId));
    }
  }, [questId, dispatch]);

  if (status === 'loading' || !quest) {
    return <Loader />;
  }

  if (status === 'failed') {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-text-primary">Quest: {quest.title}</h1>
      <p className="text-lg text-text-secondary mb-6">Description: {quest.description}</p>
      <p className="text-md text-text-tertiary">Adventure ID: {adventureId}</p>
      {quest.reward && <p className="text-md text-text-tertiary">Reward ID: {quest.reward}</p>}
      {quest.levelRequirement && <p className="text-md text-text-tertiary">Level Requirement: {quest.levelRequirement}</p>}
    </div>
  );
};

export default QuestDetailPage;