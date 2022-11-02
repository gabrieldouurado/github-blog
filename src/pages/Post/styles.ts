import styled from "styled-components";

export const PostHeaderInfos = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  height: 10.5rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background: ${props => props.theme["base-profile"]};

  header {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  main {
    padding-top: 1.25rem;

    span {
      font-size: 1.5rem;
      font-weight: bold;

      color: ${props => props.theme["base-title"]};
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;

    padding-top: 0.5rem;

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

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`