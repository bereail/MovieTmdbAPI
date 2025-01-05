import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import  searchIcon  from '../../images/search-icon.svg';

import { Wrapper, Content } from './searchBar.styles';



const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true); // Usado para controlar el primer renderizado

    useEffect(() => {
        if (initial.current) {
            // Salta el efecto en el primer renderizado
            initial.current = false;
            return;
        }

        // Configura un temporizador para retrasar la búsqueda
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        // Limpia el temporizador anterior si el usuario sigue escribiendo
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    const handleSearch = (event) => {
        setState(event.currentTarget.value); // Actualiza el estado local
    };

    return (
        <Wrapper>
            <Content>
            <img src={searchIcon} alt='search-icon' />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={handleSearch} // Actualiza el estado local
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.prototypes = {
    callback: PropTypes.func
};

export default SearchBar;

