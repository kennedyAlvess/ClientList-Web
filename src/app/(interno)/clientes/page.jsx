"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';


export default function Clientes() {

    function createData(name, celular, nascimento, status) {
        return { name, celular, nascimento, status };
    }

    const headersRanking = [
        {
            value: 'Nome',
            objectValue: 'Nome',
            align: 'left'
        },
        {
            value: 'Celular',
            objectValue: 'Telefone',
            align: 'left'
        },
        {
            value: 'Data Nascimento',
            objectValue: 'DataNascimento',
            align: 'left'
        },
        {
            value: 'Status',
            objectValue: 'Status',
            align: 'left'
        }
    ]

    const rows = [
        createData('Frozen yoghurt', '(11)98111-1111', '11/22/2323', 'INATIVO'),
        createData('Ice cream sandwich', '(11)98111-1111', '11/22/2323', 'ATIVO'),
        createData('Eclair', '(11)98111-1111', '11/22/2323', 'ATIVO'),
        createData('Cupcake', '(11)98111-1111', '11/22/2323', 'ATIVO'),
        createData('Gingerbread', '(11)98111-1111', '11/22/2323', 'INATIVO'),
    ];

    const StatusBadge = ({ status }) => {
        const isActive = status  === 'ATIVO';

        return (
            <Box
                sx={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    color: isActive ? '#FFFFFF' : '#A0A0A0', // Texto branco para ATIVO, cinza para INATIVO
                    backgroundColor: isActive ? '#219653' : '#E0E0E0', // Verde para ATIVO, cinza claro para INATIVO
                    textTransform: 'uppercase',
                }}
            >
                {status}
            </Box>
        );
    };

    return (
        <Box
            bgcolor ="cdd0dc"
            p = {8}
            display = "flex"
            justifyContent="center"
            >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow> 
                            {
                                headersRanking.map( row => (
                                    <TableCell align="center">{row.value}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                hover
                                sx={{ '&:hover': { border: 0, cursor: 'pointer' } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.celular}</TableCell>
                                <TableCell align="center">{row.nascimento}</TableCell>
                                <TableCell align="center">
                                    <StatusBadge status={row.status} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}