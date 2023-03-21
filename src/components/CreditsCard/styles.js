import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 200px;
  }

  p {
    color: white;
  }
`

export const Title = styled.h3`
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
`
