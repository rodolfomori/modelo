import { getImages } from '../../services/getImages'
import { Container, Title } from './styles'

function CreditsCard({ credits }) {
  return (
    <>
      <Title>Créditos</Title>

      <Container>
        {credits &&
          credits.slice(0, 5).map((credit) => (
            <div key={credit.id}>
              <img src={getImages(credit.profile_path)} alt="creditos" />
              <p>{credit.original_name}</p>
            </div>
          ))}
      </Container>
    </>
  )
}

export default CreditsCard
