import React, { useState, useEffect } from "react";
import './App.css';
import { useParams } from 'react-router-dom';



function Comments() {

  let { id } = useParams();

  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);

  const getComments = async () => {

    const res3 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    const data3 = await res3.json();

    setComments(data3);

  }


  const getPost = async () => {

    const res4 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const data4 = await res4.json();

    setPost(data4);

  }



  useEffect(() => {

    getComments();
    getPost();

  }, []);


  return (

    <div className="AppWhole">
      <div className="App">
        <div className="comments">
          <div key={post.id} className="postcom">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          {comments.map(
            Com => (
              <div className="comment">
                <img src={`https://randomuser.me/api/portraits/men/${Com.id}.jpg`} className="img" alt="profilepic" height="50" width="50" />
                <div key={Com.id} className="cmnt">
                  <p>{Com.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}


export default Comments;