import React from 'react';
import {Container, Button, Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";
import DeleteMenu from './DeleteMenu';


const Import = (props) => {
    // fill out this component
    
    return (
        <Container maxWidth="lg" className="car-container">
        <div className="flex-container">
   
            <h1>{props.makes.length}</h1>
            <Button onClick={props.fetchMakes} >Import</Button>
        </div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.makes.map((car, idx) => (
                <TableRow key={idx}>
                    <TableCell component="th" scope="row">
                        {car["MakeId"]}
                    </TableCell>
                    <TableCell>{car["MakeName"]}</TableCell>
                    <TableCell>
                        <DeleteMenu removeMake={props.removeMake} index={idx}/>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Container>
    )
}

export default Import