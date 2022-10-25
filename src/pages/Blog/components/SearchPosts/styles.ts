import styled from "styled-components";

export const SearchPostsContainer = styled.div`
  padding-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;

    padding-top: 4.75rem;
    padding-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${props => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  form > input {
    width: 100%;
    height: 3.125rem;

    padding: 0.75rem 1rem;
    
    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-border"]};

    color: ${props => props.theme["base-text"]};
    background: ${props => props.theme["base-input"]};
  }
`