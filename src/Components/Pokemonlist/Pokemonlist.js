import React, {useEffect} from 'react';
import Pokemonitem from '../Pokemonitem/Pokemonitem';
import { connect} from 'react-redux';
import { fetchData} from '../../Redux/actions/appleydate';
import Pagination from '../Pagination'
import styled from 'styled-components';

const Styledpokemonarea = styled.div `
    display: flex;
    padding: 30px;
    flex-flow: column;
    justify-content: center;
    background-color: #cccccc;
    align-items: center;
`;

const Pokemonlist = ({data, fetchData }) => {
    const {next, previous, listArray, loading, error } = data
    
    useEffect(() => {
        fetchData();
    }, [])


    if (loading) return "Loading..."

    if (error) return error    

    return (
        <Styledpokemonarea>
            <Pagination /> 
                {listArray.length &&
                listArray
                .map((item, index) => {
                    return (<Pokemonitem
                        key={index}
                        item={item}
                        />)
                })}

            <Pagination />

        </Styledpokemonarea>

    )
}

const mapStateToProps = (state) => ({data: state.Pokemondate});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemonlist);
