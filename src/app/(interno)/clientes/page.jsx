"use client"
import * as React from 'react';
import dynamic from 'next/dynamic';
import { Box, Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const MUIDataTable = dynamic(() => import("mui-datatables"), { ssr: false });

export default function Clientes() {

    function createData(name, celular, nascimento, status) {
        return { name, celular, nascimento, status };
    }

    const rows = [
        createData('Valentino Hidromel', '(11)98111-1111', '11/22/2323', 'INATIVO'),
        createData('Abner Coitadinho', '(11)98111-1111', '11/22/2323', 'ATIVO'),
        createData('Vinicius porta choque', '(11)98111-1111', '11/22/2323', 'ATIVO'),
        createData('Vlad dragão guerreiro x9', '(11)98111-1111', '11/22/2323', 'ATIVO'),
        createData('Pebinha Lopes', '(11)98111-1111', '11/22/2323', 'INATIVO'),
        createData('Pebinha Lopes2', '(11)98111-1111', '11/22/2323', 'INATIVO'),
    ];

    const columns = [
        {
            name: 'name',
            label: 'Nome',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'celular',
            label: 'Celular',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'nascimento',
            label: 'Data Nascimento',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'status',
            label: 'Status',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'actions',
            label: 'Ações',
            options: {
                filter: false,
                sort: false,
                download: false,
                customBodyRender: () => {
                    return (
                        <Box>
                            <Tooltip title="Editar">
                                <IconButton aria-label="edit" color="primary">
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Deletar">
                                <IconButton aria-label="delete" color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    );
                }
            }
        }
    ];

    return (
        <Box
            p={15}
            pt={8}
            display="flex"
            flexDirection="column"
            alignItems="right"
        >
            <MUIDataTable
                title={"Clientes"}
                data={rows}
                columns={columns}
                options={{
                    print: false,
                    selectableRows: 'none',
                    downloadOptions: {
                        filename: 'clientes.csv',
                        separator: ';',
                    }
                }}
            />
        </Box>

    )
}