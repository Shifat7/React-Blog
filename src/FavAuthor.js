import React from 'react';
import AuthorSidebar from './AuthorSidebar.js';
import { useState, useEffect } from 'react';


const FavAuthor = () => {


    const [author, setAuthor] = useState([]);
    const [AuthorTempState, setAuthorTempState] = useState([]);


    const getAuth = () => {
        const newAuthors = JSON.parse(localStorage.getItem('authors'));

        setAuthorTempState(newAuthors);
        setAuthor(newAuthors);
    }

    useEffect(() => {

        getAuth();

    }, []);


    const remfavBttn = (Auth) => {

        const filterData = AuthorTempState.filter(data => data._id !== Auth._id)

        Auth.idfav = false;

        const updateAuthor = [Auth, ...filterData]

        updateAuthor.sort((a, b) => (a._id > b._id) ? 1 : -1)

        setAuthor(updateAuthor)

        localStorage.setItem('authors', JSON.stringify(updateAuthor));

    }

    return (
        <div>
            <div className="AppWhole">
                <AuthorSidebar />
                <div className="App">
                    <div className="author">
                        {author.map(
                            (Author) => (Author.idfav) ?
                                (<div className="authors" key={Author._id}>
                                    <button className='right' onClick={() => {
                                        remfavBttn(Author);
                                    }}>Remove Favt.</button >
                                    <p>Name: {Author.name}</p>
                                    <p>Bio: {Author.bio}</p>
                                    <p>Wiki: <a href='{Author.link}'>{Author.link}</a></p>
                                </div>) :
                                (<></>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavAuthor;