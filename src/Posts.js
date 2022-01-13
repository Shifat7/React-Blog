import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Posts({currentposts}) {


    return (
        <div>
                {currentposts.map(
                  Post => (
                    <div className="post" key={Post.id}>
                    <h3>{Post.title}</h3>
                    <p>{Post.body}</p>
                    <button className="button"><Link className='details' to={`/Comments/${Post.id}`}>Details</Link></button>
                    <p className="ID">{Post.id}</p>
                    </div>
                  ))}
        </div>
    );
}

export default Posts;