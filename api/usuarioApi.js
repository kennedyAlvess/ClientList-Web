const usuarioApi = {
    login: async (Cpf, Senha) => {
        const response = await fetch('http://localhost:5062/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Cpf, Senha }),
        });

        if (!response.ok) {
            return Promise.reject();
        }

        const responseData = await response.json();
        return responseData;
    }
};

export default usuarioApi;
