import styled from 'styled-components';

export const HomeHeaderContainer = styled.header
    `
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      margin: auto;
      max-width: 55rem;
      text-align: center;
    `;

export const HomeHeaderTitleContainer = styled.h1
    `
        font-size: 3.5rem;
    `

export const HomeHeaderParagraphContainer = styled.p
    `
      font-size: 1.75rem;
    `;

export const CopyrightContainer = styled.p
    `
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      margin: auto;
      max-width: 55rem;
      text-align: center;
      font-size: 1rem;
      
      & > a
      {
        margin: 0 .5rem;
        transition: all .2s;
        text-decoration: none;
        color: rgb(23, 108, 191);

        &:hover
        {
          color: rgb(31, 121, 210);
        }
      }
    `;
