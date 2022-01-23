import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { NFTItem } from '../../components/NFTItem';
import api from '../../services/api';

import { ContainerLandingPage, NFTItemsWrapper } from './styles';

type NFTITemsProps = {
  id: number;
  name: string;
  image: string;
  price: string;
};

function LandingPage() {
  const [nftItems, setNftItems] = useState<NFTITemsProps[]>([]);

  useEffect(() => {
    api.get('api/explore').then((response) => setNftItems(response.data));
  }, []);

  return (
    <ContainerLandingPage>
      <NavBar />
      <NFTItemsWrapper>
        {nftItems.length > 0 &&
          nftItems.map((item) => (
            <NFTItem
              key={item.id}
              name={item.name}
              image_url={item.image}
              price={item.price}
              product_id={item.id}
            />
          ))}
      </NFTItemsWrapper>
    </ContainerLandingPage>
  );
}

export default LandingPage;
