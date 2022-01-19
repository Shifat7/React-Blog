import React from 'react';
import AuthorSidebar from './AuthorSidebar';
import './App.css';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


function Authors() {

    const [author, setAuthor] = useState([]);


    const [AuthorTempState, setAuthorTempState] = useState([]);

    // pagination calculation
    const [PageNumber, setPageNumber] = useState(0);
    const [Postsperpage] = useState(4);
    const PagesVisited = PageNumber * Postsperpage;
    const pageCount = Math.ceil(author.length / Postsperpage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }


    const getAuthors = async () => {

        const res = await fetch(`https://api.quotable.io/authors?limit=30`);

        const data = await res.json();


        for (const element of data.results) {
            element.idfav = false;
        }

        data.results.sort((a, b) => (a._id > b._id) ? 1 : -1)

        setAuthor(data.results);

        setAuthorTempState(data.results);

    }

    const saveAuth = () => {
        localStorage.setItem('authors', JSON.stringify(author));
    }

    const getAuth = () => {
        const newAuthors = JSON.parse(localStorage.getItem('authors'));
        if (newAuthors && newAuthors.length > 0) {
            setAuthor(newAuthors);
            setAuthorTempState(newAuthors);
        } else {
            getAuthors();
        }
    }

    useEffect(() => {
        
        if (author.length === 0) {
            getAuth();
        }

        saveAuth();

    }, [author]);



    const favBttn = (Auth) => {

        const filterData = AuthorTempState.filter(data => data._id !== Auth._id)

        Auth.idfav = true;

        const updateAuthor = [Auth, ...filterData]

        updateAuthor.sort((a, b) => (a._id > b._id) ? 1 : -1)

        setAuthor(updateAuthor)
    }


    const remfavBttn = (Auth) => {


        const filterData = AuthorTempState.filter(data => data._id !== Auth._id)

        Auth.idfav = false;

        const updateAuthor = [Auth, ...filterData]

        updateAuthor.sort((a, b) => (a._id > b._id) ? 1 : -1)

        setAuthor(updateAuthor);

    }

    const Author = author.slice(PagesVisited, PagesVisited + Postsperpage)



    return (
        <div className="AppWhole">
            <AuthorSidebar />
            <div className="App">
                <div className="author">
                    {Author.map(
                        (Author) => (
                            <div className="authors" key={Author._id}>
                                {
                                    (Author.idfav) ? (<button className='right' onClick={() => {
                                        remfavBttn(Author);
                                    }}>Remove Favt.</button >) : (<button className='right' onClick={() => {
                                        favBttn(Author);
                                    }}>Add Favt.</button >)
                                }
                                <p>Name: {Author.name}</p>
                                <p>Bio: {Author.bio}</p>
                                <p>Wiki: <a href='{Author.link}'>{Author.link}</a></p>
                            </div>
                        ))}

                    <div id='pageauthor'>
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
        </div>
    );

    //h1
}

export default Authors;