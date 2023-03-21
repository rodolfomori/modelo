import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slide from '../../components/Slide'
import {
  getMovies,
  getMoviesTop,
  getPeoplePopular,
  getSeriesPopular,
  getSeriesTop
} from '../../services/getData'
import { getImages500, getImages } from '../../services/getImages'
import { Container, Cover, Info, Background } from './styles'

function Home() {
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [movies, setMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [topSeries, setTopSeries] = useState([])
  const [popularSeries, setPopularSeries] = useState([])
  const [popularPeople, setPopularPeople] = useState([])

  useEffect(() => {
    async function getData() {
      setMovies(await getMovies())
      setTopMovies(await getMoviesTop())
      setTopSeries(await getSeriesTop())
      setPopularSeries(await getSeriesPopular())
      setPopularPeople(await getPeoplePopular())
    }

    getData()
  }, [])

  return (
    <>
      {movies.length > 0 && (
        <>
          <Background image={getImages(movies[0].backdrop_path)}>
            {showModal && (
              <Modal setShowModal={setShowModal} movieId={movies[0].id} />
            )}
            <Container>
              <Info>
                <h2>{movies[0].title}</h2>
                <p>{movies[0].overview}</p>
                <div>
                  <Button
                    secondary
                    onClick={() => navigate(`/detalhe/${movies[0].id}`)}
                  >
                    Assista agora
                  </Button>
                  <Button onClick={() => setShowModal(true)}>
                    Assista o Trailer
                  </Button>
                </div>
              </Info>
              <Cover>
                {movies.length > 0 && (
                  <img
                    src={getImages500(movies[0].poster_path)}
                    alt="gato de botas"
                  />
                )}
              </Cover>
            </Container>
          </Background>
          <Slide info={topMovies} title="Top Filmes" />
          <Slide info={topSeries} title="Top Séries" />
          <Slide info={popularSeries} title="Séries mais Populares" />
          <Slide info={popularPeople} title="Principais Artistas" />
        </>
      )}
    </>
  )
}

export default Home
