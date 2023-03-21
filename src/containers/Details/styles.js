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
  height: 50vh;
  position: relative;
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
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
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

  .watch-now {
    margin-right: 20px;
    background-color: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
      box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
      color: #fff;
    }
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;

  position: relative;
  z-index: 99;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
    z-index: 999999999;
  }
`

export const ContainerMovies = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;

    iframe {
      border: none;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
      color: white;
      margin-bottom: 20px;
    }
  }
`
