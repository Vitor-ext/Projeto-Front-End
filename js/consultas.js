function handler(e) {
    e.preventDefault();

    // const _data = {
    //     id: "",
    //     nome: dentista,
    //     cpf: CPF,
    //     rg: RG,
    //     telefone: telefone
    // };

    const _url = `http://localhost:3000/consultas`;

    const _options = {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    }

    fetch(_url, _options)
        .then(function (response) {
            // Tratar Erros
            if (!response.ok) throw new Error('Erro ao executar requisição!');

            return response.json();
        }
        )
        .then(function (data) {
            console.log(data);

            let newContent = "";
            for(let i = 1; i < data.length; i++) {        
                newContent += `<tr>item: ${data[i].id}</tr>`;
                newContent += `<tr>paciente: ${data[i].cliente}</tr>`;
                newContent += `<tr>horario: ${data[i].horario}</tr>`;
                newContent += `<tr>dentista: ${data[i].dentista}</tr>`;
            }

            document.getElementById('consultas').innerHTML = newContent;

        }

    )

}






window.onload = () => {
    const submit = document.querySelector('.button');
    submit.addEventListener('click', handler);
}
