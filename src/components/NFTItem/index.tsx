import React, { useEffect, useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import busd_abi from '../../busd_abi.json';
import { NFTItemContainer } from './styles';

interface NFTItemProps {
  id: string;
  name: string;
  url_image?: string;
  price: string;
  busd_real_price: string;
}
const web3 = new Web3(Web3.givenProvider);

const busdContractAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

export function NFTItem() {
  //   {
  //   name,
  //   price,
  //   url_image,
  //   id,
  //   busd_real_price,
  // }: NFTItemProps
  const { Moralis, user, isInitialized, isAuthenticated, isWeb3Enabled} =
    useMoralis();

  const web3Account = useMemo(
    () => isAuthenticated && user?.get('accounts')[0],
    [user, isAuthenticated]
  );
  const busdTransaction = async () => {
    if (isAuthenticated) {
      const busdContract = new web3.eth.Contract(
        busd_abi as AbiItem[],
        busdContractAddress
      );

      try {
        await busdContract.methods
          .transfer(
            '0x4C486eD00E15e498640512c15Ccd9e06B3682Bd6',
            // busd_real_price
            '50000000000000000000'
          )
          .send({
            from: await web3Account,
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <NFTItemContainer>
      <img src="" alt="" />
      <button onClick={busdTransaction}>Comprar por 50 BUSD</button>
    </NFTItemContainer>
  );
}
