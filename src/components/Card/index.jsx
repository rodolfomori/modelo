import { getImages } from '../../services/getImages'
import { Container } from './styles'

function Card({ info }) {
  return (
    <Container>
      <img src={getImages(info.poster_path)} alt="cover" />
      <h3>{info?.name || info?.title || ''}</h3>
    </Container>
  )
}

export default Card
