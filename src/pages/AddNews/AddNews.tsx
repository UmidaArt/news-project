import React from 'react';
import AddNewPost from "../../components/AddNewPost";
import styled from "styled-components";

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 15px;
`;

const AddNews = () => {
    return (
        <Container>
            <AddNewPost/>
        </Container>
    );
};

export default AddNews;