import React from 'react'
import Row from '../Row/Row';
import ContinueWatching from '../../ContinueWatching/ContinueWatching';
import requests from '../../../Utils/requests';

const RowList = () => {
  return (
    <>
      <ContinueWatching />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true} 
      />
      <Row title="New Releases" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Watch Again" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular on Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default RowList
