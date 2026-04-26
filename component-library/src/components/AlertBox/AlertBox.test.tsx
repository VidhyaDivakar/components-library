/**
 * AlertBoxProps defines the structure and behavior of the AlertBox component.
 *
 * @property type - Defines the alert style (success | error | warning | info)
 * @property message - Main text content displayed in the alert box
 * @property onClose - Optional callback triggered when the alert is closed
 * @property children - Optional additional content displayed inside the alert
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