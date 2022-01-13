import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function AuthorSidebar(props) {
    return (
        <div className='sidebar'>
                <ul className='ul'>
                    <li className='li'><Link to="/Authors" className="Link">Authors</Link></li>
                    <li className='li'><Link to="/FavAuthors" className="Link">Favourite Authors</Link></li>
                </ul>
        </div>
    );
}

export default AuthorSidebar;