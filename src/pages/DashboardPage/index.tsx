import React, { FormEvent, useEffect, useState } from 'react';
import Logo from '../../assets/LOGO (1).png';
import { Link } from 'react-router-dom';
import { RegisterItemForm } from '../../components/RegisterNFTForm';
import api from '../../services/api';

import {
  Container,
  ContentWrappers,
  RegisteredItems,
  RegisteredItem,
} from './styles';

type NFTITemsProps = {
  id: number;
  name: string;
  image: string;
  amount: number;
};
function DashboardPage() {
  const [nftItems, setNftItems] = useState<NFTITemsProps[]>([]);
  const [productIdtoUpdate, setProductIdtoUpdate] = useState(1);
  const [productIdtoDelete, setProductIdtoDelete] = useState(1);
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newPrice, setNewPrice] = useState('');
  useEffect(() => {
    api.get('api/explore').then((response) => setNftItems(response.data));
  }, []);
  async function handleUpdateItemInfo(e: FormEvent) {
    e.preventDefault();
    await api.put(`admin/products?id=${productIdtoUpdate}`, {
      name: newName,
      amount: Number(newAmount),
      image: newImage,
      price: newPrice,
    });
  }
  async function handleDeleteItem(e: FormEvent) {
    e.preventDefault();
    await api.delete(`admin/products?id=${productIdtoDelete}`);
  }
  return (
    <Container>
      <ContentWrappers>
        <h1>Produtos Cadastrados</h1>
        <RegisteredItems>
          {nftItems.length > 0 &&
            nftItems.map((item) => (
              <RegisteredItem key={item.id}>
                <div>Nome: {item.name}</div>
                <img src={item.image} alt={item.name} />
                <span>ID do produto: {item.id}</span>
                <span>Quantidade cadastrada: {item.amount}</span>
              </RegisteredItem>
            ))}
        </RegisteredItems>
      </ContentWrappers>
      <ContentWrappers>
        <Link to="/">
          <img src={Logo} alt="crypto_horse" />
        </Link>
        <RegisterItemForm />
      </ContentWrappers>
      <ContentWrappers>
        <form onSubmit={handleUpdateItemInfo}>
          <legend>Atualizar Informações</legend>
          <fieldset>
            <label>ID do produto: </label>
            <input
              type="number"
              value={productIdtoUpdate}
              min={1}
              onChange={(e) => setProductIdtoUpdate(e.target.valueAsNumber)}
              className="number"
            />
          </fieldset>
          <fieldset>
            <label>Nome: </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Quantidade: </label>
            <input
              type="text"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Imagem: </label>
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Preço: </label>
            <input
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </fieldset>
          <button type="submit">Atualizar informações</button>
        </form>
        <form onSubmit={handleDeleteItem}>
          <legend>Deletar Produto</legend>
          <fieldset>
            <label>ID do produto: </label>
            <input
              type="number"
              value={productIdtoDelete}
              min={1}
              className="number"
              onChange={(e) => setProductIdtoDelete(e.target.valueAsNumber)}
            />
          </fieldset>
          <button type="submit">Deletar produto</button>
        </form>
      </ContentWrappers>
    </Container>
  );
}

export default DashboardPage;
