import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchNews} from "../../redux/slices/newsSlice";
import {AppDispatch} from "../../redux/store";
import {fetchUser} from "../../redux/slices/usersSlice";
import styled from "styled-components";
import {useAppSelector} from "../../hooks";

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 15px;
`;
const NewsBox = styled.div`
  padding: 20px;
  width: 80%;
  border: 2px solid grey;
  margin: 20px 0;
`;
const Created = styled.div`
  display: flex;
`;
const NewsTitle = styled.h1`
`;
const NewsContent = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
`;
const Author = styled.p`
  margin-right: 20px;
`;
const Date = styled.h4`
  margin-right: 20px;
`;
const Likes = styled.div`
  width: 50px;
  display: flex;
`;
const Heart = styled.div`
  margin-right: 7px;
  font-size: 20px;
  color: #b81f78;
`;
const LikeCount = styled.div`
`;


const News = () => {

    const dispatch = useDispatch<AppDispatch>()
    const {news, isLoading, error} = useAppSelector(s => s.newsReducer)
    const {users} = useAppSelector(s => s.usersReducer)

    // const author = users.find((item) => item.id === news.author)

    useEffect(() => {
        dispatch(fetchNews())
        dispatch(fetchUser())
    }, [dispatch])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Container>
            <h1>All news</h1>
            {
                news.map((item) => (
                    <NewsBox key={item.id}>
                        <NewsTitle>{item.title}</NewsTitle>
                        <NewsContent>{item.content}</NewsContent>
                        <Created>
                            <Author>Created by <b>{item.author}</b></Author>
                            {/*<Author>Created by <b>{author.name} {author.surname}</b></Author>*/}
                            <Date></Date>
                            <Likes>
                                <Heart><i className='bx bx-heart'></i></Heart>
                                <LikeCount>5</LikeCount>
                            </Likes>
                        </Created>
                    </NewsBox>
                ))
            }
        </Container>
    );
}

export default News;