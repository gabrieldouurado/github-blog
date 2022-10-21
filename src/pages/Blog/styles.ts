import styled from "styled-components";

export const BlogContainer = styled.div``

export const Profile = styled.div`
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

    button {
      font-size: 0.75rem;
      font-weight: bold;

      color: ${props => props.theme.blue};

      border: 0;
      background: transparent;
    }
}
`