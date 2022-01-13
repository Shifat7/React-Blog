import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';



function User() {

    let {Id} = useParams();

    const [User, SetUser] = useState([]);
    const [posts, SetPosts] = useState([]);


  
    const getPosts = async() => {
  
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}/posts`);
      
      const data = await res.json();
  
      SetPosts(data);
  

    }

      useEffect(() => {

        getUser();
        getPosts();
        
      }, []);

      const getUser = async() => {
  
        const res5 = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}`);
        
        const data5 = await res5.json();
      
        SetUser(data5);

      }

    return (
        <div className="AppWhole">
            <div className="App">
                <div className="users">
                            <div className="user">
                                <h3>Name: {User.name}</h3>
                                <p>Username: {User.username}</p>
                                <p>Email: {User.email}</p>
                                <p>Phone Number: {User.phone}</p>
                                <p>Website: {User.website}</p>
                            </div>

                            <h1 style={{color: 'white'}}>Posts:</h1>

                            <div >
                            {posts.map(
                              Post => (
                                <div className="post" key={Post.userId}>
                                <h3>{Post.title}</h3>
                                <p>{Post.body}</p>
                                <button className="button"><Link to={`/Comments/${Post.id}`}>Details</Link></button>
                                <p className="ID">{Post.id}</p>
                                </div>
                              ))}
                            </div>

                </div>
            </div>
        </div>
    );
}

export default User;