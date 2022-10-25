import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;

  padding: 2rem;
  height: 13.25rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background: ${props => props.theme["base-profile"]};

  img {
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    span {
      font-size: 1.5rem;
      font-weight: bold;

      color: ${props => props.theme["base-title"]};
    }
  }

  section {
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;

    height: 5.5rem;
  }

  footer {
    display: flex;
    gap: 1.5rem;

    color: ${props => props.theme["base-subtitle"]};

    span {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        height: 1.125rem;
        color: ${props => props.theme["base-label"]};
      }
    }
  }
`

export const SearchContainer = styled.div`
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

export const PostList = styled.div`
  display: flex;
  gap: 2rem;

  flex-wrap: wrap;
`