import React from 'react';
import styled from "styled-components";

const Form = styled.form`
    margin-top: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  ::placeholder {
    color: #93969a;
    font-weight: bold;
  }
  width: 60%;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid grey;
`;

const Button = styled.button`
  margin-bottom: 30px;
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px 20px;
  background-color: #af2c7a;
  cursor: pointer;
  :hover {
    background-color: #af2c7a;
    color: white;
  }
`;

const AddNewUser = () => {
    return (
        <>
            <h1>Add new user</h1>
            <Form >
                <InputGroup>
                    <Input placeholder='Name' id='name' type='text'/>
                    <Input placeholder='Surname' id='text' type='text'/>
                </InputGroup>
                <Button type='submit'>Create user</Button>
            </Form>
        </>
    );
};

export default AddNewUser;