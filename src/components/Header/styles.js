import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.changeBackground ? '#000000' : 'transparent')};
  transition: background-color 0.7s ease;

  h1 {
    color: white;
  }

  img {
    width: 30%;
  }
`
export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

export const Li = styled.li`
  list-style-type: none;
  font-size: 28px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? '100%' : 0)};
    transition: width 0.5s ease;
    height: 3px;
    background-color: #189b20;
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`
