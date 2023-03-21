import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    transition: opacity 0.3s ease;
    border-radius: 30px;
    width: 300px;
    height: 100%;
  }

  h3 {
    color: white;
    margin-top: 15px;
  }
`
