import styled from 'styled-components';

export const NFTItemContainer = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
  width: 20rem;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 1rem;
  position: relative;

  div {
    align-self: center;
    background-color: var(--yellow);
    padding: 0.5rem 2rem;
    border-radius: 10px;
    position: absolute;
    top: -5%;
    border: 2px solid #000;
    font-size: 2.4ch;
  }
  > img {
    flex: 1;
  }
  > button {
    font-size: 2.7ch;
    padding: 1rem 0;
    width: 100%;
    border-radius: 10px;
    background-color: #00d604;
    border: 2px solid #000;
  }
  fieldset {
    display: flex;
    gap: 3px;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;
    font-size: 2.5ch;
    input {
      width: 100%;
      font-size: 2ch;
      padding-left: 3px;
      background-color: #f1f1f1;
    }
  }
`;
