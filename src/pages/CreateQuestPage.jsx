import React from 'react';
import { useParams } from 'react-router-dom';

const CreateQuestPage = () => {
  const { adventureId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Quest for Adventure ID: {adventureId}</h1>
      <p>This is where the form to create a new quest will go.</p>
    </div>
  );
};

export default CreateQuestPage;