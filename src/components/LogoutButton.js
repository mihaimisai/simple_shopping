import React from 'react'

function LogoutButton() {
    const handleLogout = () => {
        fetch('/logout', {
            method: 'POST',
        }).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.error('Error logging out:', error);
        });
    };

    return <button onClick={handleLogout} className="btn btn-info mt-5">Logout</button>;
}


export default LogoutButton