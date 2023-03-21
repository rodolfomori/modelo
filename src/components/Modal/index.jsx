import { useEffect, useState } from 'react'

import api from '../../services/api'
import { Container, Background } from './styles'

function Modal({ setShowModal, movieId }) {
  console.log(setShowModal)
  const [movie, setMovie] = useState('')

  useEffect(() => {
    async function getMovie() {
      const {
        data: { results }
      } = await api.get('/movie/' + movieId + '/videos')

      setMovie(results)
    }
    getMovie()
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="YouTube video player"
            width="100%"
            height="500px"
          ></iframe>
          <button onClick={() => setShowModal(false)}>X</button>
        </Container>
      )}
    </Background>
  )
}

export default Modal
