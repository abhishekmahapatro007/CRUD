import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled} from "@mui/material";
import { useState, useEffect } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams} from 'react-router-dom';


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

const EditUser = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        // console.log(e.target.value)
        //target.value gives the name of the field and e.target.name will give the name
        setUser({ ...user, [e.target.name] : e.target.value});
    }

    const editUserDetails = async() => {
        await editUser(user,id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant = "h4"><strong>Edit Appropriate Credentials</strong></Typography>
            <FormControl>
                <InputLabel>Name </InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username </InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone </InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="success" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;