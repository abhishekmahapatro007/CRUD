import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 24px;
    }
`
const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        // console.log(e.target.value)
        //target.value gives the name of the field and e.target.name will give the name
        setUser({ ...user, [e.target.name] : e.target.value});
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant = "h4"><strong>Fill The Form To Add A New User</strong></Typography>
            <FormControl>
                <InputLabel>Name </InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username </InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone </InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="success" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;