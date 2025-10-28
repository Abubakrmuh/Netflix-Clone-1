import React, { useState, useEffect } from 'react';
import instance from '../../Utils/axios';
import './Search.css';

const Search = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const fetchSearchResults = async () => {
        setIsLoading(true);
        try {
          const response = await instance.get(
            `/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
          );
          setSearchResults(response.data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setIsLoading(false);
        }
      };

      const timeoutId = setTimeout(fetchSearchResults, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <input
            type="text"
            placeholder="Search for movies, TV shows, and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            autoFocus
          />
          <button className="search-close" onClick={onClose}>×</button>
        </div>
        
        <div className="search-results">
          {isLoading ? (
            <div className="search-loading">Searching...</div>
          ) : searchResults.length > 0 ? (
            <div className="search-results-grid">
              {searchResults.slice(0, 20).map((item) => (
                <div key={item.id} className="search-result-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path || item.backdrop_path}`}
                    alt={item.title || item.name}
                    className="search-result-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x300/000000/FFFFFF?text=No+Image';
                      e.target.onerror = null;
                    }}
                  />
                  <div className="search-result-info">
                    <h3>{item.title || item.name}</h3>
                    <p>{item.overview?.substring(0, 100)}...</p>
                    <span className="search-result-type">
                      {item.media_type === 'movie' ? 'Movie' : 'TV Show'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm.length > 2 ? (
            <div className="search-no-results">No results found for "{searchTerm}"</div>
          ) : (
            <div className="search-placeholder">
              <h3>Search for movies, TV shows, and more</h3>
              <p>Start typing to see results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
