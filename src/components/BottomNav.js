import React from 'react';
import { useNavigate } from 'react-router-dom';

function BottomNav() {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#eee', padding: '0.5rem', display: 'flex', justifyContent: 'space-around' }}>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/profile')}>Profile</button>
        </div>
    );
}

export default BottomNav;
