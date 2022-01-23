import React, { FormEvent, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export function RegisterItemForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [amount, setAmount] = useState('');

  async function handleRegisterNewItem(e: FormEvent) {
    e.preventDefault();
    const response = await api.post('admin/products', {
      name: name,
      amount: Number(amount),
      image: image,
      price: price,
    });
    console.log(response.data);

    if (response.data.status === 'sucess') {
      throw alert('Cadastro Realizado com sucesso');
    } else {
      throw alert('Problema no cadastro');
    }
  }
  return (
    <Container onSubmit={handleRegisterNewItem}>
      <legend>Cadastrar produto</legend>
      <fieldset>
        <label htmlFor="">Nome: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="">Imagem(URL): </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Preço: </label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Quantidade: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </fieldset>

      <button type="submit">Cadastrar NFT</button>
    </Container>
  );
}
