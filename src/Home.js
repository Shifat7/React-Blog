import React, {useState, useEffect} from 'react';
import Posts from './Posts.js';
import './App.css';

import ReactPaginate from 'react-paginate';

function Home() {
    const [posts, setPosts] = useState([]);

    const [PageNumber, setPageNumber] = useState(0);
    const [Postsperpage] = useState(10);
    const PagesVisited = PageNumber * Postsperpage;
    const pageCount = Math.ceil(posts.length / Postsperpage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    const currentposts = posts.slice(PagesVisited, PagesVisited + Postsperpage);
      

    useEffect(() => {

      getPosts();

    }, []);
  
    const getPosts = async() => {
  
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      
      const data = await res.json();
  
      setPosts(data);
  

    }

        return (
            <div className="AppWhole">
              <div className="App">
                <div className="posts">
                  <Posts currentposts={currentposts}/>
                  <ReactPaginate
                         pageCount={pageCount}
                         onPageChange={changePage}
                         previousLabel={"<<"}
                         nextLabel={">>"}
                         containerClassName={'paginationLinks'}
                         disabledClassName={'paginationDisabled'}
                         activeClassName={'paginationActive'}
                         />
                </div>
              </div>
            </div>
);}

export default Home;