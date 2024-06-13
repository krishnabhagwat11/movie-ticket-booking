import { useRouter } from 'next/router';

const MoviePage = () => {
  const router = useRouter();
  const { movieId } = router.query;

  // Fetch movie details using movieId or display loading state
  return (
    <div>
      <h1>Movie Details for ID: {movieId}</h1>
      {/* Movie details or loading state here */}
    </div>
  );
};

export default MoviePage;