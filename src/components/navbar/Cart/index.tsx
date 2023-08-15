import React from 'react';
import './styles.scss';

interface CartDropdownProps {
  products: string[]; // Cambia esto al tipo de datos correcto para representar los productos
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ products, onClose }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__header">
        <h3>Your Cart</h3>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="cart-dropdown__content">
        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
