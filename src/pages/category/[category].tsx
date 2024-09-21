import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/gameSlice';
import { RootState } from '../../redux/store';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useDispatch();
  const { games, loading } = useSelector((state: RootState) => state.games);

  useEffect(() => {
    if (category) {
      dispatch(fetchGames(category as string));
    }
  }, [category, dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Category: {category}</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.gameText}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;