import axios from 'axios';
import React from 'react';
import shortid from 'shortid';
import { useState, useEffect } from 'react';

import {
    HomeHeaderContainer,
    HomeHeaderTitleContainer,
    HomeHeaderParagraphContainer,
    CopyrightContainer
} from './Home.Styled';

import Card from '../../Components/Card/Card.Component';
import Search from '../../Components/Search/Search.Component';
import Pagination from '../../Components/Pagination/Pagination.Component';

const Home = () =>
{
    const [apiData, setApiData]: any = useState([]);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() =>
    {
        axios.request(
            {
                method: 'GET',
                url: 'api/?results=100'
            })
            .then((Response: any) =>
            {
                setData(Response.data.results);
                setApiData(renderData(Response.data.results));
            })
    }, [setData, setApiData]);

    const renderData = (data: { picture: { large: string | undefined; }; name: { first: string; last: string; }; login: { username: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; email: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; dob: { date: string; }; location: { city: string; state: string; postcode: string; }; phone: string; }[]) =>
    {
        return data.map((item: { picture: { large: string | undefined; }; name: { first: string; last: string; }; login: { username: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; email: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; dob: { date: string; }; location: { city: string; state: string; postcode: string; }; phone: string; }) =>
            (
                <Card key={ shortid.generate() } item={ item } />
            ));
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const CurrentPosts = () =>
        (
            apiData?.slice(indexOfFirstPost, indexOfLastPost)
        );
    const handleSearchInput = (Event: any) =>
    {
        setApiData(renderData(data.filter((item: any) => item.name.first.includes(Event.target.value))));
    };

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    return (
        <div>
            <HomeHeaderContainer>
                <HomeHeaderTitleContainer>
                    Random User Generator
                </HomeHeaderTitleContainer>
                <HomeHeaderParagraphContainer>
                    A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.
                </HomeHeaderParagraphContainer>
            </HomeHeaderContainer>
            <Search onChange={ handleSearchInput } />
            <CurrentPosts />
            <Pagination
                postsPerPage={ postsPerPage }
                totalPosts={ apiData?.length }
                paginate={ paginate }
            />
            <CopyrightContainer>
                developed by <a href='https://parsa-firoozi.ir' target='_blank' rel='noreferrer'>im-parsa</a>, powered by <a href='https://randomuser.me/' target='_blank' rel='noreferrer'>randomuser</a>
            </CopyrightContainer>
        </div>
    );
};

export default Home;
