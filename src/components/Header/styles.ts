import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  height: 18.5rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background: linear-gradient(
    ${props => props.theme["base-profile"]} 25%,
    ${props => props.theme.blue+'18'} 65%,
    ${props => props.theme["base-profile"]} 90%
  );
`
export const LeftBackground = styled.img`
  padding-top: 4.375rem;
  justify-self: flex-start;
  width: 25.625rem;
`

export const LogoImage = styled.img`
  padding-top: 4rem;
  justify-self: center;
  width: 9.25rem;
`

export const RightBackground = styled.img`
  padding-top: 1.875rem;
  justify-self: flex-end;
  width: 23.25rem;
`