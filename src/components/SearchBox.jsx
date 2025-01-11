import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import { fetchRecipes } from '../state/action-creators';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchBox = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchRecipes(query));
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="search">
            <input
                type="search"
                className="search__field"
                placeholder="Search over 1,000,000 recipes..."
                value={query}
                onChange={handleChange}
            />
            <button className="btn search__btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>Search</span>
            </button>
        </form>
    ); 

};


export default SearchBox;