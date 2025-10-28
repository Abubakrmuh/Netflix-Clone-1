import React, { useEffect } from "react";
import "./Row.css";
import instance from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    (async () => {
      try {
        const request = await instance.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }
        })
        .catch((error) => {
          console.log("Error fetching trailer:", error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <div key={index} className={`row_poster_container ${isLargeRow && "large"}`}>
            <img
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450/000000/FFFFFF?text=No+Image';
                e.target.onerror = null;
              }}
            />
            <div className="row_poster_overlay">
              <button 
                className="play_button"
                onClick={() => handleClick(movie)}
              >
                ▶ Play
              </button>
            </div>
            <div className="movie_rating">
              {movie.adult ? '18+' : movie.vote_average > 7 ? 'PG-13' : 'PG'}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;