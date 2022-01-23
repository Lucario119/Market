import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentWrappers = styled.section`
  flex: 1;
  display: flex;
  align-items: center;

  flex-direction: column;
  &:last-child {
    gap: 1rem;
  }
  position: relative;
  > a {
    bottom: 19rem;
    position: absolute;
    > img {
      width: 10rem;
      height: 10rem;
    }
  }
  form {
    padding: 1rem;

    width: 20rem;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2.5ch;
    border-radius: 10px;
    legend {
      align-self: center;
      color: var(--red);
    }
    fieldset {
      display: flex;

      > input {
        width: 100%;
        padding-left: 4px;
        background-color: #f0f0f0;
      }
      .number {
        font-size: 2.5ch;
      }
    }

    button {
      background-color: var(--yellow);
      width: 100%;
      padding: 0.5rem 0;
      font-size: 2.3ch;
    }
  }
`;
export const RegisteredItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  height: 37rem;
  overflow-y: auto;
`;

export const RegisteredItem = styled.div`
  padding: 1rem;

  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 1rem;

  > img {
    width: 8rem;
    height: 8rem;
  }
  > span {
    margin-top: 10px;
    font-size: 2ch;
  }
`;
