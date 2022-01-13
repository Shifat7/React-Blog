import React, {useState, useEffect} from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function Users() {

    const[users, setUsers] = useState([]);
    const[SearchTerm, setSearchTerm] = useState("");

    const [PageNumber, setPageNumber] = useState(0);

    const [Usersperpage] = useState(4);
    const PagesVisited = PageNumber * Usersperpage;

    const pageCount = Math.ceil(users.length / Usersperpage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const RenderUsers = (val) => {
        return(
            <tr key={val.id}>
                <td><Link to={`/Users/User/${val.id}`}>{val.id}</Link></td>
                <td><Link to={`/Users/User/${val.id}`}>{val.name}</Link></td>
                <td><Link to={`/Users/User/${val.id}`}>{val.email}</Link></td>
            </tr>
        ) 
      }

    // eslint-disable-next-line array-callback-return
    const displayUsers = users.filter((val) => {
        if (SearchTerm === "") {
            return val;
        } else if (val.name.toLowerCase().includes(SearchTerm.toLowerCase())) {
            return val;
        } else if (val.email.toLowerCase().includes(SearchTerm.toLowerCase())) {
            return val;
        }}).slice(PagesVisited, PagesVisited + Usersperpage).map(RenderUsers);
    

    useEffect(() => {
  
        getUsers();
      
      }, []);
    
    
      const getUsers = async() => {
    
        const res4 = await fetch("https://jsonplaceholder.typicode.com/users");
        const data4 = await res4.json();
        setUsers(data4);
      }


    return (
        <div className="AppWhole">
            <div className="App">
            <div className="users">
            <h1 style={{color: 'white'}}>Users</h1>

            <input type="text" className='searchUser' onChange={(e) => {setSearchTerm(e.target.value);}}/>
                <div className="user">
                    <div className="app-container">
                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            
                            <tbody>

                            {displayUsers}

                            </tbody>
                        </ReactBootStrap.Table>

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
        </div>
    );
};


export default Users;