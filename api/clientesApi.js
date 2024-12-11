const clientesApi = {
    getClientes: async (vendedorId) => {
        try {
            const response = await fetch(`http://localhost:5062/api/ListarClientes?vendedorId=${vendedorId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                console.error('Erro na requisição:', errorMessage.message || 'Erro desconhecido');
                return Promise.reject(errorMessage);
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Erro ao buscar clientes:', error.message);
            throw error;
        }
    },
};

export default clientesApi;
