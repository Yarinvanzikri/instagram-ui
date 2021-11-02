import React, {useState, useEffect} from 'react';
import { search }  from '../services/user.service';
import SearchResult from "./SearchResult/SearchResult";


function Search(props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])
    useEffect(() => {
        if(!query.trim().length){
            setResults([]);
            return;
        }
        async function searchedUsers () {
            const users = await search(query);
            console.log(users);
            setResults(users);
        }
        searchedUsers();
    },[query])

    return (
        <div>
            <h1>Search</h1>
            <form>
                <input  value={query} onChange={(e)=> {setQuery(e.target.value)}}/>
            </form>
            <hr />
            <SearchResult users = {results}/>
        </div>
    );
}

export default Search;