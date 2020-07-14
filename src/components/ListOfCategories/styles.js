import styled from "styled-components";
import {slideIn} from '../../styles/animationSlideIn'


export const List = styled.ul`
  list-style: none;
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    ${slideIn()};
    background: #fff;
    border-radius: 80px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 600px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -10px;
    transform: scale(0.7);
    z-index: 1;
  }
`;
export const Item = styled.li`
  padding: 0 8px;
`;
