import React from 'react';
import { shallow } from 'enzyme';
import Products from './index';
import axios from 'axios';

describe('Products Component', () => {
  it('renders products correctly', () => {
    const mockProducts = [
      { idproduto: 1, nome: 'Produto 1', foto: 'imagem1.jpg', preco: 10.99 },
      { idproduto: 2, nome: 'Produto 2', foto: 'imagem2.jpg', preco: 20.99 },
    ];

    jest.mock('axios', () => ({
        get: jest.fn(() => Promise.resolve({ data: mockProducts })),
    }));

    const wrapper = shallow(<Products />);

    // Verifica se a API foi chamada
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8800/produtos');

    // Verifica se os produtos estão sendo renderizados corretamente
    expect(wrapper.find('.produto')).toHaveLength(mockProducts.length);

    // Verifica se os detalhes de cada produto estão sendo exibidos corretamente
    mockProducts.forEach((produto, index) => {
      expect(wrapper.find('.produto').at(index).find('ProductTitle').text()).toEqual(produto.nome);
      expect(wrapper.find('.produto').at(index).find('ProductImg').prop('src')).toEqual(produto.foto);
      expect(wrapper.find('.produto').at(index).find('ProductPrice').text()).toEqual(`$${produto.preco}`);
    });
  });
});
