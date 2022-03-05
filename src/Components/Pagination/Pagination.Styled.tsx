import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PaginationContainer = styled.div
    `
      display: flex;
      align-items: center;
      justify-content: center;
    `;

export const PaginationListContainer = styled.ul
    `
      display: flex;
      align-items: center;
      justify-content: center;
      
      list-style-type: none;
    `;

export const PaginationListItemContainer = styled.li
    `
      float: left;
      margin: 0 5px;
    `;

export const PaginationListItemLinkContainer = styled(Link)
    `
      transition: all .2s;
      text-decoration: none;
      color: rgb(23, 108, 191);

      &:hover
      {
        color: rgb(31, 121, 210);
      }
    `;
