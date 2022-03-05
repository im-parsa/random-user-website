import React from 'react';

import {
    PaginationContainer,
    PaginationListContainer,
    PaginationListItemContainer,
    PaginationListItemLinkContainer
} from './Pagination.Styled';

const Pagination = (props: any) =>
{
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(props.totalPosts / props.postsPerPage); index++)
    {
        pageNumbers.push(index);
    }

    return (
        <PaginationContainer>
            <PaginationListContainer>
                {
                    pageNumbers.map((Number) =>
                        (
                            <PaginationListItemContainer key={ Number } className='pag-link'>
                                <PaginationListItemLinkContainer onClick={() => props.paginate(Number)} to='#'>
                                    { Number }
                                </PaginationListItemLinkContainer>
                            </PaginationListItemContainer>
                        ))
                }
            </PaginationListContainer>
        </PaginationContainer>
    );
};

export default Pagination;
