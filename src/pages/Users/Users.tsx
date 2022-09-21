import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {fetchUser} from "../../redux/slices/usersSlice";
import styled from "styled-components";
import AddNewUser from "../../components/AddNewUser";
import {useAppSelector} from "../../hooks";

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 15px;
`;
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


const Users = () => {

    const dispatch = useDispatch<AppDispatch>()
    const {users, isLoading, error} = useAppSelector(s => s.usersReducer)

    useEffect(() => {
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
            <AddNewUser/>
            <h1>Users list</h1>
            {users.map((item) => (
                <UserItem key={item.id}>
                    <DataUser>
                        <Name>{item.name}</Name>
                        <Surname>{item.surname}</Surname>
                    </DataUser>
                    <Button>Edit</Button>
                </UserItem>
            ))}
        </Container>
    );
}

export default Users;