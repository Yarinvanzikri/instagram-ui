import React, {useState, useEffect} from 'react';
import { search }  from '../services/user.service';
import SearchResult from "./SearchResult/SearchResult";
import './Search.scss';


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
        <div className={"searchBar"}>
            <form>
                    <input  value={query} placeholder={'🔍 Search'} onChange={(e)=> {setQuery(e.target.value)}}/>
                    <div className={"searchBar__result"}>
                        <SearchResult users = {results}/>
                    </div>

            </form>

        </div>
    );
}

export default Search;