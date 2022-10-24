import styled from "styled-components";

export const TextButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.75rem;
  font-weight: bold;

  color: ${props => props.theme.blue};

  border: 1px transparent;
  background: transparent;
  
  transition: border 0.5s;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.blue};;
  }
`