import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {fetchUser} from "../../redux/slices/usersSlice";
import styled from "styled-components";
import User from "../../components/User";
import AddNewUser from "../../components/AddNewUser";

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px 15px;
`;

const Users = () => {

    const dispatch = useDispatch<AppDispatch>()
    // @ts-ignore
    const {users} = useSelector(s => s.users)
    console.log(users)

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    return (
        <Container>
            <AddNewUser/>
            <h1>Users list</h1>
            {users.map((item: {id: number; name: string | React.ReactElement<string>; surname: string}) => (
                <User item={item}/>
            ))}
        </Container>
    );
}

export default Users;