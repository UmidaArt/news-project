import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../redux/slices/newsSlice";
import {AppDispatch} from "../../redux/store";
import NewsItem from "../../components/NewsItem";
import {fetchUser} from "../../redux/slices/usersSlice";
import styled from "styled-components";

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 15px;
`;

const News = () => {

    const dispatch = useDispatch<AppDispatch>()
    // @ts-ignore
    const {news} = useSelector(s => s.news)
    // @ts-ignore
    const {users} = useSelector(s => s.users)

    useEffect(() => {
        dispatch(fetchNews())
        dispatch(fetchUser())
    }, [dispatch])

    // @ts-ignore
    return (
        <Container>
            <h1>All news</h1>
            {
                news.map((item: {
                    id: number;
                    title: string | React.ReactElement<string>;
                    content: string;
                    author: string;
                    // @ts-ignore
                    // createdAt: new Date(createdAt);
                }) => (
                    <NewsItem key={news.id}
                              news={item}
                              users={users}
                        // data={news.createdAt}
                    />
                ))
            }
        </Container>
    );
}

export default News;