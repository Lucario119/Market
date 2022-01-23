import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';

import { Container, InventoryItems, InventoryItem } from './styles';
type InventoryItemsProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
};

function InventoryPage() {
  const { signed, user } = useAuth();
  const [inventoryItems, setInventoryItems] = useState<InventoryItemsProps[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      api.get('api/inventory').then((response) => {
        setInventoryItems(response.data);
        setIsLoading(false);
      });
    }, 100);
  }, []);
  return (
    <Container>
      <NavBar />
      {!signed ? (
        <h2>Login necessary</h2>
      ) : (
        <>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {inventoryItems.length === 0 && (
                <h2>{user?.name}, your inventory it`s empty</h2>
              )}
              <InventoryItems>
                {inventoryItems.length > 0 &&
                  inventoryItems.map((item) => (
                    <InventoryItem key={item.id}>
                      <div>{item.name}</div>
                      <img src={item.image} alt={item.name} />
                      <span>Amount purchased: {item.amount}</span>
                    </InventoryItem>
                  ))}
              </InventoryItems>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default InventoryPage;
