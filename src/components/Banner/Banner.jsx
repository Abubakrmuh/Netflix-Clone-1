import React, { useState, useEffect } from "react";
import instance from "../../Utils/axios"; // Import your configured instance
import requests from "../../Utils/requests";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [isMuted, setIsMuted] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use your instance instead of default axios
        const request = await instance.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handlePlayClick = () => {
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
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"), url("https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Netflix")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <div className="banner_metadata">
          <div className="banner_rating">
            {movie?.adult ? '18+' : movie?.vote_average > 7 ? 'PG-13' : 'PG'}
          </div>
          <div className="banner_genres">
            {movie?.genre_ids?.slice(0, 3).map((genreId, index) => {
              const genres = {
                28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
                80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
                14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
                9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie',
                53: 'Thriller', 10752: 'War', 37: 'Western'
              };
              return (
                <span key={index} className="genre_tag">
                  {genres[genreId] || 'Drama'}
                </span>
              );
            })}
          </div>
        </div>
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play" onClick={handlePlayClick}>
            ▶ Play
          </button>
          <button className="banner_button">+ My List</button>
          <button className="banner_button info">ℹ More Info</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_controls">
        <button 
          className="volume_control"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </button>
      </div>
      <div className="banner_fadeBottom" />
      {trailerUrl && (
        <div className="banner_trailer">
          <div className="trailer_container">
            <button 
              className="trailer_close"
              onClick={() => setTrailerUrl("")}
            >
              ×
            </button>
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;