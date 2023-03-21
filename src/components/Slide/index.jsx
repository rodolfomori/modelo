import { SwiperSlide, Swiper } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'

function Slide({ info, title = '' }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item, i) => (
          <SwiperSlide key={i} style={{ display: 'flex' }}>
            <Card info={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slide
