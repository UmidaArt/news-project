import React, {FC} from 'react';
import styled from "styled-components";
import {IUsers} from "../../pages/Users/types";

const UserItem = styled.div`
  padding: 20px;
  width: 40%;
  border: 2px solid grey;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;
const DataUser = styled.div`
  display: flex;
`;
const Name = styled.h3`
    margin-right: 10px;

`;
const Surname = styled.h3`
  
`;
const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #af2c7a;
  color: white;
  font-weight: 500;
  border: none;
`;

// @ts-ignore
const User = ({item}) => {
    return (
        <UserItem>
            <DataUser>
                <Name>{item.name}</Name>
                <Surname>{item.surname}</Surname>
            </DataUser>
            <Button>Edit</Button>
        </UserItem>
    );
};

export default User;