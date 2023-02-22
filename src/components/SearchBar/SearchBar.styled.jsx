import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #d33121;
  border-color: #272727;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: #d33121;
  background-color: #272727;
  &:hover {
    color: #272727;
    background-color: #d33121 ;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid d33121;
  border-color: #272727;
  border-radius: 10px;
  width: 200px;
  height: 36px;
  color: #272727;
  background-color: #d33121;
  &:hover,
  &:focus {
    color: #d33121;
    background-color: #272727;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 40px;
`;