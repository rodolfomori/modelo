import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from {
    transform: scale(0);

to {
    transform: scale(1);}
}
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;

  h2 {
    font-size: 5rem;
    font-weight: 700;
    line-height: 1;
    color: white;
  }

  p {
    font-weight: 700;
    color: white;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`

export const Cover = styled.div`
  padding: 20px;

  position: relative;
  z-index: 99;

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
    z-index: 999999999;
  }
`
