import styled from "styled-components";

export const PostResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;

  width: 26rem;
  height: 16.25rem;

  border-radius: 10px;
  border: 2px solid transparent;

  background: ${props => props.theme["base-post"]};

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      max-width: 17.75rem;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme["base-title"]};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${props => props.theme["base-label"]};
    
  }
`