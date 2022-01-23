import styled from 'styled-components';

export const ContainerNavBar = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 7rem;
  background-color: var(--brown);

  img {
    width: 15rem;
    height: 3rem;
  }
  a {
    color: var(--white);
    font-size: 2.8ch;
    &:hover {
      color: var(--yellow);
    }
  }
`;
export const NavBarMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 22rem;

  > ul {
    display: flex;
    gap: 7rem;
    > div {
      display: flex;
      border-radius: 1rem;
      background-color: var(--white);
      .li {
        border-left: 1px solid var(--yellow);
      }
      > li {
        padding: 1rem;

        p {
          color: var(--yellow);

          font-size: 2.7ch;
        }
        button {
          color: var(--yellow);

          font-size: 2.7ch;
        }
      }
    }
  }
`;
