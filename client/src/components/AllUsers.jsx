import { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled} from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from "react-router-dom";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
    background: #030001; //#050100
    & > th{
        color: #FFF8DC;
        font-size: 20px;
        font-family:  Cambria, Georgia, serif;
    }
`
const TBody = styled(TableRow)`
    & > td{
        font-size: 16px;
        font-family: Lucida Bright, Georgia, serif;
    }
`

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        getAllUsers();
    },[]);

    const getAllUsers = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    {/* <TableCell>ID</TableCell> */}
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key={user._id}>
                            {/* <TableCell>{user._id}</TableCell> */}
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ marginRight : 10}} color='success' component = {Link} to = {`/edit/${user._id}`}> Update </Button>
                                <Button variant='contained' color = "secondary" onClick={() => deleteUserDetails(user._id)}> Delete </Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}
export default AllUsers;