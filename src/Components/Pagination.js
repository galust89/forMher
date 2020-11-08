import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';
import { fetchData} from '../Redux/actions/appleydate';

const PaginationButtonArea = styled.div`
        margin: 10px
`;

const StyledPaginationButton = styled.button`
         margin: 5px;
         border-radius: 5px;
         background-color: #e14278;
         color: whitesmoke;
         border: 1px solid;
`;


const Pagination =({ next, previous, fetchData }) => {
    return (
        <PaginationButtonArea>
            {previous && <StyledPaginationButton onClick={() => fetchData(previous)}>Previous</StyledPaginationButton>}
            {next && <StyledPaginationButton onClick={() => fetchData(next)}>Next</StyledPaginationButton>}
        </PaginationButtonArea>
    )
}


const mapStateToProps = (state) => ({next: state.Pokemondate.next, previous: state.Pokemondate.previous});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);