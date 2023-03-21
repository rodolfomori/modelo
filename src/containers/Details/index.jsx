import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CreditsCard from '../../components/CreditsCard'
import Slide from '../../components/Slide'
import SpanGenres from '../../components/SpanGenres'
import {
  getCredits,
  getMovie,
  getMovieVideos,
  getSimilar
} from '../../services/getData'
import { getImages500, getImages } from '../../services/getImages'
import { Container, Cover, Info, Background, ContainerMovies } from './styles'

function Details() {
  const { id } = useParams()

  const [movie, setMovie] = useState([])
  const [movieVideos, setMovieVideos] = useState([])
  const [credits, setCredits] = useState([])
  const [similar, setSimiliar] = useState([])

  useEffect(() => {
    async function getData() {
      setMovie(await getMovie(id))
      setMovieVideos(await getMovieVideos(id))
      setCredits(await getCredits(id))
      setSimiliar(await getSimilar(id))
    }

    getData()
  }, [id])

  return (
    <>
      <Background image={getImages(movie.backdrop_path)} />
      <Container>
        <Cover>
          {movie && (
            <img src={getImages500(movie.poster_path)} alt="filme escolhido" />
          )}
        </Cover>
        <Info>
          <h2>{movie.title}</h2>
          <SpanGenres genres={movie.genres} />
          <p>{movie.overview}</p>
          <div>
            <CreditsCard credits={credits} />
          </div>
        </Info>
      </Container>

      <ContainerMovies>
        {movieVideos.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <iframe
              src={`https://www.youtube.com/embed/${movie.key}`}
              title="YouTube video player"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        ))}
      </ContainerMovies>

      <Slide info={similar} title="Similar" />
    </>
  )
}

export default Details
