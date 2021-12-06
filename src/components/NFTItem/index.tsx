import React from 'react';
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

export function NFTItem(
//   {
//   name,
//   price,
//   url_image,
//   id,
//   busd_real_price,
// }: NFTItemProps
) {
  const ethEnabled = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      const metamaskAccount = await window.ethereum.send('eth_requestAccounts');
      const busdContract = new web3.eth.Contract(
        busd_abi as AbiItem[],
        busdContractAddress
      );

      try {
        await busdContract.methods
          .transfer(
            '0x4C486eD00E15e498640512c15Ccd9e06B3682Bd6',
            // busd_real_price
          )
          .send({
            from: await metamaskAccount.result[0],
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <NFTItemContainer>
      <img src="" alt="" />
      <button>Comprar por 50 BUSD</button>
    </NFTItemContainer>
  );
}
