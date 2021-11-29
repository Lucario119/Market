import styled from 'styled-components';

export const ContainerNavBar = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 10rem;
  background-color: #f0f0f0;
  a {
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const NavBarMenu = styled.div`
  > ul {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
`;
