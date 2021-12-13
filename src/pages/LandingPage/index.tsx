import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { NFTItem } from '../../components/NFTItem';

import { ContainerLandingPage, NFTItemsWrapper } from './styles';

function LandingPage() {
  return (
    <ContainerLandingPage>
      <NavBar />
      <NFTItemsWrapper>
        {[...Array(12)].map((id) => (
          <NFTItem key={id} />
        ))}
      </NFTItemsWrapper>
    </ContainerLandingPage>
  );
}

export default LandingPage;
