import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  padding: 16px;
  display: flex;
  gap: 10px;
  box-shadow: 0px 4px 10px 4px #272727;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #272727; 
  border-color: #272727;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  color: #d33121;
  background-color: #272727;
  &:hover {
    color: #272727;
    background-color: #d33121;
  }
`;

export const StyledLink = styled(Link)`
  color: #272727;
  &:hover {
    color: black;
    border: 1px solid #272727; 
    border-color: #272727;
    border-radius: 5px;
  }
`;