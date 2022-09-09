import React from 'react';
import styled from "styled-components";

const Container = styled.div`
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

// @ts-ignore
const NewsItem = ({news, users}) => {

    const author = users.find((item: { id: number; }) => item.id === news.author)

    // @ts-ignore
    return (
        <Container>
            <NewsTitle>{news.title}</NewsTitle>
            <NewsContent>{news.content}</NewsContent>
            <Created>
                <Author>Created by <b></b></Author>
                {/*<Author>Created by <b>{author.name} {author.surname}</b></Author>*/}
                <Date></Date>
                <Likes>
                    <Heart><i className='bx bx-heart'></i></Heart>
                    <LikeCount>5</LikeCount>
                </Likes>
            </Created>
        </Container>
    );
};

export default NewsItem;