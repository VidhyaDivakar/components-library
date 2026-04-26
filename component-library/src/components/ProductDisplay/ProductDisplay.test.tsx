/**
 * ProductDisplayProps defines product card behavior.
 *
 * @property product - Product data (id, name, price, description, imageUrl, inStock)
 * @property showDescription - Toggles product description visibility
 * @property showStockStatus - Shows availability status
 * @property onAddToCart - Callback when add-to-cart button is clicked
 * @property children - Optional extra UI inside product card
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ProductDisplay } from './ProductDisplay';
import { vi } from 'vitest';

describe('ProductDisplay Component', () => {
  const mockProduct = {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'Noise cancelling headphones',
    imageUrl: 'https://via.placeholder.com/150',
    inStock: true
  };

  test('renders product name and price', () => {
    render(
      <ProductDisplay
        product={mockProduct}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={vi.fn()}
      />
    );

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  test('calls onAddToCart when button is clicked', () => {
    const mockAdd = vi.fn();

    render(
      <ProductDisplay
        product={mockProduct}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={mockAdd}
      />
    );

    fireEvent.click(screen.getByText('Add to Cart'));

    expect(mockAdd).toHaveBeenCalledWith('1');
  });
});