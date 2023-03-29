import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';
import ShoppingCart from './components/ShoppingCart.js';

describe('Route Tests', () => {
  it('Render home page', () => {
    render(<App />);

    expect(screen.getByRole('heading').textContent)
      .toMatch(/Hello World!/i);
  });

  it('Render shop page', () => {
    render(<App />);

    act(() => {
      userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    });
    
    expect(screen.getByRole('heading', { level: 1 }).textContent)
      .toMatch(/Shop Page/i);
  });


  it('Render shop item page', () => {
    render(<App />);

    act(() => {
      userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    });
    
    expect(screen.getByRole('heading', { level: 1 }).textContent)
      .toMatch(/Shop Page/i);

    const shopItemLinks = screen.getAllByRole('link', { name: 'Buy Now' });

    act(() => {
      userEvent.click(shopItemLinks[0]);
    });

    expect(screen.getByRole('heading', { level: 1 }).textContent)
      .toMatch(/Shop Item/i);
  });
});

describe('Shopping Cart Tests', () => {
  it('Total initially shows as "$0.00"', () => {
    render(<ShoppingCart cartData={[]} />);

    expect(screen.getByText('$0.00').textContent)
      .toMatch(/\$0\.00/i);
  });

  it('Total updates correctly with multiple different items/quantities', () => {
    const cartData = [
      {
        name: 'item1',
        description: 'test1',
        price: 4.99,
        quantity: 8,
        id: 1,
      },
      {
        name: 'item2',
        description: 'test2',
        price: 14.99,
        quantity: 2,
        id: 2,
      },
    ];
    render(<ShoppingCart cartData={cartData}/>);

    expect(screen.getByText('$69.90').textContent)
      .toMatch(/\$69\.90/i);
  });
});

