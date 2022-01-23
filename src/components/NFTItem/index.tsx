import React, { useState } from 'react';
import { useMoralis, useWeb3Transfer } from 'react-moralis';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';
import { NFTItemContainer } from './styles';

interface NFTItemProps {
  name: string;
  image_url: string;
  price: string;
  product_id: number;
}

export function NFTItem({ name, price, image_url, product_id }: NFTItemProps) {
  const { Moralis, isAuthenticated } = useMoralis();
  const [amountPurchased, setAmountPurchased] = useState('1');
  const { signed } = useAuth();
  const updatedPrice =
    amountPurchased === ''
      ? Number(price) * 1
      : Number(amountPurchased) * Number(price);
  const { fetch } = useWeb3Transfer({
    amount: Moralis.Units.ETH(updatedPrice.toFixed(1)),
    receiver: '0x4C486eD00E15e498640512c15Ccd9e06B3682Bd6',
    type: 'native',
  });
  const bnbTransaction = async () => {
    if (isAuthenticated) {
      try {
        await fetch({
          onSuccess: async () => {
            const response = await api.post('api/buy', {
              product_id: product_id.toString(),
              amount: amountPurchased.toString(),
            });
            console.log(response.data);
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else if (!signed) {
      throw alert('Necessário fazer login ou cadastrar-se');
    } else {
      throw alert('Necessário conectar com a metamask');
    }
  };

  return (
    <NFTItemContainer>
      <div>{name}</div>
      <img src={image_url} alt={name} />
      <fieldset>
        <label>Amount: </label>
        <input
          type="number"
          value={amountPurchased}
          min={1}
          onChange={(e) => setAmountPurchased(e.target.value)}
        />
      </fieldset>

      <button onClick={bnbTransaction}>{updatedPrice.toFixed(1)} BNB</button>
    </NFTItemContainer>
  );
}
