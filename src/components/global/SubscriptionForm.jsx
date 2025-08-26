
import React from 'react';

const formStyle = {
    background: '#3B3B3B',
    color: 'black',
    padding: '50px',
    borderRadius: '8px',
    width: '320px',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
};

export default function SubscriptionForm({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        onClose();
    };

    return (
        <div style={formStyle} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <input
                    type="text" placeholder="Your Name" style={{ width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#292626', border: 'none', color: 'white'}} required
                />
                <input
                    type="text" placeholder="Your Cart Number" style={{ width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#292626', border: 'none', color: 'white'}} required
                />
                <input
                    type="text" placeholder="CVV" style={{ width: '30%', marginBottom: '10px', padding: '8px', backgroundColor: '#292626', border: 'none', color: 'white' }} required
                />

                <button type="submit" style={{ padding: '10px 20px', fontSize: "15px"}}>
                    Submit
                </button>
            </form>
        </div>
    );
}
