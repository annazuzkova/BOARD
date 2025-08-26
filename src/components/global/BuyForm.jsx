import React, { useState } from 'react';
import SubscriptionForm from './SubscriptionForm';

const BuyForm = ({ className }) => {
  const overlayStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000000,
  };

  const modalRowStyle = {
    display: 'flex',
    gap: '20px',
  };

  const modalStyle = {
    background: 'radial-gradient(circle,rgba(88, 36, 107, 1) 0%, rgba(96, 74, 127, 1) 49%, rgba(36, 26, 74, 1) 89%)',
    padding: '20px',
    borderRadius: '5px',
    width: '250px',
    height: '400px',
    color: 'white',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    position: 'relative',
    zIndex: 10,
  };

  const modalHoverStyle = {
    transform: 'scale(1.05)',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openAll = () => setIsOpen(true);
  const closeAll = () => {
    setIsOpen(false);
    setIsFormOpen(false);
  };

  const cards = [
    {
      title: "Starter — Level 1 Adventurer",
      price: "$4.99 / month",
      text: "Your first step into epic worlds. Get weekly guides, small store discounts, and a monthly loot box to boost your journey."
    },
    {
      title: "Pro — Battle-Ready Warrior",
      price: "$14.99 / month",
      text: "Play like a pro with early beta access, bigger discounts, exclusive loot crates, and priority matchmaking to climb the ranks faster."
    },
    {
      title: "Elite — Legendary Champion",
      price: "$49.99 / month",
      text: "The ultimate gamer status. Legendary loot, VIP event access, massive discounts, and direct dev team support for true champions."
    }
  ];

  return (
    <>
      {/* Кнопка тепер завжди є */}
      <div style={{ padding: "20px" }}>
        <button onClick={openAll} className={className}>
          <span>Buy Now</span>
        </button>
      </div>

      {isOpen && (
        <div style={overlayStyle} onClick={closeAll}>
          <div style={modalRowStyle} onClick={(e) => e.stopPropagation()}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  ...modalStyle,
                  ...(hoveredIndex === index ? modalHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h2>{card.title}</h2>
                <p style={{ fontSize: '25px' }}><strong>{card.price}</strong></p>
                <p style={{ color: '#D6D6D6' }}>{card.text}</p>
                <button
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: '1.5px solid #510087',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    margin: '0 0 50px 0',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsFormOpen(true)}
                >
                  BUY NOW
                </button>
              </div>
            ))}
          </div>

          {isFormOpen && (
            <div style={overlayStyle} onClick={() => setIsFormOpen(false)}>
              <SubscriptionForm onClose={() => setIsFormOpen(false)} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BuyForm;
