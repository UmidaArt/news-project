import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  height: 50px;
  background-color: #992569;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: start;
  width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Header = () => {
    return (
        <Container>
            <Navigation>
                <NavLink to="/" className="navBtn">Home</NavLink>
                <NavLink to="/news" className="navBtn">News</NavLink>
                <NavLink to="/addNews" className="navBtn">Add news</NavLink>
                <NavLink to="/users" className="navBtn">Users</NavLink>
            </Navigation>
        </Container>
    );
};

export default Header;