import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 1.5rem 2rem;
    font-size: 3.8ch;
    background-color: var(--white);
    border: 2px solid #000;
    margin-top: 3rem;
    border-radius: 10px;
  }
`;
export const InventoryItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
`;
export const InventoryItem = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
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
    top: -7%;
    border: 2px solid #000;
    font-size: 2.4ch;
  }
  > img {
    flex: 1;
  }
  > span {
    margin-top: 1rem;
    font-size: 2.4ch;
  }
`;
