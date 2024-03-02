import React from 'react'
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Yulu</a>
            {
                user ? (
                    <button type="button" className="btn btn-default btn-sm" onClick={logout}>
                        <i className="bi bi-box-arrow-right"></i> Log out
                    </button>
                ) : (
                    <a href='/login'>
                        <button type="button" className="btn btn-default btn-sm">
                            <i className="bi bi-box-arrow-left"></i> Log in
                        </button>
                    </a>
                )
            }
        </nav>
    )
}

export default Navbar