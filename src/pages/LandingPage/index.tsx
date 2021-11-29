import React from 'react';
import { NavBar } from '../../components/NavBar';
import { NFTItem } from '../../components/NFTItem';

import { ContainerLandingPage, NFTItemsWrapper } from './styles';

function LandingPage() {
  return (
    <ContainerLandingPage>
      <NavBar />
      <NFTItemsWrapper>
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
      </NFTItemsWrapper>
    </ContainerLandingPage>
  );
}

export default LandingPage;
