function handler(e) {
    e.preventDefault();

    let cliente = document.querySelector('.Nome_Cliente').value;
    let CPF = document.querySelector('.CPF_Cliente').value;
    let RG = document.querySelector('.RG_Cliente').value;
    let telefone = document.querySelector('.Telefone_Cliente').value;

    //console.log(cliente);  // Teste Unitario
    //console.log(CPF);      // Teste Unitario
    //console.log(RG);       // Teste Unitario
    //console.log(telefone); // Teste Unitario

    if (cliente && CPF && RG && telefone) {
        
        const _data = {
            id:"",
            nome: cliente,
            cpf: CPF, 
            rg: RG, 
            telefone: telefone
        };

        const _url = ` http://localhost:3000/clientes`;     

        const _options = {
            method: 'post',
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"},
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }


        fetch(_url, _options)
            .then(function(response) {
                // Tratar Erros
                if(!response.ok) throw new Error('Erro ao executar requisição!');

            }
        ) 
        .then(function(response){
            //console.log(response)
            if(response==null){
                window.location.reload();
            }
        })
 
    } else {
        alert('1 ou mais campos de pesquisa estão vazios, por favor preecha todos os campos!');
    }
}


window.onload = () => {
    const submit = document.querySelector('.button');
    submit.addEventListener('click', handler);
}
