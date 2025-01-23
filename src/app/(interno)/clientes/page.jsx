"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import clientesApi from '../../../../api/clientesApi';

const MUIDataTable = dynamic(() => import("mui-datatables"), { ssr: false });

export default function Clientes() {
    const [rows, setRows] = useState([]); 
    const [loading, setLoading] = useState(true);

    const mapStatusToLabel = (data) => {
        return data.map((cliente) => ({
            ...cliente,
            status: cliente.status === true || cliente.status === 1 ? 'ATIVO' : 'INATIVO',
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await clientesApi.getClientes(2);
                const mappedData = mapStatusToLabel(data); // Mapeia os dados para ajustar o status
                setRows(mappedData); // Define os dados mapeados no estado
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            name: 'nome',
            label: 'Nome',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'telefone',
            label: 'Celular',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'dataNascimento',
            label: 'Data Nascimento',
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString('pt-BR');
                }
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
            {loading ? ( // Exibe um indicador de carregamento enquanto os dados estão sendo buscados
                <p>Carregando...</p>
            ) : (
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
            )}
        </Box>
    );
}
