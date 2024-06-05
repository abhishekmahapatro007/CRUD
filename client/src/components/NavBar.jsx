import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #141619
`
const Tabs = styled(NavLink)`
    font-size: 18px;
    margin-right: 24px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to = '/'>CRUD Application</Tabs>
                <Tabs to = '/all'>All Users</Tabs>
                <Tabs to = '/add'>Add Users</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;