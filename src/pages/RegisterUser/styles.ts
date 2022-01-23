import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > form {
    padding: 1rem;

    width: 20rem;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2.5ch;
    fieldset {
      display: flex;

      > input {
        width: 100%;
        padding-left: 4px;
        background-color: #f0f0f0;
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
