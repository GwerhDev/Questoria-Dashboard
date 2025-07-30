import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdventures } from '../store/adventureSlice';
import { Loader } from '../components/Loader';

const CreatorPage = () => {
  const dispatch = useDispatch();
  const { list: adventures, status, error } = useSelector((state) => state.adventures);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAdventures());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'failed') {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Creator Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adventures.map((adventure) => (
          <div key={adventure._id} className="bg-surface p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-primary">{adventure.name}</h2>
            <p className="text-text-secondary mt-2">{adventure.description}</p>
            <p className="text-sm text-text-tertiary mt-2">Quests: {adventure.quests.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorPage;