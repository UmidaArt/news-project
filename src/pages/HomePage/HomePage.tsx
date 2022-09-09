import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 15px;
`;

const HomePage = () => {
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
};

export default HomePage;