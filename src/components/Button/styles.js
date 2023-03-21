import styled, { css } from 'styled-components'

const button = css`
  border: 3px solid #fff;
  background-color: transparent;
  color: #fff;
  box-shadow: unset;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  transition: box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: unset;
    color: #ff0000;
    background-color: #fff;
  }
`
export const ButtonPrimary = styled.button`
  ${button}
`
export const ButtonSecondary = styled.button`
  ${button}

  margin-right: 20px;
  background-color: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background-color: #ff0000;
    color: #fff;
  }
`
