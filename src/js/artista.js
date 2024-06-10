document.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    
    if (username) {
        fetch('data/users.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                const user = data.users.find(user => user.username.toLowerCase() === username.toLowerCase());

                if (user) {
                    document.getElementById('nomesob').textContent = `${user.nome} ${user.sobrenome}`;
                    document.getElementById('location').textContent = `${user.cidade} - ${user.estado}`;
                    document.getElementById('bio').textContent = user.bio;
                } else {
                    alert('Usuário não encontrado');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar os dados do usuário:', error);
            });
    }
});
