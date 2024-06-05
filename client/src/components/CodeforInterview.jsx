
import { Typography, styled } from "@mui/material";
import Box from '@mui/material/Box';

const para = styled(Typography)`
    font-family: Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif;
    text-align: left;
    font-size: 20px;
`

const ContainedWrapper = styled(Box)`
    display: flex;
    align-items: center;
    gap: 70px;
    margin: 50px 70px;
`

const Heading = styled(Typography)`
    font-family: Copperplate, Copperplate Gothic Light, fantasy; 
    margin-bottom: 13px; 
    font-weight: 800;
`;

const Image = styled('img')`
    height: 400px;
    
`;

const CodeforInterview = () => {
    return (
        <ContainedWrapper>
            <para>
             <Heading variant="h5">What Is A <b>CRUD</b> Application?</Heading> 
            <q>
            A <b>CRUD</b> (Create, Read, Update, Delete) application is the backbone of many web-based systems, enabling users to interact with data stored in databases. This acronym represents the four basic functions that can be performed on such data. In a CRUD application, users can Create new records, Read existing records, Update records, and Delete records. Whether it's managing a list of tasks, an inventory of products, or user profiles, CRUD applications provide the essential functionalities needed for efficient data management. These applications form the foundation of content management systems, e-commerce platforms, and various other web applications, making them an integral part of modern web development.
            </q>
            </para>
            <Image src="https://www.bigtrunk.co.in/wp-content/uploads/2023/01/Website.jpg" alt="image" />
        </ContainedWrapper>
    )
}

export default CodeforInterview;