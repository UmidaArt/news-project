import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Field } from 'formik';
import styled from "styled-components";

const Form = styled.form`
  margin-top: 20px;
  font-family: 'Athiti', sans-serif;
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
const Select = styled.select`
  width: 60%;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid grey;
  font-size: 14px;
  color: #717274;
  font-weight: 500;
  cursor: pointer;
`;
const Option = styled.option`
  margin-bottom: 20px;
`;
const TextArea = styled.textarea`
  ::placeholder {
    color: #93969a;
    font-weight: bold;
  }
  width: 60%;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid grey;
  font-size: 14px;
`;
const Button = styled.button`
  margin-bottom: 30px;
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

const AddNewPost = () => {

    return (
        <>
            <h1>Add a new post</h1>
            <Form >
                <InputGroup>
                    <Input placeholder='News title' id='name' type='text' required/>
                    <Select name="select" required>
                        <Option value="">Select the author</Option>
                        <Option value="author 1">author 1</Option>
                        <Option value="author 2">author 2</Option>
                        <Option value="author 3">author 3</Option>
                    </Select>
                    <TextArea placeholder="Write your post" rows="10" required></TextArea>
                </InputGroup>
                <Button type='submit' >Create news</Button>
            </Form>
        </>
    );
};

export default AddNewPost;