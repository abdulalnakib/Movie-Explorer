import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import SearchBar from '../components/SearchBar';
import { getShows, searchShows } from '../services/getShows';

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const fetchShows = async () => {
      setLoading(true);
      setError('');

      try {
        const results = await getShows();
        if (!ignore) {
          setShows(results);
        }
      } catch {
        if (!ignore) {
          setError('Unable to load shows. Please try again.');
          setShows([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchShows();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const query = search.trim();
    let ignore = false;

    if (!query) {
      return undefined;
    }

    const fetchSearchResults = async () => {
      try {
        const results = await searchShows(query);
        if (!ignore) {
          setSearchResults(results);
        }
      } catch {
        if (!ignore) {
          setSearchResults([]);
        }
      }
    };

    fetchSearchResults();
    return () => {
      ignore = true;
    };
  }, [search]);

  const searchQuery = search.trim().toLowerCase();
  const availableShows = [...shows, ...searchResults].filter(
    (show, index, allShows) => allShows.findIndex((item) => item.id === show.id) === index,
  );
  const filteredShows = availableShows.filter((show) =>
    show.name.toLowerCase().includes(searchQuery),
  );

  return (
    <main id="movies" className="px-3 py-6 pb-12">
      <div className="mx-auto w-[min(980px,calc(100%-1rem))]">
        <SearchBar value={search} onChange={setSearch} />

        {loading ? (
          <div className="py-10 text-center text-slate-200">Loading shows...</div>
        ) : error ? (
          <div className="py-10 text-center text-error">{error}</div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredShows.length > 0 ? (
              filteredShows.map((show) => (
                <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
              ))
            ) : (
              <div className="col-span-full py-10 text-center text-slate-200">
                No movies found for your search.
              </div>
            )}
          </div>
        )}
      </div>

      {selectedShow && <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />}
    </main>
  );
};

export default Movies;
