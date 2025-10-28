import React, { useState, useEffect } from 'react';
import instance from '../../Utils/axios';
import './ContinueWatching.css';

const ContinueWatching = () => {
  const [continueWatching, setContinueWatching] = useState([]);

  useEffect(() => {
    const fetchContinueWatching = async () => {
      try {
        // Simulate continue watching data - in real app this would come from user's watch history
        const response = await instance.get(`/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);
        const movies = response.data.results.slice(0, 6);
        
        // Add progress data to simulate continue watching
        const continueData = movies.map(movie => ({
          ...movie,
          progress: Math.floor(Math.random() * 80) + 10, // Random progress between 10-90%
          timeRemaining: Math.floor(Math.random() * 60) + 20 // Random time remaining
        }));
        
        setContinueWatching(continueData);
      } catch (error) {
        console.error('Error fetching continue watching:', error);
      }
    };

    fetchContinueWatching();
  }, []);

  if (continueWatching.length === 0) return null;

  return (
    <div className="continue-watching">
      <h2 className="continue-title">Continue Watching</h2>
      <div className="continue-grid">
        {continueWatching.map((item, index) => (
          <div key={index} className="continue-item">
            <div className="continue-poster">
              <img
                src={`https://image.tmdb.org/t/p/w300${item.backdrop_path || item.poster_path}`}
                alt={item.title || item.name}
                className="continue-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200/000000/FFFFFF?text=No+Image';
                  e.target.onerror = null;
                }}
              />
              <div className="continue-overlay">
                <button className="continue-play">▶</button>
              </div>
              <div className="continue-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="continue-info">
              <h3 className="continue-item-title">
                {item.title || item.name}
              </h3>
              <p className="continue-time">
                {item.timeRemaining} min remaining
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
